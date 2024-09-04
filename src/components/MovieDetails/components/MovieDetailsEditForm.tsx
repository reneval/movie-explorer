import { MovieInfo } from "@/types/movie";
import { ChangeEvent, FC } from "react";

interface MovieDetailsProps {
  editableMovie: MovieInfo | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MovieDetailsEditForm: FC<MovieDetailsProps> = ({ editableMovie, handleChange }) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          type="text"
          value={editableMovie?.Title}
          name="Title"
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered input-sm w-full"
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Year</span>
        </div>
        <input
          type="text"
          value={editableMovie?.Year}
          name="Year"
          onChange={handleChange}
          placeholder="Year"
          className="input input-bordered input-sm w-full "
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Genre</span>
        </div>
        <input
          type="text"
          name="Genre"
          value={editableMovie?.Genre}
          onChange={handleChange}
          placeholder="Genre"
          className="input input-bordered input-sm w-full "
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Director</span>
        </div>

        <input
          type="text"
          value={editableMovie?.Director}
          name="Director"
          onChange={handleChange}
          placeholder="Director"
          className="input input-bordered input-sm w-full "
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Plot"
          name="Plot"
          rows={3}
          value={editableMovie?.Plot}
          onChange={handleChange}
        ></textarea>
      </label>
    </div>
  );
};

export default MovieDetailsEditForm;
