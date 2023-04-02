import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import En from './constants/En.js'

import Es from './constants/Es.js'

i18next.use(initReactI18next).init({
  interpolation:{ escapeValue: false },
  lng:"es",
  resource:{
    es:{
      global: Es
    },
    en:{
      global: En
    }

  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  </BrowserRouter>,
)
