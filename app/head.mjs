import { getStyles }  from '@enhance/arc-plugin-styles'



export default function Head (state) {
  const { store = {} } = state

    // pageTitle is set in /app/preflight.mjs
    const { pageTitle = '' } = store

    // Enhance Styles
    // CSS will be included as a <link> tag for local development.
    // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
    const styles = process.env.ARC_LOCAL
      ? getStyles.linkTag()
      : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html class="font-sans" lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${styles}
            <style>
        body {
          background-color: #ffffff;
          color: #000000;
        }

      </style>
      <link rel="stylesheet" href="/_public/styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
`
}