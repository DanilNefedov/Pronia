import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 811 x 1022
const container = document.getElementById('container-block-three')
const mainCanv = document.getElementById('test');


let linkBuild = '';

if (window.location.href === 'http://localhost:3000/') {
	linkBuild = '../../models/scene.gltf';
} else if (window.location.href === 'https://danilnefedov.github.io/Pronia/') {
	linkBuild = '../Pronia/models/scene.gltf';
} else {
	linkBuild = '../../models/scene.gltf';
}


let width = mainCanv.offsetWidth
let height = window.innerWidth > 1700 ? 1022 : container.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, height / width, 0.1, 100);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
mainCanv.appendChild(renderer.domElement);

renderer.setClearColor(0x000000, 0);

camera.position.set(0.6, 0.4, 0.6)

let model
const loader = new GLTFLoader();
loader.load(`${linkBuild}`, function (gltf) {
	model = gltf.scene.children[0]
	model.position.set(0, -0.2, 0)
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	scene.add(model);
	renderer.render(scene, camera)
	animate();
}, undefined, function (error) {
	console.error(error);
});


const spotLight = new THREE.SpotLight(0x001C9113, 1);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.00001
spotLight.shadow.mapSize.width = 1024 * 4;
spotLight.shadow.mapSize.height = 1024 * 4;
scene.add(spotLight)


const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1)
scene.add(hemiLight)


const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
light.position.set(-5, 0, 0)
scene.add(light)


// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );


function onWindowResize() {
	if (window.innerWidth < 1700) {
		if (window.innerWidth < 1050) {
			width = container.clientWidth
			height = 522
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		} else {
			width = mainCanv.offsetWidth
			height = container.clientHeight
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		}
	} else if (window.innerWidth > 1700) {
		height = 1022
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}
}

window.addEventListener('resize', onWindowResize, false);


const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
controls.enableDamping = true;


function animate() {
	requestAnimationFrame(animate);

	model.rotation.z += 0.001;

	renderer.render(scene, camera);
}


