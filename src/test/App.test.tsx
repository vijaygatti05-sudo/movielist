import { render } from '@testing-library/react'

import App from '../App';
import { MoviesPageObject } from './MoviesPageObject';

jest.mock('../data/initial', () => ({
    getInitialMovies: () => require('../data/test-movies.json')
}))

describe('Movie Application', () => {

    describe('[Listing movies]', () => {
        it('should display movie data', async () => {
            // given
            render(<App />);
            await MoviesPageObject.loaderDisappears();

            // then
            MoviesPageObject.expectVisibleTextWithinMovieCard('fakeid-fight-club', [
                'Fight Club',
                'Mischief. Mayhem. Soap.',
                'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
            ]);
            MoviesPageObject.expectMovieImageURL('fakeid-fight-club', "fight-club.jpg")
        });
    })

    describe('[Movie rating]', () => {
        it('should display current movie rating', async () => {
            // given
            render(<App />);
            await MoviesPageObject.loaderDisappears();
    
            // then
            MoviesPageObject.expectMovieRating('fakeid-fight-club', "4.67");
        });
    
        it('should update the rating after star icon was clicked', async () => {
            // given
            render(<App />);
            await MoviesPageObject.loaderDisappears();
    
            // when
            MoviesPageObject.rateMovie('fakeid-fight-club', 1);
    
            // then
            MoviesPageObject.expectMovieRating('fakeid-fight-club', "3.75");
        });
    });

    describe('[New movie form]', () => {
        it('should add a new movie after form was filled and submitted', async () => {
            // given
            render(<App />);
            await MoviesPageObject.loaderDisappears();

            // then
            MoviesPageObject.expectMoviesVisibleCount(4);

            // when
            MoviesPageObject.clickAddMovieButton();
            MoviesPageObject.fillNewMovieForm({
                Url: "some url",
                Title: "The Green mile",
                Subtitle: "Walk a mile you'll never forget.",
                Description: "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
            })
            MoviesPageObject.clickSubmitButton();

            // then
            MoviesPageObject.expectMoviesVisibleCount(5);
            MoviesPageObject.expectTextVisible(/Add Movie/i)
            MoviesPageObject.expectTextVisible(
                /The Green mile/i,
                /Walk a mile you'll never forget/i,
                /Death Row guards at a penitentiary/i,
            )
        });
    });

    describe('[Deleting movies]', () => {
        it('should not display a movie after it gets deleted', async () => {
            // given
            render(<App />);
            await MoviesPageObject.loaderDisappears();

            // then
            MoviesPageObject.expectMoviesVisibleCount(4);
    
            // when
            MoviesPageObject.clickDeleteMovieButton('fakeid-fight-club');
    
            // then
            MoviesPageObject.expectMoviesVisibleCount(3);
        });
    });
});
