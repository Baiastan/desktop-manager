import React, { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Header from '../../../components/Header';
import { Typography } from '@mui/material';
import CodeSnippet from '../../../components/CodeSnippet';

const ReactIntl = () => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    /*
      Dynamically import required translation file based on locale
    */
    const loadMessages = async () => {
      switch (locale) {
        case 'en':
          await import('../locales/en.json').then((m) =>
            setMessages(m.default)
          );
          break;
        case 'es':
          await import('../locales/es.json').then((m) =>
            setMessages(m.default)
          );
          break;
      }
    };

    loadMessages();
  }, [locale]);

  const handleLanguageSwitch = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Header color="red">Internationalization with react-intl</Header>
      <div>
        <select
          className="text-black"
          onChange={handleLanguageSwitch}
          value={locale}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        <Header>
          <FormattedMessage id="app.title" defaultMessage="Welcome to My App" />
        </Header>
        <Typography>
          <FormattedMessage
            id="app.greeting"
            defaultMessage="Hello, {name}!"
            values={{ name: 'Baiastan' }}
          />
        </Typography>
      </div>
      <CodeSnippet>
        {`import React, { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Header from '../../../components/Header';
import { Typography } from '@mui/material';

const ReactIntl = () => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    /*
      Dynamically import required translation file based on locale
    */
    const loadMessages = async () => {
      switch (locale) {
        case 'en':
          await import('../locales/en.json').then((m) =>
            setMessages(m.default)
          );
          break;
        case 'es':
          await import('../locales/es.json').then((m) =>
            setMessages(m.default)
          );
          break;
      }
    };

    loadMessages();
  }, [locale]);

  const handleLanguageSwitch = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Header color="red">Internationalization with react-intl</Header>
      <div>
        <select
          className="text-black"
          onChange={handleLanguageSwitch}
          value={locale}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        <Header>
          <FormattedMessage id="app.title" defaultMessage="Welcome to My App" />
        </Header>
        <Typography>
          <FormattedMessage
            id="app.greeting"
            defaultMessage="Hello, {name}!"
            values={{ name: 'Baiastan' }}
          />
        </Typography>
      </div>
    </IntlProvider>
  );
};

export default ReactIntl;`}
      </CodeSnippet>
      <Header>en.json file</Header>
      <CodeSnippet>
        {`{
  "app.title": "Welcome to My App",
  "app.greeting": "Hello, {name}!"
}
`}
      </CodeSnippet>
      <Header>es.json file</Header>
      <CodeSnippet>
        {`{
  "app.title": "Bievenido a My App",
  "app.greeting": "Hola, {name}!"
}
`}
      </CodeSnippet>
    </IntlProvider>
  );
};

export default ReactIntl;
