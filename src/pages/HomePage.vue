<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <NewsFeed v-for="p in posts" :key="p.id" :posts="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { newsFeedService } from '../services/NewsFeedService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await newsFeedService.getPosts()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
