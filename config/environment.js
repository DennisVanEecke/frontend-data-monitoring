'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'frontend-data-monitoring',
    environment,
    rootURL: '/',
    locationType: 'history', // If updated to hash, change ember-plausible config
    EmberENV: {
      EXTEND_PROTOTYPES: false,
    },
    'ember-plausible': {
      enabled: false, // We enable this manually when the config is provided by the server
    },
    plausible: {
      apiHost: '{{PLAUSIBLE_APIHOST}}',
      domain: '{{PLAUSIBLE_DOMAIN}}',
    },
    acmidm: {
      clientId: '{{OAUTH_API_KEY}}',
      scope: '{{OAUTH_API_SCOPE}}',
      authUrl: '{{OAUTH_API_BASE_URL}}',
      logoutUrl: '{{OAUTH_API_LOGOUT_URL}}',
      authRedirectUrl: '{{OAUTH_API_REDIRECT_URL}}',
      switchRedirectUrl: '{{OAUTH_SWITCH_URL}}',
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    features: {
      // define feature flags here
    },
  };

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  return ENV;
};
