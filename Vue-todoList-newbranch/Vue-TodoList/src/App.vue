<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <MyHeader :addTodo='addTodo'/> -->
        <MyHeader @addTodo='addTodo'/>
        <MyList :todos='todos'/>
        <MyFooter :todos="todos" 
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // 勾选或取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done
        }
      })
    },
    // 删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    // 全选or全不选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    // 删除选中的
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
  watch: {
    todos:{
      deep:true,
      handler(newValue){
        localStorage.setItem('todos',JSON.stringify(newValue))
      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
  }
}
</script>

<style>
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0,0, 0.5);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover{
    color:#fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline:none;
  }
  
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius:5px;
  }
</style>