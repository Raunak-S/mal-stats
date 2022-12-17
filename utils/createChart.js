

const createChart = chartConfig => {

    const {ctx, config} = chartConfig;

    return new Chart(ctx, config);

}


export default createChart;