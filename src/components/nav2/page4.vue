<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ getCount }} times
    <el-button @click="increment">+</el-button>
    <el-button @click="decrement">-</el-button>
  </div>
</template>

<script type="text/ecmascript-6">

  import {mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'getCount'
        // ...
      ])
    },
    methods: {
      ...mapActions([
        'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'decrement'
      ])
      //...mapActions({
      //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      //})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
