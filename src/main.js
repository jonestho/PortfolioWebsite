import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.config.errorHandler = (err, component, info) => {
    console.error(`Error: ${err}`)
    console.error(`Offending Component: ${component}`)
    console.error(`Additional Information: ${info}`)
}

app.mount('#app')
