import React from 'react';

const DevModeNotice: React.FC = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-md mb-6">
      <h3 className="text-yellow-800 dark:text-yellow-200 font-medium mb-2">Development Mode Notice</h3>
      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
        To receive emails from the contact form, you need to configure your email credentials in the <code>.env.local</code> file.
        Please refer to the <code>EMAIL_SETUP.md</code> file for detailed instructions on setting up Gmail with an App Password.
      </p>
    </div>
  );
};

export default DevModeNotice; 