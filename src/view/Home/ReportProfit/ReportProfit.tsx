import { DiffOutlined, RightOutlined } from '@ant-design/icons'
import RightMenu2 from '@layout/RightMenu2'
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent'
import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../Header2'
// import SiderComponent2 from '../SiderComponent/SiderComponent2'
import ReactEcharts from 'echarts-for-react';
import './report.scss'
import Sidebar from '../Sidebar'

const ReportProfit = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    const option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        },
        yAxis: {
            type: 'value',
            max: 9000,
            interval: 1000,
            axisLabel: {
                formatter: function (value: any) {
                    return (value / 1000) + ' triệu';
                }
            }
        },
        series: [
            {
                data: [500, 1000, 1500, 2000, 2200, 2000, 1800, 1400, 1000, 2000, 2800, 3000, 4000, 5200, 5100, 5100, 4500, 4100, 4500, 4500, 4500, 4500, 5000, 2333, 5300, 8000, 7400, 2000, 6000, 2000, 1000],
                type: 'line',
                smooth: true
            }
        ]
    };
    return (
        <div className='wrapper-all'>
            <Header2></Header2>
            <Row>
                <Col span={18} push={3} style={{ marginTop: '80px' }}>
                    <div className="wrapper">
                        <div className="content-header">
                            <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Báo cáo doanh thu</p><br />

                        </div>
                        <div className='big-title'>
                            Báo cáo doanh thu

                        </div>
                        <div className="content-input">
                            <div className="choose-options">
                                <div className="small-title">
                                    Theo tháng:
                                </div>
                                <div className="month-dropdown">
                                    <SelectAndLabelComponent value={'Theo tháng'} dataString={[{ value: 'month', label: 'Theo tháng', data: 'dasdsa' },
                                    { value: 'quy', label: 'Theo quý', data: 'dasdsa' }]}

                                    ></SelectAndLabelComponent>
                                </div>
                                <div className="all-date">
                                    <SelectAndLabelComponent value={'Tháng 1/2021'} dataString={[{ value: '1', label: 'Tháng 1/2021', data: 'Tháng 1' },
                                    { value: '2', label: 'Tháng 2/2021', data: 'aaa' }, { value: '3', label: 'Tháng 3/2021', data: 'dasdsa' }, { value: '4', label: 'Tháng 4/2021', data: 'ssdasd' }, { value: '5', label: 'Tháng 5/2021', data: 'ssdasd' }, { value: '6', label: 'Tháng 6/2021', data: 'ssdasd' }, { value: '7', label: 'Tháng 7/2021', data: 'ssdasd' }, { value: '8', label: 'Tháng 8/2021', data: 'ssdasd' }, { value: '9', label: 'Tháng 9/2021', data: 'ssdasd' }, { value: '10', label: 'Tháng 10/2021', data: 'ssdasd' }, { value: '11', label: 'Tháng 11/2021', data: 'ssdasd' }, { value: '12', label: 'Tháng 12/2021', data: 'ssdasd' },]}

                                    ></SelectAndLabelComponent>
                                </div>
                            </div>
                        </div>
                        <div className="content-body2">
                            <div className="total">
                                <div className="title">
                                    Tổng số bài hát
                                </div>
                                <div className="value">
                                    100
                                </div>
                            </div>
                            <div className="total">
                                <div className="title">
                                    Tổng số lượt phát
                                </div>
                                <div className="value">
                                    32.000.000
                                </div>
                            </div>
                            <div className="total">
                                <div className="title">
                                    Doanh thu trên lượt phát
                                </div>
                                <div className="value">
                                    1.564.745.000đ
                                </div>
                            </div>
                            <div className="total">
                                <div className="title">
                                    Doanh thu chưa phân phối
                                </div>
                                <div className="value">
                                    164.745.000đ
                                </div>
                            </div>
                            <div className="total">
                                <div className="title">
                                    Hành chính phí
                                </div>
                                <div className="value">
                                    3.200.00
                                </div>
                            </div>
                        </div>
                        <div className='chart-wrapper'>
                            <ReactEcharts option={option} />
                        </div>
                    </div>
                </Col>
                <Col span={3} pull={18}>
                    {/* <SiderComponent2></SiderComponent2> */}
                    <Sidebar></Sidebar>

                </Col>

            </Row>
            <RightMenu2>
                <ul className='block-wrapper'>

                    <li className='block-wrapper-inside'>
                        <Link to={'/report-detail'}>
                            <div className='icon-right'>
                                <DiffOutlined />
                            </div>
                        </Link>

                        <div className='word-right'>
                            Báo cáo chi tiết
                        </div>

                    </li>

                </ul>
            </RightMenu2>
        </div>
    )
}

export default ReportProfit