const setupPug = require('electron-pug')
const { app, BrowserWindow } = require('electron')
const murmurUrl = 'rno99thn20wve66wnd38fre22'

const opts = {
  width: process.env.DEV ? 1000 : 160,
  height: process.env.DEV ? 1000 : 132,
}

async function createWindow() {
  const win = new BrowserWindow(Object.assign(opts, {
    frame: false,
    // x: 0,
    // y: 0,
    // autoHideMenuBar: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: process.env.DEV,
    }
  }))

  await setupPug({ pretty: true }, {})
  win.loadURL(`file://${__dirname}/index.pug`)


  const js = async function() {
    const { remote } = require('electron')
    const { PythonShell } =  require('python-shell')

    async function setColorAndStatus(emoji) {
      PythonShell.run('./luxafor.py', { args: emoji }, (err, res) => {
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
        background-size: contain;
        background-repeat: no-repeat
      }

      .luxa-buttons button {
        min-width: 16px;
        min-height: 16px;
        width: 16px;
        height: 16px;
        border: none;
        cursor: pointer;
        background-size: contain;
        background-repeat: no-repeat;
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
      .luxa-buttons button.date {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABPlBMVEVHcEzS0tMeiegZc8KfoKEeiOW0tba2trcpZ54adscbecwYa7TDw8Tu7+/Jycp7la+/wsW3uLjLy8xcj8LW19fb3N3AwcLP0NCfoKHP0NGxsrKvsLAZc8GwsbKvsLAadcWoqakadMQadcWen6Aadcbb7PzY19WhoqIadsays7PB0d8eiOUch+Qeiuoiiub///z09PXZ6/r29/jP0NHy8vPh4uPf4ODr6+zn6OjQ0NHY2dnOzs/U1dXc3d7l5ebw8fH4+fq7u7tBQUEXhOTW19fa29yys7M1NTUTguQdiegMfuNqse6s0/X8/P1Bm+mUxvJWVldiYmKio6NqamuhzvROouslJSU1lOjG4fldqeyy1va32fctLS0YGBjh8P0EeuKTlJWqqquJiYlLS0vt9v2EvvCEhIQdHR3U6Pl7ue/+PmpnAAAATnRSTlMA/vqNKv4b+gXU9hv+//4bjY2NDPf39fUpjeZwd5GnSSOazSvp+o0s2Uf1//////////////////////////////////////////////5qIFoWAAACLUlEQVQ4y3WT+XuaMByHYZuz28SnW9ut6+77gKIFE44EkCNgBUWtt7Z9eu34//+BJaiz8xlvSD7Jlzd54IdwHMdt5cIxdt59fZDH+zdUeHl8fJjLxx2Ou3t4p7DA92U6yoVbPHy0ECSK2Ijjc8lvJJNzueGLtFIoHC8FSRQlUW7OkvaoPRinA3Ey8kVauyXQJjWTdBan0yQ9mpy1NwVqjM77/dngJpnG/espe78hSOPk7Pd09isZx4NK3JQ3BdFv92/8QT+dxO329WjjBLYS/WaT9UbDH6eNrCKuT8h+k31IhiytWAnyv4jrKRO2zz4d5fL9Psd9rrQqObQqkArPW0o1r9X3mFCvUmq1bGBU1yhMeKLUHKHWajlOrU5RlKrzl+ouE6qCUxfcH0Apd08o3VDRhCVOJjgCvPSGc6i4HiU67dV1TdNY14RnVNjWHHfYiSKo6RR45UEhdB3cs7TQXQp6YAAvsnTbtmu900vHVnndKgMd8Vom6ADoxItMG0IAruZIh7ZNSwDQDWUm2NCCphcFAFr6xc8T3QKha6NewKJEhcfQIlbgRRgSAjrD0CZWqQyxa9IAT5lg7ZkEe5FB6J5hxzJNE1omgYQGyQQSYNOI5sjEpHvagzgwQ5eULxCLTDB3eax2OwgHpU4XYR5jtxSUi4gFE15hXjUMVTVUAyHeYHOMVR7T4PkiFV4gpK4wFsEq7EHGAb2/W6/DYh4H37L7/fbD/r3/sf+FXt0/hnGt153wecEAAAAASUVORK5CYII=');
      }
      .luxa-buttons button.hamburger {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVHcEyqfCKmPgetQQT9uUD6tT7PTgTFfie8aBnechnVVwn81zVvkhrWoDf0r0qtOgC5TgmzPgHLQwDeeyPtpUzWqS7vpzaqNgC8lShPKg15jTFbMRGErD3/wEOzVxH2ulazPADrnEO0Uw7MhSjcpjrCch2xWRWrOwGrQQWmOgLCcR26XhPQmDPphSPPhymrOwDSsS2xOADrrjpKgAXQozFGfwPqnDmJQwn/+Jf/7m//9olhphv1qzvToDaqOgH8yWG8Wg/EZha9cR7cnjXQkjDQmC6yRQbQiyvJgCbTnzekNwDmgCHElzLJjjFSMBChKQD/4VFTMxB+uzfUsi3+qjpbfhtOewhnmA5ljChgMhFZihhhlxlmhA9elSBPhQjSPgD93GT42n7/83KFUQH6zzN6ggtKfghRLg9onStuXCBnfSqTbR5ajRjcahPjfR7gdxrtlSzaZhLzojLTWAvebhbKQwDvmS/2rTnxnTDSTwNiOhN0tzRjMA/5sTvqjSbpjyrXXw7WWgvNRQBXLhC5HQN9VhnNCgN5sDL0pzXnhiTskSnjgSLQUwj96YGRRwroiib/v0LMSALmhCL6pzbHQwBcMRH84Vn/8F/xyzTAAAD/5lr+7oTGAgB6tjT/4Dl1RhKZcyJkNRHaaRbbbBvlhy7ytDz/5TzKYQ6Vnh1gnxl2OxDfFxK4JwtnPhOuJQLGoSvFWQn+8JHPPQCmMQhroh9qNhB7uzZTKw+IwEWJyEnmkzztoUjXZBG1OQDVaRXIcBr3uDzffB/reR3whSWslSK+fRr9y0F5nCLrqT6Rt0PPRgHGNx1+ShHqLR3qIBeuiinLPQDXsSvUEQyQaSGDQgurhCSZOQuwhin5wzn12FWgkjSNQQm9AQBybSRSkwdvPQ+Ueh2mYwq/FgSEzkvxuEjxoja6PwDlchrdvDKfmCPgmyz+US+0iyBrvTXUUghttzKyhDXqQyfHRR5elRlzqi2Pii31ymGWWhachC+Ppzu5VQaxXAiuQhLGUR13lBmAmDdZcWWRAAAAo3RSTlMADReL/v7+AQL++/4GtP656+/8/v4c/pr7cv79/vox/fn8b6jkghJtZTpxnFX76nxiy/4YPsP9/v77/v7+byH7tOlY9IFc3JmaeUT8IkbGYv7P/c3+X0P+3fzA97BF/vz8/vrN/vyWmdn6gdLx/////////////////v/////+//////////////////////////////////////////7////+ftneiQAAAyFJREFUOMtjYCAesHNwcLCDCA4OrLLseLgMDCA9ojou7srKHqpaTnKMICEkJUAmoyuvs9jkyU8rCsr6hfc7OigxQXTBtNuqPGGpLS+S5+uqE1HMy1+ye48AMyNMBTsDD++BCfasHR1PnxbU90/qzufkFF60uNhNDm4G7wRZoH6+Cj6+OqB83hLORQ2LFLkqBe3AKjgYPFlA8jbyFWVd/QW787tFOAsbi4t72Jr4GcAOZVSZwMIKdEBFWUF9Z/2ufM7cwj27FrGxTSzdqwnUzsFgYjQBKN9RBJTv78zLzy/J3dOwuBgoL1TKDFags5QFJF9R0FXX2Z0HlC9saKwEypcKNRmCrYhZygKSLwPKT8oDWdDQCHQARAHQkcZhpiuMQiaDLZiUd5CzZNGeBpD8lCml8ReSeYAKTOPuha9Y/6qg6/DhQ4eegy14V3lq06ZNUx6m3ksD2hD1OXrlypVbjq94eeTIm6NH9y9fvmHDhl+/Hz74Z229JYeRgSc2NGJbUHV19dv3W45/qW6fu23u3HYgAIoA2Rk8wKCQvCsldevkyQ+f1qzb/H2HzNcFD37+2fl4x46dO2WksoBW8AQujJx6+vXHc6tXX2qb82PNzDt3HrXd+nv98X+ZzJp0kDf9qqqqVp0+e/YcSMGcOTNnzpzT1vao7+7CKuntkqCokGyWBim5tnnNmhYQWLdu87Xb8+/XNEu3ZvOAIltUolW6WXrt2vvzr5jf7gMC8yuramqqWhesT5lhAjLBgJv74vXW5u3NzVMXbt26taamZur8qxIXuefNmxEsClbwYsa8Zdzrz5+/uqB1/trWBZcvS8xYtmzejQOsJ3whCcJH76nY0mMB06dPn3bz5rRZs2ZNnzVtmlhZWYWeGjTJaR3U9c7rrj/xrdfKanbvbCDqNcvr1O1WhaQ5dnYG7X0lnMBYWCQskmixceNGi94luZwl+7SRUr2GQA8wlXFxVXKZWVomJSyubOwRUGJgYEcoUVPnF3w2pelU0wXOYzeW7xXkV2dCkofkESYvDX1mcXFxZn1/TSYGpHwDzYxomRU9c0JzNwwgZAHl20n01IjA/AAAAABJRU5ErkJggg==');
      }
      .luxa-buttons button.strut {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA7CAMAAAA+YjhqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAv1QTFRFAAAAKzE9Pk1aLjVCOUVSO0hVQlJfR1dlIiQqMThHNkBRKSwzDxEVDAwRJCgwGx4kGBgcLDE4NDtFFxogWmuScYSsNkFMUWJxFRUYKC44X2+aHx8lJCo0YXSfHiEoSFd8V2l6Nzs9OENdZnmjQExoRlVra32nS11raW52JycqYXWJNDxNUFdcX2prMCcn7d/QVWWHIyo8XHCATlyBk56eJB8gVV9jcVFATVt2aXaDLzlURkxUeo21zbOkb4KcbneOP0NHUWJ8eV9Ro39pgoN6maWrwKWbdX9+k5meprKzZXWanX1zvJ6MCAgNAwMFXU5DbHmDZ3iE3cWts5uWMjU2ro+DcHdyhpefmnVgrrKuR05VMzdCjZu8doiUvb+5jJeqWGl1fY6ek25YiGJK3Me6vbqxV2mIg2ZZ6dfKgISKoaemkHVoTVJNa3R7Z3+SVWRzcHBvIycrhZKaXGJhYmJjMikjgm9uW2FnmZeOUDszi56qXGt3cICL6drDl6WlkndyrKiih4+K5cy8lZyZOz9MubCkcYKMgmJTQUE6WFBSXmJmuJiFLS4yjZOOXXB/W0MxaGBkmayxhoV5Pj5CmpON1biXbWBRxM7QTl5qxcXCYmVnWGBmOzs9a1hR4d7aKyswWGJqmZmSfX96oKKXgGdcrLO7fImQvLivWGp0oaOU9u7WvrmtJyUgl5+rPj02bIGOwsO7g5OfS1BSo6efGx0fTlNaQDUssMDB+vDZ2tXQ2LaTTVBSe4qQgYSFXl5hbG1jXWh4Z3WDi5KMpaujbHmCuL7Du73OTFBLExMTXmp3NDYzd4iQoaOcFhgcS1NbrpyJNTU2d3hxuK+q3MiwRU5V797OtLWvqK+hxbSr69e6bU9DhYeBaoGTgGdbRE1UY25ujXRxRkpISjo1Tl5poamudFhTW1xZu6qfOztAe3JzYnOA2MKrhZij9e3Yg5KdgoR4tp+DY0pGbnNxu6uYQUNORElNnYaDNTdBYEdAS1tljIyAl6KpSldlQEJJz7mhpM8rYQAAAP90Uk5TAP/+/////v////////////////////////////////////////////7////////////+//////7////////////////+Bf//B/3///////8ffvz///////8K1/X//P//vP7///8G/////////w7/9A2wCf8a6/8Elv/XrEYZ/xcE/f/o1f/7nvT/Kv/tEuT////Xli/nw//rA3KUwP4Bl01xFkGL/w1W37DmLJIhVjZsqeJ/6a7//////SciBBfyaqh7eVcg/5W1XxlpZciA4y7LvlFVoCbo/9vnkek4CrYwe55dQhPk6IDXihWEGTx+t09HRByq/62mmhFb8Dk1u7RF+QAABehJREFUeJyF03V8E2cYB/CcJ7kkd7kkl1ySxhpr0zRtaqSaamqpG06FOi2uG+5lheJDBmzI8MFgOBuMsTH3sY25uzvbZ2/KpKHQPp/7K/l+fs8rz8vj3Vzn1u7Ys39sv5/71fJNn2WVfzJ97WB08tFlU682uxY998MgcM2MgoZml6u57Nu5A7qhU5pSGpobulJcZX8N3DmyrTAnJ6Wg0nXylXsGguOnZNS0NXW5Guaf3PfVgJEHVtZnVFbW5BSW7btzQHhmSkZhSmZBeU7Z6wND3vsJNZk1BeUN89d9MTCcs6S+LrMrJ6dr3SCJvDnrExK2FhfXnH5pEDju060JKx9amXn6xYMDuoMXHPa6+oS6rkWjZz52e5b95bV004iWmvq6ytH51Xl/3PrQcw+XXksNt6hHDJmaOXV0cuPIntqZM498ePMcZX99pNvd0eEekhwVvaoyLSo5fGR1R/hiz4KL9wbDO651GAhluCHKqk+3/Jymbwz3GNwdI2tj8/YEw9Jwg5JQKtPVIaFWud0jb3R7UlOV7sXVrQ8Ed/7coLQFoDU5OVmRnx9qMHTUuonw2tjWR4PguDFKm42wedKTR1y+vEuhbsTdHeFud3V1bOveILi9U0ngBGFI7znlcrk2pKb5PG7M09MzO2/Ug0Fws5IgYIKwGUalXC0vbDjVUnsib/aGE3m7do0KXuMYA2yDCRvuKS9oa2oqSGmN8eS1+mbH9sS+tr+vG9pNEASK47DFvqo4o61pa5IJ982L9bVUxy54tS88a8BtmBDF8EaFIjUtjZVER7OT2p3znFVZ04f2hU8RMIyyAOqtCoU1VI7Ior3GioqIduebdwUt8QKGwTCGobBeHYBquZlFSH5YxdL3gi9wYieKwoHPpFeHAhii1juEEC1uX3938P1dIlAHjKE4gHK1FcAQvUDIxdGRq38PcrmzYBYBiThmlgfuOkQdoxcgkrAK+uH7gmBJJ8ZAMIvBWKLcGgJK3ahP5PikV9P+TRC8QmAIBztwDE405yuAU8v1JkhCGo3GF8YGdSZYDkJZHLPERMVYFSFqeaPe7CBJY3tFUO+S+3FWK2BRHIbl+fkhCqtaHqW3mCCpNMIYMb3Pvh8hYEjLsjCBm8wKhSI0NCTKrDebEFLqjUha/f/FTJxlwzgtihHgGGNiQhXguGPSLWZTolZqdCZVXdz9L7yjkxBqtTBOwHiivjEmXx2VbhkCXGI0icQ7nc6F/7zv3WNsMKLlCNiGIxqSZBDUpLSYhY7oaL9I6vU57b4dN+Bhtw2DJMMJ3IZTcXGRkeBbZoyMi6PFRUU6o90e33Lj0WSXpmOIlvzpus3GUhwHcfywyGWRcSqVSuwv8nMR9njnjbdwttuCgrPdfl0JI3wIQSCI5EtIvkzD11HiIoqxO50LeiftkgFnSGrCB7gSZwCLhiBIKiFJCSi+zC+qcMbbfd8HYKkSg8KOPfkbTLASSoIgWgnJSUFxJMmnROIwb3x81ubA9XXjiNF7iDcMwzgZI3QIEJ2OlAZStVqdTCWmmPiIrAjQe+JGFpF+PLcEPAQOEQqFAgEnk0k4juSDNcpUfhkDEr2lYIk2jCGP8q6gKAsJUSGIhHS0RkJKep3Ir2IiJlUlvZPNG3fcy3gf581CGYhDURRAjqQoPoCUjFaJi0RMUlXWsE25PN6ShBnFO7M3oixL9kJEq9PJKNAYJNJiv4jBfHvHB3YNYMLOcddBWzAXgc0gIEtG6QCkaL9IxKL2p3sP/KPvfn3jrRIcxVjKAbYiEIBnStMqmUZDaSjRsQnD4OP/zdm7cwKQkUEIp5VwUpIvFqlokMlf8fw03rS3p/WZ8eVJGAxRCMJAUhLsWCxW0TI+X3OId3MtPwrDv0wYLoAQMP+kJpCo0vDjzveD5868/Oz5P4cjSGCNUo1fLKJVdFjk+H6wt35cKEAgR+ASxSIRDb6lubeGkwEEkciKZ8SBRJV4y60dL3cLAgZNwBi3BSBNiw7cBvLWcGBwEQezTQT6UpTqiT7//Q3+lVkI+BlwuQAAAABJRU5ErkJggg==')
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
        <button class="blue" data-emoji="luxa-blue"></button>
        <button class="red" data-emoji="luxa-red"></button>
        <button class="green" data-emoji="luxa-green"></button>
        <button class="yellow" data-emoji="luxa-yellow"></button>
        <button class="hamburger" data-emoji="hamburger"></button>
        <button class="date" data-emoji="date"></button>
        <button class="strut" data-emoji="strut"></button>
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
        const emoji = button.getAttribute('data-emoji')
        setColorAndStatus(emoji)
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
