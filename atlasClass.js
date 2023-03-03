export default class atlasClass {
    constructor(_parent, _item, shortTofullCountry, doApi) {
        this.parent = _parent;
        this.flag = _item.flags.svg;
        this.name = _item.name.common;
        this.capital = _item.capital;
        this.languages = Object.values(_item.languages);
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.coin = Object.keys(_item.currencies);
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.borders = _item.borders;
        this.map = _item.latlng;
        this.doApi = doApi;
        this.shortTofullCountry = shortTofullCountry;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-md-8 mx-auto p-4 text-white";
        div.style = "background: rgba(0, 0, 0, 0.804);"
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img src="${this.flag}" alt="${this.name}" class="w-50 d-flex justify-content-center">
        <h2 class="display-4 mt-3" style="font-family: 'Arima', cursive;">${this.name}</h2>
        <div class="text-info"><strong>Capital City:</strong> <span class="text-white">${this.capital}</span></div>
        <div class="text-info"><strong>Languages:</strong> <span class="text-white">${this.languages}</span></div>
        <div class="text-info"><strong>Population:</strong>  <span class="text-white">${this.pop}</span> </div>
        <div class="text-info"><strong>Region:</strong> <span class="text-white">${this.region}</span></div>
        <div class="text-info"><strong>Coin:</strong> <span class="text-white">${this.coin}, ${this.coinDescription}</spam></div>
        
        <div class="mt-3"><strong>States with common borders:</strong><br>
        <div class="borders_div"></div>
        </div>
        
        <iframe class="rounded-2 mt-4 col-12" height="600" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
       `

        let borders_div = div.querySelector(".borders_div");
        if (this.borders) {
            this.borders.forEach(async (item) => {
                let btn = document.createElement("button");
                btn.className = "btn border-0 bg-transparent text-info"
                btn.innerHTML = await this.shortTofullCountry(item);
                borders_div.append(btn);
                btn.addEventListener("click", () => {
                    this.doApi(btn.innerHTML);
                })
            })
        }
else{
    document.querySelector(".borders_div").innerHTML += "none"
}

    }
}