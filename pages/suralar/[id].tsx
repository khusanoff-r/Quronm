import AudioPlayer from "react-audio-player";
import style from "./suralar.module.scss";
export const getStaticPaths = async () => {
  const res = await fetch(`https://api.alquran.cloud/v1/surah`);
  const repo = await res.json();
  const paths = repo?.data.map((p: any) => {
    return {
      params: {
        id: `${p?.number}`,
      },
    };
  });

  return {
    paths,

    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  console.log(context);
  const { params } = context;

  const res = await fetch(
    `https://api.alquran.cloud/v1/surah/${params.id}/ar.alafasy`
  );
  const repo = await res.json();
  return { props: { repo } };
};

export default function DetailedProduct({ repo }: any) {
  console.log(repo);

  return (
    <>
      <div className={style.container_single}>
        {repo.data.ayahs.map((ayah: any) => (
          <div key={ayah.number} className={style.box}>
            <div className={style.text}>{ayah.text}</div>
            <div className={style.audio}>
              <AudioPlayer src={ayah.audio} controls />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
