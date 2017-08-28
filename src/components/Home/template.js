var temp = `
<template>
  <div class="curd-form">
    <el-form ref="form" :model="table">
      <el-row :gutter="10">
        {{#if canKeySearch}}
        <el-col :span="6">
          <el-form-item :label="{{name}}">
            <el-input v-model="{{key}}"/>
          </el-form-item>
        </el-col>
        {{/if}}

        {{#each columns as |column index|}}
        {{#if column.canSearch}}
        <el-col :span="6">
          <el-form-item :label="{{column.name}}">
            {{#if column.canSearch}}
            <el-input v-model="{{column.key}}"/>
            {{/if}}
          </el-form-item>
        </el-col>
        {{/if}}
        {{/each}}
      </el-row>
    </el-form>
  </div>
  <div class="curd-table">
  </div>
</template>`

var scriptTemp = `
<script>
  export default {
    name: 'curd',
    data: {
      tableData: []
    },
    mounted() {
      console.log(this)
    },
    
  }
</script>
`

var template = `
${temp}

${scriptTemp}

<style lang='scss' scoped>

</style>
`

export default template
