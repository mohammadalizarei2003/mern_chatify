export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>به چتیفای خوش آمدید!</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background: linear-gradient(to right, #056269, #164ec7); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
        <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="لوگوی چتیفای" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: rgb(150, 150, 150); padding: 10px;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">به چتیفای خوش آمدید!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <p style="font-size: 18px; color: #164ec7;"><strong>سلام ${name}،</strong></p>
        <p>ما هیجان‌زده‌ایم که به پلتفرم پیام‌رسانی ما ملحق شدید! چتیفای شما را با دوستان، خانواده و همکارانتان در زمان واقعی متصل می‌کند، مهم نیست کجا باشند.</p>
        
        <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #056269;">
            <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>با چند گام ساده شروع کنید:</strong></p>
            <ul style="padding-left: 20px; margin: 0;">
                <li style="margin-bottom: 10px;">عکس پروفایل خود را تنظیم کنید</li>
                <li style="margin-bottom: 10px;">تماس‌های خود را پیدا و اضافه کنید</li>
                <li style="margin-bottom: 10px;">یک گفتگو شروع کنید</li>
                <li style="margin-bottom: 0;">عکس‌ها، ویدیوها و بیشتر را به اشتراک بگذارید</li>
            </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href=${clientURL} style="background: linear-gradient(to right, #056269, #164ec7); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">چتیفای را باز کنید</a>
        </div>
        
        <p style="margin-bottom: 5px;">اگر به کمک نیاز دارید یا سؤالی دارید، ما همیشه اینجا هستیم تا به شما کمک کنیم.</p>
        <p style="margin-top: 0;">پیام‌رسانی شاد!</p>
        
        <p style="margin-top: 25px; margin-bottom: 0;">با احترام،<br>تیم چتیفای</p>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
        <p>© ۱۴۰۴ چتیفای. تمامی حقوق محفوظ است.</p>
        <p>
            <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">سیاست حفظ حریم خصوصی</a>
            <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">شرایط خدمات</a>
            <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">تماس با ما</a>
        </p>
    </div>
</body>
</html>
  `;
}
