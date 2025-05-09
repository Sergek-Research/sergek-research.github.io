/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Typography } from 'antd';

const { Paragraph } = Typography;

// eslint-disable-next-line formatjs/enforce-description
export const messages = defineMessages({
  footerText: {
    id: 'layout.footerText',
    defaultMessage: 'Made with ❤️ by the Sergek Research team • 2025',
  },
});

const FooterText: React.FC = () => {
  const intl = useIntl();

  return (
    <Paragraph
      style={{ textAlign: 'center', fontSize: '1.1em', color: '#555' }}>
      {intl.formatMessage(messages.footerText)}
    </Paragraph>
  );
};

export default FooterText;
