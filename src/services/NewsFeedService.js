class NewsFeedService {
  async getPosts() {
    const res = await api.get('api/blogs')
    AppState.posts = res.data.map(p => new Post(p))
  }
}

export const newsFeedService = new NewsFeedService()