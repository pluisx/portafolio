
  // Esconder el menu en scrolldown
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  
  $(window).scroll(function(event){
      didScroll = true;
  });
  
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  
  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  }
  
  // Grafico izq 
  var ctx = document.getElementById('myChart').getContext('2d');
  
  var randomScalingFactor = function() {
              return Math.round(Math.random() * 100);
          };
  
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              data: [12, 6, 5, 3, 2, 2],
              backgroundColor: [
                  '#4e70f8',
                  '#5FA8F2',
                  '#70CDF7',
                  '#9CA3A7',
                  '#CECFD0',
                  '#CECFD0',
              ],
              borderColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ],
              hoverBackgroundColor: [
                'rgba(67, 98, 222, 100)',
              ],
              hoverBorderColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ],
          }]
      },
  
      options: {
        circumference: Math.PI,
        rotation: -Math.PI,
        tooltips: {
          enabled: false,
        },
      },
     
  });
  
  
  // Grafico der
  var ctx = document.getElementById('myChart2').getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Alto', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  '#4e70f8',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                '#fff'
              ],
              hoverBackgroundColor: [
                'rgba(67, 98, 222, 100)',
              ],
          }]
      },
     
  });