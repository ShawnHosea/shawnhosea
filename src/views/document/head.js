const arc = require('@architect/functions')

module.exports = function Head (props = {}) {
  
    return `
    <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-9339264-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
  
      gtag('config', 'UA-9339264-3');
    </script>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="./favicon/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="./favicon/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="./favicon/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="./favicon/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="./favicon/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="./favicon/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="./favicon/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="./favicon/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="./favicon/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="./favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="./favicon/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="./favicon/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
  
    <!-- COMMON TAGS -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ShawnHosea</title>
    <!-- Search Engine -->
    <meta name="description" content="TECHNOLOGY | DESIGN | HUMANS">
    <meta name="image" content="https://static-p26ue2.begin.app/horse-j92/metacard.png">
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="ShawnHosea">
    <meta itemprop="description" content="TECHNOLOGY | DESIGN | HUMANS">
    <meta itemprop="image" content="https://static-p26ue2.begin.app/horse-j92/metacard.png">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="ShawnHosea">
    <meta name="twitter:description" content="TECHNOLOGY | DESIGN | HUMANS">
    <meta name="twitter:image:src" content="https://static-p26ue2.begin.app/horse-j92/metacard.png">
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="ShawnHosea">
    <meta name="og:description" content="TECHNOLOGY | DESIGN | HUMANS">
    <meta name="og:image" content="https://static-p26ue2.begin.app/horse-j92/metacard.png">
    <meta name="og:url" content="https://shawnhosea.com/">
    <meta name="og:site_name" content="ShawnHosea">
    <meta name="og:type" content="website">
    <link
      href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      rel="icon" type="image/x-icon">

    <!-- Styles -->
  
    <link rel="stylesheet" type="text/css" href="${arc.static('/custom.css')}">
    <link rel="stylesheet" type="text/css" href="${arc.static('/styles.css')}">
    </head>
  `
  }
  