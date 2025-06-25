# EmailJS 设置指南

## 步骤 1: 注册 EmailJS 账号

1. 访问 https://www.emailjs.com/
2. 点击 "Sign Up" 注册免费账号
3. 使用你的邮箱注册

## 步骤 2: 添加邮件服务

1. 登录后，进入 "Email Services" 页面
2. 点击 "Add New Service"
3. 选择 "Gmail" 或 "Outlook"
4. 按照提示授权你的邮箱账户
5. 记录下生成的 **Service ID**

## 步骤 3: 创建邮件模板

1. 进入 "Email Templates" 页面
2. 点击 "Create New Template"
3. 设置模板名称：`3D Print Request Notification`
4. 在模板内容中使用以下变量：

### 邮件模板内容：

**主题：**
```
New 3D Print Request from {{from_name}}
```

**邮件内容：**
```
🧾 New 3D Print Request

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📘 Facebook: {{facebook}}
💬 Message: {{message}}

📎 Model File Download Link:
{{file_link}}

---
This is an automated notification from your 3D printing website.
```

5. 保存模板并记录下 **Template ID**

## 步骤 4: 获取 User ID

1. 进入 "Account" 页面
2. 找到 "API Keys" 部分
3. 复制 **Public Key** (这就是你的 User ID)

## 步骤 5: 配置环境变量

1. 复制 `env.local.example` 文件为 `.env.local`
2. 将你的配置信息填入：

```bash
VITE_EMAILJS_SERVICE_ID=你的_service_id
VITE_EMAILJS_TEMPLATE_ID=你的_template_id  
VITE_EMAILJS_USER_ID=你的_user_id
```

## 步骤 6: 测试功能

1. 启动开发服务器：`npm run dev`
2. 填写表单并上传文件
3. 检查你的邮箱是否收到通知

## 注意事项

- EmailJS 免费版每月可发送 200 封邮件
- 确保你的邮箱服务（Gmail/Outlook）已正确授权
- 如果邮件发送失败，检查控制台错误信息
- 模板变量必须与代码中的字段名完全匹配

## 故障排除

**邮件发送失败：**
- 检查环境变量是否正确配置
- 确认 EmailJS 服务已正确设置
- 查看浏览器控制台错误信息

**模板变量不显示：**
- 确保模板中的变量名与代码中的字段名一致
- 检查变量名是否包含正确的双大括号 `{{variable_name}}` 