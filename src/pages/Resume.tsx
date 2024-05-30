import styled from '@emotion/styled';

const Container = styled.div``;

const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`;

const Date = styled.p`
  margin-top: 0;
`;

const Content = styled.div`
  margin: 0.3rem 0;
`;

const Resume = () => {
  return (
    <Container>
      <ResumeItem>
        <h2>🧑‍💻실전코딩 수강</h2>
        <Date>2024.03 ~ 2024.06</Date>
        <Content>React, SpringBoot 등 다양한 실무 관련 지식 수강</Content>
      </ResumeItem>
      <ResumeItem>
        <h2>🦁멋쟁이 사자처럼 동아리</h2>
        <Date>2024.02 ~ 2024.12</Date>
        <Content>백엔드 트랙 수강. Java Spring에 대한 공부 및 대회 참가</Content>
      </ResumeItem>
      <ResumeItem>
        <h2>🏆동아리 아이디어 콜라톤 우수상</h2>
        <Date>2023.11</Date>
        <Content>시니어분들을 위한 스마트폰 이용 도우미 어플 아이디어 고안</Content>
      </ResumeItem>
      <ResumeItem>
        <h2>📖독서 기록 웹 서비스 개발 프로젝트</h2>
        <Date>2023.09 ~ 2023.12</Date>
        <Content>html, css, javascript, php를 이용하여 독서를 기록하고 함께 공유할 수 있는 웹서비스 개발</Content>
      </ResumeItem>
    </Container>
  );
};

export default Resume;
