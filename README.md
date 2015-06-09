# Jawbone

Login service for Jawbone accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Jawbone login services. Example:
```
ServiceConfiguration.configurations.remove({
    service: "jawbone"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "jawbone" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Jawbone button.