<script>
<?php
for($i=0;$<10;$i++)
{
?>
$(document).ready(function(){

	$('.task<?php echo $i;?>').hide();
	
				$(".categories"+i).click(function () {
				
				
						if($(".task<?php echo $i;?>").css("display") == "block")
						{
						
						$(".categories<?php echo $i;?>").removeClass('categories<?php echo $i;?>_active');
						
						
						}
						
						if($(".task<?php echo $i;?>").css("display") == "none")
						{
						$(".categories<?php echo $i;?>").addClass('categories<?php echo $i;?>_active');
						
						
						
						}
						$('.task<?php echo $i;?>').slideToggle('fast');
				
				});

});

<?php
}
?>
</script>