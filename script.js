const observerTop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('slide-top-show');
        else entry.target.classList.remove('slide-top-show');
    })
});
const hiddenElementsTop = document.querySelectorAll('.slide-top');
hiddenElementsTop.forEach((el) => observerTop.observe(el));