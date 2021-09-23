export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.creator = data.creator || {}
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.body = data.body
    this.title = data.title
    this.published = data.published
  }
}
