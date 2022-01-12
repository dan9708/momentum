const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-form input')
const todoList = document.querySelector('.todo-list')

const TODOS_KEY = 'todos'
let todos = []

// 6.localStorage todos의 정보를 저장하기
function saveTodos () {
  // newTodo의 값을 todos에 저장한것을 localStorage에 저장하게함
  localStorage.setItem('TODOS_KEY', JSON.stringify(todos))
}

// 4.버튼을 클릭하면 todo를 지워줌
function deleteTodo (event) {
  // 추가된 todo를 지우기 위해서는 li로 추가가 되므로 event.target.parentElement를 하면 li를 삭제할 수 있다.
  const li = event.target.parentElement 
  li.remove()
  todos = todos.filter((todo) => todo.id !== parseInt(li.id)) 
  // todo.id와 li.id가 다른거는 새배열을 만들어줘라 극런데 li.id는 타입이 string이므로 parseInt(li.id)로 해서 숫자로 변환해줘야한다.
  saveTodos()
}

// 2.추가된 리스트를 그리는 기능
function paintTodo(newTodo) {
  // li, span를 만들어준다.
  const li = document.createElement('li')
  li.style.marginBottom = '10px'
  li.id = newTodo.id // 위의 만든 li에 아이디를 넣어줌
  const span = document.createElement('span')
  // handleTodoSubmit에서 넘어온 newTodo(input값이 저장되어있는 변수)값을 span에 넣어준다.
  span.innerText = newTodo.text
  // 3.삭제할 수 있는 버튼을 만들어준다.
  const button = document.createElement('button')
  button.innerText = '❌'
  button.style.marginLeft = '10px'
  button.style.backgroundColor = 'transparent'
  button.style.outline = 'none'
  button.style.border = 'none'
  // button.style.border = '1px solid white'

  button.addEventListener('click', deleteTodo)
  // li안에 span을 넣어준다. span을 만든 이유는 나중에 삭제버튼을 만들기 위해서이다.
  li.appendChild(span)
  // li안에 span과 마찬가지로 button을 추가해준다.
  li.appendChild(button)
  // newTodo를 가지고 있는 span 그리고 span을 가지고 있는 li를 ul(todoList)에 넣어준다.
  todoList.appendChild(li)
}

// 1.input을 가져와서 input의 값을 변수에 저장하고 input의 값을 초기화한다.
// 그리고 submit의 기본동작을 하지못하게 막는다.
function handleTodoSubmit(event) {
  event.preventDefault()
  // input의 값을 newTodo 변수에 저장
  const newTodo = todoInput.value
  // input의 값을 초기화
  todoInput.value = ''
  // text가 아닌 객체를 만들어서 반환하게 함
  const newTodoObj = {
    text: newTodo, // todoInput.value값을 저장한 newTodo를 text에 저장해서 id와 같이 객체로 반환
    id: Date.now() // id를 랜덤으로 만들어준다.
  }
  // 5.todos(만들어진배열)에 input의 값이 저장된 newTodo를 push해서 넣어준다. 
  todos.push(newTodoObj)

  // newTodo에 저장된 input의 값을 paintTodo 함수에 인자로 넘겨준다.
  paintTodo(newTodoObj)

  // 7.todos의 값을 localStorage에 저장하는 함수
  saveTodos()
}

todoForm.addEventListener('submit', handleTodoSubmit)

const savedTodos = localStorage.getItem('TODOS_KEY')

if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  todos = parsedTodos
  parsedTodos.forEach(paintTodo)
}


