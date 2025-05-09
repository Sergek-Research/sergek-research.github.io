import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import './styles/index.css';
import { useLocale } from './LocaleContext';

interface AntdContextProps {}

const AntdContext = createContext<AntdContextProps>({});

export const AntdProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const locale = useLocale();
  const currentLocale = useMemo(() => locale.locale, [locale.locale]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any>({});
  const antdProps = useMemo(() => ({}), []);

  useEffect(() => {
    const loadLocaleData = async (getLocale: string) => {
      switch (getLocale) {
        case 'en':
          return import('antd/locale/en_US');
        default:
          return import('antd/locale/ru_RU');
      }
    };

    loadLocaleData(currentLocale).then((getMessages) => {
      setMessages(getMessages);
    });
  }, [currentLocale]);

  return (
    <AntdContext.Provider value={antdProps}>
      <ConfigProvider
        locale={messages}
        theme={{
          token: {
            // Переопределение стилей
          },
        }}>
        <StyleProvider>{children}</StyleProvider>
      </ConfigProvider>
    </AntdContext.Provider>
  );
};

export const useAntd = () => useContext(AntdContext);
