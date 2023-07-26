import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
import { Link } from 'react-router-dom';

export default function DefaultHome() {
    const history = useHistory();
    // let currentBGI = 0;
    const [currentBGI, setCurrentBGI] = useState(0)

    const backGroundInfo = [
        { 
            url: "https://free4kwallpapers.com/uploads/originals/2019/07/14/ultra-hd-ocean-s-wallpaper.jpg",
            title:"Cowabunga!",
            author:"Peter Clark"
        },
        {
            url: "https://wallpaperaccess.com/full/32822.jpg",
            title:"There's nothing like home.",
            author:"Michael Anderson"
        },
        {
            url: "https://wallpaperaccess.com/full/222577.jpg",
            title:"Release your inner self.",
            author:"Sean Nguyen"
        }
      //   {
      //     url: "https://i.natgeofe.com/n/cfa19a0d-eff0-4628-8fdd-2ad8d66845dd/mountain-range-appenzell-switzerland.jpg",
      //     title:"Picture1",
      //     author:"author1"
      // },
      // {
      //     url: "https://wallpaperaccess.com/full/2749339.jpg",
      //     title:"Picture2",
      //     author:"author2"
      // },
      // {
      //     url: "https://w0.peakpx.com/wallpaper/165/918/HD-wallpaper-mountain-view-rocks-pretty-glow-shine-beautiful-sunset-mountain-nice-cliffs-sunrise-amazing-lovely-view-sky-paradise-rays-slope-nature.jpg",
      //     title:"Picture3",
      //     author:"author3"
      // }
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentBGI < 3) setCurrentBGI((prev) => (prev  + 1) % 3)
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);


    return (
<>
  <div className='container'>
    <img className='splash-page-images' src={backGroundInfo[currentBGI].url} alt="Background Image" />
    <div className='content'>
      <h1 className='splash-page-header'>Find your inspiration.</h1>
      <h3 className='splash-page-subheaderp1'>Join the Snapr community, home to tens of billions of</h3>
      <h3 className='splash-page-subheaderp2'>photos and 2 million groups.</h3>
      <button className='start-for-free-btn'>
      <Link to="/signup" style={{ textDecoration: 'none' }}><span className='btn-text' style={{ color: 'black' }}>Start for free</span></Link>
      </button>
      <div style={{}} className='splash-page-BGI'>
        <p className='splash-page-BGI1'>{backGroundInfo[currentBGI].title}</p>
        <p className='splash-page-BGI2'>{backGroundInfo[currentBGI].author}</p>
      </div>
    </div>
    
  </div>
  <footer className='splash-page-footer'>
    <Link to="">Github Link 1</Link>
    <Link to="">Github Link 2</Link>
    <Link to="">Github Link 3</Link>
    <Link to="">Github Link 4</Link>
    <Link to="">LinkdIn Link 1</Link>
    <Link to="">LinkdIn Link 2</Link>
    <Link to="">LinkdIn Link 3</Link>
    <Link to="">LinkdIn Link 4</Link>
  </footer>
</>
    )   
}


