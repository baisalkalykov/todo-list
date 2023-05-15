let todos = [

]

let lists = document.querySelector('.ul')
let form = document.querySelector('form')
let input = document.querySelector('input')


const addTodo = ()=>{
    lists.innerHTML = ''
    todos.forEach((el,idx)=>{
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.textContent='delete'
        li.textContent=idx+1 + ')'+el.text
        btn.setAttribute('class','delete')
        btn.setAttribute('data-id',el.id)
        li.append(btn)
        lists.append(li)
        console.log(btn.dataset)

        btn.addEventListener('click',()=>{
            todos = todos.filter((item)=>{

                return item.id !== +btn.dataset.id
            })

addTodo()
        })

    })
}
addTodo()

form[1].addEventListener('click',(e)=>{
    e.preventDefault()
    todos = [...todos,{
        id:todos.length +1,
        text:input.value
    }]
    console.log(todos)
    input.value =''
    addTodo()


})
