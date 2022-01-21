const toggleMode = document.querySelectorAll('.mode-container')

toggleMode.forEach((mode)=> {
    mode.addEventListener('click', function() {
        document.body.classList.toggle('dark')
        if(document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled')
   
        } else {
            localStorage.setItem('darkMode', 'disabled')
        }
    })
})

if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.toggle('dark')
}