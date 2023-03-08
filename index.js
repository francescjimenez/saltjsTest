import './style.scss'
import sal from 'sal.js'

window.addEventListener('load', () => {

    /*

    fade
slide-up
slide-down
slide-left
slide-right
zoom-in
zoom-out
flip-up
flip-down
flip-left
flip-right

*/
    const icon1 = '<svg class="shape pink sal-animate" data-sal="fade-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="68.57" height="65.75" viewBox="0 0 68.57 65.75"><path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path></svg>'
    const icon2 = '<svg class="shape yellow sal-animate" data-sal="fade-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="68.57" height="65.75" viewBox="0 0 68.57 65.75"><path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path></svg>'
    const icon3 = '<svg class="shape violet sal-animate" data-sal="fade-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="68.57" height="65.75" viewBox="0 0 68.57 65.75"><path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path></svg>'
    const icon4 = '<svg class="shape green sal-animate" data-sal="fade-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="68.57" height="65.75" viewBox="0 0 68.57 65.75"><path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path></svg>'
    const icon5 = '<svg class="shape pink sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" rx="4" ry="4"></rect></svg>'
    const icon6 = '<svg class="shape blue sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" rx="4" ry="4"></rect></svg>'
    const icon7 = '<svg class="shape violet sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" rx="4" ry="4"></rect></svg>'
    const icon8 = '<svg class="shape yellow sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" rx="4" ry="4"></rect></svg>'
    const icon9 = '<svg class="shape red sal-animate" data-sal="zoom-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path></svg>'
    const icon10 = '<svg class="shape pink sal-animate" data-sal="zoom-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path></svg>'
    const icon11 = '<svg class="shape blue sal-animate" data-sal="zoom-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path></svg>'
    const icon12 = '<svg class="shape violet sal-animate" data-sal="zoom-in" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path></svg>'
    const icon13 = '<svg class="shape pink sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><rect x="28" width="14" height="70" rx="7" ry="7"></rect><rect x="28" width="14" height="70" rx="7" ry="7" transform="translate(0 70) rotate(-90)"></rect></svg>'
    const icon14 = '<svg class="shape red sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><rect x="28" width="14" height="70" rx="7" ry="7"></rect><rect x="28" width="14" height="70" rx="7" ry="7" transform="translate(0 70) rotate(-90)"></rect></svg>'
    const icon15 = '<svg class="shape blue sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><rect x="28" width="14" height="70" rx="7" ry="7"></rect><rect x="28" width="14" height="70" rx="7" ry="7" transform="translate(0 70) rotate(-90)"></rect></svg>'
    const icon16 = '<svg class="shape violet sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><rect x="28" width="14" height="70" rx="7" ry="7"></rect><rect x="28" width="14" height="70" rx="7" ry="7" transform="translate(0 70) rotate(-90)"></rect></svg>'
    const icon17 = '<svg class="shape yellow sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"></circle></svg>'
    const icon18 = '<svg class="shape blue sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"></circle></svg>'
    const icon19 = '<svg class="shape red sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"></circle></svg>'
    const icon20 = '<svg class="shape pink sal-animate" data-sal="slide-up" data-sal-delay="300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"></circle></svg>'
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20]
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const divs = []
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('iconExt')
        div.style.opacity = 0
        div.innerHTML = icons[Math.floor(Math.random() * icons.length)]

        let x, y, overlap
        do {
          overlap = false
          x = Math.floor(Math.random() * viewportWidth)
          y = Math.floor(Math.random() * viewportHeight)
          for (let j = 0; j < divs.length; j++) {
            const other = divs[j]
            const distance = Math.sqrt((other.x - x) ** 2 + (other.y - y) ** 2)
            if (distance < other.size + 110) {
              overlap = true
              break
            }
          }
        } while (overlap)
        div.style.left = x + 'px'
        div.style.top = y + 'px'
        divs.push({ x, y, size: div.offsetWidth })

        document.querySelector('main').appendChild(div)
    }
    
    sal({
        once: false
    })   
    
    document.querySelector('main').addEventListener('scroll', () => {
        const iconExt = document.querySelectorAll('.iconExt')
        const randomIconExt = iconExt[Math.floor(Math.random() * iconExt.length)]
        randomIconExt.style.opacity = 1
        randomIconExt.style.transition = 'opacity 0.5s ease-in-out'
        randomIconExt.style.transform = 'translate(0, -100px)'
        
        const timer = setTimeout(() => {
            randomIconExt.style.opacity = 0
        }, Math.floor(Math.random() * 1000) + 300)
        randomIconExt.addEventListener('transitionend', () => {
            clearTimeout(timer)
        })
    })

})

// event listener exit reload
window.addEventListener('beforeunload', () => {
    document.querySelector('main').removeEventListener('scroll')
})
