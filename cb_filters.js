var module_searchFilters = (function (module_drawTable) 
{
	module_drawTable.g_activeFilters = [];

	module_drawTable.clearFilters = function (searchBoxId)
	{
		module_drawTable.g_activeFilters = [];	//reset active filters list
		for(var cb of document.getElementsByName("filter"))
			cb.checked = false;

		module_drawTable.filterSearch(document.getElementById(searchBoxId));
	}

	module_drawTable.updateFilter = function (searchBoxId)
	{
		module_drawTable.g_activeFilters = [];	//reset active filters list

		for(var filter of document.getElementsByName("filter"))		
		{
			if(filter.checked)
				module_drawTable.g_activeFilters.push(filter.getAttribute("value"));
		}

		module_drawTable.filterSearch(document.getElementById(searchBoxId));
	}


	module_drawTable.drawFilters = function(searchBoxId, data)
	{
		var s_filters = "";
		
		for(var key of module_drawTable.getKeys(data))
			s_filters += "<input type='checkbox' name='filter' value='" + key.toUpperCase() + "'onchange=module_drawTable.updateFilter('" + searchBoxId + "')>" + key;

		s_filters += "<input type='button' value='clear' onclick='module_drawTable.clearFilters(\"" + searchBoxId + "\")'>";

		document.getElementById("filters").innerHTML = s_filters;
	}



	return module_drawTable;

})(module_drawTable || {});