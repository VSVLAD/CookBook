/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const updateIcon = (theme) => {
    const btn = document.getElementById('btn-theme-toggle')
    if (!btn) return
    // Солнышко (light) / Луна (dark)
    if (theme === 'dark') {
      btn.innerHTML = '🌙';
    } else {
      btn.innerHTML = '☀️';
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getPreferredTheme()
    setTheme(currentTheme)
    updateIcon(currentTheme)

    const btn = document.getElementById('btn-theme-toggle')
    if (btn) {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme')
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        setStoredTheme(newTheme)
        setTheme(newTheme)
        updateIcon(newTheme)
      })
    }
  })
})()
