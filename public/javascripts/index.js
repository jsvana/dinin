$(function() {
  $('.meal').each(function() {
    var content = '<div class="btn-group" style="width:100%;">';
    content += '<a href="#" class="btn btn-danger">-</a>';
    content += '<a href="#" class="btn btn-success">+</a>';
    content += '</div>';
    content += '<div class="pull-right">' + $(this).data('id') + '</div>';

    $(this).popover({
      title: 'Meal',
      content: content,
      placement: 'right'
    });
  });

  $('.meal').on('click', function(e) {
    $('.meal').popover('hide');
    $(this).popover('show');
  });
});
