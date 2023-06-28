let output = "";
card_amount = Math.floor(Math.random() * 31);
for(i = 0; i < card_amount; i++){
    output += `
                    <div class="card">
                        <img src="assets/sad_chihuahua.jpg" alt="Dog with tears of joy" style="width:100%">
                        <h1>Tears of Joy Dog</h1>
                        <p class="price">$5.99</p>
                        <p>Some text about joy of being a dog</p>
                        <p><button>Buy one pup cup ☕️</button></p>
                        <div class="card-buttons">
                            <button>👁️‍🗨️</button>
                            <button>⭐️</button>
                            <button>ᛘ️</button>
                        </div>
                    </div>

`
}

document.getElementById('the-card-container').innerHTML = output;