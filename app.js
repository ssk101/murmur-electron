const { app, BrowserWindow } = require('electron')
const murmurUrl = 'https://asoftmurmur.com/?m=rno99thn20wve66wnd38fre22'

let win

async function createWindow() {
  win = new BrowserWindow({
    width: 130,
    height: 143,
    frame: false,
    titleBarStyle: 'hidden',
    // x: 0,
    // y: 0,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  await win.loadURL(murmurUrl)

  const js = async function() {
    const fetch = require('node-fetch')
    const { remote } = require('electron')

    const API_BASE = 'https://api.luxafor.com/webhook/v1/actions/solid_color'
    const USER_ID = ''

    async function setColor(color, custom) {
      var actionFields = {
        color: color,
      }
      Object.assign(actionFields, custom
        ? { custom_color: custom.toUpperCase() }
        : {}
      )

      fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: USER_ID,
          actionFields: actionFields,
        })
      })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .catch(e => {
          console.error(e)
        })
    }
    
    const css = `
      body {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin: 0;
        padding: 0;
        height: unset;
      }
      .menu {
        display: grid;
        grid-template-columns: 100px 50px;
        justify-content: space-between;
        align-items: center;
        order: -1;
        grid-gap: 1em;
        padding: .5em;
        box-sizing: border-box;
        background: black;
        color: white;
        cursor: pointer;
        -webkit-app-region: drag;
      }
      .menu #sticky,
      .menu #exit {
        cursor: pointer;
        -webkit-app-region: no-drag;
      }
      #murmur {
        position: absolute;
        margin-top: 2.25em;
        height: 100%;
        width: 100%;
        border: none;
        overflow: hidden;
      }
      .playlists {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1em;
      }
      #root {
        order: 2;
      }
      #root #App .Header,
      #root #App .RowControls,
      #root #App .AppLinks,
      #root #App .SoundList,
      #root #App .UpgradeDialog,
      #root #App .Footer,
      #root #App .PlayControls button:first-of-type,
      #root #App .PlayControls button:last-of-type,
      #root #App .Title {
        display: none !important;
      }
      #root #App .PlayControls {
        padding: .5em;
      }

      .luxa-buttons {
        display: grid;
        grid-gap: .5em;
        padding: .5em;
        grid-auto-flow: column;
        justify-content: center;
        order: 1;
        box-sizing: border-box;
      }

      .luxa-buttons button {
        min-width: 25px;
        min-height: 25px;
        width: 25px;
        height: 25px;
        border: none;
        cursor: pointer;
      }
      .luxa-buttons button.red {
        background: red;
      }
      .luxa-buttons button.blue {
        background: blue;
      }
      .luxa-buttons button.green {
        background: green;
      }
      .luxa-buttons button.orange {
        background: orange;
      }
    `

    const menuHTML = `
      <div class="item">
        <input id="sticky" type="checkbox" checked="true"/>
        <label for="sticky">Sticky</label>
      </div>
      <div class="item">
        <button id="exit">X</button>
      </div>
    `

    const luxaButtonsHTML = `
      <div class="luxa-buttons">
        <button class="blue" data-color="blue"></button>
        <button class="red" data-color="red"></button>
        <button class="green" data-color="green"></button>
        <button class="orange" data-color="orange" data-custom-color="ffa140"></button>
      </div>
    `
    
    const style = document.createElement('style')
    style.innerHTML = css
    document.head.appendChild(style)

    const luxaButtons = document.createElement('div');
    luxaButtons.className = 'buttons'
    luxaButtons.setAttribute('draggable', true)
    luxaButtons.innerHTML = luxaButtonsHTML;
    document.querySelector('body').appendChild(luxaButtons);
    document.querySelectorAll('.luxa-buttons button').forEach(button => {
      button.addEventListener('click', () => {
        const color = button.getAttribute('data-color')
        const custom = button.getAttribute('data-custom-color')
        setColor(color, custom)
      })
    })

    const menu = document.createElement('div');
    menu.className = 'menu'
    menu.setAttribute('draggable', true)
    menu.innerHTML = menuHTML;
    document.querySelector('body').appendChild(menu);
    document.querySelector('.menu #exit').addEventListener('click', () => {
      window.close()
    })
    document.querySelector('.menu #sticky').addEventListener('change', (e) => {
      remote.getCurrentWindow().setAlwaysOnTop(e.target.checked)
    })
  }

  win.webContents.webContents.executeJavaScript(`(${js.toString()})()`, (e) => {
    console.log(e)
  })

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
