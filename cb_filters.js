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


	module_drawTable.drawFilters = function(tableId, searchBoxId, data)
	{
		var headers = document.getElementById(tableId).tHead.getElementsByTagName("th");

		for(var header of headers)
		{
			header.insertAdjacentHTML("afterbegin",	"<input type='checkbox' name='filter' value='" + header.innerHTML.toUpperCase() + "'onchange=module_drawTable.updateFilter('" + searchBoxId + "')>");
		}
	
		//insert clear active filters button
		document.getElementById(tableId).insertAdjacentHTML("beforebegin", "<input type='button' value='clear filters' onclick='module_drawTable.clearFilters(\"" + searchBoxId + "\")'>");
	}

	return module_drawTable;

})(module_drawTable || {});
