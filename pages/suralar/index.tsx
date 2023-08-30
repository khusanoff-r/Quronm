import style from "./suralar.module.scss";
import Link from "next/link";
import Head from "next/head";
import Search from "../../component/search";

export const getStaticProps = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Suralar({ repo }: any) {
  return (
    <div className={style.container}>
      <Head>
        <title>Quron Suralar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <div className={style.suralar}>
        {repo?.data.map((p: any) => (
          <Link key={p.number} href={`/suralar/${p.number}`}>
            <div className={style.container}>
              <div className={style.numbers}>
                <p>{p?.number}</p>
                <p>{p?.numberOfAyahs}</p>
              </div>
              <div className={style.texts}>
                <p>{p?.name}</p> <p>{p?.englishName}</p>{" "}
                <p>{p?.englishNameTranslation}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}