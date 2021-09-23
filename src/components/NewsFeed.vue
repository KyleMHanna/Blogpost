<template>
  <div class="card" style="width: 18rem;">
    <img :src="posts.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
        {{ posts.title }}
      </h5>
      <p class="card-text text-clip">
        {{ posts.body }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Post } from '../Models/Post.js'
import { AppState } from '../AppState.js'
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account)

    }
  }
}
</script>

<style>

</style>
