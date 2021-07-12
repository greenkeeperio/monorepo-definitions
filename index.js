const monorepoDefinitions = {
  'angular': [
    '@angular/core',
    '@angular/router',
    '@angular/common',
    '@angular/compiler',
    '@angular/platform-server',
    '@angular/upgrade',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/service-worker',
    '@angular/http',
    '@angular/platform-browser-dynamic',
    '@angular/animations',
    '@angular/elements',
    '@angular/platform-webworker',
    '@angular/platform-webworker-dynamic',
    '@angular/bazel',
    '@angular/language-service'
  ],
  'angular2': [
    '@angular/material',
    '@angular/cdk',
    '@angular/material-experimental',
    '@angular/cdk-experimental',
    '@angular/material-moment-adapter'
  ],
  'angular1': [
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-cookies',
    'angular-i18n',
    'angular-loader',
    'angular-mocks',
    'angular-parse-ext',
    'angular-route',
    'angular-resource',
    'angular-sanitize',
    'angular-scenario',
    'angular-touch',
    'angular-messages',
    'angular-messages-format'
  ],
  'apollo-client': [
    'apollo-boost',
    'apollo-cache-inmemory',
    'apollo-cache',
    'apollo-client',
    'apollo-utilities',
    'graphql-anywhere'
  ],
  'apollo-link': [
    'apollo-link-batch-http',
    'apollo-link-batch',
    'apollo-link-context',
    'apollo-link-dedup',
    'apollo-link-error',
    'apollo-link-http-common',
    'apollo-link-http',
    'apollo-link-polling',
    'apollo-link-retry',
    'apollo-link-schema',
    'apollo-link-ws',
    'apollo-link',
    'zen-observable-ts'
  ],
  'apollo-server': [
    'apollo-cache-control',
    'apollo-datasource-rest',
    'apollo-datasource',
    'apollo-engine-reporting-protobuf',
    'apollo-engine-reporting',
    'apollo-server-azure-functions',
    'apollo-server-cache-memcached',
    'apollo-server-cache-redis',
    'apollo-server-caching',
    'apollo-server-cloud-functions',
    'apollo-server-cloudflare',
    'apollo-server-core',
    'apollo-server-env',
    'apollo-server-errors',
    'apollo-server-express',
    'apollo-server-fastify',
    'apollo-server-hapi',
    'apollo-server-integration-testsuite',
    'apollo-server-koa',
    'apollo-server-lambda',
    'apollo-server-micro',
    'apollo-server-plugin-base',
    'apollo-server-testing',
    'apollo-server',
    'apollo-tracing',
    'graphql-extensions'
  ],
  'apollo-tooling': [
    '@apollographql/apollo-tools',
    'apollo-codegen-core',
    'apollo-codegen-flow',
    'apollo-codegen-scala',
    'apollo-codegen-swift',
    'apollo-codegen-typescript',
    'apollo-env',
    'apollo-graphql',
    'apollo-language-server',
    'apollo',
    'vscode-apollo'
  ],
  'aws-cdk': [
    'aws-cdk',
    'cdk',
    'cdk-dasm',
    'decdk',
    'simple-resource-bundler',
    '@aws-cdk/alexa-ask',
    '@aws-cdk/app-delivery',
    '@aws-cdk/assert',
    '@aws-cdk/assets',
    '@aws-cdk/aws-amazonmq',
    '@aws-cdk/aws-amplify',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-applicationautoscaling',
    '@aws-cdk/aws-appmesh',
    '@aws-cdk/aws-appstream',
    '@aws-cdk/aws-appsync',
    '@aws-cdk/aws-athena',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-autoscaling-common',
    '@aws-cdk/aws-autoscaling-hooktargets',
    '@aws-cdk/aws-autoscalingplans',
    '@aws-cdk/aws-backup',
    '@aws-cdk/aws-batch',
    '@aws-cdk/aws-budgets',
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-cloud9',
    '@aws-cdk/aws-cloudformation',
    '@aws-cdk/aws-cloudfront',
    '@aws-cdk/aws-cloudtrail',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-cloudwatch-actions',
    '@aws-cdk/aws-codebuild',
    '@aws-cdk/aws-codecommit',
    '@aws-cdk/aws-codedeploy',
    '@aws-cdk/aws-codepipeline',
    '@aws-cdk/aws-codepipeline-actions',
    '@aws-cdk/aws-codestar',
    '@aws-cdk/aws-cognito',
    '@aws-cdk/aws-config',
    '@aws-cdk/aws-datapipeline',
    '@aws-cdk/aws-dax',
    '@aws-cdk/aws-directoryservice',
    '@aws-cdk/aws-dlm',
    '@aws-cdk/aws-dms',
    '@aws-cdk/aws-docdb',
    '@aws-cdk/aws-dynamodb',
    '@aws-cdk/aws-dynamodb-global',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecr',
    '@aws-cdk/aws-ecr-assets',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-efs',
    '@aws-cdk/aws-eks',
    '@aws-cdk/aws-elasticache',
    '@aws-cdk/aws-elasticbeanstalk',
    '@aws-cdk/aws-elasticloadbalancing',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-elasticloadbalancingv2-targets',
    '@aws-cdk/aws-elasticsearch',
    '@aws-cdk/aws-emr',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-fsx',
    '@aws-cdk/aws-gamelift',
    '@aws-cdk/aws-glue',
    '@aws-cdk/aws-greengrass',
    '@aws-cdk/aws-guardduty',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-inspector',
    '@aws-cdk/aws-iot',
    '@aws-cdk/aws-iot1click',
    '@aws-cdk/aws-iotanalytics',
    '@aws-cdk/aws-iotevents',
    '@aws-cdk/aws-iotthingsgraph',
    '@aws-cdk/aws-kinesis',
    '@aws-cdk/aws-kinesisanalytics',
    '@aws-cdk/aws-kinesisfirehose',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-lakeformation',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-event-sources',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-logs-destinations',
    '@aws-cdk/aws-managedblockchain',
    '@aws-cdk/aws-medialive',
    '@aws-cdk/aws-mediastore',
    '@aws-cdk/aws-msk',
    '@aws-cdk/aws-neptune',
    '@aws-cdk/aws-opsworks',
    '@aws-cdk/aws-opsworkscm',
    '@aws-cdk/aws-pinpoint',
    '@aws-cdk/aws-pinpointemail',
    '@aws-cdk/aws-qldb',
    '@aws-cdk/aws-ram',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-redshift',
    '@aws-cdk/aws-robomaker',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-patterns',
    '@aws-cdk/aws-route53resolver',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-s3-assets',
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/aws-s3-notifications',
    '@aws-cdk/aws-sagemaker',
    '@aws-cdk/aws-sam',
    '@aws-cdk/aws-sdb',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/aws-securityhub',
    '@aws-cdk/aws-servicecatalog',
    '@aws-cdk/aws-servicediscovery',
    '@aws-cdk/aws-ses',
    '@aws-cdk/aws-ses-actions',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-sns-subscriptions',
    '@aws-cdk/aws-sqs',
    '@aws-cdk/aws-ssm',
    '@aws-cdk/aws-stepfunctions',
    '@aws-cdk/aws-stepfunctions-tasks',
    '@aws-cdk/aws-transfer',
    '@aws-cdk/aws-waf',
    '@aws-cdk/aws-wafregional',
    '@aws-cdk/aws-workspaces',
    '@aws-cdk/cfnspec',
    '@aws-cdk/cloudformation-diff',
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/cx-api',
    '@aws-cdk/region-info'
  ],
  'babel': [
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-check-es2015-constants',
    'babel-plugin-transform-function-bind',
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-es2015-template-literals',
    'babel-plugin-transform-react-inline-elements',
    'babel-plugin-transform-object-set-prototype-of-to-assign',
    'babel-plugin-transform-flow-comments',
    'babel-plugin-transform-flow-strip-types',
    'babel-plugin-transform-es2015-arrow-functions',
    'babel-plugin-transform-eval',
    'babel-plugin-transform-jscript',
    'babel-plugin-transform-es2015-literals',
    'babel-plugin-transform-es2015-block-scoped-functions',
    'babel-plugin-transform-es2015-instanceof',
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-react-jsx-self',
    'babel-plugin-transform-do-expressions',
    'babel-plugin-transform-object-assign',
    'babel-plugin-external-helpers',
    'babel-plugin-transform-async-functions',
    'babel-plugin-transform-es3-property-literals',
    'babel-plugin-transform-es3-member-expression-literals',
    'babel-messages',
    'babel-preset-flow',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-es2015-for-of',
    'babel-plugin-transform-es2015-typeof-symbol',
    'babel-plugin-transform-react-constant-elements',
    'babel-plugin-transform-runtime',
    'babel-helpers',
    'babel-helper-plugin-test-runner',
    'babel-helper-function-name',
    'babel-helper-get-function-arity',
    'babel-preset-react',
    'babel-plugin-transform-react-jsx-compat',
    'babel-helper-explode-class',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-es2015-function-name',
    'babel-plugin-transform-react-jsx',
    'babel-plugin-transform-async-to-generator',
    'babel-plugin-transform-es2015-classes',
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-async-generator-functions',
    'babel-plugin-transform-es2015-sticky-regex',
    'babel-plugin-transform-es2015-object-super',
    'babel-plugin-transform-es2015-unicode-regex',
    'babel-plugin-transform-es5-property-mutators',
    'babel-plugin-transform-async-to-module-method',
    'babel-plugin-transform-exponentiation-operator',
    'babel-plugin-transform-es2015-computed-properties',
    'babel-plugin-transform-es2015-shorthand-properties',
    'babel-plugin-transform-strict-mode',
    'babel-plugin-transform-es2015-modules-umd',
    'babel-plugin-transform-es2015-modules-amd',
    'babel-plugin-transform-es2015-duplicate-keys',
    'babel-plugin-transform-es2015-modules-systemjs',
    'babel-plugin-transform-decorators',
    'babel-helper-builder-binary-assignment-operator-visitor',
    'babel-helper-bindify-decorators',
    'babel-helper-replace-supers',
    'babel-helper-hoist-variables',
    'babel-helper-call-delegate',
    'babel-helper-explode-assignable-expression',
    'babel-helper-remap-async-to-generator',
    'babel-helper-optimise-call-expression',
    'babel-preset-stage-0',
    'babel-preset-stage-1',
    'babel-preset-stage-2',
    'babel-preset-stage-3',
    'babel-plugin-transform-react-display-name',
    'babel-polyfill',
    'babel-runtime',
    'babel-template',
    'babel-types',
    'babel-traverse',
    'babel-cli',
    'babel-register',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-regenerator',
    'babel-plugin-transform-es2015-block-scoping',
    'babel-plugin-transform-regenerator',
    'babel-helper-builder-react-jsx',
    'babel-plugin-transform-proto-to-assign',
    'babel-helper-regex',
    'babel-helper-define-map',
    'babel-standalone',
    'babel-code-frame',
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-helper-fixtures',
    'babel-helper-transform-fixture-test-runner',
    'babel-plugin-syntax-numeric-separator',
    'babel-plugin-syntax-optional-catch-binding',
    'babel-plugin-syntax-optional-chaining',
    'babel-plugin-syntax-typescript',
    // 'babel-plugin-transform-classes',
    'babel-plugin-transform-function-sent2',
    'babel-plugin-transform-new-target',
    'babel-plugin-transform-numeric-separator',
    'babel-plugin-transform-optional-catch-binding',
    'babel-plugin-transform-optional-chaining'
  ],
  'babel7': [
    '@babel/cli',
    '@babel/code-frame',
    '@babel/core',
    '@babel/generator',
    '@babel/helper-annotate-as-pure',
    '@babel/helper-bindify-decorators',
    '@babel/helper-builder-binary-assignment-operator-visitor',
    '@babel/helper-builder-react-jsx',
    '@babel/helper-call-delegate',
    '@babel/helper-define-map',
    '@babel/helper-explode-assignable-expression',
    '@babel/helper-explode-class',
    '@babel/helper-fixtures',
    '@babel/helper-fixtures module',
    '@babel/helper-function-name',
    '@babel/helper-get-function-arity',
    '@babel/helper-hoist-variables',
    '@babel/helper-member-expression-to-functions',
    '@babel/helper-module-imports',
    '@babel/helper-module-transforms',
    '@babel/helper-optimise-call-expression',
    '@babel/helper-plugin-test-runner',
    '@babel/helper-plugin-utils',
    '@babel/helper-regex',
    '@babel/helper-remap-async-to-generator',
    '@babel/helper-replace-supers',
    '@babel/helper-simple-access',
    '@babel/helper-split-export-declaration',
    '@babel/helper-transform-fixture-test-runner',
    '@babel/helper-wrap-function',
    '@babel/helpers',
    '@babel/highlight',
    '@babel/node',
    '@babel/parser',
    '@babel/plugin-check-constants',
    '@babel/plugin-codemod-object-assign-to-object-spread',
    '@babel/plugin-codemod-optional-catch-binding',
    '@babel/plugin-external-helpers',
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-pipeline-operator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-unicode-property-regex',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-bigint',
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-syntax-decorators',
    '@babel/plugin-syntax-do-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-syntax-export-extensions',
    '@babel/plugin-syntax-export-namespace-from',
    '@babel/plugin-syntax-flow',
    '@babel/plugin-syntax-function-bind',
    '@babel/plugin-syntax-function-sent',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-syntax-json-strings',
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-syntax-logical-assignment-operators',
    '@babel/plugin-syntax-nullish-coalescing-operator',
    '@babel/plugin-syntax-numeric-separator',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-syntax-optional-catch-binding',
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-syntax-pipeline-operator',
    '@babel/plugin-syntax-throw-expressions',
    '@babel/plugin-syntax-typescript',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-block-scoped-functions',
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-computed-properties',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-dotall-regex',
    '@babel/plugin-transform-duplicate-keys',
    '@babel/plugin-transform-eval',
    '@babel/plugin-transform-exponentiation-operator',
    '@babel/plugin-transform-flow-comments',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-transform-for-of',
    '@babel/plugin-transform-function-name',
    '@babel/plugin-transform-instanceof',
    '@babel/plugin-transform-jscript',
    '@babel/plugin-transform-literals',
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-modules-amd',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-modules-systemjs',
    '@babel/plugin-transform-modules-umd',
    '@babel/plugin-transform-new-target',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',
    '@babel/plugin-transform-object-super',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-property-mutators',
    '@babel/plugin-transform-proto-to-assign',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-react-jsx-compat',
    '@babel/plugin-transform-react-jsx-self',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-reserved-words',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-sticky-regex',
    '@babel/plugin-transform-strict-mode',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-typeof-symbol',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-unicode-regex',
    '@babel/polyfill',
    '@babel/preset-env',
    '@babel/preset-env-standalone',
    '@babel/preset-es2015',
    '@babel/preset-es2016',
    '@babel/preset-es2017',
    '@babel/preset-flow',
    '@babel/preset-react',
    '@babel/preset-stage-0',
    '@babel/preset-stage-1',
    '@babel/preset-stage-2',
    '@babel/preset-stage-3',
    '@babel/preset-typescript',
    '@babel/register',
    '@babel/runtime',
    '@babel/standalone',
    '@babel/template',
    '@babel/traverse',
    '@babel/types'
  ],
  'baset': [
    'baset',
    'baset-core',
    'baset-cli',
    'baset-vm',
    'baset-reader-md',
    'baset-reader-ts',
    'baset-reader-babel',
    'baset-baseliner-md',
    'baset-baseliner-json',
    'baset-resolver-react',
    'baset-resolver-pixi',
    'baset-env-browser'
  ],
  'commitlint': [
    'commitlint-config-angular',
    'commitlint-config-lerna-scopes',
    'commitlint-config-patternplate',
    'commitlint',
    '@commitlint/cli',
    '@commitlint/config-angular-type-enum',
    '@commitlint/config-angular',
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
    '@commitlint/config-patternplate',
    '@commitlint/core',
    '@commitlint/ensure',
    '@commitlint/execute-rule',
    '@commitlint/format',
    '@commitlint/is-ignored',
    '@commitlint/lint',
    '@commitlint/load',
    '@commitlint/message',
    '@commitlint/parse',
    '@commitlint/prompt-cli',
    '@commitlint/prompt',
    '@commitlint/read',
    '@commitlint/resolve-extends',
    '@commitlint/rules',
    '@commitlint/to-lines',
    '@commitlint/top-level',
    '@commitlint/travis-cli'
  ],
  'electron-builder': [
    'electron-builder',
    'electron-updater'
  ],
  'emotion': [
    '@emotion/babel-preset-css-prop',
    '@emotion/cache',
    '@emotion/css',
    '@emotion/core',
    '@emotion/native',
    '@emotion/primitives-core',
    '@emotion/primitives',
    '@emotion/styled-base',
    '@emotion/styled',
    'babel-plugin-emotion',
    'create-emotion-server',
    'create-emotion',
    'eslint-plugin-emotion',
    'emotion-server',
    'emotion-theming',
    'emotion',
    'jest-emotion'
  ],
  'enzyme': [
    'enzyme',
    'enzyme-adapter-react-13',
    'enzyme-adapter-react-14',
    'enzyme-adapter-react-15.4',
    'enzyme-adapter-react-15',
    'enzyme-adapter-react-16.1',
    'enzyme-adapter-react-16.2',
    'enzyme-adapter-react-16.3',
    'enzyme-adapter-react-16',
    'enzyme-adapter-utils',
    'enzyme-adapter-react-helper'
  ],
  'fortawesome': [
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/react-fontawesome'
  ],
  'gatsby': [
    'babel-plugin-remove-graphql-queries',
    'babel-preset-gatsby-package',
    'babel-preset-gatsby',
    'cypress-gatsby',
    'gatsby-cli',
    'gatsby-codemods',
    'gatsby-dev-cli',
    'gatsby-image',
    'gatsby-link',
    'gatsby-plugin-canonical-urls',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-coffeescript',
    'gatsby-plugin-create-client-paths',
    'gatsby-plugin-emotion',
    'gatsby-plugin-facebook-analytics',
    'gatsby-plugin-feed',
    'gatsby-plugin-flow',
    'gatsby-plugin-fullstory',
    'gatsby-plugin-glamor',
    'gatsby-plugin-google-analytics',
    'gatsby-plugin-google-gtag',
    'gatsby-plugin-google-tagmanager',
    'gatsby-plugin-guess-js',
    'gatsby-plugin-jss',
    'gatsby-plugin-layout',
    'gatsby-plugin-less',
    'gatsby-plugin-lodash',
    'gatsby-plugin-manifest',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-offline',
    'gatsby-plugin-page-creator',
    'gatsby-plugin-postcss',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-css-modules',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-styletron',
    'gatsby-plugin-stylus',
    'gatsby-plugin-subfont',
    'gatsby-plugin-twitter',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typography',
    'gatsby-react-router-scroll',
    'gatsby-remark-autolink-headers',
    'gatsby-remark-code-repls',
    'gatsby-remark-copy-linked-files',
    'gatsby-remark-custom-blocks',
    'gatsby-remark-embed-snippet',
    'gatsby-remark-graphviz',
    'gatsby-remark-images-contentful',
    'gatsby-remark-images',
    'gatsby-remark-katex',
    'gatsby-remark-prismjs',
    'gatsby-remark-responsive-iframe',
    'gatsby-remark-smartypants',
    'gatsby-source-contentful',
    'gatsby-source-drupal',
    'gatsby-source-faker',
    'gatsby-source-filesystem',
    'gatsby-source-graphql',
    'gatsby-source-hacker-news',
    'gatsby-source-lever',
    'gatsby-source-medium',
    'gatsby-source-mongodb',
    'gatsby-source-npm-package-search',
    'gatsby-source-wikipedia',
    'gatsby-source-wordpress',
    'gatsby-transformer-csv',
    'gatsby-transformer-documentationjs',
    'gatsby-transformer-excel',
    'gatsby-transformer-hjson',
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-transformer-javascript-static-exports',
    'gatsby-transformer-json',
    'gatsby-transformer-pdf',
    'gatsby-transformer-react-docgen',
    'gatsby-transformer-remark',
    'gatsby-transformer-screenshot',
    'gatsby-transformer-sharp',
    'gatsby-transformer-sqip',
    'gatsby-transformer-toml',
    'gatsby-transformer-xml',
    'gatsby-transformer-yaml',
    'gatsby',
    'graphql-skip-limit'
  ],
  'itly': [
    '@itly/itly',
    '@itly/sdk',
    // https://github.com/amplitude/itly-sdk/tree/master/packages
    '@itly/plugin-amplitude-node',
    '@itly/plugin-amplitude-react-native',
    '@itly/plugin-amplitude',
    '@itly/plugin-braze-node',
    '@itly/plugin-braze',
    '@itly/plugin-firebase-react-native',
    '@itly/plugin-google-analytics',
    '@itly/plugin-iteratively-node',
    '@itly/plugin-iteratively',
    '@itly/plugin-mixpanel-node',
    '@itly/plugin-mixpanel',
    '@itly/plugin-mparticle-react-native',
    '@itly/plugin-mparticle',
    '@itly/plugin-schema-validator',
    '@itly/plugin-segment-node',
    '@itly/plugin-segment-react-native',
    '@itly/plugin-segment',
    '@itly/plugin-snowplow-react-native',
    '@itly/plugin-snowplow',
    '@itly/plugin-testing'
  ],
  'jest': [
    'jest',
    'babel-jest',
    'jest-cli',
    'babel-preset-jest',
    'babel-plugin-jest-hoist',
    'jest-jasmine2',
    'jest-repl',
    'jest-runtime',
    'jest-validate',
    'jest-circus',
    'jest-runner',
    'jest-config'
  ],
  'jest2': [
    'expect',
    'pretty-format',
    'jest-util',
    'jest-mock',
    'jest-environment-node',
    'jest-environment-jsdom',
    'jest-haste-map',
    'jest-snapshot',
    'jest-resolve',
    'jest-changed-files',
    'jest-diff',
    'jest-matcher-utils',
    'jest-resolve-dependencies',
    'eslint-config-fb-strict',
    'jest-phabricator',
    'jest-editor-support',
    'jest-message-util',
    'jest-regex-util',
    'jest-test-typescript-parser',
    'jest-docblock',
    'jest-get-type',
    'jest-worker',
    'jest-leak-detector',
    'diff-sequences',
    'jest-serializer'
  ],
  'lodash': [
    'lodash',
    'lodash-es'
  ],
  'material-ui': [
    '@material-ui/codemod',
    '@material-ui/core',
    '@material-ui/icons',
    '@material-ui/lab',
    '@material-ui/docs'
  ],
  'nestjs': [
    '@nestjs/common',
    '@nestjs/core',
    '@nestjs/platform-express'
  ],
  'ngxs': [
    '@ngxs/devtools-plugin',
    '@ngxs/form-plugin',
    '@ngxs/logger-plugin',
    '@ngxs/storage-plugin',
    '@ngxs/store',
    '@ngxs/router-plugin',
    '@ngxs/websocket-plugin'
  ],
  'polyfill-io-aot': [
    '@polyfill-io-aot/builder',
    '@polyfill-io-aot/builder-cli',
    '@polyfill-io-aot/common',
    '@polyfill-io-aot/core',
    '@polyfill-io-aot/express'
  ],
  'pouchdb': [
    'pouchdb',
    'pouchdb-abstract-mapreduce',
    'pouchdb-adapter-fruitdown',
    'pouchdb-adapter-http',
    'pouchdb-adapter-idb',
    'pouchdb-adapter-indexeddb',
    'pouchdb-adapter-leveldb',
    'pouchdb-adapter-leveldb-core',
    'pouchdb-adapter-localstorage',
    'pouchdb-adapter-memory',
    'pouchdb-adapter-node-websql',
    'pouchdb-adapter-utils',
    'pouchdb-adapter-websql',
    'pouchdb-adapter-websql-core',
    'pouchdb-binary-utils',
    'pouchdb-browser',
    'pouchdb-changes-filter',
    'pouchdb-checkpointer',
    'pouchdb-collate',
    'pouchdb-collections',
    'pouchdb-core',
    'pouchdb-debug',
    'pouchdb-errors',
    'pouchdb-promise',
    'pouchdb-find',
    'pouchdb-for-coverage',
    'pouchdb-generate-replication-id',
    'pouchdb-json',
    'pouchdb-mapreduce',
    'pouchdb-mapreduce-utils',
    'pouchdb-md5',
    'pouchdb-merge',
    'pouchdb-node',
    'pouchdb-replication',
    'pouchdb-selector-core',
    'pouchdb-utils',
    'sublevel-pouchdb'
  ],
  'react': [
    'react',
    'react-dom',
    'react-art',
    'react-is',
    'react-test-renderer',
    'create-subscription'
  ],
  'react-dnd': [
    'dnd-core',
    'react-dnd',
    'react-dnd-html5-backend',
    'react-dnd-test-backend'
  ],
  'storybook': [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-centered',
    '@storybook/addon-cssresources',
    '@storybook/addon-events',
    '@storybook/addon-google-analytics',
    '@storybook/addon-graphql',
    '@storybook/addon-info',
    '@storybook/addon-jest',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-knobs',
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-options',
    '@storybook/addon-storyshots',
    '@storybook/addon-storyshots-puppeteer',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addons',
    '@storybook/angular',
    '@storybook/api',
    '@storybook/channel-postmessage',
    '@storybook/channel-websocket',
    '@storybook/channels',
    '@storybook/cli',
    '@storybook/client-api',
    '@storybook/client-logger',
    '@storybook/codemod',
    '@storybook/components',
    '@storybook/core',
    '@storybook/core-events',
    '@storybook/ember',
    '@storybook/html',
    '@storybook/marko',
    '@storybook/mithril',
    '@storybook/node-logger',
    '@storybook/polymer',
    '@storybook/preact',
    '@storybook/react',
    '@storybook/react-native',
    '@storybook/react-native-server',
    '@storybook/riot',
    '@storybook/router',
    '@storybook/storybook-deployer',
    '@storybook/svelte',
    '@storybook/theming',
    '@storybook/ui',
    '@storybook/vue'
  ],
  'react-cosmos': [
    'react-cosmos',
    'react-cosmos-apollo-proxy',
    'react-cosmos-config',
    'react-cosmos-context-proxy',
    'react-cosmos-fetch-proxy',
    'react-cosmos-flow',
    'react-cosmos-loader',
    'react-cosmos-localstorage-proxy',
    'react-cosmos-normalize-props-proxy',
    'react-cosmos-playground',
    'react-cosmos-redux-proxy',
    'react-cosmos-router-proxy',
    'react-cosmos-scripts',
    'react-cosmos-shared',
    'react-cosmos-state-proxy',
    'react-cosmos-telescope',
    'react-cosmos-test',
    'react-cosmos-voyager',
    'react-cosmos-voyager2',
    'react-cosmos-xhr-proxy',
    'react-querystring-router'
  ],
  'uppy': [
    'uppy',
    '@uppy/aws-s3',
    '@uppy/aws-s3-multipart',
    '@uppy/companion',
    '@uppy/companion-client',
    '@uppy/core',
    '@uppy/dashboard',
    '@uppy/drag-drop',
    '@uppy/dropbox',
    '@uppy/file-input',
    '@uppy/form',
    '@uppy/golden-retriever',
    '@uppy/google-drive',
    '@uppy/informer',
    '@uppy/instagram',
    '@uppy/progress-bar',
    '@uppy/provider-views',
    '@uppy/react',
    '@uppy/redux-dev-tools',
    '@uppy/status-bar',
    '@uppy/store-default',
    '@uppy/store-redux',
    '@uppy/thumbnail-generator',
    '@uppy/transloadit',
    '@uppy/transloadit-preset',
    '@uppy/tus',
    '@uppy/url',
    '@uppy/utils',
    '@uppy/webcam',
    '@uppy/xhr-upload'
  ],
  'vue': [
    'vue',
    'vue-template-compiler'
  ],
  'gk-test': [
    'gk-test-a',
    'gk-test-b',
    'gk-test-c'
  ],
  'appcenter': [
    'appcenter',
    'appcenter-analytics',
    'appcenter-crashes'
  ],
  'material': [
    '@material/animation',
    '@material/auto-init',
    '@material/backdrop',
    '@material/banner',
    '@material/base',
    '@material/bottom-app-bar',
    '@material/bottom-navigation',
    '@material/bottom-sheet',
    '@material/button',
    '@material/card',
    '@material/checkbox',
    '@material/chips',
    '@material/data-table',
    '@material/dialog',
    '@material/divider',
    '@material/dom',
    '@material/drawer',
    '@material/elevation',
    '@material/fab',
    '@material/floating-table',
    '@material/form-field',
    '@material/grid-list',
    '@material/icon-button',
    '@material/icon-toggle',
    '@material/image-list',
    '@material/layout-grid',
    '@material/line-ripple',
    '@material/linear-progress',
    '@material/list',
    '@material/menu-surface',
    '@material/menu',
    '@material/notched-outline',
    '@material/radio',
    '@material/ripple',
    '@material/rtl',
    '@material/select',
    '@material/selection-control',
    '@material/shape',
    '@material/side-sheet',
    '@material/slider',
    '@material/snackbar',
    '@material/switch',
    '@material/tab-bar',
    '@material/tab-indicator',
    '@material/tab-scroller',
    '@material/tab',
    '@material/tabs',
    '@material/textfield',
    '@material/theme',
    '@material/toolbar',
    '@material/tooltip',
    '@material/top-app-bar',
    '@material/typography',
    'material-components-web'
  ],
  'pika-builders': [
    '@pika/babel-plugin-esm-import-rewrite',
    '@pika/plugin-build-deno',
    '@pika/plugin-build-node',
    '@pika/plugin-build-types',
    '@pika/plugin-build-umd',
    '@pika/plugin-build-web-complete',
    '@pika/plugin-build-web',
    '@pika/plugin-bundle-node',
    '@pika/plugin-bundle-types',
    '@pika/plugin-bundle-web',
    '@pika/plugin-copy-assets',
    '@pika/plugin-simple-bin',
    '@pika/plugin-source-bucklescript',
    '@pika/plugin-standard-pkg',
    '@pika/plugin-ts-standard-pkg',
    '@pika/plugin-wasm-assemblyscript',
    '@pika/plugin-wasm-bindings',
    '@pika/types'
  ],
  'reach-ui': [
    '@reach/accordion',
    '@reach/alert',
    '@reach/alert-dialog',
    '@reach/auto-id',
    '@reach/checkbox',
    '@reach/combobox',
    '@reach/component-component',
    '@reach/descendants',
    '@reach/dialog',
    '@reach/disclosure',
    '@reach/menu-button',
    '@reach/popover',
    '@reach/portal',
    '@reach/rect',
    '@reach/skip-nav',
    '@reach/slider',
    '@reach/tabs',
    '@reach/tooltip',
    '@reach/utils',
    '@reach/visually-hidden',
    '@reach/window-size'
  ]
}

module.exports = monorepoDefinitions
