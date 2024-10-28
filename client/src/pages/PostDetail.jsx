import React from "react";
import PostAuthor from '../components/PostAuthor'
import { Link } from "react-router-dom";
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {

    return (
        <section className="post_detail">
            <p className="error"></p>
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor />
                   <div className="post-detail_buttons">
                        <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
                        <Link to={`/posts/werwer/edit`} className="btn sm primary">Delet</Link>
                    </div> 
                </div>
                <h1>This is the post title!</h1>
                <div className="post-detail_thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ullam molestias atque, itaque labore culpa sit, non quam aspernatur perferendis reiciendis iure numquam quas! Non nulla eos natus ad? Id aut dolor deserunt dicta earum ullam ratione exercitationem quia magni odio officiis sapiente dignissimos quod eos magnam ut consequatur saepe reiciendis corporis, eveniet tempora, dolore, doloribus veniam sunt. Veniam eum modi deleniti aspernatur, nesciunt cum repellendus a nobis quibusdam optio eaque labore. Voluptatum eius commodi alias quisquam ipsum eaque culpa nesciunt quaerat quo optio eos quis maxime magnam, officiis molestiae! Laudantium vero assumenda quibusdam voluptatibus consequuntur minus illum earum sit nostrum asperiores quos voluptatum quia amet nihil eius magni ipsam quisquam, quaerat officia dolorem numquam officiis molestiae ad est. Molestiae quaerat illo consequuntur asperiores doloremque perspiciatis maiores obcaecati aut autem sequi nobis deserunt magni nisi quam laudantium maxime itaque ab provident, non amet in totam voluptatum tempora. Id nulla ea doloribus nam eum, accusamus labore animi ab quia vitae ducimus esse nesciunt expedita rerum architecto sequi impedit laborum! Nesciunt quidem dolore eligendi nulla rerum, dicta nihil ducimus veniam sunt debitis, odio, quam provident tempora facilis exercitationem quo eveniet sed aliquid tenetur repellendus sapiente unde deleniti. Nulla consectetur aut repellat nisi.

        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta odio quia beatae fugit laborum esse, fugiat ipsam unde inventore delectus recusandae fuga quam aliquid quod placeat, ab eos! Est perspiciatis enim, quia reiciendis maiores totam modi tempore exercitationem veniam alias illo commodi porro eveniet qui laudantium esse sapiente quis nostrum? Voluptas fugiat quasi perferendis quae vel deserunt praesentium, ab eveniet officia architecto, illum labore in impedit. Ipsam dolore necessitatibus atque voluptatum suscipit harum doloribus obcaecati, iure quo quos sed earum voluptas, nemo nihil minima porro molestiae dicta facilis aperiam. Maiores, magnam? Aperiam quos nisi, veniam quibusdam cum aspernatur totam amet dolore mollitia sed molestiae voluptate ullam illo aut recusandae quae soluta praesentium! Nisi ducimus mollitia ab quod sint, deleniti doloremque velit et nihil fugiat laudantium voluptates nam modi quis quibusdam ratione vero labore voluptatum. Exercitationem voluptas, nihil aliquam ut praesentium nemo deserunt veniam vel assumenda! Amet possimus architecto earum vitae cumque quo a voluptatum incidunt dolores molestias quibusdam laboriosam illum eos porro corrupti beatae doloribus fuga, natus voluptatibus nulla dolore consectetur odio, adipisci inventore. Maxime ea deleniti quidem tenetur a nobis. A est necessitatibus ad assumenda earum modi porro, doloremque iste ratione soluta quasi totam et quisquam veritatis alias consequatur, odio cupiditate molestiae, atque vero voluptatem. Possimus praesentium nisi voluptas amet totam excepturi quis aliquam! Mollitia cum odio eos quis aspernatur eum laboriosam repellendus enim, vitae similique nesciunt sapiente dicta libero doloremque minus sequi saepe necessitatibus voluptatibus dolorum, et voluptas. Distinctio reprehenderit corporis laudantium nemo, illum excepturi odit quaerat quam placeat similique. Neque vitae incidunt quas numquam aspernatur pariatur distinctio, esse odit nobis excepturi? Praesentium quis ipsam, error consequatur sapiente laudantium aut ipsa. Atque, repellat voluptatem! Possimus ex maxime tempora consequatur autem facilis, ab pariatur, cumque et quasi dicta sint culpa. Provident quos aliquam modi sit non! Iure dolore ipsam cum quod autem, maxime porro tempore quam, cumque accusamus nihil. At, voluptatum nostrum aliquid exercitationem, iusto doloribus nam assumenda veniam atque pariatur totam. Culpa rem ullam error velit, temporibus nihil impedit sequi nostrum. Labore distinctio tempore molestias quos dignissimos excepturi, odio aliquam eius cupiditate quae aperiam nam, tenetur ducimus illo unde ut harum porro iusto, hic molestiae iste perferendis. Inventore sint ex non enim adipisci accusantium voluptates sed quo facere dignissimos animi reprehenderit ipsum rem, voluptatibus fugiat beatae ullam, dolor error eveniet assumenda. Itaque libero sunt dicta tempore quaerat natus minus ullam earum neque, debitis quas expedita repellendus ut! Velit perspiciatis iusto ea ex doloremque necessitatibus quaerat. Sit, minus voluptate enim odit impedit sapiente alias, aperiam ducimus maxime corporis id. Est, velit odio ipsum non veritatis repudiandae cum, magnam optio omnis, aut veniam? Temporibus voluptatum nemo, quos consequatur dolores quam repellat facere adipisci officia voluptas ducimus autem, minus cum laborum consequuntur incidunt saepe placeat distinctio aperiam ab aliquam omnis ipsam ut natus. Officiis nihil minus nulla! Esse laboriosam hic sint omnis, excepturi maiores distinctio fugit minima repellendus cumque enim laudantium, nihil tempora dicta! Modi, distinctio minima doloribus nesciunt asperiores esse, architecto nostrum saepe sequi dolorem natus deserunt quidem quasi.
        </p>
            </div>
        </section>
    )
}

export default PostDetail

