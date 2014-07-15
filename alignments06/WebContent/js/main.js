$(document).ready(function() {
	var i = 0;
	var info = 0;

	$.ajax({
		url : 'data/guitar.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			info = data;
			var imgpath = "images/";
			imgpath = imgpath + info.allProducts[i].image_path;

			$("#myimg").attr('src', imgpath);

			$("#innerproduct").text(info.allProducts[i].product_discription);
            
		}

	});

	$("#next_btn").click(function() {
		i++;
		if(i<7){
		var imgpath = "images/" + info.allProducts[i].image_path;
		$('#myimg').attr('src', imgpath);
		}
		else{i=-1;}
		$("#innerproduct").text(info.allProducts[i].product_discription);
		 //$("#price").text(info.allProducts[i].price_de);
	});
	
	$("#prev_btn").click(function() {
		i--;
		if(i>=0){
		var imgpath = "images/" + info.allProducts[i].image_path;
		$('#myimg').attr('src', imgpath);}
		else{i=7;}
		$("#innerproduct").text(info.allProducts[i].product_discription);
	});
	
	
	$("#next_page").click(function(){
	    window.location="http://localhost:8080/guiterCeneter/guiter1.html";
	   
	});

});






















