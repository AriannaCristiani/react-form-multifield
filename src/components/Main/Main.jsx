import Card from "../Card/Card"
import posts from '../../posts.jsx'
import Tags from '../Tags/Tags.jsx'
import { useState } from "react"

export default function Main() {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        category: '',
        tags: '',
        published: true
    });

    //const [title, setTitle] = useState('')

    const [newPost, setNewPost] = useState(posts)
    const [publishedPosts, setPublishedPosts] = useState(posts.filter((post) => post.published))
    const tags = []

    function addPost(event) {
        event.preventDefault()

        const newTitle = title.trim()

        if (newTitle === '') return

        const addedPost = {
            id: Date.now(),
            title: newTitle,
            image: undefined,
            content: 'new post content',
            tags: [],
            published: true,
        }

        setPublishedPosts([...publishedPosts, addedPost])
        setTitle('')
        console.log('stai aggiungendo un nuovo post')
    }

    function deletePost(id) {
        setPublishedPosts(publishedPosts.filter(post => post.id !== id))
    }

    newPost.forEach(post => {
        const postTags = post.tags
        postTags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })

    return (
        <main>
            <section>
                <div className="container list">
                    <Tags tags={tags} />
                </div>
                <div className="container">
                    <form onSubmit={addPost} className="form" action="">
                        <input
                            className="formText"
                            type="text"
                            placeholder="Inserisci il titolo del Post"
                            value={formData.title}
                        />
                        <input className="formBtn" type="submit" value={'INVIA'} />
                    </form>
                </div>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col">
                                <Card post={post} onDelete={deletePost} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}