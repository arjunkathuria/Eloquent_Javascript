var button = document.querySelector('button');
  console.log('loaded');
  button.addEventListener('mousedown', function (event) {
    console.log(event.target.nodeName);
    if (event.which === 1)
       console.log('left');
    else if (event.which === 2)
       console.log('middle');
    else if (event.which === 3)
       console.log('right');
  });