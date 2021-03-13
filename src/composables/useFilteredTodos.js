import {ref,computed} from '@vue/composition-api'
export default function useFilterTodos(todos) {
  const filter = ref("all")
  const filterTods = computed(()=>{
    switch(filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo)=>!todo.completed);
      default:
        return todos.value
    }
  })

  return {
    filter,
    filterTods,
  }
}