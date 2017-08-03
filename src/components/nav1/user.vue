<template>

  <div>
    <template>
      <div>333</div>
      <div>555</div>
    </template>


    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters" style="text-align: left">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <template>
      <el-table :data="users" style="width: 100%" v-loading="loading" highlight-current-row>
        <el-table-column type="selection" sortable align="center">
        </el-table-column>
        <el-table-column type="index" width="60" sortable align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100" sortable align="center">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" sortable :formatter="formatSex" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable align="center">
        </el-table-column>
        <el-table-column prop="birth" label="出生日期" width="120" sortable align="center">
        </el-table-column>
        <el-table-column prop="addr" label="地址" sortable width="280" align="center">
        </el-table-column>
      </el-table>
    </template>
  </div>

</template>

<script type="text/ecmascript-6">

  import {getUserList} from '../../api/api';

  export default{
    data() {
      return {
        filters: {
          name: ''
        },
        loading: false,
        users: []
      };
    },
    methods: {
      // 性别转换显示
      formatSex(row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知';
      },

      // 获取用户列表 查询也是调用此函数
      getUsers() {
        let para = {
          name: this.filters.name
        };
        console.log('------');
        console.log(para);
        this.listLoading = true;
//        alert(9);
        getUserList(para).then((res) => {
          this.users = res.data.users;
          this.listLoading = false;

          console.log(33333333);
          console.log(res.data.users);
          console.log(this.users);
        });
      }
    },
    mounted() {
      this.getUsers();
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
