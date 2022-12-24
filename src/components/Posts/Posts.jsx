import React from "react";
import Post from "../Post/Post";

export const blogPosts = [
    {
        title: "JavaScript",
        body: `JavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developments`,
        description: "This is JavaScript",
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of 
  a stack. Consider an example of plates stacked 
  over one another in the canteen. The plate 
  which is at the top is the first one to be 
  removed, i.e. the plate which has been placed 
  at the bottommost position remains in the 
  stack for the longest period of time. So, it 
  can be simply seen to follow LIFO(Last In 
  First Out)/FILO(First In Last Out) order.`,
        description: "This is Data Structure",
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
        title: "Computer Network",
        body: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        description: "This is Computer Network",
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
        title: "Computer Network",
        body: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        description: "This is Computer Network",
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
        title: "Computer Network",
        body: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        description: "This is Computer Network",
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
        title: "Computer Network",
        body: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        description: "This is Computer Network",
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
]
const Posts = () => {
    return (
        <>
            {blogPosts.map((post) => (
                <div className="blogPosts">
                    <Post post={post} />
                </div>
            ))}
        </>
    )
}


export default Posts