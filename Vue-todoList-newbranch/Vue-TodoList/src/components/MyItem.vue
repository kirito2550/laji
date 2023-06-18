<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input ref="inputTitle" class="ip1" v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" @keyup.enter="handleBlur(todo,$event)">
    </label>
    <button  class="btn btn-danger" @click="handleDelete(todo.id)">削除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo,$event)">編集</button>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    props:[
      "todo",
    ],
    methods: {
      // 勾选，取消勾选
      handleCheck(idd){
        // 通知APP组件将对应的todo对象的done值取反
        // this.checkTodo(idd)
        this.$bus.$emit('checkTodo',idd)
      },
      handleDelete(id){
        if(confirm('削除しますか')){
          // this.deleteTodo(id)
          this.$bus.$emit('deleteTodo',id)
        }
      }, 
      // 编辑
      handleEdit(todo,e){
        // todo.isEdit = true
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo,"isEdit",true)
        }
        
        setTimeout(() => {
          this.$refs.inputTitle.focus()
        });
      },

      handleBlur(todo,e){
        this.$set(todo,"isEdit",false)
        this.$bus.$emit('updateTodo',todo.id,e.target.value)
        console.log(e);
      },
        
      }, 
      
      
    
}
</script>

<style lang="css" scoped>
  li {
    list-style:none;
    height:42px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float:left;
    cursor:pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content:initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }

  .ip1 {
    height: 30px;
  }

</style>


