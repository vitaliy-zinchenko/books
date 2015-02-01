require.config({

    baseUrl: '/js/app/site/',

    paths: {
        'angular': '/js/libs/angular',
        'angularRoute': '/js/libs/angularRoute',
        'requireDomReady': '/js/libs/requireDomReady',
        'text': '/js/libs/requireText'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    deps: ['./bootstrap']
});