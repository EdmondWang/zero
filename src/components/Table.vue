<template>
  <div class="module-wrapper">
    <h1>Table</h1>
    <div class="panel">
      <table>
        <tr>
          <th width="50%">Col1</th>
          <th width="50%">Col2</th>
        </tr>
        <tr>
          <td>
            <div class="cell-wrapper">
              I am gundam X, klotu
            </div>
          </td>
          <td>
            <div class="cell-wrapper">
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="cell-wrapper larger">
              I am gundam X, klotu.
            </div>
          </td>
          <td>
            <div class="cell-wrapper larger">
              I am gundam X, klotu.
            </div>
          </td>
        </tr>
      </table>
  
      <table class="table-report">
        <tr>
          <th>
          </th>
          <th>
          </th>
          <th>
          </th>
        </tr>
        <tr>
          <td>
          </td>
           <td>
          </td>
           <td>
          </td>
        </tr>
        <tr>
          <td>
          </td>
           <td>
          </td>
           <td>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
table {
  table-layout: fixed;
  width: 20rem;
}
.cell-wrapper {
  width: 4rem;
  min-height: 4rem;
  background: hsla(203, 100%, 75%, 1);
}

.cell-wrapper.larger {
  min-width: 8rem;
}

.table-report {
  
}
</style>
