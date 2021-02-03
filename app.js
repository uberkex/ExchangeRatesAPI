// Elementleri Seçme İşlemleri

// miktarı seçme
const amountElement = document.getElementById('amount');

// para birimini seçmek
const firstSelectElement = document.querySelector("#firstCurrency");

// dönüştürülecek para birimini seçmek
const secondSelectElement = document.querySelector("#secondCurrency");


// Currency classımızı yazdıktan sonra objesini oluşturuyoruz
const currency = new Currency("USD","TRY");

// UI classımızı yazdıktan sonra objesini oluşturuyoruz
const ui = new UI(firstSelectElement,secondSelectElement);


eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange_dom
    
    
    /* onchange */
    firstSelectElement.onchange = function(){
        // options para birimini seçme
        currency.changeFirstCurrency(firstSelectElement.options[firstSelectElement.selectedIndex].textContent);

        // anlık olarak arayüzde değişiklik için
        ui.changeFirst();
    };

    secondSelectElement.onchange = function(){
        currency.changeSecondCurrency(secondSelectElement.options[secondSelectElement.selectedIndex].textContent);

        // anlık olarak arayüzde değişiklik için
        ui.changeSecond();
    };
}

function exchangeCurrency(){

    currency.changeAmount(amountElement.value);

    // currency objemizin exchange methodunu kullanıyoruz -- değerimizi json olarak alıyoruz
    // promise döndüğü için bunu yakalamamız lazım ( return new Promise)
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.error(err));
    
}



