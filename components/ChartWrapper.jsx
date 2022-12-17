import React, {useEffect, useRef} from "react";
import Layout from "./Layout"
import styled from "styled-components";
import Chart from "chart.js";
import createChart from "../utils/createChart"

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

const ChartCards = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -8rem;
    justify-content: center;

    .card {
        border-radius: 0.25rem;
        background-color: white;
        margin: 2rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 30px -15px;
    }
`

const ChartWrapper = ({animeData, mangaData}) => {
    const animeCanvas = useRef(null);
    const mangaCanvas = useRef(null);
    const chartSize = 300;

    const initAnimeChart = canvasRef => {
        const {completed, dropped, on_hold, plan_to_watch, watching} = animeData;
        const config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        completed,
                        dropped,
                        on_hold,
                        plan_to_watch,
                        watching
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
            },
            options: {
                legend: {
                    position: 'right',
                    align: 'start',
                },
                responsive: false,
            }
        };
        const ctx = canvasRef.current.getContext('2d');
        
        const chartConfig = {ctx, config};
        createChart(chartConfig);
    };

    const initMangaChart = canvasRef => {
        const {completed, dropped, on_hold, plan_to_read, reading} = mangaData;
        const config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        completed,
                        dropped,
                        on_hold,
                        plan_to_read,
                        reading
                    ],
                    backgroundColor: ['red','yellow','blue','green','purple']
                }],
                labels: [
                    'Completed',
                    'Dropped',
                    'On Hold',
                    'Plan to Read',
                    'Reading'
                ],
            },
            options: {
                responsive: false
            }
        };
        const ctx = canvasRef.current.getContext('2d');
        
        const chartConfig = {ctx, config};
        createChart(chartConfig);
    };
  
    useEffect(() => {
        initAnimeChart(animeCanvas);
        initMangaChart(mangaCanvas);
    }, []);

    return (
        <ChartCards>
            <div className="card">
                <h2>Anime Statistics</h2>
                <canvas height={chartSize} width={chartSize} ref={animeCanvas} />
            </div>
            <div className="card">
                <h2>Manga Statistics</h2>
                <canvas ref={mangaCanvas} />
            </div>
        </ChartCards>
    )
}

export default ChartWrapper;