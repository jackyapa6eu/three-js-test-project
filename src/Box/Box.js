import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'


const Box = ({pos} = [0, 0, 0]) => {
    const [crate] = useLoader(TextureLoader, [
        "crate.gif"
    ])

    return (
        <mesh position={pos}>
            <boxGeometry/>
            <meshStandardMaterial map={crate}/>
        </mesh>
    )
}

export {Box}