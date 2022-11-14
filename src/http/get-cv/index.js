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
      <h2>Full Stack Engineer &amp; Product Engineer</h2>
    </div>
    <div class="contact">
    <p><a href="https://github.com/ShawnHosea">github.com/ShawnHosea</a></p>
      <p>shawnhosea@shawnhosea.com</p>
      <p>(678) 973-5344</p>
    </div>
  </div>

  <hr>

  <div class="technical">
    <h3>Technical</h3>
    <ul class="techs">
      <li>UI design | HTML/CSS</li>
      <li>Javascript/NodeJS</li>
      <li>Linux/Bash</li>
      <li>AWS | cloud/serverless</li>
      <li>APIs/REST/OAuth</li>
      <li>Git</li>
      <li>TDD</li>
      <li>Figma/Sketch</li>
      <li>Adobe Creative Suite</li>
    </ul>
  </div>

  <hr>
  
  <div class="experience">
  <h3>Experience</h3>

    <div>
      <div class="exp">
        <strong>Begin.com | </strong><span>FullStack Engineer</span> 
        <p>2020 to 2022</p>
        <br>    
        <p>Worked on day-to-day frontend/backend maintenance of company product alongside founders.</p>
        <p>Prototyped new features and pushed several updates to production.</p>
        <br>
        <ul class="tasks">
          <li>Built company blog site. <a href="https://blog.begin.com/">https://blog.begin.com/</a></li>
          <li>Wrote product documentation and technical articles.</li>
          <li>Created technical video explainers showcasing product features.</li>
          <li>Shipped weekly PRs to the main product (Begin.com) and open-source community (arc.codes).</li>
          <li>Regularly kept repositories and changelogs updated.</li>
          <li>Helped troubleshoot customer issues with product.</li>
        </ul>
        <br>
        <blockquote><strong>Technical Environment: </strong>OpenJS Architect, Node, AWS, Tap (Test Anything Protocol).</blockquote>
      </div>
   
      <div class="exp">
        <strong>Fortamus | </strong><span>UI Developer</span> 
        <p>2019 to 2019</p>
        <br>
        <p>Contract role where the main objective was to redesign the app's user interface using Ant Design.</p>
        <p>Focus was on creating reusable components for all parts of the app.</p>
        <br>
        <ul class="tasks">
          <li>Designed and implemented user interface components for app's admin area utilizing React and Ant Design library.</li>
          <li>Designed and built company marketing site using Gatsby.</li>
          <li>Quality assurance for ensuring responsive mobile & desktop experience.</li>
          <li>Designed in-app graphics, promotional brand assets, & daily core content.</li>
        </ul>
        <br>    
        <blockquote><strong>Technical Environment: </strong>React, Ant Design.</blockquote>
      </div>

      <div class="exp">
        <strong>Swizec Inc. | </strong><span>Junior Developer</span> 
        <p>2018 to 2019</p>
        <p>Junior developer position where I was tasked with building marketing sites for several digital products using React & Gatsby.</p>
        <br>
        <ul class="tasks">
          <li>Created reusable React components for landing pages.</li>
          <li>Designed overall product branding and user experience.</li>
          <li>Self-initiated coding of prototypes for user testing to aid in other designers projects.</li>
          <li>Created <a href="https://d3blackbox.com/">https://d3blackbox.com/</a></li>
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
      <li>
        <strong>Patromate</strong>
        <br>
        <a href=https://patromate.com>patromate.com</a>
        <br>  
        <p>Utilizing OAuth2 provided by the Patreon API, this app allows users to download a .csv file containing a list of all posts in their Patreon account.</p>
      </li>
      <li>
        <strong>PushThemes</strong>
        <br>  
        <a href=https://pushthemes.com>pushthemes.com</a>
        <br>  
        <p>This site and the accompanying subdomains are a repository of themes for Ghost users to create blogs. It utilizes the Ghost API to allow users to create unique designs with the theme. The site is built and hosted on an AWS EC2 instance.</p>
      </li>
      <li>
        <strong>OSINTcoder</strong>
        <br>  
        <a href=https://www.osintcoder.com/>osintcoder.com</a>
        <br>  
        <p>This custom hand-coded blog site built using Ghost CMS teaches the fundamentals of OSINT and cybersecurity.</p>
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