
$(document).ready(function(){
$('.slideTogglebox').hide();
$('.slideTogglebox_from').hide();
$('.slideTogglebox_for').hide();
$('.slideTogglebox_tags').hide();
$('.slideTogglebox_updates').hide();
$('.slideTogglebox_creation_date').hide();
$('#checked_tasks').hide();
$('.add-email').hide();

$('.dropdown3').hide();
$('.task').show();
$('.task2').hide();
$('.task3').hide();
$('.calendar').hide();

function toggleChecked() {
$(".checkbox").each( function() {
$(this).attr("checked","checked");
})
}

$("#slideToggle").click(function () {

			if($(".slideTogglebox").css("display") == "block")
			{
			
			$("#slideToggle").removeClass('title3_active');
			}
			
			if($(".slideTogglebox").css("display") == "none")
			{
			$("#slideToggle").addClass('title3_active');
			}
   $('.slideTogglebox').slideToggle();
});//#slideToggle

$("#slideToggle_from").click(function () {

			if($(".slideTogglebox_from").css("display") == "block")
			{
			
			$("#slideToggle_from").removeClass('title4_active');
			}
			
			if($(".slideTogglebox_from").css("display") == "none")
			{
			$("#slideToggle_from").addClass('title4_active');
			}
   $('.slideTogglebox_from').slideToggle();
});//#slideToggle_from

$("#slideToggle_for").click(function () {

			if($(".slideTogglebox_for").css("display") == "block")
			{
			
			$("#slideToggle_for").removeClass('title5_active');
			}
			
			if($(".slideTogglebox_for").css("display") == "none")
			{
			$("#slideToggle_for").addClass('title5_active');
			}
   $('.slideTogglebox_for').slideToggle();
});//#slideToggle_for

$("#slideToggle_tags").click(function () {

			if($(".slideTogglebox_tags").css("display") == "block")
			{
			
			$("#slideToggle_tags").removeClass('title6_active');
			}
			
			if($(".slideTogglebox_tags").css("display") == "none")
			{
			$("#slideToggle_tags").addClass('title6_active');
			}
   $('.slideTogglebox_tags').slideToggle();
});//#slideToggle_tags

$("#slideToggle_updates").click(function () {

			if($(".slideTogglebox_updates").css("display") == "block")
			{
			
			$("#slideToggle_updates").removeClass('title7_active');
			}
			
			if($(".slideTogglebox_updates").css("display") == "none")
			{
			$("#slideToggle_updates").addClass('title7_active');
			}
   $('.slideTogglebox_updates').slideToggle();
});//#slideToggle_updates

$("#slideToggle_creation_date").click(function () {

			if($(".slideTogglebox_creation_date").css("display") == "block")
			{
			
			$("#slideToggle_creation_date").removeClass('title8_active');
			}
			
			if($(".slideTogglebox_creation_date").css("display") == "none")
			{
			$("#slideToggle_creation_date").addClass('title8_active');
			}
   $('.slideTogglebox_creation_date').slideToggle();
});//#slideToggle_creation_date


$(".task").css("display","block");
$(".categories2").addClass('categories2_active');

$(".categories2").click(function () {


					if($(".task").css("display") == "block")
					{
					
					$(".categories2").removeClass('categories2_active');
					
						
					}
					
					if($(".task").css("display") == "none")
					{
					$(".categories2").addClass('categories2_active');
					
						

					}
$('.task').slideToggle('fast');

});

$(".task4").css("display","block");
$(".categories4").addClass('categories4_active');

$(".categories4").click(function () {


					if($(".task4").css("display") == "block")
					{
					
					$(".categories4").removeClass('categories4_active');
					
						
					}
					
					if($(".task4").css("display") == "none")
					{
					$(".categories4").addClass('categories4_active');
					
						

					}
$('.task4').slideToggle('fast');

});

$(".task5").css("display","block");
$(".categories5").addClass('categories5_active');

$(".categories5").click(function () {


					if($(".task5").css("display") == "block")
					{
					
					$(".categories5").removeClass('categories5_active');
					
						
					}
					
					if($(".task5").css("display") == "none")
					{
					$(".categories5").addClass('categories5_active');
					
						

					}
$('.task5').slideToggle('fast');

});




$(".categories3").click(function () {


					if($(".task3").css("display") == "block")
					{
					
					$(".categories3").removeClass('categories3_active');
					
						
					}
					
					if($(".task3").css("display") == "none")
					{
					$(".categories3").addClass('categories3_active');
					
						

					}
					
					
$('.task3').slideToggle('fast');

});

$(".categories").click(function () {
					if($(".task2").css("display") == "block")
					{
					
					$(".categories").removeClass('categories_active');
					}
					
					if($(".task2").css("display") == "none")
					{
					$(".categories").addClass('categories_active');
					}
$('.task2').slideToggle('fast');
});


$("#slideTogglea").click(function () {
					if($(".dropdown3").css("display") == "block")
					{
					
					$("#slideTogglea").removeClass('slideTogglea_active');
					$("#slideTogglea").addClass('notifications');
					}
					
					if($(".dropdown3").css("display") == "none")
					{
					$("#slideTogglea").addClass('slideTogglea_active');
					$("#slideTogglea").removeClass('notifications');
					
					}
   $('.dropdown3').slideToggle();
});

$("#slideToggle3").click(function () {
					if($(".add-email").css("display") == "block")
					{
					
					$("#slideToggle3").removeClass('add-tab_active');
					$("#slideToggle3").addClass('add-tab');
					}
					
					if($(".add-email").css("display") == "none")
					{
					$("#slideToggle3").addClass('add-tab_active');
					$("#slideToggle3").removeClass('add-tab');
					
					}
   $('.add-email').slideToggle();
});

$("#slideToggle12").click(function () {
					if($(".calendar").css("display") == "block")
					{
					
					$("#slideToggle12").removeClass('due3_active');
					$("#slideToggle12").addClass('due3');
					}
					
					if($(".calendar").css("display") == "none")
					{
					$("#slideToggle12").addClass('due3_active');
					$("#slideToggle12").removeClass('due3');
					
					}
   $('.calendar').slideToggle();
});






$(".check").live('click', function(){
						
										$(".task").removeClass('task-active');
										$("#selected_task").css('display','none');
										$("#new_task").css('display','none');
										$("#checked_tasks").css('display','block');


if(!$(this).prev('input[type="checkbox"]').prop('checked')){
        $(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');

$(this).css('background-image', "url(imgs/checked.png)");
$(this).parents('.task').css('background','#f4f7f7');
$(this).parents('.task2').css('background','#f4f7f7');
}
else{
        $(this).prev('input[type="checkbox"]').prop('checked', false);
       $(this).css('background-image', "url(imgs/unchecked.png)");
	   $(this).parents('.task').css('background','');
	   $(this).parents('.task2').css('background','');
	  
    }
	
	var flag="false";
	var value="";
	$(".task .check").each(function(){
		
		
		value=$(this).prev("input[type='checkbox']").attr('checked');
		//alert(value);
		if(value=="checked")
		{
			flag="true";
		}
		
	});
	
	if(flag=="true")
	{
		$("#selected_task").css('display','none');
		$("#checked_tasks").css('display','block');
	}
	else
	{
		$(".task").removeClass('task-active');
		$("#checked_tasks").css('display','none');
		$("#new_task").css('display','none');
		$("#selected_task").css('display','block');
	}

});


$(".check-all").live('click', function(){

										$(".task").removeClass('task-active');
										$("#selected_task").css('display','none');
										$("#new_task").css('display','none');
										$("#checked_tasks").css('display','block');

if(!$(this).prev('input[type="checkbox"]').prop('checked')){
	
			$(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');
			$(".tasks-container .msg").show();
			
			$(this).css('background-image', "url(imgs/checked.png)");
			$('.task').css('background','#f4f7f7');
			$('.task2').css('background','#f4f7f7');
			
			$(".task input[type='checkbox']").each(function(){
			
			$(this).attr('checked','checked');
			
			$(this).parent('.task').css('background','#f4f7f7');
			$(this).next(".check").css('background-image', "url(imgs/checked.png)");
															})
															
			/*$(".task2 input[type='checkbox']").each(function(){
			$(".task2 input[type='checkbox']").attr('checked','checked');
			$(this).parent('.task2').css('background','#f4f7f7');
			$(this).next(".check").css('background-image', "url(imgs/checked.png)");
															})*/
			
			}
else{
		
        $(this).prev('input[type="checkbox"]').prop('checked', false);
      	$(".tasks-container .msg").hide();
	   $(this).css('background-image', "url(imgs/unchecked.png)");
	   $('.task').css('background','');
	   $('.task2').css('background','');
	   $(".check").prev('input[type="checkbox"]').prop('checked', false);
	   $(".check").css('background-image', "url(imgs/unchecked.png)");
	   $("#checked_tasks").css('display','none');
	   $("#selected_task").css('display','block');
	   
    }

});


$(".check2").live('click', function(){

										

if(!$(this).prev('input[type="checkbox"]').prop('checked')){
	
			$(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');
			$(this).css('background-image', "url(imgs/checked.png)");
			
			$(".task input[type='checkbox']").each(function(){
			
			$(this).attr('checked','checked');
			
			$(this).parent('.task2').css('background','#f4f7f7');
			$(this).next(".check2").css('background-image', "url(imgs/checked.png)");
															})
			
			}
else{
		
        $(this).prev('input[type="checkbox"]').prop('checked', false);
	   $(this).css('background-image', "url(imgs/unchecked.png)");
	   $('.task').css('background','');
	   $('.task2').css('background','');
	   $(".check").prev('input[type="checkbox"]').prop('checked', false);
	   $(".check").css('background-image', "url(imgs/unchecked.png)");
	   
    }

});



$(".close").click(function(){
	$(this).parent().hide();
});

$(".close3").click(function(){
	$('.popup').hide();
});

$(".fullscreen").click(function(){
	$('.popup').show();
});

$(".tasks-container .msg").hide();

/*$("#reset").click(function(){
	location.reload();
});*/
$(".filter-select .title2").live('click', function(){

if(!$(this).prev('input[type="checkbox"]').prop('checked')){
			$(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');
			
			
			$(this).parent(".filter-select").css('color', "#d61c14");
			return false;
			
			
			}
else{
        $(this).prev('input[type="checkbox"]').prop('checked', false).removeAttr('checked');
      	
	   $(this).parent(".filter-select").css('color', "");
	   
	   
	   
    }

});//input,updates,memories

$(".filter-select .title2").each(function(){
if($(this).prev('input[type="checkbox"]').attr('checked')=='checked')
{
$(this).parent(".filter-select").css('color', "#d61c14");
}

});

$(".filter-container .sub a").live('click', function(){
if(!$(this).prev('input[type="checkbox"]').prop('checked')){
        $(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');

$(this).parent().addClass('sub_active');
}
else{
        $(this).prev('input[type="checkbox"]').prop('checked', false).removeAttr('checked');
		$(this).parent().removeClass('sub_active');
       
    }
	return false;
});

$(".filter-container .sub a").each(function(){
if($(this).prev('input[type="checkbox"]').attr('checked')=='checked')
{
$(this).parent().addClass('sub_active');
}
});


$(".mark").live('click', function(){
if(!$(this).prev('input[type="checkbox"]').prop('checked')){
        $(this).prev('input[type="checkbox"]').prop('checked', true).attr('checked','checked');

$(this).css('background-image', "url(imgs/star-selected.png)");
}
else{
        $(this).prev('input[type="checkbox"]').prop('checked', false).removeAttr('checked');
		$(this).removeClass('mark_selected');
       $(this).css('background-image', "");
    }

});


						
//For Circle
$(".status .status-progress_25_active").mouseover(function(){
if($(this).parent().hasClass('status-progress_25') || $(this).parent().hasClass('status-progress_100') )
{
}
else
{
$(this).parent(".status").addClass('status-progress_25');
				$(this).mouseout(function(){
				
				$(this).parent(".status").removeClass('status-progress_25');
				
				});
}
});	

$(".status .status-progress_50_active").mouseover(function(){
if($(this).parent().hasClass('status-progress_50') || $(this).parent().hasClass('status-progress_100') )
{
}
else
{
$(this).parent(".status").addClass('status-progress_50');
			$(this).mouseout(function(){
			
			$(this).parent(".status").removeClass('status-progress_50');
			
			});
}
});	

$(".status .status-progress_75_active").mouseover(function(){
if($(this).parent().hasClass('status-progress_75') || $(this).parent().hasClass('status-progress_100') )
{
}
else
{
$(this).parent(".status").addClass('status-progress_75');
		$(this).mouseout(function(){
		$(this).parent(".status").removeClass('status-progress_75');
		});
}
});		

$(".status .status-progress_100_active").mouseover(function(){
if($(this).parent().hasClass('status-progress_100') || $(this).parent().hasClass('status-progress_100')  )
{
}
else
{
$(this).parent(".status").addClass('status-progress_100');
	$(this).mouseout(function(){
	$(this).parent(".status").removeClass('status-progress_100');
	});
}
});

$(".status .status-progress_25_active").click(function(){
if($(this).parent().hasClass('status-progress_100'))
{
}
else
{
$(this).parent(".status").removeClass('status-progress_50');
$(this).parent(".status").removeClass('status-progress_75');
$(this).parent(".status").removeClass('status-progress_100');
$(this).parent(".status").addClass('status-progress_25');
$(this).mouseout(function(){
$(this).parent(".status").addClass('status-progress_25');
});	
}
return false;
});

$(".status .status-progress_50_active").click(function(){
if($(this).parent().hasClass('status-progress_100'))
{
}
else
{
$(this).parent(".status").removeClass('status-progress_25');
$(this).parent(".status").removeClass('status-progress_75');
$(this).parent(".status").removeClass('status-progress_100');
$(this).parent(".status").addClass('status-progress_50');
$(this).mouseout(function(){
$(this).parent(".status").addClass('status-progress_50');
});	
}
return false;
});

$(".status .status-progress_75_active").click(function(){
if($(this).parent().hasClass('status-progress_100'))
{
}
else
{
$(this).parent(".status").removeClass('status-progress_25');
$(this).parent(".status").removeClass('status-progress_50');
$(this).parent(".status").removeClass('status-progress_100');
$(this).parent(".status").addClass('status-progress_75');
$(this).mouseout(function(){
$(this).parent(".status").addClass('status-progress_75');
});	
}
return false;
})						

$(".status .status-progress_100_active").click(function(){
$(this).parent(".status").removeClass('status-progress_25');
$(this).parent(".status").removeClass('status-progress_50');
$(this).parent(".status").removeClass('status-progress_75');
$(this).parent(".status").addClass('status-progress_100');
$(this).mouseout(function(){
$(this).parent(".status").addClass('status-progress_100');
});	
return false;
});				
		

						
//middle part title click
$(".title10").live('click', function(){
$(".calendar").css('display','none');
$("#new_task").css('display','none');
$("#checked_tasks").css('display','none');
$("#selected_task").css('display','block');
$(".task,.task2,.task3").removeClass('task-active');
$(this).parent().parent().parent().addClass('task-active');
var new_title=$(this).find('span').text();
var new_details=$(this).next().text();
var new_author=$(this).parent().parent().next().find('.sorting2 .author').text();
var new_date=$(this).parent().parent().next().find('.sorting2 span').text();
$("#selected_task .task_for_s input").val(new_author);
$("#selected_task .task-keywords input").val(new_details);
$("#selected_task input.fields2").val(new_title);
});

$(".new-task").click(function(){
$(".task").removeClass('task-active');
$("#selected_task").css('display','none');
$("#checked_tasks").css('display','none');
$("#new_task").css('display','block');

});





$("input.selected_task").keyup(function(){
if($(".task-active .title10 span em").text())
{

	
}
else
{
	var text=$(".task-active .title10 span").html()
						  $(".task-active .title10 span").html('<em>'+text+'</em>');
}
										  });
						   
										
									   

});//DOM End

 $(document).ready(function() {
			createDropDown1();
            createDropDown2();
			createDropDown3();
			createDropDown4();
			createDropDown5();
			createDropDown6();
			
			$(".dropdown_source1 dt .selectArrow2").click(function() {//source1 start
                $(".dropdown_source1 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source1"))
                    $(".dropdown_source1 dd ul").hide();
            });
                        
            $(".dropdown_source1 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source1 dt a").html(text);
                $(".dropdown_source1 dd ul").hide();
                
                var source = $("#source1");
                source.val($(this).find("span.value").html())
				return false;
            });//source 1end
			
			$(".dropdown_source2 dt .selectArrow2").click(function() {//source2 start
                $(".dropdown_source2 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source2"))
                    $(".dropdown_source2 dd ul").hide();
            });
                        
            $(".dropdown_source2 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source2 dt a").html(text);
                $(".dropdown_source2 dd ul").hide();
                
                var source = $("#source2");
                source.val($(this).find("span.value").html())
				return false;
            });//source 2end
            
            $(".dropdown_source3 dt .selectArrow2").click(function() {//source3 start
                $(".dropdown_source3 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source3"))
                    $(".dropdown_source3 dd ul").hide();
            });
                        
            $(".dropdown_source3 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source3 dt a").html(text);
                $(".dropdown_source3 dd ul").hide();
                
                var source = $("#source3");
                source.val($(this).find("span.value").html())
				return false;
            });//source3 end
			
			$(".dropdown_source4 dt .selectArrow4").click(function() {//source4 clock start
                $(".dropdown_source4 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source4"))
                    $(".dropdown_source4 dd ul").hide();
            });
                        
            $(".dropdown_source4 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source4 dt a").html(text);
                $(".dropdown_source4 dd ul").hide();
                
                var source = $("#source4");
                source.val($(this).find("span.value").html())
				return false;
            });//source4 clock end
			
			$(".dropdown_source5 dt .selectArrow4 ").click(function() {//source5 clock2 start
                $(".dropdown_source5 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source5"))
                    $(".dropdown_source5 dd ul").hide();
            });
                        
            $(".dropdown_source5 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source5 dt a").html(text);
                $(".dropdown_source5 dd ul").hide();
                
                var source = $("#source5");
                source.val($(this).find("span.value").html())
				return false;
            });//source5 clock2 end
			
			$(".dropdown_source6 dt .selectArrow2").click(function() {//source6 start
                $(".dropdown_source6 dd ul").toggle();
				return false;
				            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown_source6"))
                    $(".dropdown_source6 dd ul").hide();
            });
                        
            $(".dropdown_source6 dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown_source6 dt a").html(text);
                $(".dropdown_source6 dd ul").hide();
                
                var source = $("#source6");
                source.val($(this).find("span.value").html())
				return false;
            });//source6 end
			
 });
        function createDropDown1(){
            var source = $("#source1");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox1_new").append('<dl id="target_source1" class="dropdown_source1"></dl>')
            $("#target_source1").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="selectArrow2"></span></dt>')
            $("#target_source1").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source1 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
		function createDropDown2(){
            var source = $("#source2");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox2_new").append('<dl id="target_source2" class="dropdown_source2"></dl>')
            $("#target_source2").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="selectArrow2"></span></dt>')
            $("#target_source2").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source2 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
        function createDropDown3(){
            var source = $("#source3");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox3_new").append('<dl id="target_source3" class="dropdown_source3"></dl>')
            $("#target_source3").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="selectArrow2"></span></dt>')
            $("#target_source3").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source3 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
		function createDropDown4(){
            var source = $("#source4");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox4_new").append('<dl id="target_source4" class="dropdown_source4"></dl>')
            $("#target_source4").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="drpwdn_text">Clock</span><span class="selectArrow4"></span></dt>')
            $("#target_source4").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source4 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
		function createDropDown5(){
            var source = $("#source5");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox5_new").append('<dl id="target_source5" class="dropdown_source5"></dl>')
            $("#target_source5").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="selectArrow4"></span></dt>')
            $("#target_source5").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source5 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
		function createDropDown6(){
            var source = $("#source6");
            var selected = source.find("option[selected]");
            var options = $("option", source);
            
            $("#selectBox6_new").append('<dl id="target_source6" class="dropdown_source6"></dl>')
            $("#target_source6").append('<dt><a>' + selected.text() + 
                '<span class="value">' + selected.val() + 
                '</span></a><span class="selectArrow2"></span></dt>')
            $("#target_source6").append('<dd><ul></ul></dd>')

            options.each(function(){
                $("#target_source6 dd ul").append('<li><a href="#">' + 
                    $(this).text() + '<span class="value">' + 
                    $(this).val() + '</span></a></li>');
            });
        }
		
			
		


function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
    
   group.css('min-height',tallest);
}
$(document).ready(function() {
   equalHeight($(".my_column"));
   $("#filter").css('min-height',tallest+180);
   
		$(".my_column").mouseover(function(){
		$(".my_column").css('min-height','690px');
		equalHeight($(".my_column"));
		$("#filter").css('min-height',tallest+180);
		});

		
		
		
});


	//<![CDATA[
	var a1;
	var a2;
	var a3;
	
	
	jQuery(function () {

		a1 = $('.search').autocomplete({
			width: 213,
			delimiter: /(,|;)\s*/,
			lookup: 'Andorra,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina, Burundi,Cambodia,Cameroon,Canada,Cape Verde,Central African Rep,Chad,Chile,China,Colombia,Comoros,Congo,Congo {Democratic Rep},Costa Rica,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland {Republic},Israel,Italy,Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Korea North,Korea South,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar, {Burma},Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palau,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russian Federation,Rwanda,St Kitts & Nevis,St Lucia,Saint Vincent & the Grenadines,Samoa,San Marino,Sao Tome & Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tonga,Trinidad & Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe'.split(',')
		});
		
		a2 = $('.fields.for').autocomplete({
			width: 347,
			delimiter: /(,|;)\s*/,
			lookup: 'Andorra,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina, Burundi,Cambodia,Cameroon,Canada,Cape Verde,Central African Rep,Chad,Chile,China,Colombia,Comoros,Congo,Congo {Democratic Rep},Costa Rica,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland {Republic},Israel,Italy,Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Korea North,Korea South,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar, {Burma},Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palau,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russian Federation,Rwanda,St Kitts & Nevis,St Lucia,Saint Vincent & the Grenadines,Samoa,San Marino,Sao Tome & Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tonga,Trinidad & Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe'.split(',')
		});
		
		a2 = $('.fields.tags').autocomplete({
			width: 347,
			delimiter: /(,|;)\s*/,
			lookup: 'Andorra,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina, Burundi,Cambodia,Cameroon,Canada,Cape Verde,Central African Rep,Chad,Chile,China,Colombia,Comoros,Congo,Congo {Democratic Rep},Costa Rica,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland {Republic},Israel,Italy,Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Korea North,Korea South,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar, {Burma},Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palau,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russian Federation,Rwanda,St Kitts & Nevis,St Lucia,Saint Vincent & the Grenadines,Samoa,San Marino,Sao Tome & Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tonga,Trinidad & Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe'.split(',')
		});
		
		a2 = $('.fields.visible-to').autocomplete({
			width: 347,
			delimiter: /(,|;)\s*/,
			lookup: 'Andorra,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina, Burundi,Cambodia,Cameroon,Canada,Cape Verde,Central African Rep,Chad,Chile,China,Colombia,Comoros,Congo,Congo {Democratic Rep},Costa Rica,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland {Republic},Israel,Italy,Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Korea North,Korea South,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar, {Burma},Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palau,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russian Federation,Rwanda,St Kitts & Nevis,St Lucia,Saint Vincent & the Grenadines,Samoa,San Marino,Sao Tome & Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tonga,Trinidad & Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe'.split(',')
		});
	

		

		

	});

/*#######################################################################################################*/

$(document).ready(function() {
    var theLoc = $('.right-form').position().top;
    $(window).scroll(function() {
        if(theLoc >= $(window).scrollTop()) {
            if($('.right-form').hasClass('fixed')) {
                $('.right-form').removeClass('fixed');
            }
        } else { 
            if(!$('.right-form').hasClass('fixed')) {
                $('.right-form').addClass('fixed');
            }
        }
    });
});