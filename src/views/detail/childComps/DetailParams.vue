<template>
  <div class="detail-params">
    <table>
      <tbody
        v-for="(item, index) in goodsParams.tables"
        :key="index"
      >
        <tr
          v-for="(item, indey) in item"
          :key="indey"
        >
          <td
            v-for="(item, indez) in item"
            :key="indez"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr
          v-for="(item, index) in goodsParams.set"
          :key="index"
        >
          <td>{{ item.key }}</td>
          <td class="params-desc">{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    goodsParams: {
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-params {
  padding: 10px 20px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.2);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

table tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  height: 30px;
  line-height: 30px;
}

table tr > td:first-child {
  width: 60px;
  text-align: center;
}

.params-desc {
  color: #ff5777;
}
</style>
