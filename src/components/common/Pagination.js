import { Pagination as CPagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination = ({ className }) => {
    try {
        return (
            <CPagination className={className}>
                <PaginationItem>
                    <PaginationLink
                        label={<i className="fa fa-eye" ></i>}
                        href="#"
                        previous
                    />
                </PaginationItem>
                <PaginationItem className='d-flex align-items-center'>
                    <PaginationLink className='custom-link' href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className='d-flex align-items-center'>
                    <PaginationLink className='custom-link' href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className='d-flex align-items-center'>
                    <PaginationLink className='custom-link' href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className='d-flex align-items-center'>
                    <PaginationLink className='custom-link' href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className='d-flex align-items-center'>
                    <PaginationLink className='custom-link' href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                    />
                </PaginationItem>
            </CPagination>
        )
    } catch (e) {

    }
}

export default Pagination;