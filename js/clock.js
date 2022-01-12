const clock = document.querySelector('h2.clock')

// function sayHello () {
//   console.log('Hello')
// }
// setInterval(sayHello, 5000) 5초 뒤에 sayHello 함수가 실행된다. 그후로 5초뒤에 sayHello 함수 계속 실행된다.
// setTimeout(sayHello, 5000) 5초 뒤에 한번실행

function getClock () {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,'0')
  const minutes = String(date.getMinutes()).padStart(2,'0')
  const seconds = String(date.getSeconds()).padStart(2,'0')
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000) 

