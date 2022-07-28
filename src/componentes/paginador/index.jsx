import Pagination from '@mui/material/Pagination';

const Paginador = ({count, page, onChange}) => {
    return (
        <Pagination count={count} page={page} onChange={onChange} id="paginador" />
    );
}
export default Paginador;