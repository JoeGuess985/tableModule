

var module_searchTable = (function (module_drawTable) 
{

	module_drawTable.initSearch = function(id, cb_filter)
	{
		document.getElementById(id).setAttribute("onkeyup", cb_filter + "(document.getElementById('" + id + "'))");
	}

	module_drawTable.clearSearch = function (searchBoxId)
	{
		document.getElementById(searchBoxId).value = '';

		module_drawTable.filterSearch(document.getElementById(searchBoxId));
	}

	module_drawTable.filterSearch = function (e)
	{
		var searchTerm = e.value.toLowerCase();

		var tb = document.getElementsByTagName("tbody")[0];
		var rs = tb.getElementsByTagName("tr");

		for(var r of rs)
		{
			var cols = r.getElementsByTagName("td");
		
			for(var col of cols)
			{

				if((module_drawTable.g_activeFilters.length > 0) && (!module_drawTable.g_activeFilters.includes(col.getAttribute("name"))))
					continue;

				if(col.innerText.toLowerCase().includes(searchTerm))
				{
					r.style.display = "";
					break;
				}

				r.style.display = "none";
			}
		}
	}

    return module_drawTable;

})(module_drawTable || {});