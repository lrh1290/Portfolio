// LINE 
var bar = new ProgressBar.Line(line, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(0.85);  // Number from 0.0 to 1.0
  
  
  // SEMI-CIRCLE
  var semi = new ProgressBar.SemiCircle(semicircle, {
    strokeWidth: 4,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    // Set default step function for all animate calls
    step: (state, semi) => {
      semi.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        semi.setText('');
      } else {
        semi.setText(value);
      }
  
      semi.text.style.color = state.color;
    }
  });
  semi.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  semi.text.style.fontSize = '2rem';
  
  semi.animate(0.85);  // Number from 0.0 to 1.0
  
  
  // CIRCLE
  var circle = new ProgressBar.Circle(mycircle, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#FFEA82',
      width: 4
    },
    to: {
      color: '#ED6A5A',
      width: 4
    },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  circle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle.text.style.fontSize = '2rem';
  
  circle.animate(.85);  // Number from 0.0 to 1.0 
  
  
  // BAR
  var elem = document.getElementById( "progress" );   
  var width = 10;
  var id = setInterval( frame, 10 );
  function frame() {
    if ( width >= 85 ) {
      clearInterval( id );
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  } 