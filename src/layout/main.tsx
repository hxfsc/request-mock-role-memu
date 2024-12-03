import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  SmileFilled,
  CrownFilled,
  TabletFilled,
  ChromeFilled,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { useEffect, useState } from 'react'
import { menuApi } from '../api/menu';


const Icons = {
  SmileFilled: <SmileFilled/>,
  CrownFilled: <CrownFilled/>,
  TabletFilled: <TabletFilled/>,
  ChromeFilled: <ChromeFilled/>
}

const Main= () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  const [propsData, setPropsData] = useState({})

  async function getPropsData(){
    let data = await menuApi()

    const routes = data.route?.routes?.map((item:any)=>{
      const Icon = Icons[item.icon]

      return {...item, icon: Icon}
    })
    data = {...data, route:{...data.route, routes}}
    setPropsData(data)
  }


  useEffect(()=>{
    getPropsData()
  }, [])


  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...propsData}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '七妮妮',
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Main
