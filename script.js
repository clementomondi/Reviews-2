// Add JavaScript code here
var stars = document.querySelectorAll('.star a');

stars.forEach((item, index1) => {
    item.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})


const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})