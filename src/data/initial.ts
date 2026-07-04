import { Movie } from "movies/MovieModel";
import moviesData from 'data/real-movies.json';
import { getUser } from "Auth/authService";
import { moviesAPIurl } from "data/globalconstants" 



export const getInitialMovies = (): Movie[] => [...moviesData];


export const getremoteMovies = async function () {
        console.log("inside getremoteMovies");

            const user = await getUser();

            if (!user) {
                console.log(user);

                return;
            }

            const response =
                await fetch(
                    moviesAPIurl,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${user.access_token}`
                        }
                    });

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            return data;

}
