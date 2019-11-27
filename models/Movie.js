export class Movie {
  adult;
  backdrop_path;
  genre_ids;
  id;
  original_language;
  original_title;
  overview;
  popolarity;
  poster_path;
  release_date;
  title;
  video;
  vote_average;
  vote_count;

  constructor(value) {
    this = Object.assign({}, value);
  }
}