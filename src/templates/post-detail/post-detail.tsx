import { PostTitle } from '../../components/post-title'

export const PostDetail = ({ post }) => (
  <PostTitle
    title={post.frontmatter.title}
    subtitle={post.frontmatter?.subtitle}
  />
)
