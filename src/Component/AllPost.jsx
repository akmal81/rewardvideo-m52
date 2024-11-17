import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const AllPost = () => {

    const posts = useLoaderData();
    

    return (
        <div className='grid grid-cols-4 gap-4 mt-6'>
           {posts.map((post, idx)=><Post key={idx} post={post}></Post>)}
        </div>
    );
};

export default AllPost;