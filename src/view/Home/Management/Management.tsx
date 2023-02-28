import { Col, Row } from 'antd'
import React from 'react'
import ContentOnboard from '../ContentOnboard/ContentOnboard'
import Header2 from '../Header2'
import Sidebar from '../Sidebar'
// import SiderComponent2 from '../SiderComponent/SiderComponent2'

const Management = () => {
    return (
        <div style={{ backgroundColor: '#1E1E2E' }}>
            <Header2></Header2>


            <Row>
                <Col span={18} push={3} style={{ marginTop: '100px' }}>
                    <ContentOnboard></ContentOnboard>
                </Col>
                <Col span={3} pull={18}>

                    {/* <SiderComponent2 className={'sider'} setClassName={(className) => { }}></SiderComponent2> */}
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </div>
    )
}

export default Management