# Eufemia Demos

👉 [Live Demo](https://eufemia.dnb.no/uilib/demos/eufemia-demo/form-demo-01/)
🤘 [CodeSandbox](https://codesandbox.io/embed/github/dnbexperience/eufemia-demo-spa/tree/master/)

This is demo app to showcase how to use Eufemia styles and components.

This setup is using React within [create-react-app](https://github.com/facebook/create-react-app).

![Screenshot comparison](https://github.com/dnbexperience/eufemia-demo-spa/raw/master/misc/screenshot_comparison.png)

## How to run this demo App

1. Make sure You have installed the dependencies `npm install`.
1. Now You can run `npm start` inside this demo App.

## Internet Explorer 11

By using the `react-app-polyfill` it is possible to run this app in **development** mode.

```js
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
```

To test this app properly in IE11, run these steps:

1. Make a production build `npm run build`
1. And watch this build `npx live-server build`
