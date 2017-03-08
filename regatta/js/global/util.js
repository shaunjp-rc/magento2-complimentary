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

/*//////////// Countdown Behaviour ////////////*/

function rlClock(container, options){
	
	// create clock and append
	var clock = document.createElement('div');
  clock.className = options.selector;
	document.getElementById(container).prepend(clock);

	// create daily clock
	if(options.daily){
		
		var endHour = parseInt(options.ends.split(':')[0]);
		var endMins = parseInt(options.ends.split(':')[1]);
		
		// calculate hours
		function getHours(){
			var now = new Date();
			return now.getHours() >= endHour && now.getMinutes() >= endMins ? (23 - now.getHours() + endHour) : (endHour - now.getHours());
		} 
		
		// calculate minutes
		function getMins(){
			var now = new Date();
			return now.getMinutes() >= endMins ? (59 - now.getMinutes() + endMins) : (endMins - now.getMinutes());
		}
		
		// start the countdown
		var countdown = setInterval(function(){
			
			var hours = '<span class="clock-hours">' + getHours() + '<em> hrs </em></span>';
			var mins = '<span class="clock-mins">' + getMins() + '<em> mins </em></span>';
			
			// output HTML
			document.querySelector('.' + options.selector).innerHTML = hours + mins;
			
		},1000);	
		
	// create deadline clock	
	}	else {
		
		var endHour = parseInt(options.ends.split(':')[0]);
		var endMins = parseInt(options.ends.split(':')[1]);
		
		// calculate days
		function getDays(){
			var now = new Date();
			var msc = 1000 * 60 * 60 * 24;
			var diff = Math.abs(options.deadline.getTime() - now.getTime());
			return (Math.ceil(diff / msc) - 1);
		} 
		
		// calculate hours
		function getHours(){
			var now = new Date();
			return now.getHours() >= endHour ? (24 - now.getHours() + endHour) : (endHour - now.getHours());
		} 
		
		// calculate minutes
		function getMins(){
			var now = new Date();
			return now.getMinutes() >= endMins ? (60 - now.getMinutes() + endMins) : (endMins - now.getMinutes());
		}
		
		// start the countdown
		var countdown = setInterval(function(){
			
			var days = '<span class="clock-days">' + getDays() + '<em> days </em></span>';
			var hours = '<span class="clock-hours">' + getHours() + '<em> hrs </em></span>';
			var mins = '<span class="clock-mins">' + getMins() + '<em> mins </em></span>';
			
			if (getDays() == 0 && getHours() == 0 && getMins() == 0){
				// output HTML
				document.querySelector('.' + options.selector).innerHTML= 'Countdown Expired';
				clearInterval(countdown);
			} else {
				// output HTML
				document.querySelector('.' + options.selector).innerHTML = days + hours + mins;
			}
			
			
		},1000);	
		
	}
	
} // end clock

/*//////////// Lightbox Behaviour ////////////*/

function rlPop(options){
	
	// add click events for popups
	var nodeList = document.body.querySelectorAll("[data-action='pop']");
	var nodes = Array.prototype.slice.call(nodeList, 0);
	nodes.forEach(function(node){
		node.addEventListener('click', function(){
			
			// show popup
			var target = this.getAttribute('data-target');
			target = document.body.querySelector(target);
			target.classList.toggle('active');
			
			// show overlay
			overlay.classList.add('active');			
			
		});
	});
	
	// add click events for popups
	var crossList = document.body.querySelectorAll("[data-action='pop-close']");
	var crosses = Array.prototype.slice.call(crossList, 0);
	crosses.forEach(function(cross){
		cross.addEventListener('click', function(){
			var nodeList = document.body.querySelectorAll(".rl-pop");
			var nodes = Array.prototype.slice.call(nodeList, 0);
			nodes.forEach(function(node){
				node.classList.remove('active');
			});
			overlay.classList.remove('active');
		});
	});
	
	// create overlay & click event
	var overlay = document.createElement('div');
	overlay.className = "pop-overlay";
	document.getElementById('body').appendChild(overlay);
	overlay.addEventListener('click', function(){
		var nodeList = document.body.querySelectorAll(".rl-pop");
		var nodes = Array.prototype.slice.call(nodeList, 0);
		nodes.forEach(function(node){
			node.classList.remove('active');
		});
		overlay.classList.remove('active');
	});
	
	
} // end rlPop()
