import React, {FC} from 'react';
import Link from "next/link";

const Main: FC = () => (<>
  <h1>Очень большое приложение!</h1>
  <Link href={'/calc'}><a>К приложению!</a></Link>
</>);

export default Main;
