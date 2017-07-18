$('.custom-tabs').tabCollapse({
    tabsClass: 'hidden-sm hidden-xs',
    accordionClass: 'visible-sm visible-xs'
});

// read-more
$('.read-more').readmore({
	speed: 500,
	moreLink: '<a class="btn btn-third btn-small">lire la suite</a>',
	lessLink: '<a class="btn btn-third btn-small">fermer</a>',
	blockCSS: 'display: inline-block; width: auto;',
	collapsedHeight: 472
});

// contact accordion
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-minus glyphicon-plus');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


$('.chevron_toggleable').on('click', function() {
    $(this).toggleClass('fa-chevron-up fa-chevron-down');
});

// Equal Height   
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

// Image Fit Container
function ImageFitCont() {
	$(".imageFit").imgLiquid();
}

// search
// when the page loads
$(function(){
	// When the toggle areas in your navbar are clicked, toggle them
	$(".search-button, .search-icon").click(function(e){
		e.preventDefault();
		$(".search-button, #search-form").toggle();
	});
})  

$(window).load(function() {
	// lady naturelle
	equalHeight($(".custom-box .product-box"));
    equalHeight($(".custom-box .product-box h4"));
	
});
$(document).ready(function() {
    // carousel	
	$('.carousel').owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		goToFirst: true,  //Slide to first item if autoPlay reach end
	    goToFirstSpeed:1000,  
		items: 1,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		mouseDrag: false,
		touchDrag: false,
		autoHeight : true
		/*transitionStyle: "fade"*/
		/*responsive: true*/	
	});
	
	// frontpage form
	$(".steto-text, .st2").click(function () {
		$(".steto-text, .steto-form").toggle();
	});
	
	// multi-select 
	$('#example-getting-started').multiselect({
        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('.multiselect-container div.checkbox').each(function (index) {

        var id = 'multiselect-' + index,
            $input = $(this).find('input');

        // Associate the label and the input
        $(this).find('label').attr('for', id);  
        $input.attr('id', id);

        // Remove the input from the label wrapper
        $input.detach();

        // Place the input back in before the label
        $input.prependTo($(this));

        $(this).click(function (e) {
            // Prevents the click from bubbling up and hiding the dropdown
            e.stopPropagation();
        });

    });
	
    // concept 
	ImageFitCont();
	
	// one month
	equalHeight($(".category-wrapper .category-box h2"));
	equalHeight($(".category-wrapper .category-box .box"));
	
	// multiselect
	$("#example-getting-started").multiselect();
	
	// advice
	equalHeight($(".advice-wrapper h3"));
	
	$(window).resize(function () {		
		// one month
		equalHeight($(".category-wrapper .category-box h2"));
		equalHeight($(".category-wrapper .category-box .box"));
		// lady naturelle
		equalHeight($(".custom-box .product-box"));
        equalHeight($(".custom-box .product-box h4"));
		//advice
		equalHeight($(".advice-wrapper h3"));
    });
});

