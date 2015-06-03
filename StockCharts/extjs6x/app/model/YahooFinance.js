/*
 * File: app/model/YahooFinance.js
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

Ext.define('Chartsly.model.YahooFinance', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            mapping: 'Adj_Close',
            name: 'adjClose',
            type:'float'
        },
        {
            mapping: 'Close',
            name: 'close',
            type:'float'
        },
        {
            mapping: 'Date',
            name: 'date',
            type:'date'
        },
        {
            mapping: 'High',
            name: 'high',
            type:'float'
        },
        {
            mapping: 'Open',
            name: 'open',
            type:'float'
        },
        {
            mapping: 'Volume',
            name: 'volume',
            type:'int'
        },
        {
            mapping: 'Low',
            name: 'low',
            type:'float'
        }
    ]
});
