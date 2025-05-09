/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from 'react';
import { Layout, theme } from 'antd';
import HeaderMenu from '@components/HeaderMenu';
import FooterText from '@components/FooterText';

const { Header, Footer, Content } = Layout;

interface TemplateContextProps {
  user: any | null;
  setUser: (user: any | null) => void;
  isMenuVisible: boolean;
  setMenuVisibility: (isVisible: boolean) => void;
}

const TemplateContext = createContext<TemplateContextProps>({
  user: null,
  setUser: () => {},
  isMenuVisible: false,
  setMenuVisibility: () => {},
});

export const TemplateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const templateProps = useMemo(
    () => ({ user, setUser, isMenuVisible, setMenuVisibility }),
    [user, isMenuVisible],
  );

  return (
    <TemplateContext.Provider value={templateProps}>
      <Layout>
        <Header
          style={{
            padding: '0 20px', // Убираем внутренние отступы Header, если они мешают
            display: 'flex', // Чтобы CustomHeaderContent мог растянуться на всю ширину
            alignItems: 'center', // Для вертикального выравнивания, если нужно
          }}>
          <HeaderMenu />
        </Header>
        <Content style={{ padding: '16px 24px' }}>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}>
            {children}
          </div>
        </Content>
        <Footer>
          <FooterText />
        </Footer>
      </Layout>
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);
