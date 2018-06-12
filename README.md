# Greenkeeper Monorepo Definitions
This module groups npm packages into monorepo releases so Greenkeeper can update them together. It is required by both [Greenkeeper](https://github.com/greenkeeperio/greenkeeper) and [greenkeeper-lockfile](https://github.com/greenkeeperio/greenkeeper-lockfile) and used as the source of truth on which modules constitute part of a monorepo release and should therefore be updated together.

The instances of `greenkeeper-lockfile` running on your CI will always automatically install the most recent release of this module on each CI run, so you don’t have to update `greenkeeper-lockfile` every time someone updates a monorepo dependency.

## Submitting Additions and Changes
The maintainers of Greenkeeper aim to keep this list current and useful, but we’re also extremely grateful if you, the users and maintainers of monorepo dependencies, could help us keep this list in good shape 💚

Please submit additions and changes via a PR and adhere to the following format (or check the existing definitions in `index.js`):

```javascript
const monorepoDefinitions = {
 'prefix': [
   'prefix-full-name',
   'prefix-full-other'
 ]
}
```

Also, please check out our [contribution guidelines](https://github.com/greenkeeperio/monorepo-definitions/blob/master/CONTRIBUTING.md) for more information on participation, commit conventions and our Code of Conduct.

Thank you and beep boop.
🤖🌴



