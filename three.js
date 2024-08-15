// Creating a scene
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(
//    40, window.innerWidth / window.innerHeight, 0.1, 1000
// )
// // append the render code in to the html
// var renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// $("body").append(renderer.domElement);

// // Creating geometry width and height
// // var geometry = new THREE.BoxGeometry(1, 1, 1);
// var geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Creating animation loop
// cube.position.z = -30;
// cube.rotation.y = 10;
// cube.rotation.x = 5;
// var animation = function () {
//   cube.rotation.x += 0.01;
//   renderer.render(scene, camera);
//   requestAnimationFrame(animation);
// };

// animation();

// window.addEventListener("resize", function () {
//   // Update camera aspect ratio and projection matrix
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   // Update renderer size
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });
function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.set(0, 200, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x242424);
  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => renderer.render(scene, camera));

  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const pointLight1 = new THREE.PointLight(0xc4c4c4, 1);
  pointLight1.position.set(0, 300, 500);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xc4c4c4, 1);
  pointLight2.position.set(300, 100, 0);
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0xc4c4c4, 1);
  pointLight3.position.set(0, 100, -500);
  scene.add(pointLight3);

  const pointLight4 = new THREE.PointLight(0xc4c4c4, 1);
  pointLight4.position.set(-500, 300, 0);
  scene.add(pointLight4);

  const loader = new THREE.GLTFLoader();
  loader.load("ayana mom/scene.gltf", function (gltf) {
    const car = gltf.scene.children[0];
    car.scale.set(200, 200, 200);
    scene.add(gltf.scene);
    animate();
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
}

init();
