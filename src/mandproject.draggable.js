jQuery.fn.extend(
{
  draggable: function ()
  {
    $(this).on('mousedown', function() {
      $(this).addClass('mandproject-movable');

      $('.mandproject-movable').on('mousemove', function(event) {
        var thisX = event.pageX - ($(this).width() / 2);
        var thisY = event.pageY - ($(this).height() / 2);

        $('.mandproject-movable').offset({
          left: thisX,
          top: thisY
        });
      });


    }).on('mouseup', function() {
      $(this).removeClass('mandproject-movable');
    });
  }
});
