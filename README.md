# client

Client library for building amazing bot web apps

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
  <script src="client.min.js" data-url="https://api.steuerbot.com"></script>
</body>
```

Optional: Use the default style by adding the stylesheet to your website:

```html
<head>
  ...
  <link rel="stylesheet" href="client.min.css" />
  ...
</head>
```

## Usage

### Download a pdf

client.downloadPdf(login, password);
