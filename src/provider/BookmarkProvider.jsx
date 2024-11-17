import { createContext, useState } from "react";

export const BookmarkContext = createContext(null);

const BookmarkProvider = ({children}) => {

    const [bookmark, setBookmark] = useState([]);

    const info = {
        bookmark,
        setBookmark
    }
    console.log(bookmark);
    return (
        <BookmarkContext.Provider value={ info }>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkProvider;