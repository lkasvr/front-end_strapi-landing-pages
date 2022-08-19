import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const load = async () => {
      const data = await fetch(`http://localhost:1337/api/pages?populate=deep`);
      const json = await data.json();
      const pageData = mapData(json);
      console.log(json);
      console.log(pageData);
      if (Array.isArray(pageData)) {
        setData(pageData[0]);
      } else {
        setData(pageData);
      }
    };

    load();
  }, []);

  if (data === undefined) return <h1>Página não encontrada</h1>;

  if (data && !data.slug) return <h1>Carregando</h1>;

  return <Base {...mockBase} />;
}

export default Home;
