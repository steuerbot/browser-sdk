# Steuerbot Browser SDK

This is the Browser SDK of Steuerbot for building amazing web bots.

## Contents

- [Installation](#-installation)
- [Integration](#-integration)
- [Usage](#-usage)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 👨‍💻 Installation

```
npm install client --save
```

or

```
yarn add client
```

## 🛠 Integration

Add the script at the end of your body tag and provide an data-url attribute like this:

```html
<body>
  ...
  <script src="steuerbot-browser-sdk.min.js" data-url="https://api.steuerbot.com"></script>
</body>
```

Optional: Use the default style by adding the stylesheet to your website:

```html
<head>
  ...
  <link rel="stylesheet" href="steuerbot-browser-sdk.min.css" />
  ...
</head>
```

## 🚀 Usage

### Download a declaration pdf

```javascript
steuerbot.downloadPdf(login, password);
```

## 👏 How to Contribute

The main purpose of this repository to provide the necessary tools and features for building great bots. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving the Browser SDK of Steuerbot.

### Development

Install and build the files with

```
yarn install
yarn build
```

For development you can use

```
yarn watch
```

## 📄 License

Steuerbot Browser SDK is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/steuerbot/browser-sdk/blob/master/LICENSE
