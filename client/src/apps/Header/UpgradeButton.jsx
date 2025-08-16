import { Avatar, Popover, Button, Badge, Col, List } from 'antd';

// import Notifications from '@/components/Notification';

import { RocketOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

export default function UpgradeButton() {
  const translate = useLanguage();

  return (
    <Badge count={1} size="small">
      <Button
        type="primary"
        style={{
          float: 'right',
          marginTop: '5px',
          cursor: 'pointer',
          background: '#667eea',
          boxShadow: '0 2px 0 rgb(102 126 234 / 20%)',
        }}
        icon={<RocketOutlined />}
        onClick={() => {
          window.location.href = '/dashboard';
        }}
      >
        {translate('Dashboard')}
      </Button>
    </Badge>
  );
}

console.log(
  '🚀 Welcome to Nexus Business Suite! Your comprehensive business management platform.'
);
