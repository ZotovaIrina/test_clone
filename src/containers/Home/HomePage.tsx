import React from 'react';
import * as THREE from "three";
import {TitleTextContainer, TitleTextStyled} from '../../components/Home/Home.styled';
import getImage from '../../utils/getImage';


export default class HomePage extends React.Component<{}> {

  componentDidMount() {
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    const cubeSide = 1000;
    camera.position.y = 400;
    const scene = new THREE.Scene();
    var object;
    var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
    scene.add( ambientLight );
    var pointLight = new THREE.PointLight( 0x7466AF, 0.8 );
    camera.add( pointLight );
    scene.add( camera );
    var map = new THREE.TextureLoader().load( getImage('mainColor.png') );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;
    var material = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide } );

    object = new THREE.Mesh( new THREE.BoxBufferGeometry( cubeSide, cubeSide, cubeSide, 4, 4, 4 ), material );
    object.position.set( - 100, 0, 0 );
    scene.add( object );
    //
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
     window.addEventListener( 'resize', onWindowResize, false );
   function onWindowResize() {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize( window.innerWidth, window.innerHeight );
   }
  var animate = function () {
    requestAnimationFrame( animate );
    render();
  };
    animate();
  function render() {
    var timer = Date.now() * 0.0001;
    camera.position.x = Math.cos( timer ) * 10;
    camera.position.z = Math.sin( timer ) * 10;
    camera.lookAt( scene.position );
    scene.traverse( function ( object ) {
      if ( (object as any).isMesh === true ) {
        object.rotation.x = timer * 0.2;
        object.rotation.y = timer * 0.2;
      }
    } );
    renderer.render( scene, camera );
  }

    this.mount.appendChild(renderer.domElement);
  }

  private mount: any;

  render() {
    return (
      <>
        <TitleTextContainer>
          <TitleTextStyled>Hello, I'm Irina Zotova. I'm Frontend Developer</TitleTextStyled>
        </TitleTextContainer>
        <div ref={ref => (this.mount = ref)}/>
      </>
    );
  }
};