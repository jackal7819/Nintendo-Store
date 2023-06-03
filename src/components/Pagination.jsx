import { FcNext, FcPrevious } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { chooseCurrentPage } from '../store/filterSlice';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ maxPage }) => {
    const currentPage = useSelector((state) => state.filter.currentPage);
    const dispatch = useDispatch();

    const pageCountHandler = (number) => {
        dispatch(chooseCurrentPage(number));
    };

    return (
        <ReactPaginate
            className={styles.pages}
            breakLabel='...'
            nextLabel=<FcNext size={16} />
            onPageChange={(event) => pageCountHandler(event.selected)}
            pageRangeDisplayed={4}
            pageCount={maxPage}
            previousLabel=<FcPrevious className='prev' size={16} />
            forcePage={currentPage}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
