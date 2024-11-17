
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookmarkContext } from "../provider/BookmarkProvider";


const PostDetails = () => {

    const { id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    //  const post = useLoaderData();
    const { title, body } = post;

    const { setBookmark } = useContext(BookmarkContext);

    const handleAddToBookMarks = post => {
        setBookmark(prev => [...prev, post])
    }

    return (
        <div className="my-32">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="">{body}</p>

            <button onClick={() => handleAddToBookMarks(post)} className="py-2 bg-slate-200 px-4 mt-6">Add to Bookmark</button>
        </div>
    );
};

export default PostDetails;