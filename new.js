// let newitem = [{source: 'new', price: 478},{source: 'hello', price: 234}]
// let s = JSON.stringify(newitem)
// localStorage.list = s
let source = document.getElementById("source")
let price = document.getElementById("price")
let table = document.getElementById("list")
let total = document.getElementById("income")

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
    let list = JSON.parse(localStorage.getItem('list'))
    list.forEach(element => {
        let table = document.getElementById('list')
        let row = document.createElement('tr')
        let ele1 = document.createElement('td')
        let ele2 = document.createElement('td')
        ele1.innerHTML = element.source
        ele2.innerHTML = element.price

        // xArray.push = element.source
        // yArray.push = Number(element.price)
        // console.log(xArray);
        // console.log(yArray);

        // sum+=Number(element.price)
        sum+=(element.price)
        row.appendChild(ele1)
        row.appendChild(ele2)
        table.appendChild(row)
    });
    total.innerText = sum
    // const layout = {title:"My Income"};
    // const data = [{labels:xArray, values:yArray, type:"pie"}];
    // Plotly.newPlot("myPlot", data, layout);
}
populate()



function add(){
    if((source.value && price.value)){
        let newlist = JSON.parse(localStorage.getItem('list'))
        console.log(newlist);
        newlist.push({
            source: source.value,
            price: Number(price.value)
        })
        localStorage.list = JSON.stringify(newlist)
        console.log(list);
        populate()
    }
}


// const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yArray = [55, 49, 44, 24, 15];

// const layout = {title:"My Income"};
// const data = [{labels:xArray, values:yArray, type:"pie"}];
// Plotly.newPlot("myPlot", data, layout);

function plot(){
    let xArray = []
    let yArray = []
    let list = JSON.parse(localStorage.getItem('list'))
    list.forEach(element => {
        xArray.push(element.source)
        yArray.push(Number(element.price))
    });
    console.log(xArray);
    console.log(yArray);
    const layout = {title: "My Income"}
    const data = [{labels:xArray, values:yArray, type:"pie"}]
    Plotly.newPlot("myPlot", data, layout);
}