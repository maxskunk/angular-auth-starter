# Example Node Express Server for Google Cloud

## GCLOUD
This sample provides an example of how to compile TypeScript files while
deploying to App Engine.

The `gcp-build` NPM script is used to trigger the TypeScript compilation
process. This step happens automatically when deploying to App Engine, but must
be performed manually when developing locally.

## Commands
* List Projects
    gcloud projects list

* Switch Projects
    gcloud config set project zokya-media-auth

* Deploy (target service is defined in app.yml)
    gcloud app deploy

* Live Logging
   gcloud app logs tail -s auth-starter


## Setup

Install dependencies:

   npm install

## Running locally?? Lets Fix this
### Running with credentials
$env:GOOGLE_APPLICATION_CREDENTIALS="B:\Zokya\keys\firebase\zokya-media-auth\zokya-media-auth-firebase-adminsdk-lfi1e-2338d650bd.json"
$env:NODE_ENV="development" 

npm run serve

1. Perform the build step:

    npm run gcp-build ?? Seriously Google... how 'bout this: npm run serve

## Deploying to App Engine

Deploy your app:

    npm run deploy

By default, this application deploys to [App Engine Standard][appengine]. _(Recommended)_
Deploy to App Engine Flexible by [modifying `app.yaml`][app_yaml].

[appengine]: https://cloud.google.com/appengine/docs/standard/nodejs
[app_yaml]: https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml
[tutorial]: https://cloud.google.com/appengine/docs/standard/nodejs/quickstart
[contributing]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/CONTRIBUTING.md
