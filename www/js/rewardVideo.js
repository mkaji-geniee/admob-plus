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
    admob.rewardVideo.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-3940256099942544/5224354917',
        ios: 'ca-app-pub-3940256099942544/1712485313',
      },
    }).then(() => admob.rewardVideo.show())
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