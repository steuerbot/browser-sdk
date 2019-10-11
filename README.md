# Steuerbot Browser SDK

Browser SDK for building amazing web bots.

## Installation

```
npm install client --save
```

or

```
yarn add client
```

## Integration

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

## Usage

### Download a declaration pdf

```javascript
steuerbot.downloadPdf(login, password);
```
