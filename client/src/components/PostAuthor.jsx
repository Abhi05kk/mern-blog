import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



const PostAuthor =({authorID, creatadAt}) => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`)
                setAuthor(response?.data);
            } catch (error) {
                console.log(error)
            }
        }
        getAuthor();
    }, [])


     return (
         <Link to={`/posts/users/sdfsdf`} className="post_author">
             <div className="post_author-avatar">
                 <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${author?.avatar}`} alt="" />
             </div>
            <div className="post_auhtor-deatils">
                 <h5>{author?.name}</h5>
                 <small>just now</small>
             </div>
         </Link>
     )
 }

export default PostAuthor