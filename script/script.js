
// TEXT ANIMATION
const sentenceEl = document.querySelector("p")
const textEl = document.querySelector("span")

const sentences = ["Ben Aşkımı Çomk ama Çoomk"]
const words = ["Seviyorumm", "Özledimmm", "Yerim kii", "Mutlu Edicem Sözmm"]

let text = ""
let speed = 400
let isDeleting = false
let wordIndex = 3
let charIndex = 0

function type() {
    const word = words[wordIndex]
    
        if(isDeleting) {
            speed = 200
            charIndex--
            text = word.slice(0,charIndex)
        } else {
            speed = 400
            charIndex++
            text = word.slice(0,charIndex)
        }

        sentenceEl.textContent = sentences[0]
        textEl.innerHTML = text

        if(text.length === word.length) {
            speed = 2000
            isDeleting = true
        }
        else if(text.length === 0) {
            speed = 1000
            isDeleting = false
            wordIndex++

            if(wordIndex >= words.length) {
                wordIndex = 0
            }
        }

        setTimeout( type, speed );
}

type()


// IMAGES ANIMATIONS

// Ekren boyutu 750px'den byüükse fotoları yatay klasöründeki fotolarla değiştir

const envelope = document.querySelector("i")
const pictureEl = document.querySelector("picture")
const pointer = document.querySelector(".pointer i")
const msgEl = document.querySelector(".msg-text")
    console.log(msgEl);

    window.addEventListener("DOMContentLoaded",()=>{

            if(window.innerWidth >= 750) {

                let result = ""
                for(let i = 0; i<7; i++) {
                    result+= `
                    <img src="./image/yatay/img${i+1}.jpg"
                        data-num = "${i+1}"
                        alt="" srcset="">
                    `
                }
 
                pictureEl.innerHTML = result
            }
            else if(window.innerWidth < 750) {

                let result = ""
                for(let i = 0; i<7; i++) {
                    result+= `
                    <img src="./image/dik/img${i+1}.jpg"
                        data-num = "${i+1}"
                        alt="" srcset="">
                    `
                }
 
                pictureEl.innerHTML = result
            }

        const images = document.querySelectorAll("img")

            envelope.className = "fa-solid fa-envelope"

            envelope.addEventListener("click",()=> {

                pointer.classList.remove("moving")
                msgEl.classList.add("hidden")


                envelope.className = "fa-solid fa-envelope-open"
                envelope.style ="z-index:-1"

                images.forEach(img=>img.classList.add("small"))
            })

            images.forEach(img=> img.addEventListener("click",(e)=>{

                    images.forEach(img=>{
                        if(img.className == "big") {
                            img.className = "big-to-small"
                        }
                    })

                const clickedImg = e.target
                    clickedImg.className = "big"
        
            }))
    })

    window.addEventListener("resize",()=>{
        
        if(window.innerWidth >= 750) {

            let result = ""
            for(let i = 0; i<7; i++) {
                result+= `
                <img src="./image/yatay/img${i+1}.jpg"
                    data-num = "${i+1}"
                    alt="" srcset="">
                `
            }

            pictureEl.innerHTML = result
        }
        else if(window.innerWidth < 750) {

            let result = ""
            for(let i = 0; i<7; i++) {
                result+= `
                <img src="./image/dik/img${i+1}.jpg"
                    data-num = "${i+1}"
                    alt="" srcset="">
                `
            }

            pictureEl.innerHTML = result
        }

    const images = document.querySelectorAll("img")
        envelope.className = "fa-solid fa-envelope"
        envelope.style ="z-index:1"
        pointer.classList.add("moving")
        msgEl.classList.remove("hidden")


        envelope.addEventListener("click",()=> {

            envelope.className = "fa-solid fa-envelope-open"
            envelope.style ="z-index:-1"

            msgEl.classList.add("hidden")

            images.forEach(img=>img.classList.add("small"))
        })

        images.forEach(img=> img.addEventListener("click",(e)=>{

                images.forEach(img=>{
                    if(img.className == "big") {
                        img.className = "big-to-small"
                    }
                })

            const clickedImg = e.target
                clickedImg.className = "big"
    
        }))
    })


    