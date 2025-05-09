import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { IntlProvider } from 'react-intl';
import dayjs from 'dayjs';

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: 'ru',
  setLocale: () => {},
});

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>('ru');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const loadLocaleData = async (getLocale: string) => {
      switch (getLocale) {
        case 'en':
          dayjs.locale('en');
          return import('compiled-lang/en.json');
        default:
          dayjs.locale('ru');
          return import('compiled-lang/ru.json');
      }
    };

    loadLocaleData(locale).then((getMessages) => {
      setMessages(getMessages);
    });
  }, [locale]);

  const localeProps = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={localeProps}>
      <IntlProvider locale={locale} defaultLocale="ru" messages={messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
