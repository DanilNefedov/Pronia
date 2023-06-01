import * as THREE from 'three'

// 811 x 1022

const mainCanv = document.getElementById('test')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, mainCanv.offsetHeight / mainCanv.offsetWidth, 0.1, 100 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( mainCanv.offsetWidth, mainCanv.offsetHeight );
mainCanv.appendChild( renderer.domElement );

renderer.setClearColor( 0x000000, 0 );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

console.log(mainCanv.offsetWidth)
// let height = window.innerHeight;

// window.addEventListener('resize', function () {
// 	height = window.innerHeight
// })

// window.addEventListener('resize', onWindowResize, false)


// function onWindowResize() {
//     camera.aspect = window.innerWidth / height;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, height)
// }


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

