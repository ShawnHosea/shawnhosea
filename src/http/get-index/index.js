const layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = arc.http.async(index) 

  async function index(req) {

  // console.log(req);

  let body = layout({ 
    content: 
    `<div class="wrapper">

    <div class="main">
      <div class="sec1">
        <h1>ShawnHosea®</h1>
        <P>Worldwide on the thorough side of things.</P>
      </div>
      <div class="sec2">
        <a href="mailto:shawnhosea@shawnhosea.com"><img  alt='logo' class="" height="15rem" src=${arc.static('email.svg')}></a>
      </div>
    </div>

    <div class="footer">
      <p id="time"></p>
    </div>
  </div>
    `
  })

  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }

}