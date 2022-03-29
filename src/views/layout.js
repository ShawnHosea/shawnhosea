// const arc = require('@architect/functions')
const footer = require('./footer')
// const header = require('./header')
const main = require('./main')
const Head = require('./document/head.js')

module.exports = function Layout (props = {}) {
// console.log(props)
 
return `
<!DOCTYPE html>
<html lang="en">
    ${Head(props)}
<body class="font-sans">
    <div>
 
        ${main(props)}
        ${footer(props)}
    </div>
    <script src="_static/index.js" type="module"></script>
</body>
</html>
`;
}

