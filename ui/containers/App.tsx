import * as React from 'react'
import { connect } from 'react-redux';
import { mapStateToProps, mapStateToDispatch } from '../../data/modules/app';

import Hello from './../components/hello/Hello';

interface Props {
  load: string;
}

class App extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        this is page
        <Hello compiler="typescript" framework="react"/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App)