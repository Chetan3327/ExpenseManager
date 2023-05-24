// let newitem = [{source: 'new', price: 478},{source: 'hello', price: 234}]

// let newitem = [{source: 'game_dev', price: 10000, category: 1},{source: 'allowence', price: 20000}, {source: 'food', price: 3700, category:0}, {source: 'rent', price: 5000, category:0}]
// let s = JSON.stringify(newitem)
// localStorage.list = s


// income: 1, expence: 0
window.onload = function(){
    if(localStorage.list == undefined){
        let newitem = [{source: 'test', price: 0, category: 1}]
        let s = JSON.stringify(newitem)
        localStorage.setItem('list', s)    
    }
}


let source = document.getElementById("source")
let price = document.getElementById("price")
let table = document.getElementById("list")
let income = document.getElementById("income")
let expense = document.getElementById("expense")
let net = document.getElementById('net')
let checkbox = document.getElementById("checkbox_id")
let checkbox_label = document.getElementById("checkbox_label")

function populate(){
    let table = document.getElementById('list')
    table.innerHTML = ""
    let row = document.createElement('tr')
    let ele1 = document.createElement('th')
    let ele2 = document.createElement('th')
    ele1.innerHTML = "Source"
    ele2.innerHTML = "Transaction"
    row.appendChild(ele1)
    row.appendChild(ele2)
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("↺");
    span.className = "close";
    span.addEventListener('click', reset)
    span.appendChild(txt);
    ele2.appendChild(span)

    table.appendChild(row)
    let income_sum = 0
    let expense_sum = 0
    let list = JSON.parse(localStorage.getItem('list'))
    list.forEach(element => {
        let table = document.getElementById('list')
        let row = document.createElement('tr')
        let ele1 = document.createElement('td')
        let ele2 = document.createElement('td')
        ele1.innerHTML = element.source
        if(element.category){
            ele2.innerHTML = '+ ' + element.price + ''
            ele2.style.color = 'green'
            income_sum+=element.price
        }else{
            ele2.style.color = 'red'
            ele2.innerHTML = '- ' + element.price + ''
            expense_sum+= element.price
        }

        // xArray.push = element.source
        // yArray.push = Number(element.price)
        // console.log(xArray);
        // console.log(yArray);

        // sum+=Number(element.price)
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        ele2.appendChild(span)

        row.appendChild(ele1)
        row.appendChild(ele2)
        table.appendChild(row)
    });
    income.innerText = income_sum
    expense.innerText = expense_sum
    net.innerText = income_sum - expense_sum
    // const layout = {title:"My Income"};
    // const data = [{labels:xArray, values:yArray, type:"pie"}];
    // Plotly.newPlot("myPlot", data, layout);
}
populate()
plot()

function reset(){
    localStorage.setItem('list', JSON.stringify([{source: 'test', price: 0, category: 1}]))
    location.reload()
}

function add(){
    if((source.value && price.value)){
        let newlist = JSON.parse(localStorage.getItem('list'))
        console.log(newlist);
        newlist.push({
            source: source.value,
            price: Number(price.value),
            category: Number(checkbox.checked)
        })
        localStorage.list = JSON.stringify(newlist)
        console.log(list);
        populate()
        plot()
        source.value = ''
        price.value = ''
    }
}


// const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yArray = [55, 49, 44, 24, 15];

// const layout = {title:"My Income"};
// const data = [{labels:xArray, values:yArray, type:"pie"}];
// Plotly.newPlot("myPlot", data, layout);

function plot(){
    let xArray_income = []
    let yArray_income = []
    let xArray_expense = []
    let yArray_expense = []
    let list = JSON.parse(localStorage.getItem('list'))
    list.forEach(element => {
        if(element.category){
            xArray_income.push(element.source)
            yArray_income.push(Number(element.price))
        }else{
            xArray_expense.push(element.source)
            yArray_expense.push(Number(element.price))
        }
    });
    console.log(xArray_expense)
    console.log(yArray_expense)
    console.log(xArray_income)
    console.log(yArray_income)
    let layout_income = {title: "My Income"}
    let data_income = [{labels:xArray_income, values:yArray_income, type:"pie"}]
    Plotly.newPlot("myPlot_income", data_income, layout_income)

    let layout_expense = {title: "My Expense"}
    let data_expense = [{labels:xArray_expense, values:yArray_expense, type:"pie"}]
    Plotly.newPlot("myPlot_expense", data_expense, layout_expense)
    
    // let layout_net = {title: "My net"}
    // let data_net = [{labels:["Income", "Expense"], values:[income.innerText, expense.innerText], type:"pie"}]
    // Plotly.newPlot("myPlot_net", data_net, layout_net)
}

function checkbox_clicked(){
    if(checkbox.checked){
        checkbox_label.innerText = "Income"
    }else{
        checkbox_label.innerText = "Expense"
    }
}