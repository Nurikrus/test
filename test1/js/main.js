'use strict';

let btn = document.querySelector('.button');
let numid = 1;
let d = [
    { className: 'div_one', id: 'one' },
    { className: 'div_two', id: 'two' },
];
let p = [
    { className: 'p1', id: 'p1_text' },
    { className: 'p2', id: 'p1_text' },
];

let t = {
    className: 'table1',
    id: 'table1',
};

btn.addEventListener('click', createcoment);

function createcoment() {
    let insertComment = document.querySelector('.gridwrap');
    if (numid == 1) {
        numid = 0;
        insertComment.insertAdjacentHTML('beforeend', render());
    } else {
        numid = 1;
        insertComment.insertAdjacentHTML('beforeend', render());
    }
    function render() {
        return `<div class="${t.className} id="${t.id}">
                    <div class="${d[numid].className}" id="${d[numid].id}"> 
                    <h1>${nameUser.value}</h1>
                    <p class="${p[numid].className}" id="${p[numid].id}">
                        <b>${email.value}</b> <br><br>
                        ${txtarea.value}
                    </p>
                    </div>
                </div>`
    }
}

