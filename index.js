const box = document.getElementsByClassName('box')[0]
const contentCount = box.children.length;
const content = '<div class="blankContent"></div>'

if(contentCount%4 !==0){
    for (let i = 0; i < 4; i++) {
        box.innerHTML += content;
    }
}