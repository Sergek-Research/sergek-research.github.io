import React from 'react';
import { Space, Typography, Avatar } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import LanguageSwitcher from '@components/LanguageSwitcher'; // Убедитесь, что путь корректен

const { Link } = Typography;

// Это компонента, которую вы вставите в antd Layout.Header
const HeaderMenu: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
      }}>
      <Space size="middle" align="center">
        <LanguageSwitcher />
        <Link
          href="https://github.com/Sergek-Research"
          target="_blank"
          rel="noopener noreferrer">
          <Avatar
            size="default" // Размер иконки можно настроить
            icon={<GithubOutlined style={{ fontSize: '20px' }} />}
            style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
          />
        </Link>
      </Space>
    </div>
  );
};

export default HeaderMenu;
