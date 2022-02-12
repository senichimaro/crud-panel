
// pages
import { Table } from './pages/Table';

// components
import { DataLoader } from './components/DataLoader';

// services
import { getDataAPI } from './services/services';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'


function App() {
  return (
    <DataLoader getF={getDataAPI} resourceName="movies">
      <Table />
    </DataLoader>
  )
}

export default App;
