var coin =  document.getElementById('coin');
var result = document.getElementById('result');




function tossCoin() {
   coin.style.animation = 'spin 2s ease-in-out';  
    result.innerHTML = ''; 
    setTimeout(function() {
     
      const random = Math.random();
      
      
      if (random < 0.5) {
        result.innerHTML = 'Heads!';
        coin.style.backgroundImage = "url('51xs7F+tP5L._AC_UF894,1000_QL80_.jpg')";
      } else {
        result.innerHTML = 'Tails!';
        coin.style.backgroundImage = "url('51bcZy+HZpL._AC_UF894,1000_QL80_.jpg')";
      }
      
      
     coin.style.animation = 'none';
    }, 2000);  
  }
  