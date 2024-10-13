const htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("data-theme", "light");


// normaly fetch 10 billionoir and randomly show them 
const most10bilinior = () => {
    fetch('https://forbes400.onrender.com/api/forbes400?limit=10')
        .then(res => res.json())
        .then(data => DisplayBilinior(data))
}

// randomly show them
const DisplayBilinior = (items) => {
    const miliniorField = document.getElementById('milinior-field');
    items.forEach(element => {
        const div = document.createElement('div');
        div.className =" flex py-3 justify-between gap-5"
        div.innerHTML = `
              <div class=" flex gap-3">
                     <p class="font-semibold">${element.personName}</p>
                     <img class="rotate-90" src="./images/icons/Group 8.png" alt="">
                 </div>
                 <p class="font-semibold">${element.countryOfCitizenship}</p>
                 <p class="font-semibold">${element.industries}</p>
                  <p class="font-semibold">${element.rank}</p>
                  <p class="font-semibold">$ ${element.finalWorth}</p>
        
        `
        miliniorField.appendChild(div)
    });
}

most10bilinior()