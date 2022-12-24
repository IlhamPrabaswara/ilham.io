import { Button } from "flowbite-react";
import React from "react";
import CardView from "../../components/CardView/CardView";

function Home() {
    return (
        <>
            <div className="w-2/3 mb-14">
                <h2 className="mb-10 text-6xl" style={{ fontFamily: 'Raleway', fontWeight: '600' }}>Hi! I'm <span style={{ color: "#0091EA" }}>Ilham</span>.</h2>
                <p className="text-xl mb-2.5">I started as a visual designer, but now I do a mix of everything from media production to running e-commerce stores.</p>
                <p className="text-xl mb-8">I also like to invest in and provide design advice to startups.</p>
                <Button>Know Me More -{`>`}</Button>
            </div>
            <h3 className="mb-14">Blog</h3>
            <CardView />
        </>
    )
}

export default Home;