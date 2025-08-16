import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/logo.svg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            padding: '20px',
            margin: '0 0 40px',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px'
          }}
        >
          NEXUS
        </div>

        <Title level={1} style={{ fontSize: 28 }}>
          Business Management Suite
        </Title>
        <Text>
          Comprehensive CRM, Accounting & Analytics Platform <b /> built with modern technologies
        </Text>

        <div className="space20"></div>
      </div>
    </Content>
  );
}
