import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../../context/Context";
import {
  HomeSectionComponent,
  HomeWrapper,
  Wrapper,
  LeftCol,
  RightCol,
  TitleText,
  FormContainer,
  FormInner,
  Form,
  Field,
  Input,
  InputButton,
  PassLink,
  PassLinkA,
  SignUpLink,
  SignLinkB,
  SlideControls,
  WrapperCenter,
  WrapperRight,
  WrapperLeft,
  WrapperRightImg,
  WrapperLeftImg,
  HomeSect,
  SlideDiv1,
  SlideDiv2,
  SlideDiv3,
  SlideDiv4,
} from "./HomeSectElements";
import StudentImg from "../../../../images/student.png";
import TraineeImg from "../../../../images/train.png";
import HireImg from "../../../../images/hire.png";
import TrainerImg from "../../../../images/trainer.png";
const HomeSection = () => {
  const { dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login function handler
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "/auth/login",
        {
          username: username,
          password: password,
        },
        (err, data) => {
          if (err) {
            console.log(err.message);
          }
          if (data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            console.log("Successfully logged in", res.data);
          }
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // res.data && window.location.replace("/profile");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error.message);
    }
  };
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const isActiveToggle1 = (e) => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    console.log(e.target.innerHTML);
  };

  const isActiveToggle2 = (e) => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    console.log(e.target.innerHTML);
  };
  const isActiveToggle3 = (e) => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(false);
    console.log(e.target.innerHTML);
  };
  const isActiveToggle4 = (e) => {
    setIsActive4(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive3(false);
    console.log(e.target.innerHTML);
  };
  return (
    <HomeSect>
      <HomeSectionComponent>
        <HomeWrapper>
          <LeftCol></LeftCol>
          <RightCol>
            <Wrapper>
              <WrapperRight>
                <WrapperRightImg src={StudentImg} />
                <WrapperRightImg src={TraineeImg} />
              </WrapperRight>
              <WrapperCenter>
                <TitleText></TitleText>
                <FormContainer>
                  <SlideControls>
                    <SlideDiv1
                      value="student"
                      isActive1={isActive1}
                      onClick={isActiveToggle1}
                    >
                      Student
                    </SlideDiv1>
                    <SlideDiv2
                      value="trainee"
                      isActive2={isActive2}
                      onClick={isActiveToggle2}
                    >
                      Trainee
                    </SlideDiv2>
                    <SlideDiv3
                      value="trainer"
                      isActive3={isActive3}
                      onClick={isActiveToggle3}
                    >
                      Trainer
                    </SlideDiv3>
                    <SlideDiv4
                      value="hire"
                      isActive4={isActive4}
                      onClick={isActiveToggle4}
                    >
                      Hire
                    </SlideDiv4>
                  </SlideControls>
                  <FormInner>
                    <Form onSubmit={loginFormSubmitHandler}>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Enter your username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Field>
                      <PassLink>
                        <PassLinkA>Forgot Password ?</PassLinkA>
                      </PassLink>
                      <Field>
                        <InputButton type="submit" value="Login" />
                      </Field>
                      <SignUpLink>
                        Not a Member yet ?
                        <Link
                          to={`/register`}
                          style={{ textDecoration: "none" }}
                        >
                          <SignLinkB> Sign up Right now</SignLinkB>
                        </Link>
                      </SignUpLink>
                    </Form>
                  </FormInner>
                </FormContainer>
              </WrapperCenter>
              <WrapperLeft>
                <WrapperLeftImg />
                <WrapperRightImg src={TrainerImg} />
                <WrapperRightImg src={HireImg} />
              </WrapperLeft>
            </Wrapper>
          </RightCol>
          <LeftCol></LeftCol>
        </HomeWrapper>
      </HomeSectionComponent>
    </HomeSect>
  );
};

export default HomeSection;