
function sm_menu () { /* sm menu ============================================================ */
    let btn = document.getElementById('sm-menu-button');
    let menu = document.getElementById('sm-menu-list');
    let body = document.getElementsByTagName("body")[0];
    let span1 = document.getElementsByTagName('span1')[0];
    let span2 = document.getElementsByTagName('span2')[0];
    let span3 = document.getElementsByTagName('span3')[0];

    btn.onclick = function () {
        menu.classList.toggle('active');
        body.classList.toggle('lock');
        span1.classList.toggle('active');
        span2.classList.toggle('active');
        span3.classList.toggle('active');
    }
}

sm_menu ();

function search () {
    let btn = document.getElementById ('search');
    let sm_btn = document.getElementById('sm-menu-button');
    let sign = document.getElementById('sign');
    let input = document.getElementById('search-input');
    let search = document.getElementById('search');

    btn.onclick = function () {
        sm_btn.classList.toggle('none');
        sign.classList.toggle('none');
        input.classList. toggle('active');
        search.classList.toggle('active');
    }
};

search ();

function slider () {
    let prev = document.getElementsByClassName('prev-button')[0];
    let next = document.getElementsByClassName('next-button')[0];
    let img = document.getElementsByClassName('slider-a');
    let i = 0;
    next.onclick = function () {
        for (n=0; n<img.length; n++) {
            img[n].classList.remove('active');
        }

        i++;

        if (i==img.length) {
            i=0;
            img[i].classList.add('active');
        }
        else {
        img[i].classList.add('active');
        }
    }
};

slider ();