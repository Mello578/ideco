import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {TableBody} from './TableBody';
import {sortingData} from '../../js/utils/requestsOfData';

const {TABLE_HEADER} = require('../../../constants/constants');

class Table extends Component {

  sortingByColumns(e) {
    sortingData(e.target.cellIndex, this.props.filterData);
  }

  componentDidMount() {
    window.onload = () => {
      $('#tableFlight').after('<div id="nav"></div>');
      const rowsShown = 10;
      const rowsTotal = $('#tableFlight tbody tr').length;
      const numPages = rowsTotal / rowsShown;
      for (let i = 0; i < numPages; i++) {
        const pageNum = i + 1;
        $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
      }
      $('#tableFlight tbody tr').hide();
      $('#tableFlight tbody tr').slice(0, rowsShown).show();
      $('#nav a:first').addClass('active');
      $('#nav a').bind('click', function () {

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        const currPage = $(this).attr('rel');
        const startItem = currPage * rowsShown;
        const endItem = startItem + rowsShown;
        $('#tableFlight tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
      });
    }
  }

  render() {
    return (
      <table className={'table-flight'} id={'tableFlight'}>
        <thead className={'table-flight--header'}>
        <tr>
          {
            TABLE_HEADER.split(',').map((item, key) => {
              return (<th key={key} onClick={(e) => this.sortingByColumns(e)}>
                {item}
              </th>)
            })
          }
        </tr>
        </thead>
        <tbody className={'table-flight--body'}>
        {
          this.props.allData ? this.props.allData.map((item, key) => {
            return (
              <TableBody oneFlight={item} key={item.id} backgroundSort={key}/>
            )
          }) : ''
        }
        </tbody>

      </table>
    )
  }
}

export const TableFlight = connect(({allDataReducer, filterDataReducer}) =>
  ({
    allData: allDataReducer.data,
    filterData: filterDataReducer
  })
)(Table);