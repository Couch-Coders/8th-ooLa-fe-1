import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'antd';
import StudyMemberItem from '../studyMemberItem/studyMemberItem.component';
import { StudyMemberContainer } from './StudyMembers.style';
import { getStudyMembers } from '../../../lib/apis/main';

const StudyMembers = () => {
  const [members, setMembers] = useState([]);
  const { studyId } = useParams();
  useEffect(() => {
    const fetchStudyMember = async () => {
      const memberArr = await getStudyMembers(studyId);
      console.log(memberArr);
      setMembers(memberArr);
    };

    fetchStudyMember();
  }, []);

  return (
    <StudyMemberContainer>
      <Row gutter={24}>
        {!!members.length ? (
          members.map(member => (
            <StudyMemberItem memberData={member} key={member.id} />
          ))
        ) : (
          <div>아직 멤버가 없습니다</div>
        )}
      </Row>
    </StudyMemberContainer>
  );
};
export default StudyMembers;
