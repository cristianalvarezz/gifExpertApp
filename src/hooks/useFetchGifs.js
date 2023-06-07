
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isloading, setIsloading] = useState(false)
    const getImage = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsloading(true)
    }
    useEffect(() => {
        getImage()
    }, [])
    return {
        images,
        isloading
    }
}
