<template>
  <div class="col-md-3 py-3">
    <div class="card" style="">
      <img :src="posts.imgUrl" class="card-img-top img-style" alt="...">
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
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <Modal :id="'post-modal-' + posts.id">
    <template #modal-title>
      {{ posts.title }}
    </template>
    <template #modal-body>
      {{ posts.imgUrl }}
      {{ posts.body }}
    </template>
  </Modal>
</template>

<script>
import { computed } from '@vue/runtime-core'

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
      account: computed(() => AppState.account),
      readMore() {
        document.getElementById('read-more').classList.toggle('clip-text')
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
