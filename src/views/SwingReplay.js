import { Canvas } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport, Environment } from "@react-three/drei";
import { Suspense } from "react";

import React from "react";
import GolfDrive from "./GolfDrive";


export default function SwingReplay() {
    
    return (
        <div id="canvas-container" style={{width:"1000px", height:"500px"}}>
            <Canvas camera={{ position: [-5, 1, 1], fov: 50, zoom: 1.2 }} dpr={[1, 2]}>
                <OrbitControls />
                <GizmoHelper
                    alignment="bottom-right" // widget alignment within scene
                    margin={[80, 80]} // widget margins (X, Y)
                    // onUpdate={/* called during camera animation  */}
                    // onTarget={/* return current camera target (e.g. from orbit controls) to center animation */}
                    >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
                    {/* alternative: <GizmoViewcube /> */}
                    </GizmoHelper>
                <ambientLight intensity={2} />
                <directionalLight intensity={1.5} />
                <Suspense fallback={"null"}>
                    <GolfDrive />
                </Suspense>
            </Canvas>
        </div>
    );
}
