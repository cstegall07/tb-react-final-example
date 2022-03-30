const BlogArticle = ({post}) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <h3>submitted by: {post.author}</h3>
            <p>{post.article}</p>
        </article>
    )
}

export default BlogArticle;