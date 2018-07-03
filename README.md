# react-sentry-error-boundary
A React error boundary component with integrated Sentry error reporting using Raven JS.  This library uses a single instance of Raven to manually capture exceptions in the React lifecycle method componentDidCatch.

### Installation

```
npm install --save-dev react-sentry-error-boundary
```

### Requirements

#### Peer Dependencies
```
prop-types >=15.5.0
raven-js >=3.26.3
react >=16.0.0
```

### Usage

```js
import MyWidget from './MyWidget'
import SentryErrorBoundary from 'react-sentry-error-boundary'
import React from 'react'

const App = () =>
  <SentryErrorBoundary dsn="https://<key>@sentry.io/<project>">
    <MyWidget />
  </SentryErrorBoundary>

export default App
```

### Props

#### config
[Documentation](https://docs.sentry.io/clients/node/config/)
```
A Sentry configuration object.
```

#### dsn
[Documentation](https://docs.sentry.io/quickstart/#configure-the-dsn)
```
REQUIRED. A Sentry DSN URL.
```

#### errorCallback
```
A callback function to execute on error.
```

#### errorNode
```
A node to render on error.
```

#### logErrors
```
A bool indicating whether errors are logged to Sentry. Defaults to true.
```

#### userContext
[Documentation](https://docs.sentry.io/learn/context/)
```
A Sentry user context object.
```