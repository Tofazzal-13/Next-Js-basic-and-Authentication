const posts = [
    {
        id: 1,
        title: "First Post",
        description: "asdfdfdfds"
    },
    {
        id: 2,
        title: "Second Post",
        description: "asdfdfdfds"
    },
    {
        id: 3,
        title: "Third Post",
        description: "asdfdfdfds"
    },

]


export const addPosts = (newPost) => {
    posts.push(newPost)
    
    
}

export const getPosts = () =>{
    return posts
}