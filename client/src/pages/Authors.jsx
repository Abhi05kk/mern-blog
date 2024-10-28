import React, { useState } from "react";
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from "react-router-dom";


const authorsData = [
    {id: 1, avatar: Avatar1, name: 'Sara Dein', posts:3},
    {id: 2, avatar: Avatar2, name: 'Den Thomson', posts:3},
    {id: 3, avatar: Avatar3, name: 'James Lee', posts:3},
    {id: 4, avatar: Avatar4, name: 'Sufiya Jas', posts:3},
    {id: 5, avatar: Avatar5, name: 'Mariya Tom', posts:3},
]

const Authors =() => {
    const [authors, setAuthors] = useState(authorsData)
    return (
       <section className="authors">
        {authors.length > 0 ? <div className="container authors_container">
        {
            authors.map(({id, avatar, name, posts}) => {
                return  <Link key={id} to={`/posts/users/${id}`} className="author">
                    <div className="author_avatar">
                        <img src={avatar} alt={`Image of ${name}`} />
                    </div>
                    <div className="author_info">
                        <h4>{name}</h4>
                        <p>{posts}</p>
                    </div>
                </Link>
            })
        }
        </div > : <h2 className="center">No usres/authors found</h2>}
       </section>
    )
}

export default Authors