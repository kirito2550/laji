<template>
  <div class="todo-header">
    <input type="text" placeholder="やることを入力して、enterキーで確認" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    // props:['addTodo'],
    methods: {
      add(e){
        // console.log(e.target.value);
        // 如果取不到数据，就中断 **********************************************
        if(!e.target.value) return
        const todoObj = {
          id:nanoid(),
          title:e.target.value,
          done:false
        }
        // console.log(this); 是Myheader的VC
        // this.addTodo(todoObj)
        this.$emit('addTodo',todoObj)
        // 发送后清除框中数据
        e.target.value = ''
      }
    }
}
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding:4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.8);
  }
</style>


