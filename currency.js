// ES6 - Promise

class Currency {

    // iki para birimi göndericez - Örneğin USD-TRY
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        // https://api.exchangeratesapi.io/latest?base=USD
        // base kısmı sürekli değişecek seçimlere göre
        this.url = "https://api.exchangeratesapi.io/latest?base=";

        // her event oluştuğunda firstCurrency, secondCurrency, amount değişecek
        this.amount = null;

    }


    exchange() {
        // fetch API ve Promise kullanıcaz
        // gelen response'u json olarak döneceğiz buda bize promise dönecek ve tekrar yakalıcaz

        // app.js'ye olumlu ve olumsuz sonuçları döndürmek için;
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {

                    const equal = data.rates[this.secondCurrency];
                    //const equal = data[rates][this.secondCurrency];
                    //const equal = data["rates"][this.secondCurrency];

                    // amountu numbera çevirmeliyiz, string olarak geliyor
                    const amount_n = Number(this.amount);

                    // para çevirme işlemini yapıyoruz
                    let total = equal * amount_n;

                    // promise döndürmemiz gerekiyor --> app.jsye göndermek için - return gibi -
                    resolve(total);

                })
                .catch(err => reject(err));
        });


    }

    // anlık olarak amount değiştirme
    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}

