document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.mywork-item');
    document.getElementById('mywork-container').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.mywork-item');
    document.getElementById('mywork-container').prepend(lists[lists.length - 1]);
}