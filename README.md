# Charizard

typescript + electron + react + webpack4

a management tool for hexo


## start

1. yarn install
2. install dependencies in dir 'app'
3. yarn run dev
4. yarn run start

## pack

yarn run pack

## notice

WebPack also defaults to substituting the `__dirname` which is useful within Electron. This can be stopped by adding a setting to the commonConfig object:
```javascript
node: {
    __dirname: false
},
```

## TodoList

- \- [ ] add mobx


- \- [ ] add react-router
- \- [ ] add window menu 

