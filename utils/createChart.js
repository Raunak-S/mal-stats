

const createChart = config => {

    const {ctx, data} = config;

    const options = {
            legend: {
                position: 'left'
            }
    }

    return new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

}


export default createChart;