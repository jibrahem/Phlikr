import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { getAllImageThunk, getSingleImageThunk } from '../../store/image';

import { useParams } from "react-router-dom";

console.log("Before userParams");

export default function SingleImage() { 
    console.log("SingleImage in SingelImage component: ");
    const { imageId } = useParams();
    const singleImage = useSelector((state) => state.images.allImages[imageId]);
    console.log("singleImage Store")
   
    // const singleImageArr = Object.values(singleImage)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSingleImageThunk(imageId));
        dispatch(getAllImageThunk());
    }, [dispatch, imageId])

    // if (!singleImageArr.length ) return null;

    return (
        <>
        <h1>Single Image</h1>
        </>
    )
}