import React, { useEffect, useState } from 'react'

// components
import Navigation from '../components/Navigation';
import Spinner from '../components/Spinner';
import CompHandler from '../components/CompHandler'
import Card from '../components/Card'

import logo from '../logo.svg';
import './Table.css';

export const Table = ({movies, isAuthenticated}) => {
    return (
        <div className="Table">
            <header className="Table-header">
                {
                    Object.keys(movies).length
                        ? (
                            <div className="d-flex flex-wrap justify-content-center my-5">
                                <CompHandler items={movies} resourceName="movie" compItem={Card} />
                            </div>
                        )
                        : <Spinner />
                }
            </header>
        </div>
    )
}