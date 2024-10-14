import React from 'react';


const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: "My First Blog Post",
            author: "Steve",
            date: "October 13, 2024",
            content: "This is the content of my first blog post. It's a great day to start blogging!"
        },
        {
            id: 2,
            title: "Another Day, Another Post",
            author: "Steve",
            date: "October 14, 2024",
            content: "Here's another blog post. Writing blogs is fun!"
        }
    ];

    return (
      
           
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1>My Blog</h1>
                <p>Welcome to my blog! Here are my latest posts:</p>
            </header>

            <main>
                {posts.map(post => (
                    <article key={post.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <h2>{post.title}</h2>
                        <p><small>By {post.author} on {post.date}</small></p>
                        <p>{post.content}</p>
                    </article>
                ))}
            </main>

            
        </div>
        
    );
}

export default BlogPage;
