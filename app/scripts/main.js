const hamburger = document.getElementById('menu');
const menu = document.getElementById('container-navigation')
const body = document.getElementsByTagName('body');
const loaderPage = document.getElementById('loader')



window.onload = () =>{
  loaderPage.style.display = 'none';
}


const toggleMenu = () => {
  menu.classList.toggle('active-menu');
  hamburger.classList.toggle('active-humb')
  body[0].classList.toggle('stop-scrolling')
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('active-menu');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
})


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16,
    }

    
  }
});



const swiperSelling = new Swiper(".mySwiper-selling", {
  slidesPerView: 1,
  spaceBetween: 26,
  // loop: true,

  navigation: {
    nextEl: ".swiper-button-next-selling",
    prevEl: ".swiper-button-prev-selling",
  },

  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 36,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 36,
    }

    
  }
});


function getWidthImg () {
  const imgSwiperSell = document.getElementsByClassName('sell-img');
  const posBlock = document.getElementsByClassName('selling-swiper__main-img')
  for(let i = 0; i < imgSwiperSell.length; i++){
    if (imgSwiperSell[i].complete) {
      const width = imgSwiperSell[i].naturalWidth;
      stylePosImg(width, posBlock[i])
    } else {
      imgSwiperSell[i].onload = function() {
        const width = imgSwiperSell[i].naturalWidth;
        stylePosImg(width, posBlock[i])
      };
    }
  }
}
getWidthImg()


function stylePosImg(width, posBlock){
  posBlock.style.cssText = `
    left: calc(50% - ${width * 0.5}px);
  `
}



const swiperComments = new Swiper(".comments-swiper", {
  initialSlide: 1,
  loop: true,
  speed: 1000,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 1303,
      modifier: 1,
      slideShadows: false,
  },

  navigation: {
      nextEl: '.swiper-button-next-comments',
      prevEl: '.swiper-button-prev-comments',
  },

  breakpoints: {
    730:{
      coverflowEffect: {
        depth: 803,
      },
    }
  }
});



