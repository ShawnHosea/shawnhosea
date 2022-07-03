
const main = require('./main')
const Head = require('./document/head-resume.js')

module.exports = function Layout (props = {}) {
// console.log(props)
 
return `
<!DOCTYPE html>
<html lang="en">
    ${Head(props)}
<body class="font-sans">
    <div>
        ${main(props)}
    </div>
    <script src="_static/index.js" type="module"></script>
</body>
</html>
`;
}

