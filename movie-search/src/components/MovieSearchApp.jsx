import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieCardGrid from './MovieCardGrid';

export default function MovieSearchApp() {
    return (
        <div>
            <Header />
            <SearchBar />
            <MovieCardGrid />
        </div>
    );
}
