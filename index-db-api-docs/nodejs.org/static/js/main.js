/* eslint-disable no-var */
// Notice: IE 10 and below is still supported, so disable eslint for the file
// when checking the "var"
;(function () {
  var langPickerTogglerElement = document.querySelector('.lang-picker-toggler')
  var langPickerElement = document.querySelector('.lang-picker')
  var langElements = langPickerElement.querySelectorAll('button')
  // Get the current URL language
  var currentLang = window.location.pathname.split('/')[1] || 'en'
  var currentLangElement = null

  Array.prototype.forEach.call(langElements, function (el) {
    if (el.getAttribute('data-lang') !== currentLang) {
      el.addEventListener('click', function (e) {
        var newLocale =
          (e.target && e.target.dataset && e.target.dataset.lang) || 'en'
        window.location.assign(
          window.location.pathname.replace(/\/[a-zA-Z-]+/, '/' + newLocale)
        )
      })
    } else {
      currentLangElement = el
    }
  })

  if (currentLangElement) {
    langPickerTogglerElement.setAttribute(
      'title',
      currentLangElement.textContent
    )

    // Remove the current selected language item, because we don't need to choose it
    // any more unless we want to switch to a new language
    langPickerElement.removeChild(currentLangElement.parentNode)
  }

  const toggleFunction = function () {
    langPickerElement.classList.toggle('hidden')
    const isAriaExpanded =
      langPickerTogglerElement.getAttribute('aria-expanded') === 'true'
    langPickerTogglerElement.setAttribute('aria-expanded', !isAriaExpanded)
  }

  langPickerTogglerElement.addEventListener('click', function () {
    toggleFunction()
  })

  document.body.addEventListener('click', function (event) {
    if (
      !langPickerElement.classList.contains('hidden') &&
      !langPickerTogglerElement.contains(event.target)
    ) {
      toggleFunction()
    }
  })
})()
;(function () {
  const themeAttr = 'data-theme'
  var darkThemeSwitcherElement = document.querySelector('.dark-theme-switcher')

  darkThemeSwitcherElement.addEventListener('click', function () {
    var currentTheme = getTheme()
    if (currentTheme === 'light') {
      setTheme('dark')
    } else if (currentTheme === 'dark') {
      setTheme('light')
    }
  })

  function setTheme(theme) {
    document.querySelector('html').setAttribute(themeAttr, theme)
    window.localStorage.setItem('theme', theme)
  }

  function getTheme() {
    return window.localStorage.getItem('theme')
  }
})()
;(function () {
  var scrollToTop = document.querySelector('#scroll-to-top')

  ;(window.onscroll = function () {
    window.requestAnimationFrame(function () {
      scrollToTop.style.display =
        window.pageYOffset > window.innerHeight ? 'block' : 'none'
    })
  })()

  scrollToTop.addEventListener('click', function (e) {
    e.preventDefault()
    window.scrollTo(0, 0)
  })
})()
;(function () {
  var contributorCard = document.querySelector('.contributor-card')

  if (!contributorCard) {
    return
  }

  var contributorAvatar = contributorCard.querySelector('#contributor-avatar')
  var contributorUsername = contributorCard.querySelector(
    '#contributor-username'
  )
  var contributorContributions = contributorCard.querySelector(
    '#contributor-contributions'
  )
  var loadingSpinner = contributorCard.querySelector('.spinner-border')

  if (window.IntersectionObserver) {
    var observer = new window.IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0.5) {
            // In viewport, fetch a random contributor
            fetchRandomContributor()

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(document.querySelector('footer'))
  } else {
    // Does not support IntersectionObserver
    fetchRandomContributor()
  }

  function fetchRandomContributor() {
    var maxContributors
    var fetchDate
    var needToRefetch = false

    if (window.localStorage) {
      maxContributors = window.localStorage.getItem('max_contributors')
      fetchDate = parseInt(window.localStorage.getItem('fetch_date'), 10)
    }

    // If fetch date is a month old (2592000000 ms === 30 days)
    if (Date.now() - fetchDate >= 2592000000) {
      needToRefetch = true
    }

    // If localStorage and data is less than 1 month old, fetch 1 time
    if (maxContributors && !needToRefetch) {
      getContributor(
        Math.floor(Math.random() * Math.floor(parseInt(maxContributors))) + 1
      )
    } else {
      getMaxContributors(function (randomPage, lastPage) {
        getContributor(randomPage)

        if (window.localStorage) {
          window.localStorage.setItem('max_contributors', lastPage)
        }
      })
    }
  }

  function getMaxContributors(callback) {
    var xhr = new window.XMLHttpRequest()
    xhr.open(
      'GET',
      'https://api.github.com/repos/nodejs/node/contributors?per_page=1',
      true
    )

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Get Headers Links last page to generate a random contributor
          var links = linkParser(xhr.getResponseHeader('Link'))
          var randomPage =
            Math.floor(
              Math.random() * Math.floor(parseInt(links.last.page, 10))
            ) + 1

          if (window.localStorage) {
            window.localStorage.setItem('fetch_date', Date.now())
          }
          callback(randomPage, links.last.page)
        } else {
          return contributorCard.parentNode.removeChild(contributorCard)
        }
      }
    }

    xhr.send()
  }

  function getContributor(randomPage) {
    var xhr = new window.XMLHttpRequest()
    xhr.open(
      'GET',
      'https://api.github.com/repos/nodejs/node/contributors?per_page=1&page=' +
        randomPage,
      true
    )

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var contributor = JSON.parse(xhr.responseText)[0]

          // Remove loading spinner and show avatar
          loadingSpinner.parentNode.removeChild(loadingSpinner)
          contributorAvatar.classList.remove('hidden')
          // Set new values
          contributorAvatar.src = contributor.avatar_url + '&s=80'
          contributorAvatar.parentElement.href = contributor.html_url
          contributorUsername.textContent = contributor.login
          contributorUsername.href = contributor.html_url
          contributorContributions.textContent =
            contributor.contributions + ' contributions'
          contributorContributions.parentElement.href =
            'https://github.com/nodejs/node/commits?author=' + contributor.login
        } else {
          return contributorCard.parentNode.removeChild(contributorCard)
        }
      }
    }

    xhr.send()
  }

  function linkParser(linkHeader) {
    var regex = /<([^?]+\?per_page=1&[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g
    var array = []
    var object = {}

    while ((array = regex.exec(linkHeader)) !== null) {
      object[array[3]] = {
        url: array[1],
        page: array[2]
      }
    }

    return object
  }
})()
;(function () {
  'use strict'

  var osMatch = navigator.platform.match(/(Win|Mac|Linux)/)
  var os = (osMatch && osMatch[1]) || ''
  var arch =
    navigator.userAgent.match(/x86_64|Win64|WOW64/) ||
    navigator.cpuClass === 'x64'
      ? 'x64'
      : 'x86'
  var buttons = document.querySelectorAll('.home-downloadbutton')
  var downloadHead = document.querySelector('#home-downloadhead')
  var dlLocal

  function versionIntoHref(nodeList, filename) {
    var linkEls = Array.prototype.slice.call(nodeList)
    var version
    var el

    for (var i = 0; i < linkEls.length; i++) {
      version = linkEls[i].getAttribute('data-version')
      el = linkEls[i]

      // Windows 64-bit files for 0.x.x need to be prefixed with 'x64/'
      if (os === 'Win' && version[1] === '0' && arch === 'x64') {
        el.href += arch + '/'
      }

      el.href += filename.replace('%version%', version)
    }
  }

  if (downloadHead && buttons) {
    dlLocal = downloadHead.getAttribute('data-dl-local')
    switch (os) {
      case 'Mac':
        versionIntoHref(buttons, 'node-%version%.pkg')
        downloadHead.textContent = dlLocal + ' macOS (x64)'
        break
      case 'Win':
        versionIntoHref(buttons, 'node-%version%-' + arch + '.msi')
        downloadHead.textContent = dlLocal + ' Windows (' + arch + ')'
        break
      case 'Linux':
        versionIntoHref(buttons, 'node-%version%-linux-x64.tar.xz')
        downloadHead.textContent = dlLocal + ' Linux (x64)'
        break
    }
  }

  // Windows button on download page
  var winButton = document.querySelector('#windows-downloadbutton')
  if (winButton && os === 'Win') {
    var winText = winButton.querySelector('p')
    winButton.href = winButton.href.replace(/x(86|64)/, arch)
    winText.textContent = winText.textContent.replace(/x(86|64)/, arch)
  }
})()
;(function () {
  // This function is used to replace the anchor
  // link of Edit on GitHub

  var editOnGitHubElement = document.getElementById('editOnGitHubLink')
  var editOnGitHubUrlElement = document.getElementById('editOnGitHubUrl')

  if (editOnGitHubUrlElement) {
    editOnGitHubElement.setAttribute('href', editOnGitHubUrlElement.value)
  } else {
    editOnGitHubElement.parentNode.parentNode.removeChild(
      editOnGitHubElement.parentNode
    )
  }
})()
