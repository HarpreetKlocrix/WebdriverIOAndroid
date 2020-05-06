exports.options ={

    desiredCapabilities : {

        sessionName:        'Savvy Build 1.0',
        sessionDescription: '',
        deviceOrientation:  'portrait',
        captureScreenshots: true,
        app:                'kobiton-store:59646',
        groupId:            992, // Group: SavvyQA
        deviceGroup:        'KOBITON',
        deviceName:         'Galaxy A9 (2018)',
        platformVersion:    '8.0.0',
        platformName:       'Android'

    },
    Server : {
    protocol: 'https',
    host: 'api.kobiton.com',
    auth: 'HarpreetSavvy:c0f93aeb-f5a4-4649-838d-f88a54bcbb7b'
}
};