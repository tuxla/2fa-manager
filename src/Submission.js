import {Button, Card, Form, Input, message} from "antd";
import axios from "axios";

export const Submission = (props) => {
    const [form] = Form.useForm();

    const cloudAPI = axios.create({
        baseURL: 'http://47.243.120.6:5000',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "content-type": "application/json"
        }
    })

    const onFinish = async () => {
        let body = {
            accountName: form.getFieldValue('accountName'),
            // password: form.getFieldValue('password'),
            secret: form.getFieldValue('secret'),
            // mailPassword: form.getFieldValue('mailPassword')
        }

        let res = await cloudAPI.put('/account', JSON.stringify(body))
        if(res.status !== 200 || res.data.state !== 200) message.error("出错了，请检查参数！")
        else message.success("提交成功！")
    }

    return  <Card title={"录入账户信息"} className={"card"} style={{width: "100%"}} >
        <Form
            labelCol={{span : 5}}
            wrapperCol= {{span: 18}}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="账户"
                name="accountName"
                rules={[{ required: true, message: '请输入账户名' }]}
            >
                <Input/>
            </Form.Item>
            {/*<Form.Item*/}
            {/*    label="密码"*/}
            {/*    name="password"*/}
            {/*    rules={[{ required: true, message: '请输入账户密码' }]}*/}
            {/*>*/}
            {/*    <Input/>*/}
            {/*</Form.Item>*/}
            <Form.Item
                label="2FA密钥"
                name="secret"
                rules={[{ required: true, message: '请输入二步验证密钥' }]}
            >
                <Input/>
            </Form.Item>
            {/*<Form.Item*/}
            {/*    label="邮箱密码"*/}
            {/*    name="mailPassword"*/}
            {/*    rules={[{ required: true, message: '请输入邮箱密码' }]}*/}
            {/*>*/}
            {/*    <Input/>*/}
            {/*</Form.Item>*/}
            <Form.Item wrapperCol= {{offset: 5} }>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>


        </Form>
    </Card>
}