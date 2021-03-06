$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }

    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script

    var typed = new Typed(".typing-1", {
        strings: ["an Engineer .", "a Student .", "a Developer .", "a Digital Markerter", "a Blogger .", "a Traveller .", "a Photographer ."],
        typeSpeed: 100,
        trackSpeed: 60,
        backSpeed: 60,
        loop: true

    })
    var typed = new Typed(".typing-2", {
        strings: ["an Engineer.", "a Student.", "a Developer.", "a Digital Markerter.", "a Blogger.", "a Traveller.", "a Photographer."],
        typeSpeed: 100,
        trackSpeed: 60,
        backSpeed: 60,
        loop: true

    })





    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },

        }
    });

});
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
        status.classList.add('success')
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.classList.add('error')
    });
}
form.addEventListener("submit", handleSubmit)

/*window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    function success() {
        form.reset();
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "OOPS! there was an error";
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error)
    });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpsRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}*/