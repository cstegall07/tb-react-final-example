import  BlogArticle  from './BlogArticle';

const Blogs = () => {

    const blogArticles = [
        {id: 1, title: "A title 1", author: "An author 1", article: "An article 1"},
        {id: 2, title: "A title 2", author: "An author 2", article: "An article 2"}
    ];

    return (
    <>
        <h1>Blog Articles</h1>
        {blogArticles.map((blogPost) => <BlogArticle key={blogPost.id} post = {blogPost}/> )}
    </>
    )
  };
  
  export default Blogs;