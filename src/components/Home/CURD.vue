<template>
  <div class="curd">
    <el-form ref="form" :model="tableForm">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item :label="config.name" v-if="config.canKeySearch">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="6" v-for="(column, index) in config.columns" :key="index" :label="column.name">
          <el-form-item :label="column.name" v-if="column.canSearch && column.type === 'string'">
            <el-input />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <pre>{{output}}</pre>
    </el-row>
  </div>
</template>

<script>
import template from './template'
import Handlebars from 'handlebars/dist/handlebars'

Handlebars.registerHelper('ifEqual', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this)
})

const { tableConfig, columnConfig } = app.constant
// const source = 

export default {
  name: 'Curd',
  props: {
    config: {
      type: Object,
      default: () => ({
        ...tableConfig,
        columns: [{ ...columnConfig }]
      })
    }
  },
  data: {
    tableForm: {}
  },
  computed: {
    canEdits() {
      return this.config.columns.find(column => column.canEdit)
    },
    output() {
      return Handlebars.compile(template)(this.config)
    }
  },
  mounted() {

  }
}
</script>

<style lang='scss' scoped>

</style>
