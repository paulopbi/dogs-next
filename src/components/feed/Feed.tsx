import { Photo } from "@/actions/photos-get";
import FeedPhotos from "./FeedPhotos";

function Feed({ photos }: { photos: Photo[]; user?: 0 | string }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}

export default Feed;
