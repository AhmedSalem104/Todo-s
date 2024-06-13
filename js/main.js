
var todoInput = document.querySelector("#todo")
var searchtodo = document.querySelector("#searchtodo")
var todoArr = JSON.parse(localStorage.getItem("Todo`s")) ?? [];


getAllTodo()

//get apiKey
// Key ====>   6665905dc8295c9e34d4ea1d
async function getApiKey() {
    var res = await fetch("https://todos.routemisr.com/api/v1/getApiKey",
        { method: 'get' });
    var finalresult = await res.json()
    console.log(finalresult)
}

// display Todos
async function getAllTodo() {
    var searchtodoVal = searchtodo.value;
    var container = "";
    var res = await fetch("https://todos.routemisr.com/api/v1/todos/6665905dc8295c9e34d4ea1d",
        { method: 'get' });
    var finalresult = await res.json()
    var data = finalresult.todos
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().includes(searchtodoVal.toLowerCase())) {
            if (data[i].completed == true) {
                container += ` 
             <tr>
             <td>${i + 1}</td>
                <td>${data[i].title}</td>
                  <td>
                  
                  <button id="doneCompleted"  class="disabled btn btn-success">Done <i class="fa-solid fa-check"></i> </button>
                  </td>
              <td><button onclick="deleteTodo('${data[i]._id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`
                console.log("true")
            }
            else {
                container += ` 
                <tr>
                <td>${i + 1}</td>
                   <td>${data[i].title}</td>
                    <td><button id="complete" onclick="martkTodoAsCompleted('${data[i]._id}')" class="btn btn-primary">Completed</button></td>
                   <td><button onclick="deleteTodo('${data[i]._id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
               </tr>`
                console.log("false")

            }
        }




    }
    document.getElementById("tableBody").innerHTML = container
}

// add todo
async function addTodo() {
    var todoName = todoInput.value
    var res = await fetch("https://todos.routemisr.com/api/v1/todos", {
        method: 'post',
        body: JSON.stringify({
            "title": `${todoName}`,
            "apiKey": "6665905dc8295c9e34d4ea1d"
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    res = await res.json()


    getAllTodo()
    clear()
}

function clear() {
    todoInput.value = "";
}

// MarktodoAsComplected
async function martkTodoAsCompleted(id) {
    var res = await fetch("https://todos.routemisr.com/api/v1/todos", {
        method: 'put',
        body: JSON.stringify({
            "todoId": `${id}`,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })

    getAllTodo()
    res = await res.json()
    var x = document.querySelector("#complete")



}

// DeleteTodo
async function deleteTodo(id) {
    console.log(id)
    var res = await fetch("https://todos.routemisr.com/api/v1/todos",
        {
            method: 'delete',
            body: JSON.stringify({
                "todoId": `${id}`,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    getAllTodo()
    res = await res.json()



}



/* 
var username = {
    fName : "Ahmed",
    LName : "Salem",
    PrintFullName: function(){
        var that = this
        console.log(this)
        function inner(){
            console.log(that)
        }
        inner()
    }
}
username.PrintFullName()


// استخدام arrow Function لمعالجة وسهولة المثال السابق
var username = {
    fName : "Ahmed",
    LName : "Salem",
    PrintFullName: function(){
        var  inner = () => console.log(this)
        inner()
    }
}
username.PrintFullName() */



/* let user = {
    Name: "Ahmed",
    age: 29,
    wife: {
        wifeName: "Sara",
        wifeAge: 25
    }
}
let { Name,age, wife: { wifeName }, wife: { wifeAge } } = user
console.log(wifeAge,age) */




// filter 
/* let numbers = [10, 20, 30, 40, 50, 60, 70]

var newnumbers = numbers.filter(num => num > 30)
console.log(newnumbers)
 */



// closure scope
/* 
function product(a, b) {
    return function (c, d) {
        return function (e, f) {
            console.log(a * c * e + b * d * f)
        }
    }
}

console.dir(product()) */


/* var id = setInterval(() => {
    console.log("Hi");
}, 1000);


setTimeout(() => {
    clearInterval(id);
}, 5000) */