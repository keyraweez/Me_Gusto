document.getElementById('dark').style.opacity = '0';
function light(){
    document.getElementById('dark').style.opacity = '1';
    document.getElementById('light').style.opacity = '0';
    document.getElementById('dark').style.transition = '.7s';
    document.body.style.background= 'black';
}
function dark(){
    document.getElementById('dark').style.opacity = '0';
    document.getElementById('light').style.opacity = '1';
    document.getElementById('light').style.transition = '.7s';
    document.body.style.background= 'green';
}