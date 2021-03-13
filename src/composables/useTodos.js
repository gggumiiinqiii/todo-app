import { onMounted, ref } from '@vue/composition-api'
export default function useTodos() {
  const todos = ref([])
  const addTodo = (todo) =>todos.value.push(todo);
  const fetchTodos = async() =>{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    )
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo)=>({
      id:todo.id,
      content:todo.title,
      completed:todo.completed
    }));
  };
  // vue3的onmounted生命周期参数
  onMounted(()=>{
    fetchTodos();
  })
  return {
    todos,
    addTodo,
  }
}