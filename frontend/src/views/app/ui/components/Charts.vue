<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.charts')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.line')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <line-chart :data="lineChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <line-chart :data="lineChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.polar')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <polar-area-chart :data="polarAreaChartData" shadow/>
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <polar-area-chart :data="polarAreaChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.area')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <area-chart :data="areaChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <area-chart :data="areaChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.scatter')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <scatter-chart :data="scatterChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <scatter-chart :data="scatterChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.bar')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <bar-chart :data="barChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <bar-chart :data="barChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.radar')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <radar-chart :data="radarChartData" shadow/>
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <radar-chart :data="radarChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.pie')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <pie-chart :data="pieChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <pie-chart :data="pieChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('charts.doughnut')">
                <b-row>
                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                        <div class="chart-container">
                            <doughnut-chart :data="doughnutChartData" shadow />
                        </div>
                    </b-colxx>

                    <b-colxx xxs="12" lg="6" class="mb-4">
                        <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                        <div class="chart-container">
                            <doughnut-chart :data="doughnutChartData" />
                        </div>
                    </b-colxx>
                </b-row>
            </b-card>
        </b-colxx>

    </b-row>
</div>
</template>

<script>
import {
    lineChartData,
    polarAreaChartData,
    areaChartData,
    scatterChartData,
    barChartData,
    radarChartData,
    pieChartData,
    doughnutChartData
} from '../../../../data/charts'
import LineChart from '../../../../components/Charts/Line'
import PolarAreaChart from '../../../../components/Charts/PolarArea'
import AreaChart from '../../../../components/Charts/Area'
import ScatterChart from '../../../../components/Charts/Scatter'
import BarChart from '../../../../components/Charts/Bar'
import RadarChart from '../../../../components/Charts/Radar'
import PieChart from '../../../../components/Charts/Pie'
import DoughnutChart from '../../../../components/Charts/Doughnut'

export default {
    components: {
        'line-chart': LineChart,
        'polar-area-chart': PolarAreaChart,
        'area-chart': AreaChart,
        'scatter-chart': ScatterChart,
        'bar-chart': BarChart,
        'radar-chart': RadarChart,
        'pie-chart': PieChart,
        'doughnut-chart': DoughnutChart
    },
    data() {
        return {
            lineChartData,
            polarAreaChartData,
            areaChartData,
            scatterChartData,
            barChartData,
            radarChartData,
            pieChartData,
            doughnutChartData
        }
    }

}
</script>
