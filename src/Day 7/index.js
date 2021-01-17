window.onkeydown = keyDown;

function keyDown(e) {
    e.preventDefault();
    $('#keyCode').attr('data-shadowText', e.keyCode)
    $('#keyCode').text(e.keyCode)
    console.log(e.keyCode);
}