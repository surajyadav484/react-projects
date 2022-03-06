import { React, useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import moment from 'moment';
import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select
const News = ({ simplified }) => {

    const { data } = useGetCryptosQuery(100)
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 100 })

    if (isFetching) return <Loader />
    console.log(cryptoNews?.value);
    return (
        <>
            <Row gutter={[32, 32]} >
                {
                    !simplified && (
                        <Col span={24}>
                            <Select
                                showSearch
                                className='select-news'
                                placeholder={newsCategory}
                                optionFilterProp='children'
                                onChange={(value) => setNewsCategory(value)}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="Cryptocurrency">Cryptocurrency</Option>
                                {
                                    data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)
                                }
                            </Select>
                        </Col>
                    )
                }
                {
                    cryptoNews?.value?.map((news, i) => (
                        <Col xs={24} sm={12} lg={8} key={i}>
                            <Card
                                className='news-card'
                                hoverable
                            >
                                <a href={news.url} target='_blank'>
                                    <div className='news-image-container'>
                                        <Title level={4} className='news-title'>{news.name}</Title>
                                        <img src={news?.image?.thumbnail?.contentUrl} />
                                    </div>

                                    <p>
                                        {
                                            news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description
                                        }
                                    </p>
                                    <div className='provider-container'>
                                        <div>
                                            <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt='News'></Avatar>
                                            <Text className='provider-name'>{news.provider[0]?.name}</Text>
                                        </div>
                                        <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                    </div>

                                </a>


                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}
export default News;