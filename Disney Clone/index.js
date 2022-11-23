let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
];



const carousal = document.querySelector('.carousal');


var sliders =[];

function createSlide(sliderIndex){

    let slide=document.createElement('div');
    let imgElement = document.createElement('img');
    let slidercontent = document.createElement('div');
    let p = document.createElement('p')
    let h1=document.createElement('h1');


    // imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    slidercontent.appendChild(h1);
    slidercontent.appendChild(p);


    slide.appendChild(slidercontent);
    slide.appendChild(imgElement);
    // carousal.appendChild(slide);
    


    imgElement.src=movies[sliderIndex].image;


    // classnames
    slide.className='slider';
    slidercontent.className='slider-content'
    h1.className='movie-title';
    p.className='movie-des'
    imgElement.className='img';
    return slide;
   
}

var x=0;
carousal.appendChild(createSlide(0));

setInterval(()=>{
   
    if(x>=movies.length){
        x=0;
    }
    carousal.replaceChild(createSlide(x++),document.querySelector('.slider'))

    
},3000);

//video cards

const videoCards =[...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })
})

//card sliders

let cardContainers =[...document.querySelectorAll('.card-container')];
let prebtn = [...document.querySelectorAll('pre-btn')]
let nxtbtn = [...document.querySelectorAll('nxt-btn')]

cardContainers.forEach((item,i)=>{
    let containerDimen = item.getBoundingClientRect();
    let containerWidth=containerDimen.width;

    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWidth-200;
    })

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth+200;

    })

})
