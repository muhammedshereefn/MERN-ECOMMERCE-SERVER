const forgotPasswordTemplate = ({ name, otp }) => {
    return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0056b3;">Password Reset Request</h2>
        <p>Dear ${name},</p>
        <p>We received a request to reset your password. Please use the OTP code below to proceed:</p>
        <div style="
            background-color: #f9f9f9; 
            border: 1px solid #ddd; 
            padding: 15px; 
            font-size: 24px; 
            font-weight: bold; 
            text-align: center; 
            color: #0056b3; 
            border-radius: 5px; 
            margin: 20px 0;">
            ${otp}
        </div>
        <p style="font-size: 14px; color: #777;">
            This OTP is valid for 1 hour only. Please enter it on the <strong>JK Trades</strong> website to reset your password.
        </p>
        <p>If you did not request a password reset, please ignore this email or contact support if you have concerns.</p>
        <p style="margin-top: 20px;">Thanks,</p>
        <p style="font-weight: bold;">The JK Trades Team</p>
    </div>
    `;
};

export default forgotPasswordTemplate;
