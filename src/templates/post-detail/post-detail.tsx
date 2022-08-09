import { MDXRemote } from 'next-mdx-remote'

import { PostTitle } from '../../components/post-title'

export const PostDetail = ({ post }) => (
  <div>
    <PostTitle
      title={post.frontmatter.title}
      subtitle={post.frontmatter?.subtitle}
    />
    <MDXRemote {...post.content} />
  </div>
)
