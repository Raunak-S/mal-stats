import React, {useEffect, useRef} from "react";
import Layout from "../components/layout"
import styled from "styled-components";
import Chart from "chart.js";

const Canvas = styled.canvas`
    height: 500px !important;
    width: 500px !important;
`
/*
animeData Prototype
{
    completed: 774
    dropped: 0
    on_hold: 56
    plan_to_watch: 4494
    watching: 113
    total_entries: 5437
    days_watched: 135.2
    episodes_watched: 9695
    mean_score: 4.35
    rewatched: 12
}
*/

const ChartWrapper = ({animeData}) => {
    const ad = animeData;
    const myCanvas = useRef(null);
    const data = {
        datasets: [{
            data: [
                ad.completed,
                ad.dropped,
                ad.on_hold,
                ad.plan_to_watch,
                ad.watching
            ],
            backgroundColor: ['red','yellow','blue','green','purple']
        }],
        labels: [
            'Completed',
            'Dropped',
            'On Hold',
            'Plan to Watch',
            'Watching'
        ],
        options: {
            responsive: false
        }
    };

    const initCanvas = () => {
        const ctx = myCanvas.current.getContext('2d');
        return new Chart(ctx, {
            type: 'doughnut',
            data: data
        })
    }
  
    useEffect(() => {
        initCanvas();
    }, []);

    return (
        <Canvas ref={myCanvas} width='100px' height='100px' />
    )
}

export default ChartWrapper;