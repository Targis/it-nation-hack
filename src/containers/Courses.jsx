import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import CourseCard from '../components/CourseCard';

import Button from '../components/ui/Button';

const Courses = () => {

    const courses = [
        {id: 1, name: 'front-end', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 2, name: 'it project manager', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 3, name: 'ux/ui web design', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 4, name: 'front-end advanced', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 5, name: 'front-end', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 6, name: 'it project manager', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 7, name: 'ux/ui web design', date: new Date(2019, 1, 31), lessons: 12, places: 18},
        {id: 8, name: 'front-end advanced', date: new Date(2019, 1, 31), lessons: 12, places: 18},
    ]

    return (
        <Wrapper>
            <Container>
                <CoursesTitle>Наші курси</CoursesTitle>
                <CoursesHeader>
                    <HeaderText><b>On-line</b> навчання</HeaderText>
                    <ButtonsArea>
                        <Button
                            height='40px'
                            width='120px'
                            margin='0 10px 0 0'
                            size='14px'
                        >
                            online
                        </Button>
                        <Button
                            height='40px'
                            width='120px'
                            margin='0 10px 0 0'
                            size='14px'
                            color='#333333'
                            bgcolor='none'
                            border='1px solid #333333'
                        >
                            Київ
                        </Button>
                        <Button
                            height='40px'
                            width='120px'
                            margin='0 10px 0 0'
                            size='14px'
                            color='#333333'
                            bgcolor='none'
                            border='1px solid #333333'
                        >
                            Запоріжжя
                        </Button>
                    </ButtonsArea>
                </CoursesHeader>    
                <CardsContainer>
                    {courses.map(course => (
                        <CourseCard 
                            key={course.id}
                            name={course?.name}
                            date={course?.date}
                            lessons={course?.lessons}
                            places={course?.places}
                        />
                    ))}
                </CardsContainer>
            </Container>
        </Wrapper>
    );
}

export default Courses;

const Wrapper = styled.section`

`;

const CoursesTitle = styled.h3`
    margin-bottom: 16px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 138%;

    letter-spacing: 4px;
    text-transform: uppercase;

    color: #232F3C;  
`;

const CardsContainer = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    grid-gap: 30px;

    @media(max-width: 1474px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1114px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 754px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
        grid-auto-rows: 180px;
    }
`;

const CoursesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 36px;

`;

const HeaderText = styled.span`
    margin-right: 16px;

    font-family: 'Rubik';
    font-weight: 500;
    font-size: 26px;
    line-height: 185%;

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #333333;

    & > b {
        font-weight: 500;
        color: #4FCC97;
    }
`;

const ButtonsArea = styled.div`
    display: flex;
    
    & > * {
        margin-right: 10px;
    }

    :last-child {
        margin-right: 0;
    }
`;