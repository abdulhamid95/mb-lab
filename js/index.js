

const mql = window.matchMedia("(max-width: 992px)")
const mql2 = window.matchMedia("(max-width: 767px)")

const changeSlideView = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const handleOrientationChange = (e) => {
  if (mql2.matches) {
    changeSlideView(1)
  } else if (mql.matches) {
    changeSlideView(2)
  } else {
    changeSlideView(3)
  }
}


handleOrientationChange();

mql.onchange = (e) => {
  handleOrientationChange(e);
}

mql2.onchange = (e) => {
  handleOrientationChange(e);
}

(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'slideInLeft',
          'fadeInDown',
          'slideInRight',
          'bounceIn',
          'zoomInDown',
          'rotateIn',
          'zoomIn',
          'fadeInRight',
          'fadeInLeft',
          'zoomInUp',
          'jackInTheBox'
        ];
        if (entry.isIntersecting) {
        const matchingClass = entry.target.classList.value.split(' ')
          .find(className => effectClasses.includes(className));
        if (matchingClass) {
          entry.target.classList.add('animate__animated', `animate__${matchingClass}`);
        }
        observer.unobserve(entry.target);
        }
      });
    });

    const count = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'year-count',
          'happy-patients',
          'experts-doctors',
          'hospital-room',
          'award-winner',
          'appointment',
          'primary-care',
          'donate',
          'pay-bill',
          'emergency'
        ];
        if (entry.isIntersecting) {
          const matchingClass = entry.target.classList.value.split(' ')
            .find(className => effectClasses.includes(className));
          if (matchingClass) {
            let website = new CountUp('year-count', 0, 15, 0, 1);
            website.start();
            let happyPatients = new CountUp('happy-patients', 0, 150, 0, 4);
            happyPatients.start();
            let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 4);
            expertsDoctors.start();
            let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 4);
            hospitalRoom.start();
            let awardWinner = new CountUp('award-winner', 0, 70, 0, 4);
            awardWinner.start();
            let appointment = new CountUp('appointment', 0, 500, 0, 4);
            appointment.start();
            let primaryCare = new CountUp('primary-care', 0, 200, 0, 4);
            primaryCare.start();
            let donate = new CountUp('donate', 0, 300, 0, 4);
            donate.start();
            let payBill = new CountUp('pay-bill', 0, 700, 0, 4);
            payBill.start();
            let emergency = new CountUp('emergency', 0, 20, 0, 4);
            emergency.start();
    
            // تعطيل المراقبة
            count.unobserve(entry.target);
          }
        }
      });
    }, { once: true }); // إضافة خاصية once: true
    
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
      observer.observe(element); 
    });

    const countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
      count.observe(element)
    })
})();


const slideResults = document.getElementById('swiper-results');
const slideLab = document.getElementById('swiper-lab');
const result = document.getElementById('our-results');
const lab = document.getElementById('our-lab');

document.querySelectorAll('input[type="radio"]').forEach(item => {
  item.addEventListener('change', () => {
    if (result.checked) {
        slideResults.classList.remove('d-none')
        slideLab.classList.add('d-none')
      
    } else if(lab.checked) {
      slideResults.classList.add('d-none')
      slideLab.classList.remove('d-none')
    }
  })
})


var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    fetch("https://ipapi.co/json")
      .then(function(res) { return res.json(); })
      .then(function(data) { callback(data.country_code); })
      .catch(function() { callback("us"); });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for formatting/placeholders etc
});


document.getElementById("year").innerHTML = new Date().getFullYear();