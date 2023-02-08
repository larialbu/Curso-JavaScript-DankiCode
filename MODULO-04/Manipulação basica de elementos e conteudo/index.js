var p = document.getElementsByTagName('p')

//p[0].innerHTML = 'manipulado via js'

for (var i = 0; i < 10 ;i++){
    p[0].innerHTML = p[0].innerHTML + i;
}