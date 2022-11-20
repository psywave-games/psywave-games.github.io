/** change background **/
document.addEventListener('DOMContentLoaded', () => {
    const style = `linear-gradient(to right,rgba(0,0,0,.9),rgba(0,0,0,.9)),url('./assets/noise.jpeg')`
    const body = document.querySelector("body")
    body.style['background-image'] = style;
    body.style['visibility'] = 'initial'
})
