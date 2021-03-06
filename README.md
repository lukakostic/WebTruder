<p align="center">
  <a href="https://github.com/wexond/wexond"><img src="static/app-icons/icon.png" width="256"></a>
</p>

<div align="center">
  <h1>WebTruder</h1>
  <h5>Based on the Wexond browser<h5>


Wexond is an extensible and privacy-focused web browser with a totally different user experience, built on top of `Electron`, `TypeScript`, `React` and `styled-components`. It aims to be fast, private, beautiful, extensible and functional.

</div>

# Features

- **Wexond Shield** - Browse the web without any ads and don't let websites to track you. Thanks to the Wexond Shield, websites can load even 2 times faster!
- **Beautiful and minimalistic UI** - The address bar is hidden in Overlay to take less space, but it doesn't impact on usability in any way. It's even better! [Give it a shot](https://wexond.net)
- **Tab groups** - Easily group tabs to groups and access them really fast.
- **Partial support for Chrome extensions** - Install some extensions from Chrome Web Store (see [#110](https://github.com/wexond/wexond/issues/110))
- **Overlay** - It contains everything you will need. Search box, bookmarks, menu, your custom components and much more!
- **Packages** - Extend Wexond for your needs, by installing or developing your own packages. They can theme the browser and even add custom components to the Overlay! ([#147](https://github.com/wexond/wexond/issues/147))
- **Organize apps in tabs** - Wexond's tabs system can also contain your native apps like in [Multrin](https://github.com/sentialx/multrin)! (currently only for Windows)

# Screenshots

![](https://wexond.net/img/screen.png)

![](https://wexond.net/img/screen2.gif)

# [Supported Chrome APIs](https://github.com/wexond/wexond/issues/110)

# Contributing

If you have found any bugs or just want to see some new features in Wexond, feel free to open an issue. I'm open to any suggestions and bug reports would be really helpful for me and appreciated very much. Wexond is in heavy development and some bugs may occur. Also, please don't hesitate to open a pull request. This is really important to me and for the further development of this project.

## Running

Before running Wexond, please ensure you have [`Node.js`](https://nodejs.org/en/) installed on your machine.

Firstly, run this command to install all needed dependencies. If you have encountered any problems, please report it. I will try to help as much as I can.

```bash
$ npm install
```

The given command below will run Wexond in the development mode.

```bash
$ npm run dev
```

## Other commands

You can also run other commands, for other tasks like building the app or linting the code, by using the commands described below.

### Usage:

```bash
$ npm run <command>
```

#### List of available commands:

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `build`            | Bundles Wexond's source in production mode. |
| `compile-win32`    | Compiles Wexond binaries for Windows.       |
| `compile-darwin`   | Compiles Wexond binaries for macOS.         |
| `compile-linux`    | Compiles Wexond binaries for Linux.         |
| `lint`             | Lints code.                                 |
| `lint-fix`         | Fixes eslint errors if any                  |
| `start`            | Starts Wexond.                              |
| `dev`              | Starts Wexond in the development mode       |

