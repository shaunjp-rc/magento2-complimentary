/*/////////////////////////////////////
// REGLIB
// A Regatta JS Utility library
// Author: Shaun Pelling
// CONTENTS:
//
/////////////////////////////////////*/

/*///////// Toggle Behaviour ////////*/

function rlToggle(){
	var nodeList = document.body.querySelectorAll("[data-action='toggle']");
	var nodes = Array.prototype.slice.call(nodeList,0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			this.classList.toggle('active');
			var target = this.getAttribute('data-target');
			target = document.body.querySelector(target);
			target.classList.toggle('active');
		});
	});
}

/*////////// Tab Behaviour //////////*/

function rlTabs(){
	var nodeList = document.body.querySelectorAll("[data-action='tab']");
	var nodes = Array.prototype.slice.call(nodeList,0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(e){
			e.preventDefault();
			
			// remove active classes on tabs
			var tabList = document.body.querySelectorAll("[data-action='tab']");
			var tabs = Array.prototype.slice.call(tabList,0);
			tabs.forEach(function(tab){
				tab.classList.remove('active');
			});

			// remove active classes on content
			var contentList = document.body.querySelectorAll(".tabs-content > *");
			var contents = Array.prototype.slice.call(contentList,0);
			contents.forEach(function(content){
				content.classList.remove('active');
			});

			this.classList.toggle('active');
			var target = this.getAttribute('data-target');
			target = document.body.querySelector(target);
			target.classList.toggle('active');
		});
	});
  
  // Pick up URL and open appropriate tab
  var navigated = window.location.href;
  nodes.forEach(function(node){
    var nodeTarget = node.getAttribute('data-target');
    if(navigated.indexOf(nodeTarget) !== -1){
      
      // Remove defaulted active classes
      var activesList = document.body.querySelectorAll(".active");
      var actives = Array.prototype.slice.call(nodeList,0);
      nodes.forEach(function(active){
        active.classList.remove('active');
      });
      
      // Add active class to URL param
      document.body.querySelector(nodeTarget).classList.add('active');
      node.classList.add('active');
    }
  });
}

/*////////// Select Behaviour //////////*/

function rlSelect(){
  var nodeList = document.body.querySelectorAll("[data-action='select']");
  var nodes = Array.prototype.slice.call(nodeList,0);
  nodes.forEach(function(node){
    node.addEventListener('change', function(){
      var selected = this.value;
      var target = this.getAttribute('data-target');
      target = document.body.querySelector(target);
      
      // Hide current active
      target.querySelector('.active').classList.remove('active');

      // Show new active
      var option = target.querySelector('[data-value=' + selected +']');
      option.classList.add('active');
    });
  });
}

/*////////// Toggle Active Behaviour //////////*/

function rlToggleClass(){
	var nodeList = document.body.querySelectorAll("[data-action='toggle-class']");
	var nodes = Array.prototype.slice.call(nodeList,0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			this.classList.toggle('active');
		});	
	});
}

