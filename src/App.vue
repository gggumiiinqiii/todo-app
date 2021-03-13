<template>
  <main>
    <div class="container">
      <h1>欢迎使用 GU 待办事项！</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo"></TodoAdd>
      <TodoFilter :selected="filter" @change-filter="filter = $event"></TodoFilter>
      <TodoList :todos="filterTods"></TodoList>
    </div>
  </main>
</template>

<script>
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import useTodos from "./composables/useTodos.js"
import useFilteredTodos from "./composables/useFilteredTodos.js"
export default {
  name: 'App',
  components:{
    TodoAdd,
    TodoFilter,
    TodoList
  },
  setup() {
    const {todos,addTodo} = useTodos();
    const {filter,filterTods} = useFilteredTodos(todos);
    return {
      todos,
      addTodo,
      filter,
      filterTods,
    }
  }
}
</script>

<style>
* {
  /* 盒子模型的宽度就是padding+border+width */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* 英文/中文/微软 */
  font-family: Helvetica,"PingFang SC","Microsft Yahei",sans-serif;
}
/*整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203,210,240);
}
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0,0,0,0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245,246,252);
}
/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
  text-align: center;
}
</style>
