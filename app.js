var coin = document.getElementById('coin');
var result = document.getElementById('result');




function tossCoin() {
    coin.style.animation = 'spin 2s ease-in-out';
    result.innerHTML = '';
    setTimeout(function () {

        const random = Math.random();


        if (random < 0.5) {
            result.innerHTML = 'Heads!';
            coin.style.backgroundImage = "url('heads.jpg')";
        } else {
            result.innerHTML = 'Tails!';
            coin.style.backgroundImage = "url('tails.jpg')";
        }


        coin.style.animation = 'none';
    }, 2000);
}
