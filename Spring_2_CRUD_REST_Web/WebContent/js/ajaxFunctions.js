
	// Operacio READ
	// Envia una peticio de tipus GET al REST Controller del BackEnd
	// Retorna un objecte JSON que conte el llistat amb tots els empleats
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
	
	// Operacio READ per "id"
	// Envia una peticio de tipus GET al REST Controller del BackEnd, indicant a la URL l'identificador de l'empleat que es vol consultar
	// Retorna un objecte JSON que conte l'empleat amb l'id passat per la URL
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
	
	// Operacio READ per "job"
	// Envia una peticio de tipus GET al REST Controller del BackEnd, indicant a la URL la feina dels empleats que es vol consultar
	// Retorna un objecte JSON que conte els empleats amb la feina "job" passada per la URL
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
	
	// Operacio CREATE
	// Envia una peticio de tipus POST al REST Controller del BackEnd, indicant al cos de la peticio HTTP un objecte JSON amb les dades 
	// com es vol creat el nou empleat (name i job)
	// Retorna un objecte JSON que conte el nou empleat amb totes les seves dades
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
	
	// Operacio UPDATE
	// Envia una peticio de tipus PUT al REST Controller del BackEnd, indicant al cos de la peticio HTTP un objecte JSON amb les dades 
	// com es vol modificar l'empleat. En concret es modificarà l'empleat amb identificador l'id passat per la URL
	// Retorna un objecte JSON que conte l'empleat modificat amb totes les seves noves dades
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
	
	// Operacio DELETE
	// Envia una peticio de tipus DELETE al REST Controller del BackEnd, indicant a la URL de la peticio HTTP l'identificador "id"
	// corresponent a l'empleat que es vol eliminar
	// No retorna cap objecte JSON.
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
	
	// Retorna el codi HTML per visualitzar un array d'empleats passat per parametre, en una TABLE
	function employeeArrayToTable(employeesArray){
		var output = "<table border=1 >";
		
		output+="<tr><th>ID</th><th>Nom</th><th>Feina</th><th>Salari</th></tr>";
		
		for(var i=0;i<employeesArray.length;i++){
			output+=employeeToRow(employeesArray[i]);
		}
		
		output+="</table>";
		
		return output;
	}
	
	// Retorna el codi HTML per visualitzar un objecte empleat passat per parametre, en concret una fila TR (d'una taula TABLE)
	function employeeToRow(employee){
		
		var output="<tr>";
		
		output+= "<td>"+employee.id+"</td>";
		output+= "<td>"+employee.name+"</td>"
		output+= "<td>"+employee.job+"</td>";
		output+= "<td>"+employee.salary+"</td>";
		
		output+="</tr>";
		
		return output;
		
	}
	
	// Retorna el codi HTML per visualitzar un objecte empleat passat per parametre, en una TABLE
	function employeeToTable(employee){
		var output = "<table border=1 >";
		
		output+="<tr><th>ID</th><th>Nom</th><th>Feina</th><th>Salari</th></tr>";
		output+=employeeToRow(employee);
		output+="</table>";
		
		return output;
	}
		
	
