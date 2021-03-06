var THREE = require('three') //正确

export default class ThreeMap {
    constructor() {
        this.init();
    }

    init() {
        this.initRenderer();
        this.initCamera();
        this.initScene();
        this.render();
        this.setHelper();
    }

    //初始化渲染场景
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    //初始化相机
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
        //向上的一个坐标系
        this.camera.up.x = 0;
        this.camera.up.y = 0;
        this.camera.up.z = 1;
        this.camera.position.set(100, 100, 100);
        this.camera.lookAt(0, 0, 0)
    }

    //初始化场景
    initScene() {
        this.scene = new THREE.Scene();
    }


    //渲染
    render() {
        this.animate()
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    setHelper() {
        //红色x,绿色y,蓝色z
        const axesHelper = new THREE.AxisHelper(5);
        this.scene.add(axesHelper);
    }
}