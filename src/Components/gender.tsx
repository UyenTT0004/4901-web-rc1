import React, { useState } from 'react';
import { FC } from 'react';
import '../App.less';
import { Button, Progress, Col, Row, Form, Typography} from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import styled from 'styled-components';
import VienHLogo from '../Assets/Vien-Logo.svg';
import PatientPic from '../Assets/PatientPic.png';
import { ReactComponent as Mars} from '../Assets/Mars.svg';
import { ReactComponent as Venus} from '../Assets/Venus.svg';

/*
ToDO: add links and event onSubmit
*/
const Page =  styled.div`
height: 100%;
display: grid | inline-grid;
`;


const VienProgress = styled(Progress)`
  padding: 0em;
  margin: 0em;
  border: none;
  position: absolute;
`;

const Header =  styled(Col)`
margin: 1 rem;
width: 100%;
`;
const VienIcon = styled(Icon)`
&:focus {
  color: #E73D8E;
  border-color: #E73D8E;
}

&:hover {
  color: #E73D8E;
  border-color: #E73D8E;
};
`;
const PatientBack = styled(Col)`
  position: absolute;
  right: 0;
  height: 100%;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-content: end;
  background-color: #f5fdff;
  z-index: 1;
`;
const GenderForm = styled(Col)`

  width: 450px;
  position: absolute;
  margin: 0 6rem;

`;

const RedirectFooter = styled(Typography.Paragraph)`
    position: fixed;
    bottom: 48px;
    fontWeight: 300;
    fontSize: 18px
    margin: 0 6rem;
    color: #A2A9B0;
  & > a {
    color: #123148;
  }
`;


const VienFooterStyle = styled(Typography.Paragraph)`
    position: fixed;
    left: 0;
    bottom: 18px;
  margin: 0 6rem;
  color: #697077;
  & > a {
    color: #123148;
  }
`;

const GenderButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
  height: 72px;
  font-size: 20px;
  font-weight: 500;
  color: #A2A9B0;
  border-radius: 14px;
  transition: background 200ms ease-out;

  &:focus {
    color: #E73D8E;
    border-color: #E73D8E;
  }

  &:hover {
    color: #E73D8E;
    border-color: #E73D8E;
  };
    cursor: pointer;
  }
  
  }
`;
const NextButton = styled(Button)`
  background: #C3CAD0;
  color: #FFFF;
  border-radius: 8px;
  Font-size: 20px;
  font-weight: 500;
  height: 62px;
  border: none;
  transition: background 200ms ease-out;

  &:focus {
    outline: none;
    background: #123148;
    color: #FFFF
  }
  &:hover {
    background: #123148;
    color: #FFFF
  };
    cursor: pointer;
  }
  
`;


const Content = styled(Row)`
  margin-top : 0.95rem;
  display:grid;
  grid-template-columns: 50% 50%;
`;

const ContentChild = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
`;


function Gender() {

  const [gender, setGender] = useState("");
  const [isDisabled, setDisable] = useState(false);

  return(
        <Page>
            <Row>
                <Header>
                <div>
                 <img src = {VienHLogo} alt = "logo"/>
                </div>
                 <div>
                 <VienProgress
                 percent={30}
                 showInfo={false}
                 strokeLinecap ="round"
                 strokeColor = "#123148"
                trailColor = "#EDEFED"
                strokeWidth ={5}
                width = {5}
                />
                </div>
                </Header>
            </Row>
            <Content>
                <GenderForm>
                    <Form>
                    <Form.Item>
                    <div>
                    <a href="/" style = {{color: '#123148'}}><LeftOutlined style = {{color: '#123148'}}/> <b>Back</b> </a>
                    </div>
                    </Form.Item>
                    <Form.Item>
                    <Typography.Title
                    style={{ fontWeight: 700, color: '#123148' }}
                    level={2}
                    >
                    Please indicate your gender.
                    </Typography.Title>
                    </Form.Item>
                    <Form.Item>
                    <Typography.Paragraph style={{ fontWeight: 500, fontSize: '18px', color: '#697077' }}>
                    Please make sure the gender you provide is the same as you have on file with your ID or insurance carrier
                    </Typography.Paragraph>
                    </Form.Item>
                    <Form.Item>
                    <ContentChild>
                    <GenderButton icon={<Icon style={{ transform: 'scale(1.5)', marginRight: '0.25rem' }} component={Mars} />}
                    onClick={() => {setGender("male");setDisable(false);}}>                    
                        Male
                    </GenderButton>
                    <GenderButton onClick={() => {setGender("female");setDisable(false);}}>
                    <VienIcon
                      style={{
                        transform: 'scale(1.5)',
                        marginRight: '0.25rem'
                      }}
                      component={Venus}
                    />
                        Female
                    </GenderButton>
                    </ContentChild>
                    </Form.Item>
                    <Form.Item>
                    <NextButton block disabled ={isDisabled} >Next</NextButton>
                    </Form.Item>
                    </Form>
                    <RedirectFooter>
                      Already a member?
                      <a href="/sign-in">
                      Sign in
                      </a>
                    </RedirectFooter>
                    <VienFooterStyle>
                        &copy; {new Date().getFullYear()} Vien Health &#9679;{' '}
                        <a href='/'>Terms &amp; Conditions</a> &#9679;{' '}
                        <a href='/'>Privacy Policy</a>
                    </VienFooterStyle>
                </GenderForm>            
                <PatientBack>
                    <img src={PatientPic} alt="Patient-Art"/>
                </PatientBack>
            </Content>
        </Page>


    );

}



export default Gender;
