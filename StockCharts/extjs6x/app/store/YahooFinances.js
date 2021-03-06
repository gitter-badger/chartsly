/*
 * File: app/store/YahooFinances.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Chartsly.store.YahooFinances', {
    extend: 'Ext.data.Store',

    requires: [
        'Chartsly.model.YahooFinance',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        //whereClause: {symbol:'GOOG',startDate:'2015-01-01',endDate:"2015-05-18"},
        //selectStmt: 'select * from yahoo.finance.historicaldata where symbol in ("GOOG") and startDate = "2015-03-01" and endDate = "2015-05-15"',
        yahooEnv: 'store://datatables.org/alltableswithkeys',
        format: 'json'
    },

    constructor: function(cfg) {
        var me = this;
        me.cfg = cfg || {};
        me.callParent([Ext.apply(me.processYahooFinances({
            //whereClause: {symbol:'GOOG',startDate:'2015-01-01',endDate:"2015-05-18"},
            storeId: 'YahooFinances',
            //autoLoad: true,
            model: 'Chartsly.model.YahooFinance',
            proxy: {
                type: 'jsonp',
                extraParams: {
                    q: me.selectStmt,
                    env: me.yahooEnv,
                    format: me.format
                },
                url:'https://query.yahooapis.com/v1/public/yql',
                reader: {
                    type: 'json',
                    rootProperty: 'query.results.quote'
                }
            }
        }), cfg)]);
    },

    processYahooFinances: function(config,cfg) {
        var query = 'select * from yahoo.finance.historicaldata where symbol in ('+"'"+this.cfg.config.whereClause.symbol+"'"+') and startDate = '+"'"+this.cfg.config.whereClause.startDate+"'"+' and endDate ='+"'"+this.cfg.config.whereClause.endDate+"'"+'';

        config.proxy.extraParams.q = query ;
        config.proxy.extraParams.env='store://datatables.org/alltableswithkeys';
        config.proxy.extraParams.format='json';
        return config;
    }

});
