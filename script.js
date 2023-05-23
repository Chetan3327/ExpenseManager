

let source = document.getElementById("source")
let price = document.getElementById("price")
let table = document.getElementById("list")
let total = document.getElementById("total")


function populate(){
    let table = document.getElementById('list')
    table.innerHTML = ""
    let row = document.createElement('tr')
    let ele1 = document.createElement('th')
    let ele2 = document.createElement('th')
    ele1.innerHTML = "Source"
    ele2.innerHTML = "Income"
    row.appendChild(ele1)
    row.appendChild(ele2)
    table.appendChild(row)
    let sum = 0
    localStorage.list.forEach(element => {
        let table = document.getElementById('list')
        let row = document.createElement('tr')
        let ele1 = document.createElement('td')
        let ele2 = document.createElement('td')
        ele1.innerHTML = element.source
        ele2.innerHTML = element.price
        // sum+=Number(element.price)
        sum+=(element.price)
        row.appendChild(ele1)
        row.appendChild(ele2)
        table.appendChild(row)
    });
    total.innerText = sum
}



function add(){
    if((source.value && price.value)){
        localStorage.list.push({
            source: source.value,
            price: Number(price.value)
        })
        console.log(list);
        populate()
    }
}