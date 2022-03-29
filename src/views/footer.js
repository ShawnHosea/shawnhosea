


module.exports = function footer() {
let date = new Date().getFullYear()


return `
    <div class="footer">
        <span>© ${date} <a href="/">HOSEA IND.</a></span>
    </div>
    `
}
       