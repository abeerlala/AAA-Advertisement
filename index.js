document.getElementById('check-icon').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

function resetForm() {
    location.reload()
}

document.querySelectorAll('.stars-group span').forEach(function(star, index) {
    star.addEventListener('click', function() {
        let stars = document.querySelectorAll('.stars-group span i');
        for (let i = 0; i < stars.length; i++) {
            if (i <= index) {
                stars[i].classList.remove('fa-regular');
                stars[i].classList.add('fa-solid');
            } else {
                stars[i].classList.remove('fa-solid');
                stars[i].classList.add('fa-regular');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars-group span');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            ratingInput.value = rating;
            stars.forEach(s => {
                s.classList.remove('checked');
            });
            star.classList.add('checked');
            star.previousElementSibling?.classList.add('checked');
            if (rating > 1) {
                star.previousElementSibling.previousElementSibling?.classList.add('checked');
                if (rating > 2) {
                    star.previousElementSibling.previousElementSibling.previousElementSibling?.classList.add('checked');
                    if (rating > 3) {
                        star.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling?.classList.add('checked');
                    }
                }
            }
        });
    });
});

// AOS Initialization

AOS.init();