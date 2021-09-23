<template>
  <div class="col-md-3 py-3">
    <div class="card" style="">
      <img :src="posts.imgUrl" class="card-img-top img-style img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ posts.title }}
        </h5>
        <p class="card-text clip-text" id="read-more">
          {{ posts.body }}
        </p>
        <p class="selectable " @click.prevent="readMore()">
          Read more...
        </p>
        <i class="mdi mdi-close text-danger f-20 selectable" @click="deletePost()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

import { AppState } from '../AppState.js'
import { newsFeedService } from '../services/NewsFeedService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      readMore() {
        document.getElementById('read-more').classList.toggle('clip-text')
      },
      async deletePost() {
        try {
          await newsFeedService.deletePost(props.posts.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
.img-style{
  height: 400px;
  width: 450px;
}
</style>
