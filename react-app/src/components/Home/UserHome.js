import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllImageThunk } from "../../store/image";
import { Link } from 'react-router-dom';
import './Home.css'


export default function UserHome() {
    const sessionUser = useSelector((state) => state.session.user);
    const imagesStore = useSelector((state) => state.images.allImages);
    const imagesArr = Object.values(imagesStore);
    const currDate = new Date();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllImageThunk());
    })


    if (imagesArr.length < 1) return null;

    return (
        <>
        <div className='user-home-wrapper'>
        <div className='user-home-banner'>
            <div>
                <p>All Activity</p>
                <p>What's new?</p>
            </div>
            <div>
                <p>layout 1</p>
                <p>layout 2</p>
                <p>layout 3</p>
            </div>
        </div>
        <div className='image-list-div'>

            <ul>
            
                {imagesArr.map((image) => (
                    <li key={image.id} className='image-card'>
                        <Link key={image.id} to={`/photos/${image.id}`}>
                            <p>{image.User.firstName} {image.User.lastName}</p>
                            <p>{currDate - image.uploadedAt}d ago</p>
                            <img src={image.img} alt={image.title} />
                            <p>{image.title}</p>
                            <p>{image.description}</p>
                            <div>
                                <div>{image.view_count > 1000 ? parseFloat(image.view_count)/1000 + "K" : image.view_count} views
                                </div>
                                <div>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-comment"></i>
                                    <i class="fa-light fa-album-circle-plus"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
        </div>
        </>
    )

}
