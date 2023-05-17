<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>Import ExcelSheet</p>
    <button type="button" @click="open({ multiple: false})">Choose file</button>
  </div>

  <div class="card">
    <button type="button" @click="count++"> count is {{ count }} </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { readExcel } from '../composables/importExcel'

defineProps<{ msg: string }>();

const count = ref(0);

const { files, open } = useFileDialog();

watch(files, () => {
  console.log(files.value);
  const excelFile = files.value?.item(0);
  readExcel(excelFile!).then((res) => {
    console.log(res)
  })
  console.log(excelFile)
})

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
