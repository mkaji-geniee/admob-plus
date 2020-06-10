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
    // this.checkIsLoaded().then(() => this.showAds())
  },

  checkIsLoaded() {
    return admob.interstitial.isLoaded().then(result => {
      return result
    })
  },

  showAds() {
    admob.interstitial.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-3940256099942544/1033173712',
        ios: 'ca-app-pub-3940256099942544/4411468910',
      },
    }).then(() => admob.interstitial.show())
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