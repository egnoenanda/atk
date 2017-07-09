/**
 * 
 */

	
var checkid=($('a[href*="action=logout"]:first').attr('href').match(/[\?|\&]h\=(\w+)/)||['',''])[1];

if(typeof units == 'undefined')var units = 'place&mode=command'+checkid;
$('tr:not(:first) td span a').each(function(i,e)
		{
 
  
  var units = {
		    'spear'    : true,
		    'sword'    : true,
		    'axe'    : true,
		    'archer'    : true,
		    'spy'    : true,
		    'light'    : true,
		    'marcher'    : true,
		    'heavy'    : true,
		    'catapult'    : true,
		    'ram'    : true,
		    'knight'    : true,
		    'snob'    : true
		}; 
		coords = '';
		name = 'f';
		
		 e.href = e.href.replace('&screen=place&try=confirm','&screen=' + units);

		var d = document;


		function N(a) {
		    return (d.getElementsByName(a)[0]);
		}

		function max(a) {
		    return parseInt(d.units[a].nextSibling.nextSibling.innerHTML.match(/\d+/), 10);
		}
		if (N('x') && N('x').value == '') {
		    if (!N(name)) $('h3').append('<span name="' + name + '" style="color:green;font-size:11px;"></span>');
		    coords = coords.split(' ');
		    index = 0;
		    farmcookie = d.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		    if (farmcookie != null) index = parseInt(farmcookie[2]);
		    N(name).innerHTML = ' Tinta nr.' + (index + 1) + '  (' + coords[index] + '). Total: ' + coords.length;
		    if (index >= coords.length) {
		        N(name).style.color = '#F00';
		        N(name).innerHTML = ' Ai ajuns la capatul listei!';
		    } else N(name).style.color = 'green';
		    if (index >= coords.length) index = 0;
		    coords = coords[index];
		    coords = coords.split('|');
		    index++;
		    cookie_date = new Date(2051, 08, 11);
		    d.cookie = name + '=' + index + ';expires=' + cookie_date.toGMTString();
		    N('x').value = coords[0];
		    N('y').value = coords[1];
		    for (i in units) {
		        if (N(i)) {
		            u = parseInt(units[i], 10);
		            n = max(i) + u;
		            if (isNaN(u)) insertUnit(N(i), max(i));
		            else if (u < 0) n < 0 ? '' : insertUnit(N(i), n);
		            else if (max(i) >= units[i]) insertUnit(N(i), u);
		  


		        }
		    }
		}
		
  
  
});