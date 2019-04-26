import { ipcRenderer } from 'electron';
import { readFileSync } from 'fs';
import { join } from 'path';
import { API } from '.';
import { IpcEvent } from '..';

let api: API;
let currentTabId: number;

// https://developer.chrome.com/extensions/tabs

export class FileSystemAPI {

  // tslint:disable-next-line
  constructor(_api: API, tabId: number) {
    api = _api;
    currentTabId = tabId;
  }

  public query = (
    queryInfo: chrome.tabs.QueryInfo,
    callback: (tabs: chrome.tabs.Tab[]) => void,
  ) => {
    ipcRenderer.send('api-tabs-query');

    ipcRenderer.once(
      'api-tabs-query',
      (e: Electron.IpcMessageEvent, data: chrome.tabs.Tab[]) => {
        const readProperty = (obj: any, prop: string) => obj[prop];

        callback(
          data.filter(tab => {
            for (const key in queryInfo) {
              const tabProp = readProperty(tab, key);
              const queryInfoProp = readProperty(queryInfo, key);

              if (key === 'url' && queryInfoProp === '<all_urls>') {
                return true;
              }

              if (tabProp == null || queryInfoProp !== tabProp) {
                return false;
              }
            }

            return true;
          }),
        );
      },
    );
  };

  public get = (tabId: number, callback: (tab: chrome.tabs.Tab) => void) => {
    this.query({}, tabs => {
      callback(tabs.find(x => x.id === tabId));
    });
  };

  public getCurrent = (callback: (tab: chrome.tabs.Tab) => void) => {
    this.get(currentTabId, tab => {
      callback(tab);
    });
  };

  public shell = (
    arg1: any = null,
    arg2: any = null,
    arg3: any = null,
  ) => {
    const executeScript = (tabId: number, details: any, code: any, callback: any) => {
      
        details.code = code;
      

      ipcRenderer.send('api-tabs-executeScript', tabId, details);

      ipcRenderer.once(
        'api-tabs-executeScript',
        (e: Electron.IpcMessageEvent, result: any) => {
          if (callback) {
            callback(result);
          }
        },
      );
    };


  };

  public detectLanguage = (
    tabId: number,
    callback: (language: string) => void,
  ) => {
    ipcRenderer.send('api-tabs-detectLanguage', tabId);

    ipcRenderer.once(
      'api-tabs-detectLanguage',
      (e: Electron.IpcMessageEvent, language: string) => {
        if (callback) {
          callback(language);
        }
      },
    );
  };

  public update = () => {};
}
