const layout = require('@architect/views/layout-resume.js')
const arc = require('@architect/functions')


exports.handler = arc.http.async(index) 

  async function index(req) {

  // console.log(req);

  let body = layout({ 
    content: 
    `
<div class="container">
  <div class="header">
    <div>
      <h1>Shawn Hosea</h1>
      <h2>Full Stack Engineer &amp; Product Enthusiast</h2>
    </div>
    <div class="contact">
      <p><a href="https://www.shawnhosea.com">shawnhosea.com</a>
      <p>shawnhosea@shawnhosea.com</p>
      <p>(404) 610-0305</p>
    </div>
  </div>

  <hr>
  <div class="technical">
    <h3>Technical</h3>
    <ul class="techs">
      <li>UI design | HTML/CSS</li>
      <li>Javascript / NodeJS</li>
      <li>Unix / Bash</li>
      <li>AWS / Cloud</li>
      <li>Git</li>
      <li>Tap/Tape TDD</li>
    </ul>
  </div>

  <hr>
  
  <div class="experience">
  <h3>Experience</h3>
    <div>
      <div class="exp">
        <strong>Begin | </strong><span>Junior Engineer</span> 
        <p>2020 to 2022</p>
        <br>    
        <p>Designed and implemented features and improvements for multiple enterprise sized applications.</p>
        <p>Automated manual report generation for legacy ticketing system to provide reliable team analytics.</p>
        <p>Provided quality solutions to mission critical production issues in a timely manner.</p>
        <p>Proposed, designed and implemented a realtime tracking, deployment and notification system for test environments.</p>

        <ul class="tasks">
        <li>drive</li>
        <li>drive</li>
        <li>drive</li>
        <li>drive</li>
        </ul>
        <strong>Technical Environment: </strong>OpenJS Architecht, Node, AWS.</strong>
      </div>
   
      <div>
        <strong>Fortamus | </strong><span>UI Developer</span> 
        <p>2019 to 2019</p>
        Designed and implemented features and improvements for multiple enterprise sized applications.<br>    Automated manual report generation for legacy ticketing system to provide reliable team analytics.<br>    Provided quality solutions to mission critical production issues in a timely manner.<br>    Proposed, designed and implemented a realtime tracking, deployment and notification system for test environments.<br>    
        <strong>Technical Environment: </strong>React, Ant Design.
      </div>

      <div>
        <strong>Swizec | </strong> <span>Technical Consultant</span> <p>2011</p>
        <br>Architected and implemented a interactive media streaming service that enabled realtime, massively multiplayer, jeopardy-style interactions.<br>    Built host interface to inject synchronized prompts, overlays and widgets into live video stream.<br>    Created detailed documentation regarding technical requirements, project time lines and staffing guidelines for realizing total product offering.
        <strong>Technical Environment: </strong> React, Gatsby, Javascript.
      </div>
    </div>
  </div>

  <hr>

  <h3 id="projects">Projects</h3>
  <ul>
    <li><p><strong>Patromate</strong><br>  <a href=http://www.patromate.com class=not-printed>patromate.com</a><br>  Cordova based app(iOS &amp; Android) that leverages a huge amalgamation of public data. Driven by over 30 web spiders, 15 webservices and multiple external databases it provides brand ratings from non-profit organisations by scanning product barcodes.</p>
    </li>
    <li><p><strong>Halifax Crime Heatmap</strong><br>  <a href=http://www.crimeheatmap.ca class=not-printed>crimeheatmap.ca</a><br>  HTML5 Animated heatmap visualising crimes in the city of Halifax. Built on a customised version Heatmap.js library which enables smooth animation. Won silver in the <a href="http://apps4halifax.ca/">Apps4Halifax</a> city category.</p>
    </li>
    <li><p><strong>Foxish</strong><br>  <a href=https://chrome.google.com/webstore/detail/jpgagcapnkccceppgljfpoadahaopjdb class=not-printed>chrome.google.com</a><br>  Chrome extension that enables Firefox-style live RSS feeds with over fifteen thousand active users a 4/5 star rating. Featured on <a href="https://gizmodo.com/5609633/10-add+ons-you-have-to-know-about-for-google-chrome">Gizmodo</a> &amp; <a href="https://lifehacker.com/5603602/foxish-live-rss-adds-live-bookmarks-to-google-chrome">LifeHacker</a>.</p>
    </li>
  </ul>

  <hr>

  <h3 id="education">Education</h3>
  <p><strong>Bachelor of Technology (Software Development)</strong> <strong>2003 to 2007</strong><br>    Seneca College of Applied Arts and Technology (<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0a596f646f696b4a53657861">[email&#160;protected]</a>), Toronto, Ontario</p>
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