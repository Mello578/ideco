export function pagination(rows = 10) {
  if ($('#nav')) {
    $('#nav').detach();
  }
  const rowsShown = rows;
  const rowsTotal = $('#tableFlight tbody tr').length;
  $('#tableFlight').after('<div id="nav"><span class="infoRows"></span><div class="infoRows__separator"></div></div>');
  const numPages = rowsTotal / rowsShown;
  for (let i = 0; i < numPages; i++) {
    const pageNum = i + 1;
    $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
  }
  $('#tableFlight tbody tr').hide();
  $('#tableFlight tbody tr').slice(0, rowsShown).show();

  $('#nav a').bind('click', function () {
    $('#nav a').removeClass('active');
    $(this).addClass('active');
    const currPage = $(this).attr('rel');
    const startItem = currPage * rowsShown;
    const endItem = startItem + rowsShown;

    const numbShowRows = (rowsTotal - startItem) > rowsShown
      ? rowsShown
      : rowsTotal - startItem;
    const infoRows = `Показано ${numbShowRows} из ${rowsTotal} рейсов`;
    $('.infoRows').text(infoRows);

    $('#tableFlight tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
  });
  $('#nav a:first').click();
}
