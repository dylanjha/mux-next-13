"use client";
/*
 * Because MuxPlayer uses client-side hooks, it needs to be loaded
 * in a component with the "use client" directive.
 *
 * Maybe we can hard-code that in the MuxPlayer component so folks
 * don't have to specify it themselves?
 */

import MuxPlayer from "@mux/mux-player-react/lazy";

export default function Player({
  playbackId,
  placeholder,
  aspectRatio,
}: {
  playbackId: string;
  placeholder: string;
  aspectRatio: string;
}) {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      placeholder={placeholder}
      title="Tea and Cookies"
      metadata={{
        video_id: "video-id-54321",
      }}
      style={{ aspectRatio }}
    />
  );
}

