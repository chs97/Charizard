import { app, BrowserWindow } from 'electron'
import * as path from 'path'
// const is = require('electron-is')
import log from 'electron-log'

log.transports.file.level = 'info'

log.info('(main/index) >>>>>>>>>>>>>>>>>>')
log.info('(main/index) app start')


// if (is.dev()) {
//   require('electron-debug')(); // eslint-disable-line global-require
// }
const indexPath = path.join(__dirname, 'dist')
// const url = is.dev() ? `file://${indexPath}/index.html` : 'http://127.0.0.1:8080/index.html'
const url = `file://${indexPath}/index.html`

log.info(url)
app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL(url)
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('quit', () => {
  log.info('(main/index) app quit');
  log.info('(main/index) <<<<<<<<<<<<<<<<<<<');
})