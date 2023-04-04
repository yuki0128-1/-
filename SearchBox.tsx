import { Box, Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



export const SearchBox = ({ setSearchWord }: { setSearchWord: (search: string) => void }) => {
  const handleChangeField = (event: ChangeEvent<{ value: unknown }>) => {
    if (typeof event.target.value === 'string') {
      setSearch(event.target.value);
    }
  };
  const [search, setSearch] = useState('');

  const queryKey = "?q=";
  const queryUrl = queryKey + search;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParams = searchParams.get("q");
  console.log(queryParams);


  return (
    <Box display="flex" flexDirection="row">
      <TextField id="filled-basic" label="Search" variant="filled" onChange={handleChangeField} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setSearchWord(search);
          navigate(queryUrl, { state: {queryUrl}});
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};
