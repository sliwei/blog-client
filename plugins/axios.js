import Vue from 'vue'

var vm = new Vue({})

export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (process.browser) {
      console.log('loading')
      // vm.$loading()
    }
  })

  $axios.onResponse((response) => {
    if (process.browser) {
      // let load = vm.$loading()
      // load.close()
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
    if (code === 500) {
      redirect('/500')
    }
    if (code !== 200) {
      redirect(`/${code}`)
    }
  })
}
