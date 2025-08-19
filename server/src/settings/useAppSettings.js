const useAppSettings = () => {
  let settings = {};
  settings['nexus_app_email'] = 'noreply@nexus-business-suite.com';
  settings['nexus_base_url'] = 'https://nexus-business-suite.com';
  return settings;
};

module.exports = useAppSettings;
