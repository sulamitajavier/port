document.querySelector('.about').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      });

document.querySelector('.home').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.cont').scrollIntoView({ behavior: 'smooth' });
      });

document.querySelector('.work').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#uno').scrollIntoView({ behavior: 'smooth' });
      });

document.querySelector('.contact').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.conta').scrollIntoView({ behavior: 'smooth' });
      });

