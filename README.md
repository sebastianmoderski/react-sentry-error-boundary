# react-sentry-error-boundary
A React error boundary component with integrated Sentry error reporting using Raven JS.  This library uses a single instance of Raven to manually capture exceptions in the React lifecycle method componentDidCatch.

### Installation

```
npm install --save react-sentry-error-boundary
```

### Requirements

```
raven-js >=3.26.3
react >= 16.0.0
```

This library is dependent on [babel-plugin-import-root](https://www.npmjs.com/package/babel-plugin-root-import) in order to properly resolve a root based import of Raven JS singleton script in peer dependency raven-js.  Please see documentation for babel-plugin-import-root for proper installation.

### Usage

```js
import MyWidget from './MyWidget'
import SentryErrorBoundary from 'react-sentry-error-boundary'
import React from 'react'

const App = () => {
  <SentryErrorBoundary dsn="https://<key>@sentry.io/<project>">
    <MyWidget />
  </SentryErrorBoundary>
}

export default App
```

### Props

#### config
[Documentation](https://docs.sentry.io/clients/node/config/)
```
Sentry configuration object
```

#### dsn
[Documentation](https://docs.sentry.io/quickstart/#configure-the-dsn)
```
Required. Sentry DSN URL
```

#### errorNode
```
A node to render on error
```

#### userContext
[Documentation](https://docs.sentry.io/learn/context/)
```
Sentry user context object
```