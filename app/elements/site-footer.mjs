export default function SiteFooter ({ html }) {
  const me = null // Ex. 'https://hoseaindustries.com/'
  return html`
    <footer class='pb4'>
      ${me ? `<p class='text-center pbe-4'>
        <a rel='me' href='${me}' class='font-body text-1 uppercase tracking3 underline'>Hosea Industries</a>
      </p>` : ''}
      <p class='text-center'>
        <a href='/rss' class='font-body text-1 uppercase tracking3 underline'>RSS</a>
      </p>
    </footer>
  `
}
