const waveHeightArray = (dataObject) => {
    return dataObject.forecast.map((data) => {

        switch(data.solidRating){
            case 0:
                return {y: data.swell[0].height, color: '#D9E3E1'};
                break;
            case 1:
                return {y: data.swell[0].height, color: '#BDD5D0'};
                break;
            case 2:
                return {y: data.swell[0].height, color: '#94CABF'};
                break;
            case 3:
                return {y: data.swell[0].height, color: '#85CABC'};
                break;
            case 4:
                return {y: data.swell[0].height, color: '#5AC6B0'};
                break;
            case 5:
                return {y: data.swell[0].height, color: '#16E9BE'};
                break;
        }
    })
}

export default waveHeightArray;