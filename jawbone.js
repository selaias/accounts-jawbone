Accounts.oauth.registerService('jawbone');
if (Meteor.isClient) {
  Meteor.loginWithJawbone = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Jawbone.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.jawbone'],
    forOtherUsers: ['services.jawbone.id']
  });
}