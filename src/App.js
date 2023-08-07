import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SuggestionResult from './components/SuggestionResult';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Boost Commerce
          </Typography>
          <SuggestionResult searchValue={searchValue}>
            <input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search"
            />
          </SuggestionResult>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
