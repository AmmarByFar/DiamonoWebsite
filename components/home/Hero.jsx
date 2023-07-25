"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { FactionsSidebar } from "./FactionsSidebar";

import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';

export const Hero = () => {
  // Hook into mouse movement to move THREE.js camera
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-stretch md:flex-row md:overflow-hidden md:px-10">
      {/* Left section */}
      <div className="hidden h-screen w-36 flex-col justify-end pb-14 md:flex">
        <div className="flex">
          <Image
            src="/magetii-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className=""
          />
          <Image
            src="/taneika-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
          <Image
            src="/magetii-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
          <Image
            src="/taneika-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
        </div>

        <h6 className="my-5 text-base leading-5 tracking-wider">
          What demon belongs to you?
        </h6>

        <button className="w-max rounded-full rounded-tl-none border border-primary px-6 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-black">
          Find out
        </button>
      </div>

      {/* Mid section */}
      <div className="flex flex-1 flex-col items-center md:h-screen">
        <Canvas className="hidden w-full xl:block xl:max-w-[1070px] 2xl:max-w-[70vw]">
          <Suspense fallback={null}>
            <ImagePlane imagePath="/home/Magetti.webp" position={[0, 0.5, 1]} scale={4.9} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Magetti_Diamono.webp" position={[0, 0.7, -1]} scale={8} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Teneika.webp" position={[0, 1,-1.5]} scale={7.5} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Teneika_Diamono.webp" position={[0, 1,-0.5]} scale={6.5} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Gornaugh.webp" position={[0, 1.5,-5]} scale={12} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Gornaught_Diamono.webp" position={[0, 1.5,-2.5]} scale={9} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Sirex.webp" position={[0, 1.5,-4]} scale={10} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Sirex_Diamono.webp" position={[0, 1.5,-2]} scale={8} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/bg.webp" position={[0, 3.3,-10]} scale={18} mousePosition={mousePosition} />
          </Suspense>
        </Canvas>

        <Canvas
        width={1000}
        height={1000} 
        className="md:w-[480px] lg:w-[510px] xl:hidden">
          <Suspense fallback={null}>
            <ImagePlane imagePath="/home/Magetti.webp" position={[0.2, -0.5, 1]} scale={4.9} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Magetti_Diamono.webp" position={[0.5, 0, -1]} scale={8} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Teneika.webp" position={[-0.1, -0.3,-1.5]} scale={7.5} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Teneika_Diamono.webp" position={[0.2, -0.5,-0.5]} scale={6.5} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Gornaugh.webp" position={[1, -0.5,-5]} scale={12} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Gornaught_Diamono.webp" position={[0.5, 0,-2.5]} scale={9} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Sirex.webp" position={[0, -0.5,-4]} scale={10} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/Sirex_Diamono.webp" position={[0, 0,-2]} scale={8} mousePosition={mousePosition} />
            <ImagePlane imagePath="/home/bg.webp" position={[0, -1,-10]} scale={18} mousePosition={mousePosition} />
          </Suspense>
        </Canvas>

        {/* <Image
          src="/home/home-banner-desktop.png"
          alt="Hero banner"
          width={700}
          height={700}
          className="hidden w-full xl:block xl:max-w-[1070px] 2xl:max-w-[70vw]"
        />
        <Image
          src="/home/home-banner-mobile.png"
          alt="Hero banner"
          width={1000}
          height={1000}
          className="md:w-[480px] lg:w-[510px] xl:hidden"
        /> */}

        {/* Daimono logo */}
        <Image
          src="/home/daimono.png"
          alt="Hero banner"
          width={400}
          height={400}
          className="-mt-[18vw] w-[60vw] drop-shadow-2xl md:-mt-24 md:w-[300px] lg:-mt-36 xl:-mt-[14vw] xl:w-[390px]"
        />
      </div>

      {/* Left avatars */}
      <div className="flex w-full justify-center pb-8 pt-12 md:mt-24 md:w-36 md:flex-col md:items-end md:gap-10 md:pb-0 md:pt-0">
        <FactionsSidebar />
      </div>
    </div>
  );
};

const ImagePlane = ({ imagePath, position, scale = 2, mousePosition }) => {
  const { camera } = useThree();
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const targetCameraPosition = useRef(new THREE.Vector3(0, 0, 5.5));
  const cameraSpeed = useRef(0.005);

  const distance = (v1, v2) => {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  useEffect(() => {
    // set initial camera position
    camera.position.set(0, 0, 1);
  }, []);

  useFrame(() => {
    if (!initialAnimationDone) {
      if (distance(camera.position, targetCameraPosition.current) > 0.1) {
        camera.position.lerp(targetCameraPosition.current, cameraSpeed.current);
        camera.updateProjectionMatrix();
      } else {
        setInitialAnimationDone(true);
      }
    }
    const factor = 0.3;
    const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;  
    const targetX = mousePosition.x * factor;
    const targetY = mousePosition.y * factor;

    camera.position.x = lerp(camera.position.x, targetX, 0.1);
    camera.position.y = lerp(camera.position.y, targetY, 0.1);
  
    const focusPoint = {
      x: camera.position.x + targetX,
      y: camera.position.y + targetY,
      z: 0,
    }
  
    camera.lookAt(focusPoint.x, focusPoint.y, focusPoint.z);
    camera.updateProjectionMatrix();
  });

  const texture = useTexture(imagePath);
  const aspect = texture.image ? texture.image.width / texture.image.height : 1;

  return (
    <Plane args={[aspect * scale, scale]} position={position}>
      <meshBasicMaterial attach="material" map={texture} transparent={true}/>
    </Plane>
  );
};