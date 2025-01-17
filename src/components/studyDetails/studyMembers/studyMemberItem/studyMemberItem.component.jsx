/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import MemberProfile from '../memberProfile/MemberProfile.component';
import TechsBadge from '../techsBadge/TechsBadge.component';
import MemberProfileDetails from '../memberProfileDetail/MemberProfileDetails.componens';

import {
  StyledCard,
  LeaderMark,
  TechsContainer,
  ButtonsContainer,
  StyledButton,
} from './studyMemberItem.style';

const StudyMemberItem = ({ memberData }) => {
  const { techStack, blogUrl, githubUrl, nickName, photoUrl, introduce } =
    memberData.member;
  const role = memberData.role;
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [profileTechStack, setProfileTechStack] = useState([]);

  useEffect(() => {
    if (techStack.length > 3) {
      const sliceTechStack = techStack.slice(0, 3);
      setProfileTechStack(sliceTechStack);
    } else {
      setProfileTechStack(techStack);
    }
  }, []);

  const showProfileDetailsHandler = () => setShowProfileDetails(true);

  const hideProfileDetailsHandler = () => setShowProfileDetails(false);

  const blogLindHandler = e => {
    e.stopPropagation();
    window.open(blogUrl, '_blank');
  };
  const gitLindHandler = e => {
    e.stopPropagation();
    window.open(githubUrl, '_blank');
  };
  return (
    <Col span={6}>
      {showProfileDetails && (
        <MemberProfileDetails
          onClose={hideProfileDetailsHandler}
          techStack={techStack}
          introduce={introduce}
          nickName={nickName}
        />
      )}
      <StyledCard onClick={showProfileDetailsHandler}>
        {role === 'leader' ? <LeaderMark>Leader</LeaderMark> : null}
        <MemberProfile nickname={nickName} photoUrl={photoUrl} />
        <TechsContainer>
          {!!techStack.length
            ? profileTechStack.map(tech => (
                <TechsBadge key={tech} content={tech} />
              ))
            : null}
          {techStack.length > 3 ? <span>+</span> : null}
        </TechsContainer>
        <ButtonsContainer>
          <StyledButton disabled={!blogUrl.length} onClick={blogLindHandler}>
            블로그
          </StyledButton>
          <StyledButton disabled={!githubUrl.length} onClick={gitLindHandler}>
            깃허브
          </StyledButton>
        </ButtonsContainer>
      </StyledCard>
    </Col>
  );
};

// StudyMemberItem.propTypes = {
//   member: PropTypes.shape({
//     techStackArray: PropTypes.arrayOf(PropTypes.string),
//     blogUrl: PropTypes.string,
//     githubUrl: PropTypes.string,
//     selfIntroduction: PropTypes.string,
//     nickname: PropTypes.string,
//     role: PropTypes.string,
//     photoUrl: PropTypes.string,
//   }),
// };

export default StudyMemberItem;
