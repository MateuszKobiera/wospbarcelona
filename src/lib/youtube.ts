/**
 * Latest videos from the WOŚP Barcelona YouTube channel, read from the channel's public RSS feed
 * (no API key needed). Fetched on the server and cached for an hour, so visitors never talk to YouTube
 * until they click a video.
 */
export const YOUTUBE_CHANNEL_ID = 'UCgpuWX7rB6BF1iYw64D7jdw';
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@sztabwospbarcelona3771';

export type YoutubeVideo = {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
};

function decodeEntities(s: string) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

export async function getLatestYoutubeVideos(limit = 6): Promise<YoutubeVideo[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = xml.split('<entry>').slice(1);
    return entries.slice(0, limit).flatMap((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([^<]*)<\/title>/)?.[1];
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
      if (!id || !title) return [];
      return [{
        id,
        title: decodeEntities(title),
        published: published ?? '',
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      }];
    });
  } catch {
    return [];
  }
}
