const animationsSection = ()=>{
        options = {
            threshold : 0.72
        }
        let observator = new IntersectionObserver(navCheck, options);
        const sections = document.querySelectorAll('.section');
        sections.forEach(section=>{
            observator.observe(section);
        });


        function navCheck (entries){
            entries.forEach(entry=>{
                const className = entry.target.classList[0];
                const text = entry.target.querySelector('.text');
                const img = entry.target.querySelector('img');
                if(entry.isIntersecting){
                    if(entry.target.classList[0] == 'about-div1'){
                        const tl = new TimelineMax();
                        tl.fromTo(img, 0.5, {x:'-100%', opacity:0}, {x:'0%', opacity:1}, '+=0.5')
                            .fromTo(text, 0.5,{x:'150%', opacity:0},{x:'0%', opacity:1}, '-=0.5')
                    } else if( entry.target.classList[0] =='about-div2'){
                        const tl = new TimelineMax();
                        tl.fromTo(img, 0.5, {x:'100%', opacity:0}, {x:'0%', opacity:1}, '+=0.5')
                            .fromTo(text, 0.5,{x:'-150%', opacity:0},{x:'0%', opacity:1}, '-=0.5')
                    }  else if( entry.target.classList[0] =='about-div3'){
                        const tl = new TimelineMax();
                        tl.fromTo(img, 0.5, {opacity:0}, {opacity:1}, '+=0.5')
                            .fromTo(text, 0.5,{opacity:0},{opacity:1}, '-=0.5')
                    }
                } 
                else{
                        if(entry.target.classList[0]=='about-div1'){
                            const tl = new TimelineMax();
                            tl.fromTo(img, 0.5,{x:'0%', opacity:1}, {x:'-100%', opacity:0})
                                .fromTo(text, 0.5, {x:'0%', opacity:1}, {x:'150%', opacity:0}, '-=0.5')
                        }   else if(entry.target.classList[0]=='about-div2'){
                            const tl = new TimelineMax();
                            tl.fromTo(img, 0.5, {x:'0%', opacity:1}, {x:'100%', opacity:0})
                                .fromTo(text, 0.5, {x:'0%', opacity:1}, {x:'-150%', opacity:0}, '-=0.5')
                        }   else if(entry.target.classList[0] =='about-div3'){
                            const tl = new TimelineMax();
                            tl.fromTo(img, 0.5, {opacity:1}, {opacity:0})
                                .fromTo(text, 0.5, {opacity:1}, {opacity:0}, '-=0.5')
                        }
                }
            })
        };
    };


const buttonTop = ()=>{
    const button = document.querySelector('.button-up')
    button.addEventListener('click', ()=>{
        document.body.scrollTop = 0; // for safari
        document.documentElement.scrollTop = 0;

    })
    window.onscroll = ()=>{
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            button.style.display = 'block';
        } else{
            button.style.display = 'none';
        }
    }
};

const animationUnderline = ()=>{
    const bubble = document.querySelector('.bubble')
    const header = document.querySelector('header');
    const links = Array.from(header.querySelectorAll('a'));
    document.addEventListener('mousemove',(e)=>
    {

        if(header.contains(e.target))
        {
            if(links.includes(e.target))
            {
                const coords =  e.target.getBoundingClientRect();
                const position = 
                {
                    left: coords.left,
                    right : coords.right,
                    width : coords.width,
                    height : coords.height,
                    top : coords.top,
                    bottom : coords.bottom
                }
                bubble.style.opacity = 1;
                bubble.style.setProperty('left', `${position.left}px`);
                bubble.style.setProperty('right', `${position.right}px`);
                bubble.style.setProperty('width', `${position.width}px`);
                bubble.style.setProperty('top', `${position.bottom}px`);
                bubble.style.setProperty('height', `4px`);
            } 
    } else{
        // remove bubble
        setTimeout(() => {
            bubble.style.opacity = 0;
        }, 1000);
    }
    });
};

const orderToggle = ()=>{
    const adverts = document.querySelectorAll('.car');
    adverts.forEach(advert=>{
        advert.addEventListener('click',(e)=>{
            const btn = advert.querySelector('.toggle-order');
            if(e.target == btn){
                const orderForm = advert.querySelector('.orderForm');
                orderForm.classList.toggle('active');
                setTimeout(() => {
                    orderForm.classList.toggle('active-opacity');
                    
                }, 0);
            }
        })
    })
}


window.addEventListener('DOMContentLoaded', ()=>{
    animationUnderline();
    buttonTop();
    animationsSection();
    orderToggle();
})
