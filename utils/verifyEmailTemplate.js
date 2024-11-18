const verifyEmailTemplate = ({ name, url }) => {
    return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0056b3;">Welcome to Binkeyit, ${name}!</h2>
        <p>Thank you for signing up with us. To complete your registration, please verify your email address by clicking the button below:</p>
        <a href="${url}" 
           style="
               display: inline-block; 
               background-color: #0056b3; 
               color: #fff; 
               text-decoration: none; 
               padding: 10px 20px; 
               border-radius: 5px; 
               margin-top: 20px; 
               font-size: 16px;
           " 
           target="_blank">
           Verify Email
        </a>
        <p>If you did not create an account with Binkeyit, please ignore this email.</p>
        <p style="margin-top: 20px; font-size: 14px; color: #777;">
           Regards, <br>
           The Binkeyit Team
        </p>
    </div>
    `;
};

export default verifyEmailTemplate;
