# react-sentry-error-boundary
A React error boundary component with integrated Sentry error reporting using Raven JS.

### Installation

```
npm install --save react-sentry-error-boundary
```

### Requirements

```
raven-js >= 3.36.3
react >= 16.0.0
```

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
```
Sentry configuration object ([info](https://docs.sentry.io/clients/node/config/))
```

#### dsn
```
Required. Sentry DSN URL ([info](https://docs.sentry.io/quickstart/#configure-the-dsn))
```

#### errorNode
```
A node to render on error
```

#### userContext
```
Sentry user context object ([info](https://docs.sentry.io/learn/context/))
```