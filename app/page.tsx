import Image from 'next/image'
import muxBlurHash from "@mux/blurhash";
import Player from "./player";
import styles from './page.module.css'

async function getVideo () {
  const playbackId = "FuJSYrK0014ec2LPnm11bzC2MAySAQPqA";
  const { blurHashBase64, sourceWidth, sourceHeight } = await muxBlurHash(playbackId);
  const aspectRatio = `${16 / 9}`;

  return {
    playbackId,
    aspectRatio,
    placeholder: blurHashBase64,
  }
}

export default async function Home() {
  /*
   *  This async code runs server-side. It's a new React Server Component thing
   */
  const { playbackId, placeholder, aspectRatio } = await getVideo();

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Next 13 + Mux Player
        </h1>

        <div className={styles.playerWrapper}>
          <Player
            playbackId={playbackId}
            placeholder={placeholder}
            aspectRatio={aspectRatio}
          />
         </div>

         <p className={styles.message}>Content below the player</p>
      </main>
    </div>
  )
}
