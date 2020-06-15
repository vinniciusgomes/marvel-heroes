import React, { useState, useEffect } from 'react';

import { Container, Level } from './styles';

interface Props {
  level: number;
}

const AbilitiesLevel: React.FC<Props> = ({ level }) => {
  const [bars, setBars] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setBars([]);

    for (let items = 1; items <= 44; items++) {
      setBars((oldValue: number[]) => [...oldValue, items]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Container>
      {!loading &&
        bars.map((data) => (
          <Level
            key={data}
            color={data <= Math.round((level * 44) / 100)}
            height={data === Math.round((level * 44) / 100)}
          />
        ))}
    </Container>
  );
};

export default AbilitiesLevel;
