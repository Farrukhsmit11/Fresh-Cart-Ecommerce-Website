
import { Layout, Menu, Select, Space } from "antd"
import "./CategoryDetail.css"
import { Content } from "antd/es/layout/layout";
import Menuitems from "./Menuitems.json"
import { useState } from "react";

const CategoryDetail = () => {

    const [disabled, setDisabled] = useState(false);
    const onChange = checked => {
        setDisabled(checked);
    };

    const handleChange = value => {
        console.log(`selected ${value}`);
    };

    return (

        <div className="container">
            <div className="row">
                <div className="main-wrapper">
                    <div className="sidebar-left">
                        <div className="categories-section">
                            <Menu
                                title="Categories"
                                style={{ width: 256, marginBottom: "20px" }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                items={Menuitems}
                                className="categories-menu"
                            />
                        </div>
                    </div>


                    <Layout className="detail-layout">
                        <Content>
                            <h1 className="layout-heading">Snack and Munchies</h1>
                            <div className="select-products-main">

                                <div className="product-found-left">
                                    <p className="">26 Products Found</p>
                                </div>

                                <div className="select-dropdowm-right">
                                    <Space wrap>
                                        <Select
                                            defaultValue="Show: 10"
                                            style={{ width: 120 }}
                                            onChange={handleChange}
                                            options={[
                                                { value: 'jack', label: '10' },
                                                { value: 'lucy', label: '20' },
                                                { value: 'lucy', label: '30' },
                                            ]}
                                        />
                                    </Space>

                                    <Space wrap>
                                        <Select
                                            defaultValue="Sort by: Featured"
                                            style={{ width: 200 }}
                                            onChange={handleChange}
                                            options={[
                                                { value: 'option2', label: 'Price: low to high', featured: false },
                                                { value: 'option3', label: 'Price High to low', featured: true },
                                                { value: 'option4', label: 'Release Date', featured: false },
                                                { value: 'option5', label: 'Rating', featured: true },
                                            ]}
                                        />
                                    </Space>
                                </div>
                            </div>
                           
                        </Content>
                    </Layout>
                </div>
            </div>
        </div>

    )
}

export default CategoryDetail