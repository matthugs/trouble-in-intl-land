import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Magic from './Magic';

const localeData = {
        "locale": "en",
        "messages": {}
      };

class App extends Component {
  render() {
    return (
      <IntlProvider locale={localeData.locale} messages={localeData.messages}>
        <Magic><FormattedMessage {...{id: 'boo2', description: "whatever2", defaultMessage: "Boo!2"}} /></Magic>
      </IntlProvider>

    );
  }
}

export default App;
