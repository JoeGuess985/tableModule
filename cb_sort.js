
var module_sortTable = (function (module_drawTable) 
{

	module_drawTable.initListeners = function(tableId, searchId, data)
	{
		for(var row of document.getElementById(tableId).getElementsByTagName("th"))
			row.addEventListener('click', function(event){module_drawTable.toggleReverse(event, tableId, searchId, data)});	//excuse the hack so we could pass event and data as arguments.
	}


	module_drawTable.clearActive = function()
	{
		var active = document.querySelectorAll('.asc, .desc');

		for(var e of active)
		{
			e.classList.remove("asc", "desc");
		}
	}


	//hack to allow sortBy option to be passed to sorting callback
	Array.prototype.columnSort = function(sortBy) 
	{
		function compare(a, b) 
		{
			return a[sortBy].localeCompare(b[sortBy]);
		}

		this.sort(compare);
	}


	module_drawTable.toggleReverse = function(event, tableId, searchId, data) //need to sort AND reverse, because clicking an element header might not be the one currently selected
	{
	    var e = event.target;
	
		//table row click is catching embedding checbox clicks. this helps us ignore that.
		if(e.type == "checkbox")
			return;

		data.columnSort(e.textContent);

		//reverse sort if necessary, clear and set chevron styles
		if(e.className == 'desc')   //only need to reverse if current object is ACTIVE and DESCENDING SORT
		{
			data.reverse();
			module_drawTable.clearActive();
			e.className = 'asc';
		}

	    else
	    {
			module_drawTable.clearActive();
			e.className = 'desc';
	    }

		module_drawTable.drawTable(tableId, searchId, data);	//REQUIRES DRAWTABLE HERE...can we make this function call independant of any specific function signature so it can be reused?
	}

	return module_drawTable;

})(module_drawTable || {});
