# now_movie
이 프로젝트는 영화 정보 제공 사이트 입니다. (using Typescript, Redux)

---

## 사용한 API
[영화진흥위원회 오픈API](http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)

[The Movie DataBase](https://developers.themoviedb.org/3/search/search-movies)
- 영화진흥위원회 오픈API에서는 영화 포스터(이미지)를 제공하지 않기 때문에 The Movie DataBase를 함께 사용하였습니다.
- **주의사항**:The Movie DataBase에서 제공하는 `poster_path`를 `https://image.tmdb.org/t/p/w500/**poster_path**`에 맞게 사용하셔야 이미지를 가져올 수 있습니다.
