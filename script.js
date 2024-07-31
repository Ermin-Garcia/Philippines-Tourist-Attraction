document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.project-item');
    document.getElementById('project-container').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.project-item');
    document.getElementById('project-container').prepend(lists[lists.length - 1]);
}