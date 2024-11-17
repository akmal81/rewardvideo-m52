import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../provider/BookmarkProvider";


const Navbar = () => {

    const {bookmark} = useContext(BookmarkContext);
    return (
        <section className="flex justify-around bg-slate-300 py-6">
            <div>
                <h1>Logo</h1>
            </div>

            <nav className="flex gap-5">
                <Link className="font-semibold">Home</Link>
                <Link to='/contactabout/contact/true' className="font-semibold">Contact</Link>
                <Link to='/contactabout/about' className="font-semibold">About</Link>
            </nav>
            <div>
                <p>Bookmark
                    <span className="ml-4">

                    {
                        bookmark.length
                    }
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Navbar;