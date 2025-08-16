import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Nexus Business Suite'}
      subTitle={translate('Comprehensive Business Management Platform')}
      extra={
        <>
          <p>
            A modern solution for managing your business operations, customer relationships, and analytics.
          </p>
          <p>
            Built with React, Node.js, and MongoDB for optimal performance and scalability.
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.location.href = '/dashboard';
            }}
          >
            {translate('Go to Dashboard')}
          </Button>
        </>
      }
    />
  );
};

export default About;
