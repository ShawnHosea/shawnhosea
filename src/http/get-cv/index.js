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
        <br>
        <ul class="tasks">
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
        </ul>
        <br>
        <blockquote><strong>Technical Environment: </strong>OpenJS Architect, Node, AWS.</blockquote>
      </div>
   
      <div class="exp">
        <strong>Fortamus | </strong><span>UI Developer</span> 
        <p>2019 to 2019</p>
        <br>
        <p>Designed and implemented features and improvements for multiple enterprise sized applications.</p>
        <p>Automated manual report generation for legacy ticketing system to provide reliable team analytics.</p>
        <p>Provided quality solutions to mission critical production issues in a timely manner.</p>
        <p>Proposed, designed and implemented a realtime tracking, deployment and notification system for test environments.</p>
        <br>
        <ul class="tasks">
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
        </ul>
        <br>    
        <blockquote><strong>Technical Environment: </strong>React, Ant Design.</blockquote>
      </div>

      <div class="exp">
        <strong>Swizec | </strong><span>Apprentice</span> 
        <p>2018 to 2019</p>
        <p>Architected and implemented a interactive media streaming service that enabled realtime, massively multiplayer, jeopardy-style interactions.</p>
        <p>Built host interface to inject synchronized prompts, overlays and widgets into live video stream.</p>
        <p>Created detailed documentation regarding technical requirements, project time lines and staffing guidelines for realizing total product offering.</p>
        <br>
        <ul class="tasks">
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
          <li>drive</li>
        </ul>
        <br>
        <blockquote><strong>Technical Environment: </strong> React, Gatsby, Javascript.</blockquote>
      </div>
    </div>
  </div>

  <hr>

  <div class="projects">
    <h3>Projects</h3>
    <ul class="projectGroup">
      <li><p><strong>Patromate</strong><br>  <a href=http://www.patromate.com>patromate.com</a><br>  Cordova based app(iOS &amp; Android) that leverages a huge amalgamation of public data. Driven by over 30 web spiders, 15 webservices and multiple external databases it provides brand ratings from non-profit organisations by scanning product barcodes.</p>
      </li>
      <li><p><strong>PushThemes</strong><br>  <a href=http://www.pushthemes.com>pushthemes.com</a><br>  HTML5 Animated heatmap visualising crimes in the city of Halifax. Built on a customised version Heatmap.js library which enables smooth animation. Won silver in the <a href="http://apps4halifax.ca/">Apps4Halifax</a> city category.</p>
      </li>
      <li><p><strong>Noticate</strong><br>  <a href=https://noticate.com>noticate.com</a><br>  Chrome extension that enables Firefox-style live RSS feeds with over fifteen thousand active users a 4/5 star rating.</p>
      </li>
    </ul>
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