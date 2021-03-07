// var THREE = require('three')
// import THREE from 'three
import * as THREE from 'three'

var camera, scene, renderer;
let geometry, materail, mesh;

// 渲染场景
function initRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

// 相机
function initCamera() {
  // 透视投影相机 https://www.cnblogs.com/xulei1992/p/5709677.html
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
  camera.position.z = 1
}

// 场景
function initScene() {
  scene = new THREE.Scene()
}

// 物体
function initObj() {
  geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  materail = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, materail);
  scene.add(mesh)
}


// 渲染动画
function render() {
  animate()
}

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.05;
  renderer.render(scene, camera);
}

// 初始化
function init() {
  initRenderer()
  initCamera()
  initScene()
  initObj()
  render()
}

window.onload = init