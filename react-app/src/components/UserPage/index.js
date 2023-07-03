import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from 'react-router-dom';



export default function UserPage() {
    const sessionUser = useSelector((state) => state.session.user);
    const userImages = useSelector((state) => state.image.userImages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch()
    })

    return (
        <>

        </>
    )
}