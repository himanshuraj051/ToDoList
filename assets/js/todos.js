$('ul').on("click", "li", function()
{
    $(this).toggleClass("completed");
});
$('ul').on("click", "span", function(event)
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
});

$("ul").on("mouseover", "li", function(){
  
    var temp = $(this).attr("id");
    var dateId = temp + "b";

    $('#' + dateId).css("display", "none");

  });

  $("ul").on("mouseleave", "li", function(){
    
    var temp = $(this).attr("id");
    var dateId = temp + "b";

    $('#' + dateId).css("display", "block");

  });

  var uni = 1;

$("input[type = 'text']").keypress(function(event)
{
    if(event.which === 13)
    {
        var todoText = $(this).val();
        var res = todoText.slice(0, 35);
        var dayy = new Date().getDate();
        var monthh = new Date().getMonth();
        var yearr = new Date().getFullYear();
        var timee = dayy + '/' + monthh + '/' + yearr;
        uni++;

        if(res === todoText)
        {

        }
        else
        res+="...";
        
        $(this).val("");

        if(todoText != "")
        $("ul").prepend("<li id =" + uni + "><span><i class='fa fa-trash'></i></span>" + res + "  <div class='date' id=" + uni + "b>" + timee + "</div></li>")
    }
})

$('.fa-plus').click(function()
{
    $("input[type = 'text']").fadeToggle();
})