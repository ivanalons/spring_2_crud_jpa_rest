
	function sendGETRequest(){
		
		var answerGet ="";
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees',
		    type: "GET", 
		    dataType: "json",
		    data: {},
		    
		    success: function (result) {
		        //console.log(result);
				//resposta = JSON.stringify(result);
				answerGet = employeeArrayToTable(result);
		        document.getElementById("answerGet").innerHTML = answerGet;
		    },
		    
		    error: function (error) {
		        console.log(error);
			    document.getElementById("answerGet").innerHTML = "Error en la consulta.";

		    }
		});
			
	}
	
	function sendGETRequestById(){
		
		var answerGetById ="";
		var id = document.getElementById("id").value;
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees/'+id,
		    type: "GET", 
		    dataType: "json",
		    data: {},
		    
		    success: function (result) {
				
				answerGetById = employeeToTable(result);
		        document.getElementById("answerGetById").innerHTML = answerGetById;
		    },
		    
		    error: function (error) {
				console.log(error);
		        document.getElementById("answerGetById").innerHTML = "Error en la consulta.";
		    }
		});
			
	}
	
	function sendGETRequestByJob(){
		
		var answerGetByJob ="";
		var job = document.getElementById("job").value;
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees/job/'+job,
		    type: "GET", 
		    dataType: "json",
		    data: {},
		    
		    success: function (result) {
				
				answerGetByJob = employeeArrayToTable(result);
		        document.getElementById("answerGetByJob").innerHTML = answerGetByJob;
		    },
		    
		    error: function (error) {
				console.log(error);
		        document.getElementById("answerGetByJob").innerHTML = "Error en la consulta.";
		    }
		});
			
	}
	
	function sendPOSTRequest(){
		
		var answerPost ="";
		var p_name = document.getElementById("createName").value;
		var p_job = document.getElementById("createJob").value;
				
		var jsonObject = JSON.stringify({name:p_name, job:p_job});
		
		//window.alert(jsonObject);
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees',
		    type: "POST", 
		    dataType: "json",
			contentType: "application/json",
		    data: jsonObject,
		    
		    success: function (result) {
				
				answerPost = employeeToTable(result);
		        document.getElementById("answerPost").innerHTML = answerPost;
		    },
		    
		    error: function (error) {
				console.log(error);
		        document.getElementById("answerPost").innerHTML = "Error en la creacio de l'empleat.";
		    }
		});
			
	}
	
	function sendPUTRequest(){
		
		var answerPut ="";
		var p_id = document.getElementById("updateId").value;
		var p_name = document.getElementById("updateName").value;
		var p_job = document.getElementById("updateJob").value;
		var p_salary = document.getElementById("updateSalary").value;
				
		var jsonObject = JSON.stringify({name:p_name, job:p_job, salary:p_salary});
		
		//window.alert(jsonObject);
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees/'+p_id,
		    type: "PUT", 
		    dataType: "json",
			contentType: "application/json",
		    data: jsonObject,
		    
		    success: function (result) {
				
				answerPut = employeeToTable(result);
		        document.getElementById("answerPut").innerHTML = answerPut;
		    },
		    
		    error: function (error) {
				console.log(error);
		        document.getElementById("answerPut").innerHTML = "Error en la modificadio de l'empleat.";
		    }
		});
			
	}
	
	function sendDELETERequest(){
		
		var answerGetById ="";
		var id = document.getElementById("deleteId").value;
		
		$.ajax({
		    url: 'http://localhost:8181/api/employees/'+id,
		    type: "DELETE", 
		    //dataType: "json",
			contentType: "application/javascript",
		    data: {},
		    
		    success: function (result) {
		        document.getElementById("answerDelete").innerHTML = "Empleat eliminat correctament.";
		    },
		    
		    error: function (error) {
				console.log(error);
		        document.getElementById("answerDelete").innerHTML = "Error en la eliminacio.";
		    }
		});
			
	}
	
	function employeeArrayToTable(employeesArray){
		var output = "<table border=1 >";
		
		output+="<tr><th>ID</th><th>Nom</th><th>Feina</th><th>Salari</th></tr>";
		
		for(var i=0;i<employeesArray.length;i++){
			output+=employeeToRow(employeesArray[i]);
		}
		
		output+="</table>";
		
		return output;
	}
	
	function employeeToRow(employee){
		
		var output="<tr>";
		
		output+= "<td>"+employee.id+"</td>";
		output+= "<td>"+employee.name+"</td>"
		output+= "<td>"+employee.job+"</td>";
		output+= "<td>"+employee.salary+"</td>";
		
		output+="</tr>";
		
		return output;
		
	}
	
	function employeeToTable(employee){
		var output = "<table border=1 >";
		
		output+="<tr><th>ID</th><th>Nom</th><th>Feina</th><th>Salari</th></tr>";
		output+=employeeToRow(employee);
		output+="</table>";
		
		return output;
	}
		
	
