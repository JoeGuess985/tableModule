var module_drawTable = (function () 
{

	//////utilities

	function getKeys(data)
	{
		return Object.keys(data[0]);
	}

	///////////////


	function drawHeader(tableId, data)
	{
		var s_out = '<tr>';

		for(var col in data[0])   
		{
			s_out += "<th>" + col + "</th>";
		}

		s_out += "</tr>";

		document.getElementById(tableId).tHead.innerHTML = s_out;
	}

	function drawTable(tableId, searchBoxId, data)
	{
		var s_out = '';

		//write out rows
		for(var row of data)
		{
			var keys = getKeys(data);
			s_out += "<tr>";
			
			for(var col in row)
				s_out += "<td name = '" + keys[keys.indexOf(col)] + "'>" + row[col] + "</td>";

			s_out += "</tr>";
		}

		document.getElementById(tableId).getElementsByTagName("tbody")[0].innerHTML = s_out;

		module_drawTable.updateFilter(searchBoxId);
	}


	return	{getKeys: getKeys, drawHeader: drawHeader, drawTable: drawTable};

})();
