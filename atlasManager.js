import atlasClass from "./atlasClass.js";



export const doApi = async (search) => {
    let url = (`https://restcountries.com/v3.1/name/${search}?fullText=true`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        createAtlas(data);

    }
    catch(err){
        console.log(err);
        document.querySelector("#id_parent").innerHTML += `<h1 class="display-5 text-white d-flex justify-content-center pt-4">This country doesn't exist.</h1>`
      }
}

const createAtlas = (ar) => {
    document.querySelector("#id_parent").innerHTML = "";
    let country = new atlasClass("#id_parent", ar[0],  shortTofullCountry, doApi);
    country.render();
}



const shortTofullCountry = async (codeCountry) => {
    let url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    let resp = await fetch(url);
    let data = await resp.json();
    let fullCountry = await (data[0].name.common);
    return fullCountry;
}


