import {Card, Input, message, Typography} from "antd";
import {useState} from "react";
import axios from "axios";


const { Search } = Input;
const { Paragraph } = Typography;
export const TOTP = prop => {
    const cloudAPI = axios.create({
        baseURL: 'http://47.243.120.6:5000',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })

    const[code, setCode] = useState("******");
    const onSearch = async (value) => {
       let requestOptions = {
            method: 'GET',
            redirect: 'follow',
           mode: 'no-cors',
           credentials:'same-origin'
        };

        let res = await cloudAPI.get('/account?name='+ value)
        if (res.status !== 200 || res.data.state !== 200) message.error("出错了，请检查参数！")
        else setCode(res.data.payload.code)
    }
    return (<Card
            title={"查询二步验证"}
            className={"card"}>
            <Search
                placeholder="输入需要查询的账号"
                allowClear
                enterButton="查询"
                size="large"
                onSearch={onSearch}
            />
            <div className={"code"}>
            <Paragraph copyable>{code}</Paragraph>
            </div>
        </Card>
    )
}