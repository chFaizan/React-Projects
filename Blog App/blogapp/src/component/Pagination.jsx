import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li 
                className={`pagination-item ${pageNumber === currentPage ? "activerPagination" : ""}`} 
                key={pageNumber}
            >
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(pageNumber);
                    }}
                >
                    {pageNumber}
                </a>
            </li>
        ));
    };

    return (
        <ul className="pagination-container">
            <li className="pagination-item">
                <button 
                    className="pagination-button"
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(currentPage - 1);
                    }}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
            </li>
            <div className="pagination-list">
                {renderPaginationLinks()}
            </div>
            <li className="pagination-item">
                <button 
                    className="pagination-button"
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(currentPage + 1);
                    }}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;