'use strict';

const app = new Vue({
    el: '#app',
    data: {
        user: {
            userName: '',
            userMail: '',
            userComent: '',
        },
        numid: 1,
        p: [
            { className: 'p1', id: 'p1_text' },
            { className: 'p2', id: 'p1_text' },
        ],
        d: [
            { className: 'div_one', id: 'one' },
            { className: 'div_two', id: 'two' },
        ],
        t: {
            className: 'table1',
            id: 'table1',
        },
    },
    methods: {
        onSubmit() {
            let insertComment = document.querySelector('.gridwrap');
            if (this.numid == 1) {
                this.numid = 0;
                insertComment.insertAdjacentHTML('beforeend', this.render());
                this.user.userName = '';
                this.user.userMail = '';
                this.user.userComent = '';
            } else {
                this.numid = 1;
                insertComment.insertAdjacentHTML('beforeend', this.render());
                this.user.userName = '';
                this.user.userMail = '';
                this.user.userComent = '';
            }
        },
        render() {
            return `<div class="${this.t.className} id="${this.t.id}">
                        <div class="${this.d[this.numid].className}" id="${this.d[this.numid].id}"> 
                        <h1>${this.user.userName}</h1>
                        <p class="${this.p[this.numid].className}" id="${this.p[this.numid].id}">
                            <b>${this.user.userMail}</b> <br><br>
                            ${this.user.userComent}
                        </p>
                        </div>
                    </div>`
        }
    }

})