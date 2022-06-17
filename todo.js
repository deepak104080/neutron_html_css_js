var count = 1;
var editId;

function deleteFn(event) {
    event.target.parentNode.parentNode.remove();
}

function doneFn(event) {
    //console.log(event.target.parentNode.parentNode.getAttribute('id'));
    event.target.parentNode.parentNode.setAttribute('class', 'bg-success');
}

function editFn(event) {
    document.getElementById('editPanel').setAttribute('class', 'row col-12');
    editId = event.target.parentNode.parentNode.getAttribute('id');
    //console.log(event.target.parentNode.parentNode.getAttribute('id'));
    // event.target.parentNode.parentNode.setAttribute('class', 'bg-success');
}

function editSaveFn(event) {
    let tempInputEdit = document.getElementById('taskEditInput').value;
    console.log(tempInputEdit);
    if(tempInputEdit != '')  {
        updateEditTask(tempInputEdit);
    }
    else {
        alert('Plz fill all the values.')
    }
}

function updateEditTask(temp) {
    console.log(editId);
    console.log(temp);
    let path = '#' + editId + ' ' + 'td:nth-child(2)';
    console.log(path);
    let targetTd = document.querySelector(path);
    targetTd.innerText = temp;
    document.getElementById('taskEditInput').value = '';
    document.getElementById('editPanel').setAttribute('class', 'row col-12 d-none');
}


function addTaskTableFn(tempInput) {
    let td1 = document.createElement('td');
    td1.innerText = count;
    let td2 = document.createElement('td');
    td2.innerText = tempInput;
    let td3 = document.createElement('td');
    td3.innerHTML = `<button onclick="deleteFn(event)" class="btn btn-danger">Delete</button>
    <button class="btn btn-success" onclick="doneFn(event)">Done</button>
    <button class="btn btn-info" onclick="editFn(event)" >Edit</button>`;


    let tr1 = document.createElement('tr');
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    let tempId = 'taskid'+Math.random().toString().slice(2);
    tr1.setAttribute('id', tempId)

    document.getElementById('tableList').appendChild(tr1);
    count = count +1;
}


function addTaskFn() {
    let tempInput = document.getElementById('taskInput').value;
    console.log(tempInput);
    //localStorage.setItem('task', tempInput)
    //tabel render method
    //drawback - all row render again
    //benefit - handling of sr no and less dom manipulation required
    if(tempInput != '')  {
        addTaskTableFn(tempInput);
    }
    else {
        alert('Plz fill all the values.')
    }
}




//------------------------------
function selectFn(event) {
    console.log('valye selected in select dropdown------------');
    console.log(event.target.value)
}


function markCheckFn(event) {
    console.log(event.target.value)
}



function clickSelectFn () {
    let temp = document.getElementById('travelSelect').value;
    console.log('----------from select bob on add button -------', temp);
}


function clickCheckboxFn() {
    let temp = document.querySelectorAll('[name=skills]:checked');
    console.log(temp);
    let skills = [];
    for(let i=0;i<temp.length;i++) {
        skills.push(temp[i].value);
    }
    console.log(skills);
}





//-------------------------------------------
var products = [];

function fetchData(products) {
    
    fetch('https://fakestoreapi.com/products')
    .then((resp) => {
        return resp.json()
    })
    .then(data => {
        console.log(data);
        products = data;
        console.log(products)
        //copy in localStorage
        renderHtml(data);
    })
    .catch(err => console.log(err))

    console.log('----------------------');
    setTimeout(function(){
        console.log(products);
        document.getElementById('testData2').innerHTML = products[1].title;
    }, 10000);

}


function renderHtml(data) {
    document.getElementById('testData').innerHTML = data[0].title;
}
