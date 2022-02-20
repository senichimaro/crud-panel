// pages
import { Table } from './Table';

// components
import { DataLoader } from '../components/DataLoader';
import Navigation from '../components/Navigation';
// services
import { getDataAPI } from '../services/services';

export const Home = () => {
    return (
        <DataLoader getF={getDataAPI} resourceName="movies">
            <Navigation />
            <Table />
        </DataLoader>
    )
}