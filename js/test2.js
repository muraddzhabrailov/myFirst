"use strict"

function Menu(){
	let burger = document.getElementById("burger");

	burger.onclick = dropMenu;
}

function cross(){
	let burger = document.getElementById("burger");

	burger.classList.toggle("active");
}

function dropDown(){
	let dropMenu = document.getElementById("dropMenu");
	dropMenu.classList.toggle("active");

}

function dropMenu(){
	cross();
	dropDown();
}

Menu();

function dot1Active() {
	let dot1 = document.getElementById("dot1");

	dot1.onclick = dot1Class;
}

function dot1Class() {
	let dot1 = document.getElementById("dot1");
	let dot2 = document.getElementById("dot2");
	let dot3 = document.getElementById("dot3");
	

	dot2.classList.remove("active");
	dot1.classList.add("active");
	dot3.classList.remove("active");
}

function dot2Active() {
	let dot2 = document.getElementById("dot2");

	dot2.onclick = dot2Class;
}

function dot2Class() {
	let dot1 = document.getElementById("dot1");
	let dot2 = document.getElementById("dot2");
	let dot3 = document.getElementById("dot3");
	

	dot2.classList.add("active");
	dot1.classList.remove("active");
	dot3.classList.remove("active");
	
}

function dot3Active() {
	let dot3 = document.getElementById("dot3");

	dot3.onclick = dot3Class;
}

function dot3Class() {
	let dot1 = document.getElementById("dot1");
	let dot2 = document.getElementById("dot2");
	let dot3 = document.getElementById("dot3");

	dot3.classList.add("active");
	dot1.classList.remove("active");
	dot2.classList.remove("active");
	
}

function dots() {
	dot1Active();
	dot2Active();
	dot3Active();
}

dots();



