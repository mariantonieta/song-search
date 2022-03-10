import Message from "./Message";
import SongArtists from "./SongArtists";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtists artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete '<em>${search.artist}</em>'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;