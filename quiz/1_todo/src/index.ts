// 처음에 시작할 때 타입을 모르겠으면 any로 지정해준 후
// 진행하면서 구체적인 타입을 지정해주는 방법이 좋다
let todoItems: { id: number, title: string, done: boolean }[];

// api
function fetchTodoItems(): { id: number, title: string, done: boolean }[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(
  todo: { id: number, title: string, done: boolean }
  ): void { // return이 없는 함수에는 void로 지정해줌
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number, 
  todo: { id: number, title: string, done: boolean }
  ):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
  // return todoItems.filter(function(item) {
  //   if (item.done) {
  //     return item;
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = { 
    id: 4, 
    title: '아이템1 추가', 
    done: false 
  };
  addTodo(item1);
  addTodo({ 
    id: 5, 
    title: '아이템2 추가', 
    done: false 
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
