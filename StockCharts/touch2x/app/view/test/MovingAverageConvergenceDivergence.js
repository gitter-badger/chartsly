/**
 * Class to test MACD chart
 */
Ext.define("Chartsly.view.test.MovingAverageConvergenceDivergence", {
    extend: 'Ext.Panel',
    requires: [
        'Chartsly.view.test.CandleStick',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Chartsly.chart.indicator.MovingAverageConvergenceDivergence',
        'Chartsly.model.Stock', 
        'Chartsly.store.Apple'
    ],
    config: {
        items: [
            {
                xtype: 'candlestick-test-chart',
                height: 350,
            },
            {
                xclass: 'Chartsly.chart.MACD',
                height: 250,
                background: 'white',
                series: [
                    {
                        store: Ext.create('Chartsly.store.Apple', {}), //'Apple',
                        type: 'macd',
                        xField: 'date',
                        yField: 'macd',
                        closeField: "close",
                        period1: 12,
                        period2: 26,
                        signalPeriod: 9,
                        // smooth: true,
                        style: {
                            stroke: 'rgba(67,174,175,0.75)',
                            miterLimit: 1
                        }
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left'
                    },
                    {
                        type: 'category', //FIXME: Bar series does not render for 'time' type. SDK seems to have an issue
                        position: 'bottom',
                        fields: ['date'],
                        style: {
                            strokeStyle: '#666',
                            estStepSize: 150
                        },
                        // dateFormat: 'Y',
                        // segmenter: {
                        //     type: 'time',
                        //     step: {
                        //         unit: 'y',
                        //         step: 1
                        //     }
                        // },
                        label: {
                            fontSize: 10,
                            fillStyle: '#666'
                        }
                    }
                ]
            }
        ]
    }
});
