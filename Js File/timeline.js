(function()
{
  var items=document.querySelectorAll(".timeline ul li");

  function isElementInScreen(item)
  {
    var rect=item.getBoundingClientRect();

    return(
      rect.top>=0 &&
      rect.left>=0 && 
      rect.bottom<=(window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=(window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackfunc()
  {
    for(var i=0;i<items.length;i++)
    {
      if(isElementInScreen(items[i]))
      {
        items[i].classList.add("in-view");
      }
    }
  }
  window.addEventListener("scroll",callbackfunc);

})();