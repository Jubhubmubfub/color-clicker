function random_color()
{
  var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
  color = '#'  //this is what we'll return!
  for(var i = 0; i < 6; i++)
  {
     x = Math.floor((Math.random()*16))
     color += rgb[x];
  }
  return color;
}

// console.log("hello world");
$(document).ready(function(){
  $('#large_box').click(function(){
    //  alert('you clicked the big box!');
     $('div').css('background',random_color());
     $('div div').css('background',random_color());
  });

  $('.side_box').click(function(event){
     event.stopPropagation();
     })
  $('.side_box').click(function(){
    $(this).siblings().css('background',random_color());
    });
  // });

  //middle box
  $('.middle_box').click(function(event){
     event.stopPropagation();
  });
  $('.middle_box').click(function(){
    $('#large_box').css('background',random_color());
  });//end middle_box flick function

}); //end (document).ready function
