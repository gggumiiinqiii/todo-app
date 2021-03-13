<template>
  <div class="todo-list" >
    <TodoListItem 
    v-for="todo in todos" 
    :key="todo.id"
    :todoItem="todo"
    @change-state="todo.completed = $event.target.checked"
    ></TodoListItem>
  </div>
</template>
<script>
import TodoListItem from './TodoLIstItem'
export default {
  name:'TodoList',
  components:{
    TodoListItem
  },
  props:["todos"]
}
</script>
<style scoped>
.todo-list {
  display: grid;
  /*行与行的间隔高度 */
  row-gap: 14px;
}
</style>