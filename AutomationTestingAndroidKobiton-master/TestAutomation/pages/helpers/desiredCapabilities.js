exports.options ={

    desiredCapabilities : {

        sessionName:        'Savvy Build 1.0',
        sessionDescription: '',
        deviceOrientation:  'portrait',
        captureScreenshots: true,
        app:                'kobiton-store:64383',
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
},

    desiredCapabilities1 : {

        sessionName:        'Automation test session',
        sessionDescription: '',
        deviceOrientation:  'portrait',
        captureScreenshots: true,
        app:                'kobiton-store:v73214',
        
        // The given group is used for finding devices and the created session will be visible for all members within the group.
        groupId:            992, // Group: SavvyQA
        deviceGroup:        'KOBITON',
        deviceName:         'iPhone 11',
        platformVersion:    '13.3.1',
        platformName:       'iOS'

    },
    Server1 : {
    protocol: 'https',
    host: 'api.kobiton.com',
    auth: 'HarpreetSavvy:c0f93aeb-f5a4-4649-838d-f88a54bcbb7b'
}
};
