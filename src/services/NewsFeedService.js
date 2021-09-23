import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Post } from '../models/Post.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Query'

class NewsFeedService {
  async getPosts(query = {}) {
    AppState.posts = []
    const res = await api.get('api/blogs' + convertToQuery(query))
    AppState.posts = res.data.map(p => new Post(p))
  }

  async createPost(newPost) {
    const res = await api.post('api/blogs', newPost)
    logger.log(res)
    AppState.posts.unshift(new Post(res.data))
  }

  async deletePost(postId) {
    const res = await api.delete('api/blogs/' + postId)
    logger.log('delete res', res)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
  }
}

export const newsFeedService = new NewsFeedService()
