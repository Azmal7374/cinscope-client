import { MovieCard } from "@/components/MovieCard/MovieCard";
import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";

export default function Movies() {
  const {data:movies, isLoading} =useGetMoviesQuery({});
  console.log(movies)
  if(isLoading){
   return (
    <p className="text-4xl text-yellow-400 flex justify-center items-center"> Loading....</p>
   )
  }
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-4 gap-4">
        {movies?.data?.map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
