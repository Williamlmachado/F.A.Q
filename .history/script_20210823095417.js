const toggles = document.querySelector('.faq-toggle')

toggles.forEach(toggle =>{
    toggle.addEventListner('click', () =>{}
        toggle.parentNode.classList.toggle('active')
    )
})