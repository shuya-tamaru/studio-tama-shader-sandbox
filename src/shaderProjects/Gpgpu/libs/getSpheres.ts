import * as THREE from "three";
import vertex from "../shaders/particles/vertex.glsl";
import fragment from "../shaders/particles/fragment.glsl";
import { IGpgpu } from "../types/IGpgpu";
import { IParticles } from "../types/IParticles";
import { IBaseGeometry } from "../types/Particles";
import { Size } from "@react-three/fiber";

export const getSpheres = (
  baseGeometry: IBaseGeometry,
  gpgpu: IGpgpu,
  viewport: Size
) => {
  const particles: IParticles = {
    geometry: null,
    material: null,
    points: null,
  };

  const particlesUvArray = new Float32Array(baseGeometry.count * 2);
  const sizesArray = new Float32Array(baseGeometry.count);

  for (let y = 0; y < gpgpu.size; y++) {
    for (let x = 0; x < gpgpu.size; x++) {
      const i = y * gpgpu.size + x;
      const i2 = i * 2;

      const uxX = (x + 0.5) / gpgpu.size;
      const uvY = (y + 0.5) / gpgpu.size;

      particlesUvArray[i2 + 0] = uxX;
      particlesUvArray[i2 + 1] = uvY;

      sizesArray[i] = Math.random();
    }
  }
  // スフィアのジオメトリ

  particles.geometry = new THREE.BufferGeometry();
  particles.geometry.setDrawRange(0, baseGeometry.count);
  particles.geometry.setAttribute(
    "aParticlesUv",
    new THREE.BufferAttribute(particlesUvArray, 2)
  );
  particles.geometry.setAttribute(
    "aColor",
    baseGeometry.instance.attributes.color
  );
  particles.geometry.setAttribute(
    "aSize",
    new THREE.BufferAttribute(sizesArray, 1)
  );

  const pixelRatio = window.devicePixelRatio;
  particles.material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uSize: new THREE.Uniform(0.3),
      uResolution: new THREE.Uniform(
        new THREE.Vector2(
          viewport.width * pixelRatio,
          viewport.height * pixelRatio
        )
      ),
      uParticlesTexture: new THREE.Uniform(null),
    },
  });

  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

  const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const instancedMesh = new THREE.InstancedMesh(
    sphereGeometry,
    material,
    baseGeometry.count
  );
  const positions = baseGeometry.instance.attributes.position.array;

  particles.points = new THREE.Points(particles.geometry, particles.material);

  return particles;
};
