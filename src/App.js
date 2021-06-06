import React from 'react';
import {Button, Card, Col, Divider, Row, Form, Input} from 'antd';
import './App.css';
import {Submission} from "./Submission";
import {TOTP} from "./TOTP";


const App = () => (
    // <Row gutter={[24, 16]}>
    //     <Col span={12} style={{background: "blue", height :"100vh"}} >sad</Col>
    //     <Col span={12} style={{background: "red", height :"100vh"}} >dasd</Col>
    //
    // </Row>
    <div className={"Container"}>
        <Row justify="space-between">
            <Col span={12}>
                <Submission/>
            </Col>
            <Col span={12}>
                <TOTP/>
            </Col>
        </Row>
    </div>
);

export default App;