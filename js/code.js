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
        div.className = " flex py-3 justify-between gap-5"
        div.innerHTML = `
              <div class=" flex gap-3">
                     <p class="font-semibold">${element.personName}</p>
                     <img class="rotate-90" src="./images/icons/Group 8.png" alt="">
                 </div>
                 <p class="font-semibold">${element.countryOfCitizenship}</p>
                 <p class="font-semibold">${element.industries}</p>
                  <p class="font-semibold">${element.rank}</p>
                  <p  class=" person-wealth font-semibold">$ ${element.finalWorth}</p>
        
        `
        miliniorField.appendChild(div)
    });
}
const calculateTotalAmount = () => {
    const totalAmountField = document.getElementById('total-amount');
    const personWealth = document.getElementsByClassName('person-wealth');
    
    let amount = [];
    let sum = 0;
    for (let i = 0; i < personWealth.length; i++) {
        sum = sum + personWealth[i].innerText;
        console.log(i);
        amount.push(sum)
    }
    document.getElementById('total-amount').innerText = amount;
}


calculateTotalAmount()
most10bilinior()