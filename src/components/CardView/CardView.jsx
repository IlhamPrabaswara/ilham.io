import React from "react";
import { Button, Card } from "flowbite-react";
import { blogPosts } from "../../components/Posts/Posts";

const CardView = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                blogPosts.map((post) => (
                    <Card
                        className='bg-neutral-900 border-gray-500 mb-10'
                        imgSrc="https://images.unsplash.com/photo-1671855791689-65685e03ba9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
                        <h5 className="text-2xl font-bold tracking-tight text-neutral-300">
                            {post.title}
                        </h5>
                        <p className="font-normal text-neutral-400">
                            {post.body}
                        </p>
                        <Button>
                            Read more
                            <svg
                                className="ml-2 -mr-1 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </Card >
                ))
            }
        </div>
    )
}

export default CardView