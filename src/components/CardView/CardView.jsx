import React from "react";
import { Button, Card } from "flowbite-react";
import { blogPosts } from "../../components/Posts/Posts";
import './CardView.css'
import { Link } from "react-router-dom";

const CardView = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                blogPosts.slice(0,3).map((post) => (
                    <Card
                        className='blog-card border-gray-500 mb-5 border-neutral-800 bg-transparent'
                        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                        <h5 className="text-2xl font-bold tracking-tight text-neutral-300">
                            {post.title}
                        </h5>
                        <p className="font-normal text-neutral-400">
                            {post.description}
                        </p>
                        <Button>
                            <Link className="m-0 p-0">Read More -{">"}</Link>
                        </Button>
                    </Card >
                ))
            }
        </div>
    )
}

export default CardView