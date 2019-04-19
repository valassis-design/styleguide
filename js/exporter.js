var fileSelect = document.getElementById("logoOption");
var userWidth = 300;

var playGround = function(){
	var resizeValue = document.getElementById("logoWidth").value;
	userWidth = resizeValue;
	document.getElementsByTagName("svg")[0].setAttribute("id","svgResized");
	document.getElementsByTagName("svg")[0].setAttribute("width", resizeValue);
	var fileRename = "valassis-logo-" + resizeValue + "px.png";
	document.getElementById("data").setAttribute("download", fileRename);
}


// SVG to DATA URL Library

function exportResizedSvg() {
	var svg = ($('#svgPreview > svg')[0]);
	var img = document.getElementById("fromcanvas");
	svg.toDataURL("image/png", {
		callback: function(data) {
			img.setAttribute("src", data)
			var a = document.querySelector("#data")
			a.href = data
		}
	})
}

// Lump em both together & show the download jammy
var resizeAndExport = function () {
	playGround();
	exportResizedSvg();
	if (userWidth >= 90) {
		$('#download_wrapper').removeClass('hidden');
		$('#download_warning').addClass('hidden');
	} else if (!userWidth) {
		$('#download_warning').addClass('hidden');
		$('#download_wrapper').addClass('hidden');
	} else {
		$('#download_wrapper').addClass('hidden');
		$('#download_warning').removeClass('hidden');
	}
}

var cleanUpAndGetNewSvg = function () {
	$('#svgPreview').empty();
	$('#download_wrapper').addClass('hidden');
	$('#data').attr('href', 'data:').attr('download', 'svg');
	$('#fromcanvas').attr('src', '');
}

fileSelect.addEventListener("change", function(){
	var fileSvg = fileSelect.selectedIndex;
	var fileSrc;

	// WAGWAG WIT DE FILES MI BREDREN?
	console.log(fileSvg);

	switch (fileSvg) {
		case 0:
			$('#svgPreview').empty();
			$('.sizing').addClass('hidden');
			$('#download_wrapper').addClass('hidden');
			break;
		case 1:
			$.ajax({
				url: 'img/logos/Valassis-Logo_Navy.svg',
				dataType: 'html',
				type: 'GET',
				success: function(data) {
					cleanUpAndGetNewSvg();
					$('#svgPreview').prepend(data);
					$('#svgPreview > svg').attr("width", userWidth);
					fileSrc = data;
				}
			});
			$('.sizing').removeClass('hidden');
			break;
		case 2:
			$.ajax({
				url: 'img/logos/Valassis-Logo_White.svg',
				dataType: 'html',
				type: 'GET',
				success: function(data) {
					cleanUpAndGetNewSvg();
					$('#svgPreview').prepend(data);
					$('#svgPreview > svg').attr("width", userWidth);
					fileSrc = data;
				}
			});
			$('.sizing').removeClass('hidden');
			break;
		case 3:
			$.ajax({
				url: 'img/logos/Valassis-Digital-Logo_Navy.svg',
				dataType: 'html',
				type: 'GET',
				success: function(data) {
					cleanUpAndGetNewSvg();
					$('#svgPreview').prepend(data);
					$('#svgPreview > svg').attr("width", userWidth);
					fileSrc = data;
				}
			});
			$('.sizing').removeClass('hidden');
			break;
		case 4:
			$.ajax({
				url: 'img/logos/Valassis-Digital-Logo_White.svg',
				dataType: 'html',
				type: 'GET',
				success: function(data) {
					cleanUpAndGetNewSvg();
					$('#svgPreview').prepend(data);
					$('#svgPreview > svg').attr("width", userWidth);
					fileSrc = data;
				}
			});
			$('.sizing').removeClass('hidden');
			break;

	}
});



//$('#logoWidth').on('keyup input change mousewheel', playGround);

$('#logoWidth').on('keyup input change mousewheel', resizeAndExport);



