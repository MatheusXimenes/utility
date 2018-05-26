/**
* Utility Class or Module
* Autor: Matheus Ximenes
* GitHub: https://github.com/MatheusXimenes
* Data: 2018-02-25
*/
 
const Utilities = (function (){
 
	'use strict';

	/**
		* Verify if the param is an array
		* @param {Array} any
		* @return {Array} boolean
	*/
	const isArray = function(param){
			return Object.prototype.toString.call( param ) === '[object Array]';
	}
	
	/**
	 * Verify if the param is a function
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isFunction = function(param){
			return Object.prototype.toString.call( param ) === '[object Function]';
	}
	
	/**
	 * Verify if the param is an Object
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isObject = function(param){
			return Object.prototype.toString.call( param ) === '[object Object]';
	}
	
	/**
	 * Verify if the param is a Number
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isNumber = function(param){
			return Object.prototype.toString.call( param ) === '[object Number]';
	}
	
	/**
	 * Verify if the param is a String
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isString = function(param){
			return Object.prototype.toString.call( param ) === '[object String]';
	}

	/**
	 * Verify if the param is a Boolean
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isBoolean = function(param){
			return Object.prototype.toString.call( param ) === '[object Bollean]';
	}
	
	/**
	 * Verify if the param is Null
	 * @param {Array} any
	 * @return {Array} boolean
	 */
	const isNull = function(param){
			return Object.prototype.toString.call( param ) === '[object Null]' || Object.prototype.toString.call( param ) === '[object Undefined]' ;
	}

	/**
	 * Abstract function to console.log
	 * @param {value} any
	 * @return {value} any on console.log
	 */
	const showlog = function(param){
			return console.log(param);
	}

	/**
	 * Abstract function to Alert Messages on brownser
	 * @param {value} any
	 * @return {value} alert any value
	 */
	const alertMessage = function(param){
			alert(param);
	}

	/**
	 * Monetary Mask at Brazil
	 * @param {value} number
	 * @return {value} Ex: 100.000,00
	 */
	function maskMonetaryBR(value){

			var value = value.replace(/\D/g,"");
					value = value.replace(/(\d{2})$/g, ",$1");
			if( value.length > 6 )
					value = value.replace(/(\d{3}),(\d{2}$)/g, ".$1,$2");
			return value;
	}

	/**
	 * Monetary Mask at Canada and US
	 * @param {value} number
	 * @return {value} Ex: 100,000.00
	 */
	function maskMonetaryCAD(value){
			var value = value.replace(/\D/g,"");
					value = value.replace(/(\d{2})$/g, ".$1");
			if( value.length > 6 )
					value = value.replace(/(\d{3}),(\d{2}$)/g, ",$1.$2");
			return value;
	}

	/**
	 * Brazilian CPF Mask
	 * @param {value} number
	 * @return {value} Ex: 910.464.831-23
	 */
	function maskCPF(cpf){
			var cpf = cpf.replace(/\D/g,"")
					cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
					cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
					cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
			return cpf;
	}

	/**
	 * Brazilian CNPJ Mask
	 * @param {value} number
	 * @return {value} Ex: 00.360.305/0001-04
	 */
	function maskCNPJ(cnpj){
			var cnpj = cnpj.replace(/\D/g,"");
					cnpj = cnpj.replace(/^(\d{2})(\d)/,"$1.$2");
					cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
					cnpj = cnpj.replace(/\.(\d{3})(\d)/,".$1/$2");
					cnpj = cnpj.replace(/(\d{4})(\d)/,"$1-$2");
			return cnpj;
	}
	
	/**
	 * Compose function add 0 on left numbers
	 * @param {value} number
	 * @param {element} places
	 * @return {value} Ex: 001
	 */
	var zeroPad = function(num, places) {
			var zero = places - num.toString().length + 1;
			return Array(+(zero > 0 && zero)).join("0") + num;
	}

	return {
			isArray: isArray,
			isFunction: isFunction,
			isObject: isObject,
			isNumber: isNumber,
			isString: isString,
			isBoolean: isBoolean,
			isNull: isNull,
			showlog: showlog,
			alertMessage: alertMessage,
			maskMonetaryBR: maskMonetaryBR,
			maskMonetaryCAD: maskMonetaryCAD,
			maskCPF: maskCPF,
			maskCNPJ: maskCNPJ,
			zeroPad: zeroPad
	}
 
})();