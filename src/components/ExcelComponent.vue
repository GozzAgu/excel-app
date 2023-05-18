<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>Import ExcelSheet</p>
    <button type="button" @click="open({ multiple: false})">Choose file</button>
  </div>

  <div>
    <p>Table</p> 
    <table class="guests min-w-full divide-y divide-gray-200 table-fixed dark:border-slate-500 border-2">
        <thead class="bg-slate-100 dark:bg-slate-500">
            <tr>
              <th scope="col">
                  Title
              </th>
              <th scope="col">
                  Category
              </th>
              <th scope="col">
                  Location
              </th>
            </tr>
        </thead>
        
        <tbody v-for="row in rows" :key="row" class="divide-y divide-gray-200">
            <tr>
              <td>{{ row.Title }}</td>
              <td>{{ row.Category }}</td>
              <td>{{ row.Location }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { readExcel } from '../composables/importExcel'

defineProps<{ msg: string }>();
const rows = ref<Array>([])

const { files, open } = useFileDialog();

watch(files, () => {
  const excelFile = files.value?.item(0);
  readExcel(excelFile!).then((res) => {
    if(res) {
      console.log(res)
      rows.value = res
    }
  })
})

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
