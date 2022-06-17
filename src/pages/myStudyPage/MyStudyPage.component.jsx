import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { style } from './MyStudyPage.style';
import StudyList from '../../components/myStudy/myStudyList/MyStudyList.component';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';
import { getProgressStudy } from '../../lib/apis/myStudy';

const MyStudyPage = () => {
  const { TabPane } = Tabs;

  useEffect(() => {
    const response = async () => await getProgressStudy();
    response();
  }, []);

  return (
    <>
      <TopBanner title="마이스터디" info="ooLa와 함께하는 스터디" />
      <TabsContainer>
        <Tabs defaultActiveKey="1">
          <TabPane tab="진행스터디" key="1">
            <StudyList />
          </TabPane>
          <TabPane tab="내가만든스터디" key="2">
            <StudyList />
          </TabPane>
          <TabPane tab="진행예정스터디" key="3">
            <StudyList />
          </TabPane>
          <TabPane tab="완료스터디" key="4">
            <StudyList />
          </TabPane>
          <TabPane tab="관심스터디" key="5">
            <StudyList />
          </TabPane>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export default MyStudyPage;

const { TabsContainer } = style;
