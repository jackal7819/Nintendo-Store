import { FC } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { chooseCurrentPage } from '../store/filterSlice';
import { RootState } from '../store/store';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination: FC<{ maxPage: number }> = ({ maxPage }) => {
    const currentPage = useSelector((state: RootState) => state.filter.currentPage);
    const dispatch = useDispatch();

    const pageCountHandler = (number: number) => {
        dispatch(chooseCurrentPage(number));
    };

    return (
        <ReactPaginate
            className={styles.pages}
            breakLabel='...'
            nextLabel={<FcNext size={16} />}
            onPageChange={(event) => pageCountHandler(event.selected)}
            pageRangeDisplayed={4}
            pageCount={maxPage}
            previousLabel={<FcPrevious className='prev' size={16} />}
            forcePage={currentPage}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
