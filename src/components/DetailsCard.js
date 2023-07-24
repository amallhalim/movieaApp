import React from "react";

export default function DetailsCard({ movie }) {
  return (
    <div className=" container h-100 pb-5">
      <div className="  row pt-5 ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className=" col-lg-4 col-md-12 rounded mb-5  mb-lg-1  "
          alt="..."
        />
        <div className="col-lg-8 col-md-12   ">
          <span className="h4 text-primary me-3 ">{movie.title}</span>
          <span className="h5 bg-danger text-light rounded-3 p-2">
            {movie.vote_average}
          </span>
          <p className="h5 light-textColor mt-3 ">
            original_language :
            <span className=" text-primary">{movie.original_language}</span>
          </p>
          <p className="h5 light-textColor mt-3">
            overview :
            <p className=" h5 textColor mt-2 mb-4">{movie.overview}</p>
          </p>
          <p className="h5 light-textColor  mb-3">
            popularity :<span className="h5 textColor">{movie.popularity}</span>
          </p>

          {movie.adult && (
            <p
              className="h5 textColor"
              style={{ color: movie.adult ? "red" : "blue" }}
            >
              adult
            </p>
          )}

          <p className=" h5 light-textColor">
            release_date :
            <span className=" h5 textColor">{movie.release_date}</span>
          </p>

          <p className=" h5 light-textColor">
            vote_count :
            <span className=" h5 text-primary">{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
