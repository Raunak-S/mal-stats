

const createChart = config => {

    const {ctx, data} = config;

    return new Chart(ctx, {
        type: 'doughnut',
        data: data
    });

}


export default createChart;