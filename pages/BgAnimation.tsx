import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";
import {
  useGLTF,
  SpotLight,
  useDepthBuffer,
  PerspectiveCamera,
  RenderTexture,
  MeshReflectorMaterial,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { Vector3 } from "three";

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html

  const group = useRef(null);
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  return (
    <>
      <group
        castShadow
        receiveShadow
        rotation-x={0.2}

        rotation-z={-0.2}
        position={[0, 0.4, 0]}
        scale={0.2}
        ref={group}
        dispose={null}
      >
        <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.aluminium}
              geometry={nodes["Cube008"].geometry}
            />
            <mesh
              material={materials["matte.001"]}
              geometry={nodes["Cube008_1"].geometry}
            />
            <mesh geometry={nodes["Cube008_2"].geometry}>
              {/* Drei's HTML component can "hide behind" canvas geometry */}
              {/* <Html
                className="content"
                rotation-x={-Math.PI / 2}
                position={[0, 0.05, -0.09]}
                transform
                occlude
              >
                <div
                  className="wrapper"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <HeroPage />
                </div>
              </Html> */}

              <meshBasicMaterial toneMapped={false}>
                <RenderTexture
                  sourceFile={"https://i.imgur.com/9IwvQsU.png"}
                  width={512}
                  height={512}
                  attach="map"
                  anisotropy={16}
                >
                  <PerspectiveCamera
                    makeDefault
                    manual
                    aspect={1 / 1}
                    position={[0, 0, 10]}
                  />
                  <color attach="background" args={["orange"]} />
                  <ambientLight intensity={0.2} />
                  <pointLight position={[10, 10, 10]} intensity={0.75} />
                  <pointLight position={[-10, -10, -10]} />
                </RenderTexture>
              </meshBasicMaterial>
            </mesh>
          </group>
        </group>
        <mesh
          material={materials.keys}
          geometry={nodes.keyboard.geometry}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube002"].geometry}
          />
          <mesh
            material={materials.trackpad}
            geometry={nodes["Cube002_1"].geometry}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef<any>();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    if (!light.current) return;

    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      shadowCameraFov={undefined}
      shadowCameraLeft={undefined}
      shadowCameraRight={undefined}
      shadowCameraTop={undefined}
      shadowCameraBottom={undefined}
      shadowCameraNear={undefined}
      shadowCameraFar={undefined}
      shadowBias={undefined}
      shadowMapWidth={undefined}
      shadowMapHeight={undefined}
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={5}
      intensity={10}
      {...props}
    />
  );
}

const BgAnimation: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
      >
        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        <pointLight
          distance={1.5}
          intensity={1}
          position={[-0.15, 0.7, 0]}
          color="orange"
        />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>

        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={5}
          />
        </EffectComposer>

        <Scene />
      </Canvas>
    </div>
  );
};

export default BgAnimation;
