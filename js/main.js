function init(){
    var width  = window.innerWidth;
    var height = window.innerHeight;

    var sceneSphere = new THREE.Scene();
    var scenePlane = new THREE.Scene();

    cameraPlane = new THREE.PerspectiveCamera(75, width / height, 1, 2000);
    cameraPlane.position.x = 0;
    cameraPlane.position.z = -500;

    camera = new THREE.PerspectiveCamera(75, width / height, 1, 2000);
    camera.position.x = 200;
    camera.position.z = -500;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(100, 30, 30),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('assets/equirectangular.jpg')
        })
    );

    sphere.position.x = 200;

    sceneSphere.add(sphere);

    var plane = new THREE.Mesh(
        new THREE.PlaneGeometry(400, 200),
        new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: THREE.ImageUtils.loadTexture('assets/equirectangular.jpg')
        })
    );

    plane.position.x = -200;

    scenePlane.add(plane);

    var controls = new THREE.OrbitControls(camera);
    var controlsPlane = new THREE.OrbitControls(cameraPlane);

    var el = document.getElementById('sphere');
    el.appendChild(renderer.domElement);

    function render() {
        // renderer.setClearColor( 0xffffff );
        // renderer.setScissorTest( false );
        // renderer.clear();

        // renderer.setClearColor( 0xe0e0e0 );
        // renderer.setScissorTest( true );

        renderer.render(sceneSphere, camera);
        renderer.render(scenePlane, cameraPlane);

        requestAnimationFrame(render);
    }
    render();
}

window.onload = init;