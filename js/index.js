window.onload = function() {
    let website = new CountUp('year-count', 0, 30, 0, 2.5);
    website.start();
    let happyPatients = new CountUp('happy-patients', 0, 150, 0, 2.5);
    happyPatients.start();
    let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 2.5);
    expertsDoctors.start();
    let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 2.5);
    hospitalRoom.start();
    let awardWinner = new CountUp('award-winner', 0, 70, 0, 2.5);
    awardWinner.start();
};

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
    
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
      observer.observe(element); 
    });
  })();
 
  

document.getElementById("year").innerHTML = new Date().getFullYear();