<template>
  <el-table
    v-loading="loading"
    :data="data"
    border
    ref="baseTable"
    :height="height"
    @selection-change="handleSelectionChange"
    header-row-class-name="tableHead"
    :stripe="false || stripe"
    :header-cell-style="{background:'#F2F7FA'}"
    :cell-style="rowClass"
    :row-class-name="RowClassName"
  >
    <el-table-column
      v-for="item in columns"
      :key="item.key"
      :prop="item.key"
      :column-key="item.prop"
      :label="item.label"
      :width="item.width || ''"
      :fixed="item.fixed || ''"
      :align="item.align || 'center'"
      :type="item.type || ''"
      :formatter="item.render"
      :warning="item.warning"
      :show-overflow-tooltip="unrealisticPrompt"
    >
      <template slot-scope="scope">
        <span v-if="item.type === 'button'">
          <span v-for="btn in item.buttons" :key="btn.text" class="operation-btn">
            <tip-button
              style="margin-left:10px"
              @click="btn.click(scope.row, scope.$index)"
              v-if="btn.type === 'tipButton'"
              v-show="!btn.show || btn.show(scope.row) !== false"
              :disabled="typeof btn.disabled === 'function' ? btn.disabled(scope.row) : btn.disabled"
            >{{btn.text}}</tip-button>
            <tip-button
              @click="btn.click(scope.row, scope.$index)"
              v-else-if="btn.type === 'normalButton'"
              v-show="!btn.show || btn.show(scope.row) !== false"
              :disabled="typeof btn.disabled === 'function' ? btn.disabled(scope.row) : btn.disabled"
            >{{btn.text}}</tip-button>
            <el-button
              v-else
              :type="btn.typeRender ? btn.typeRender(scope.row) : btn.type"
              size="mini"
              @click="btn.click(scope.row, scope.$index)"
              v-html="btn.render ? btn.render(scope.row, scope) : btn.text"
              :disabled="typeof btn.disabled === 'function' ? btn.disabled(scope.row) : btn.disabled"
            >{{btn.text}}</el-button>
          </span>
        </span>
        <span v-else-if="item.type === 'centerSwitch'">
          <center-switch
            :needTip="item.needTip"
            :activeText="item.activeText"
            :inactiveText="item.inactiveText"
            @confirmHandler="item.click(scope.row, scope.$index)"
            :value="scope.row[item.value]"
            :activeTip="item.activeTip"
            :inactiveTip="item.inactiveTip"
            :disable="item.render ? item.render(scope.row) : item.disable"
            :inactiveColor="item.inactiveColor"
          ></center-switch>
        </span>
         <!-- 基础配置 {
           key:"mockStatus",
           label:"测试状态",
           width:80,
           type: 'centerSwitch',
           value: 'mockStatus',
           activeText: '关闭',
           inactiveText: '开启',
           click: self.enableHandler
         } -->
        <span
          v-else
          v-html="item.render ? item.render(scope.row, scope.column ,scope.row[item.key], scope) : scope.row[item.key]"
        ></span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "a-table",
  props: {
    data: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
    columns: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
    height: {
      type: [String, Number],
    },
    stripe: {
      type: [Boolean],
    },
    loading: {
      type: [Boolean],
    },
    unrealisticPrompt: {
      type: [Boolean],
      default:false // 溢出隐藏提示
    },
  },
  data() {
    return {};
  },
  methods: {
    rowClass() {
      return "background:#F2F7FA;";
    },
    // 监听多选按钮切换
    handleSelectionChange(e) {
      console.log(e);
    },
    //
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.baseTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.baseTable.clearSelection();
      }
    },
    // 给每一行添加索引
    RowClassName({ row, rowIndex }) {
      row.index = rowIndex + 1;
    },
  },
};
</script>

<style scoped lang="scss">
</style>