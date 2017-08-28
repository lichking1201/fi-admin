<template>
  <div class="home">
    <h3>表配置</h3>
    <div class="form-line">
      <el-form ref="form" :model="config" label-width="100px">
        <el-form-item label="远端api">
          <el-input v-model="config.api" />
        </el-form-item>
        <el-form-item label="主键">
          <el-col :span="3">
            <el-input v-model="config.key" />
          </el-col>
          <el-col :span="8">
            <el-form-item label="主键描述">
              <el-input v-model="config.name" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="显示主键">
          <el-switch v-model="config.showKey" />
        </el-form-item>
        <el-form-item label="主键搜索">
          <el-switch v-model="config.canKeySearch" />
        </el-form-item>
        <el-form-item label="支持创建行">
          <el-switch v-model="config.canCreate" />
        </el-form-item>
        <el-form-item label="支持删除行">
          <el-switch v-model="config.canDelete" />
        </el-form-item>
        <el-form-item label="分页">
          <el-radio-group v-model="config.paging">
            <el-radio :label="0">不支持分页</el-radio>
            <el-radio :label="1">前端分页</el-radio>
            <el-radio :label="2">后端分页</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <h3>列设置</h3>
    <div class="form-line" v-for="(column, index) in config.columns" :key="index">
      <h4>
        <span>第{{index + 1}}列</span>
        <el-button type="danger" size="mini" @click="removeColumn(index)" v-show="config.columns.length > 1">
          <i class="fa fa-minus-circle"></i>
        </el-button>
      </h4>
      <el-form ref="form" :model="column" label-width="100px">
        <el-form-item label="键名">
          <el-col :span="3">
            <el-input v-model="column.key" />
          </el-col>
          <el-col :span="8">
            <el-form-item label="描述">
              <el-input v-model="column.name" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="值类型">
          <el-select v-model="column.type">
            <el-option v-for="opt in $getConst('colunmTypeOptions')" :key="opt.value" :label="opt.label" :value="opt.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支持排序">
          <el-radio-group v-model="column.order">
            <el-radio :label="0">不支持</el-radio>
            <el-radio :label="1">前端排序</el-radio>
            <el-radio :label="2">后端排序</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="支持编辑">
          <el-switch v-model="column.canEdit" />
        </el-form-item>
        <el-form-item label="支持搜索">
          <el-switch v-model="column.canSearch" />
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button type="success" @click="addColumn">
        添加
        <i class="fa fa-plus-circle"></i>
      </el-button>
    </div>
    <curd-demo :config="config" />
  </div>
</template>

<script>
import CURD from 'src/components/Home/CURD'
const { tableConfig, columnConfig } = app.constant

export default {
  name: 'Home',
  components: {
    'curd-demo': CURD
  },
  data: () => ({
    config: {
      ...tableConfig,
      columns: [{ ...columnConfig }]
    }
  }),
  methods: {
    addColumn() {
      this.config.columns.push({ ...columnConfig })
    },
    removeColumn(index) {
      this.config.columns.splice(index, 1)
    }
  }
}
</script>

<style lang='scss' scoped>
.form-line {
  width: 60%
}
</style>
