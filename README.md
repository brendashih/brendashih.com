# development workflow

## start development server

```
npm start
```

Development is done on the `master` branch.

# deployment workflow

## qa

- merge `master` into `qa`
- push `qa` to github to trigger [netlify deploy](https://app.netlify.com/sites/brendashih-com-qa/overview) to https://qa.brendashih.com

## production

- merge `qa` into `production`
- push `production` to github to trigger [netlify deploy](https://app.netlify.com/sites/brendashih-com-production/overview) to https://brendashih.com
