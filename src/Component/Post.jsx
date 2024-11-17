import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id,title, body}=post;
    
    return (
        <div className="p-4 border flex flex-col">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="flex-grow">{body}</p>
            <button className="py-2 bg-slate-200 px-4 mt-6">
                <Link to={`/postdetails/${id}`}>
                Details
                </Link>
                </button>
        </div>
    );
};

export default Post;