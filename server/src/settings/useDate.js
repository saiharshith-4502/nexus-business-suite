const useDate = ({ settings }) => {
  const { nexus_app_date_format } = settings;

  const dateFormat = nexus_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
