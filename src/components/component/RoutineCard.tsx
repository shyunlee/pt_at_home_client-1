import React from 'react';
import styled from 'styled-components';
import { Routine } from '../../modules/reducers/routineList';

interface RoutineCardProps {
  routineCard: Routine;
  clickRoutineCard(id: number): void;
}

const RoutineCard = ({
  routineCard,
  clickRoutineCard,
}: RoutineCardProps): JSX.Element => {
  const routineId = routineCard?.routineId
  const title = routineCard?.title
  const workout = routineCard?.workout
  return (
    <Card onClick={() => clickRoutineCard(routineId)}>
      <Title>{title.toUpperCase()}</Title>
      <Wrap>
        <ExplanationWrap>
          {workout.map((el) => (
            <Explanation key={el.id}>{el.title?.toUpperCase()}</Explanation>
          ))}
        </ExplanationWrap>
        <SubWrap>
          <Sub>{`${workout.reduce((acc, cur) => acc + (cur.image?.length < 3 ? cur.myCount : 0),0) / 60} min`}</Sub>
          <Sub>{`${numberWithCommas(workout.reduce((acc, cur) => acc + cur.calrorie * (Math.round(cur.myCount / cur.myCount) * Math.round(cur.mySetCount / cur.mySetCount)),0),)} kcal`}</Sub>
        </SubWrap>
      </Wrap>
    </Card>
  );
};

function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Card = styled.div`
  height: 200px;
  width: 250px;
  margin: 5% auto;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  transition: 400ms ease;
  padding: 10px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #000000;
  margin: 5px 35px 15px 35px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ExplanationWrap = styled.div`
  height: 135px;
  width: 120px;
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  overflow-y: scroll;
  background-color: #c2c2c2;
  border-radius: 5px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
  }
`;
const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Explanation = styled.div`
  font-size: 14px;
  color: #000000;
  background-color: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0px 5px 4px 0px;
  padding: 3px 20px 4px;
  border-radius: 5px;
`;
const Sub = styled.div`
  font-size: 14px;
  color: #000000;
  margin: 0 0 4px 0px;
  padding: 3px 0 4px;
`;

export default RoutineCard;
