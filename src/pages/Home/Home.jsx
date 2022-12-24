import { Button } from "flowbite-react";
import React from "react";
import CardView from "../../components/CardView/CardView";

function Home() {
    return (
        <>
            <div className="w-2/3 mb-14">
                <h2 className="mb-10 text-6xl" style={{ fontFamily: 'Raleway', fontWeight: '600' }}>Hi! I'm <span style={{ color: "#0091EA" }}>Ilham</span>.</h2>
                <p className="text-xl mb-2.5">I’m a Full-Stack Developer with 6+ years of the overall experience. Particularly strong in web applications and mostly working on frontend development.</p>
                <p className="text-xl mb-8">Technology that I use for frontend development is Vue.js, Nuxt.js, Node.js, and any modern CSS framework & UI component.</p>
                <Button>Know Me More -{`>`}</Button>
            </div>
            <h3 className="mb-14">Blog</h3>
            <CardView />
        </>
    )
}

export default Home;