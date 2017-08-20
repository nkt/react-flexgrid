React Flexgrid
==============

[![Circle CI](https://circleci.com/gh/nkt/react-flexgrid.svg?style=shield)](https://circleci.com/gh/nkt/react-flexgrid)

Installation
------------

```
npm install --save react-flexgrid
```

Usage
-----

Import `react-flexgrid/lib/flexgrid.css`, or `react-flexgrid/less/flexgrid.less` into your project.

```js
import { Grid, Row, Col } = from 'react-flexgrid';

function App() {
  return (
    <Grid>
      <Row>
        <Col xs={6} md={3}>Hello, world!</Col>
      </Row>
    </Grid>
  );
}
```

License
-------
[MIT](LICENSE)
