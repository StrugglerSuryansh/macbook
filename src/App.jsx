import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Mac from "./Mac";

// NavBar Component
const NavBar = () => {
  return (
    <nav className="navbar w-full h-16 bg-black flex items-center justify-between px-8 fixed top-0 left-0 z-50">
      <div className="logo text-white font-['Helvetica'] text-xl">Apple</div>
      <ul className="nav-links flex gap-8 text-white font-['Helvetica'] text-sm">
        <li className="hover:underline cursor-pointer">Mac</li>
        <li className="hover:underline cursor-pointer">iPad</li>
        <li className="hover:underline cursor-pointer">iPhone</li>
        <li className="hover:underline cursor-pointer">Watch</li>
        <li className="hover:underline cursor-pointer">TV</li>
        <li className="hover:underline cursor-pointer">Music</li>
        <li className="hover:underline cursor-pointer">Support</li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div className="main h-screen w-full relative">
      {/* NavBar component at the top */}
      <NavBar />
      <div className="top-txt font-['Helvetica'] text-center w-1/3 text-white absolute top-[6.5rem] left-1/2 -translate-x-1/2">
        <h1 className="text-5xl text-gradient font-bold tracking-tighter">macbook pro.</h1>
        <h1>oh so pro!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quod ducimus aut!
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
          }
        />
        <ScrollControls>
          <Mac />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
