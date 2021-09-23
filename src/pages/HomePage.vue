<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <NewsFeed v-for="p in projects" :key="p.id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">

</style>
