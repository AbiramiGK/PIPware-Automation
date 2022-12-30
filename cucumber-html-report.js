const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumberReports',
	reportPath: './cypress/cucumberReports/cucumber-htmlReport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'PiPware project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'DEC 28th 2022, 16:33 PM IST'},
            {label: 'Execution End Time', value: 'DEC 28th 2022, 16:35 PM IST'}
        ]
    }
});