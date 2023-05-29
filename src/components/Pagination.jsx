import { FcNext, FcPrevious } from 'react-icons/fc';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ maxPage, currentPage, pageHandler }) => {
    return (
        <ReactPaginate
            className={styles.pages}
            breakLabel='...'
            nextLabel=<FcNext size={16} />
            onPageChange={(event) => pageHandler(event.selected)}
            pageRangeDisplayed={4}
            pageCount={maxPage}
            previousLabel=<FcPrevious className='prev' size={16} />
            forcePage={currentPage}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
