import { Button, Toast } from "flowbite-react";
import React from "react";
import CardView from "../../components/CardView/CardView";

function Home() {
    return (
        <>
            <div className="sm:w-3/3 xl:w-2/3 mb-14">
                <h2 className="mb-10 text-6xl" style={{ fontFamily: 'Raleway', fontWeight: '600' }}>Hi! I'm <span style={{ color: "#0091EA" }}>Ilham</span>.</h2>
                <p className="text-xl mb-2.5">I started as a visual designer, but now I do a mix of everything from media production to running e-commerce stores.</p>
                <p className="text-xl mb-8">I also like to invest in and provide design advice to startups.</p>
                <Button>Know Me More -{`>`}</Button>
            </div>
            <h3 className="mb-14">Blog</h3>
            <CardView />
            <Toast className="fixed bottom-0 left-0 right-0 mx-auto mb-7 lg:max-w-lg md:max-w-md">
                <svg class="flex-shrink-0 w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div className="ml-3 text-sm font-normal">
                    This website is still under development, you will encounter dead links or blank pages. Visit regularly to see the progress..
                </div>
                <Toast.Toggle />
            </Toast>
        </>
    )
}

export default Home;