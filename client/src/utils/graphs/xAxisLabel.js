import moment from 'moment';

const xAxisLabelCreator = (data) => {
    return (
        data.forecast.map((data, index) => {
            if(index === 0 || index % 8 === 0){
              return moment.unix(data.localTimestamp ).format("ddd HH:00");
            }
      
            return moment.unix(data.localTimestamp ).format("HH:00");  
        })
    )};

export default xAxisLabelCreator;