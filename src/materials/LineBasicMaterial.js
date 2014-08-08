/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round",
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */

// Modified to require an attribute float vOp in the case that vertex
// colors are used, vOp is a value between 0 and 1
THREE.LineBasicMaterial = function ( parameters ) {

	THREE.Material.call( this );

  this.uniforms = {};

	this.color = new THREE.Color( 0xffffff );

	this.linewidth = 1;
	this.linecap = 'round';
	this.linejoin = 'round';

	this.vertexColors = false;

	this.fog = true;

	this.setValues( parameters );
	this.attributes = parameters.attributes;

};

THREE.LineBasicMaterial.prototype = Object.create( THREE.Material.prototype );

THREE.LineBasicMaterial.prototype.clone = function () {

	var material = new THREE.LineBasicMaterial();

	THREE.Material.prototype.clone.call( this, material );

	material.uniforms = THREE.UniformsUtils.clone( this.uniforms );

	material.color.copy( this.color );

	material.linewidth = this.linewidth;
	material.linecap = this.linecap;
	material.linejoin = this.linejoin;

	material.vertexColors = this.vertexColors;

	material.fog = this.fog;

	return material;

};
