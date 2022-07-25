import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@mui/lab';
import { Link } from 'react-router-dom';

import { getPostss} from '../actions/book';


const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.cart);
  const dispatch = useDispatch();



  useEffect(() => {
    if (page) {
      dispatch(getPostss(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination

      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/news?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;