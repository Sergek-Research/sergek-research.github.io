/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Dropdown, Menu, Button, Space } from 'antd';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';
import { useLocale } from '../LocaleContext'; // Убедитесь, что этот путь корректен

export const messages = defineMessages({
  en: {
    description: 'Название языка',
    defaultMessage: 'English',
  },
  ru: {
    description: 'Название языка',
    defaultMessage: 'Русский',
  },
});

interface LanguageOption {
  code: string;
  name: string;
  flag: string; // Emoji флаг
}

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const intl = useIntl();

  const languageOptions: LanguageOption[] = [
    {
      code: 'ru',
      name: intl.formatMessage(messages.ru),
      flag: '🇷🇺', // Флаг России
    },
    {
      code: 'en',
      name: intl.formatMessage(messages.en),
      flag: '🇬🇧', // Флаг Великобритании (для английского)
    },
  ];

  const currentLanguage = languageOptions.find((opt) => opt.code === locale);

  const handleMenuClick = (e: any) => {
    // e имеет тип { key: string }
    setLocale(e.key);
  };

  const menuItems = languageOptions.map((lang) => (
    <Menu.Item
      key={lang.code}
      icon={
        <span
          role="img"
          aria-label={lang.name}
          style={{ marginRight: '8px', fontSize: '1.2em' }}>
          {lang.flag}
        </span>
      }>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <span>{lang.name}</span>
        {locale === lang.code && (
          <CheckOutlined style={{ color: '#52c41a', marginLeft: '5px' }} />
        )}
      </div>
    </Menu.Item>
  ));

  const menu = (
    <Menu onClick={handleMenuClick} selectedKeys={[locale]}>
      {menuItems}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button
        type="text" // Устанавливаем тип кнопки "text" для прозрачного фона и отсутствия рамки
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 8px', // Немного уменьшим внутренние отступы для компактности
        }}>
        <Space size="small">
          {currentLanguage && (
            <span
              role="img"
              aria-label={currentLanguage.name}
              style={{ fontSize: '1.2em' }}>
              {currentLanguage.flag}
            </span>
          )}
          <DownOutlined style={{ fontSize: '10px' }} />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
