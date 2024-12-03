import Card from "../Card/Card";
import posts from '../../posts.jsx';
import { useState } from "react";

const initialFormData = {
    title: '',
    image: '',
    content: '',
    category: '',
    tags: '',
    published: true
};

export default function Main() {

    const [formData, setFormData] = useState(initialFormData);
    const [newPost, setNewPost] = useState(posts);
    const [publishedPosts, setPublishedPosts] = useState(posts.filter((post) => post.published));

    function handleFormData(event) {
        console.log(event.target.name, event.target.value);

        const key = event.target.name;
        const value = event.target.value;

        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    function addPost(event) {
        event.preventDefault();

        const { title, image, content, category, tags: tagString, published } = formData;
        const newTags = tagString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

        if (title.trim() === '') return;

        const addedPost = {
            id: Date.now(),
            title,
            image: image || undefined,
            content: content || '',
            category,
            tags: newTags,
            published,
        };

        setPublishedPosts([...publishedPosts, addedPost]);
        setNewPost([...publishedPosts, addedPost]);
        setFormData(initialFormData)

        console.log('stai aggiungendo un nuovo post');
    }

    function deletePost(id) {
        setPublishedPosts(publishedPosts.filter(post => post.id !== id));
        setNewPost(publishedPosts.filter(post => post.id !== id));
    }


    return (
        <main>
            <section>
                <div className="container_sm">
                    <form onSubmit={addPost} className="form">
                        <h1 className="form_title">Aggiungi un nuovo Post</h1>
                        <input
                            className="formText"
                            name="title"
                            type="text"
                            placeholder="Inserisci il titolo del Post"
                            value={formData.title}
                            onChange={handleFormData}
                        />
                        <input
                            className="formText"
                            name="image"
                            type="text"
                            placeholder="Inserisci l'URL dell'immagine"
                            value={formData.image}
                            onChange={handleFormData}
                        />
                        <input
                            className="formText"
                            name="content"
                            type="text"
                            placeholder="Inserisci il contenuto del post"
                            value={formData.content}
                            onChange={handleFormData}
                        />
                        <select
                            className="formSelect"
                            name="category"
                            value={formData.category}
                            onChange={handleFormData}
                        >
                            <option value="">Seleziona una categoria</option>
                            <option value="Fiori">Fiori</option>
                            <option value="Piante">Piante</option>
                            <option value="Alberi">Alberi</option>
                        </select>
                        <input
                            className="formText"
                            name="tags"
                            type="text"
                            placeholder="Inserisci i tags separati da virgola"
                            value={formData.tags}
                            onChange={handleFormData}
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
    );
}