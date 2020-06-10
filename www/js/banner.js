'use strict'

const app = {
  initialize() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false,
    )
  },

  onDeviceReady() {
    this.receivedEvent('deviceready')
    this.showAds()
  },

  showAds() {
    admob.banner.show({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-3940256099942544/6300978111',
        ios: 'ca-app-pub-3940256099942544/2934735716',
      },
    }).then(() => {
      setTimeout(() => {
        admob.banner.hide({
          // replace with your ad unit IDs
          android: 'ca-app-pub-3940256099942544/6300978111',
          ios: 'ca-app-pub-3940256099942544/2934735716',
        })
      }, 10000)
    })
  },

  receivedEvent(id) {
    const parentElement = document.getElementById(id)
    const listeningElement = parentElement.querySelector('.listening')
    const receivedElement = parentElement.querySelector('.received')

    listeningElement.setAttribute('style', 'display:none;')
    receivedElement.setAttribute('style', 'display:block;')

    console.log(`Received Event: ${id}`)
  },
}

app.initialize()