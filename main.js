function handleDurationChange(event) {
    var selectedOption = event.target.options[event.target.selectedIndex];
    var priceInr = selectedOption.value;
    var priceUsd = selectedOption.getAttribute('data-usd');
    
    var elementId = event.target.id.replace('duration', ''); 
    document.getElementById('priceInr' + elementId).textContent = priceInr;
    document.getElementById('priceUsd' + elementId).textContent = priceUsd;
  }
  
  var dropdowns = document.getElementsByClassName('duration-dropdown');
  
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('change', handleDurationChange);
  };
  