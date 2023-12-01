import { useSelector } from 'react-redux';
import { Home, Quiz } from '.';

export const Controls = () => {
  const { started } = useSelector(({ game }) => {
    const { started } = game.gameState;

    return { started };
  });

  return <>{started ? <Quiz></Quiz> : <Home></Home>}</>;
};
