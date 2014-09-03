/**
 * Class to test chart overlays
 */
Ext.define("Chartsly.view.test.Overlay", {
    extend: 'Ext.Panel',
    requires: [
        // 'Chartsly.view.test.CandleStick'
        // 'Chartsly.view.test.ParabolicSAR'
        // 'Chartsly.view.test.SimpleMovingAverage'
        'Chartsly.view.test.ExponentialMovingAverage'
    ],
    config: {
        items: [
            {
                height: 500,
                // xtype: 'candlestick-test-chart'
                // xtype: 'cs-psar-test-chart'
                // xtype: 'cs-sma-test-chart'
                xtype: 'cs-ema-test-chart'
            }
        ]
    }
});