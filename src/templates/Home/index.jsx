import { useEffect, useState, useRef } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=dominic&populate=deep`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (e) {
        setData(() => undefined);
      }
    };

    if (isMounted.current === true) load();

    return () => (isMounted.current = false);
  }, []);

  if (data === undefined) return <PageNotFound />;

  if (data && !data.slug) return <Loading />;

  return <Base {...mockBase} />;
}

export default Home;
