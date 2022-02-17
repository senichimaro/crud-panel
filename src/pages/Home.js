// pages
import { Table } from './Table';

// components
import { DataLoader } from '../components/DataLoader';

// services
import { getDataAPI } from '../services/services';

export const Home = () => {
    return (
        <DataLoader getF={getDataAPI} resourceName="movies">
            <Table />
        </DataLoader>
    )
}