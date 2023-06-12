<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
    </label>
    <span>
      <span>完成数{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">
      完成したことをクリア
    </button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    // data() {
    //     return {
    //         name:'通锦中学',
    //         address:'成都'
    //     }
    // },
    props:[
      "todos",
      "checkAllTodo",
      "clearAllTodo"
    ],
    computed:{
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        }
      },
      total:{
        get(){
          return this.todos.length
        }
      },
      doneTotal:{
        get(){
          let i = 0;
          this.todos.forEach(element => {
            if(element.done){
              i++;
            }
          });
          return i
        }
      }
    },
    methods: {
      checkAll(e){
        this.checkAllTodo(e.target.checked)
      },
      clearAll(){
        if(confirm('削除しますか')){
          this.clearAllTodo()
        }
      }
    }
}
</script>

<style lang="css">
   .todo-footer {
    height:40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
   }

   .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
   }

   .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
   }

   .todo-footer button {
    float: right;
    margin-top: 5px;
   }
</style>


