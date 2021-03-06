/**
 * Class to test chart overlays
 */
Ext.define("KS.view.stockcharts.overlays.sma.Basic", {
    extend: 'Ext.Panel',
    xtype: 'basic-sma',
    requires: [
        'Chartsly.view.test.SimpleMovingAverage'
    ],
    exampleDescription: [
        'A CandleStick chart with Simple Moving Average (SMA) overlay.'
    ],
    config: {
        // height: 400,
        // layout: 'fit',
        items: [
            {
                height: 500,
                xtype: 'cs-sma-test-chart'
            }
        ]
    }
});