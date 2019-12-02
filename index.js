const { app, BrowserWindow } = require('electron')
const murmurUrl = 'https://asoftmurmur.com/?m=rno99thn20wve66wnd38fre22'
let win

const opts = {
  width: process.env.DEV ? 1000 : 130,
  height: process.env.DEV ? 1000 : 143,
}

async function createWindow() {
  win = new BrowserWindow(Object.assign(opts, {
    
    frame: false,
    // x: 0,
    // y: 0,
    alwaysOnTop: true,
    // autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: process.env.DEV,
    }
  }))

  await win.loadURL(murmurUrl)

  const js = async function() {
    const { remote } = require('electron')
    const { PythonShell } =  require('python-shell')

    async function setColor(color) {
      PythonShell.run('./luxafor.py', { args: color }, (err, res) => {
        if(err) throw(err)
        console.log(res)
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
      .luxa-buttons button.yellow {
        background: yellow;
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
        <button class="yellow" data-color="yellow"></button>
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
        setColor(color)
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
