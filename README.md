React Flexgrid
==============

[![Build Status](https://travis-ci.org/nkt/react-flexgrid.svg?branch=master)](https://travis-ci.org/nkt/react-flexgrid)

Installation
------------

```
npm install react-flexgrid
```

Usage
-----

```jsx
const {Grid, Row, Col} = require('react-flexgrid');

const App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
      </Grid>
    );
  }
});
```

License
-------
MIT
