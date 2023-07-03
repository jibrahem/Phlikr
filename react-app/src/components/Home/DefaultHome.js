import { useEffect, useState } from 'react'
import './Home.css'


export default function DefaultHome() {
    // let currentBGI = 0;
    const [currentBGI, setCurrentBGI] = useState(0)

    const backGroundInfo = [
        {
            url: "https://i.natgeofe.com/n/cfa19a0d-eff0-4628-8fdd-2ad8d66845dd/mountain-range-appenzell-switzerland.jpg",
            title:"Picture1",
            author:"author1"
        },
        {
            url: "https://wallpaperaccess.com/full/2749339.jpg",
            title:"Picture2",
            author:"author2"
        },
        {
            url: "https://w0.peakpx.com/wallpaper/165/918/HD-wallpaper-mountain-view-rocks-pretty-glow-shine-beautiful-sunset-mountain-nice-cliffs-sunrise-amazing-lovely-view-sky-paradise-rays-slope-nature.jpg",
            title:"Picture3",
            author:"author3"
        }
    ]

    useEffect(() => {
        console.log("interval starts here")
        const intervalId = setInterval(() => {
            console.log("Inside the interval function")
            if (currentBGI < 3) setCurrentBGI((prev) => (prev  + 1) % 3)
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
        <h1>Find your inspiration.</h1>
        <h3>Join the Snapr community, home to tens of billions of photos and 2 million groups.</h3>
        <button>
            Start for free 
        </button>
        <img src={backGroundInfo[currentBGI].url} />
        <p>{backGroundInfo[currentBGI].title}</p>
        <p>{backGroundInfo[currentBGI].author}</p>
        </>
    )
    
}


