$(function() {
  // 시작 날짜와 끝나는 날짜를 지정합니다. 여기에서는 30일로 설정하였습니다.
  var start_date = moment().subtract(29, 'days');
  var end_date = moment();
  function cb(start, end) {
    $('#reportrange span').html(
        start.format('YYYY-MM-DD') + ' - '
            + end.format('YYYY-MM-DD'));
  }
    cb(start_date, end_date);

  $('#reportrange')
      .daterangepicker(
          {
            ranges : {
              '오늘' : [ moment(), moment() ],
              '어제' : [ moment().subtract(1, 'days'),
                    moment().subtract(1, 'days') ],
              '지난 7일' : [ moment().subtract(6, 'days'),
                  moment() ],
              '지난 30일' : [ moment().subtract(29, 'days'),
                  moment() ],
              '이번 달' : [ moment().startOf('month'),
                  moment().endOf('month') ],
              '지난 달' : [
                  moment().subtract(1, 'month')
                      .startOf('month'),
                  moment().subtract(1, 'month')
                      .endOf('month') ]
            },
            'startDate' :  start_date,
            'endDate' : end_date
          }, cb);
});
