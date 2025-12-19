import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { Pagination } from 'antd';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams}`);
  };

  if (pageCount <= 1) return null; // Agar faqat bitta sahifa bo'lsa, pagination kerak emas

  return (
    <div className="flex justify-end mt-6 mb-4">
      <Pagination
        current={page}
        total={3}
        pageSize={1}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default PaginationContainer;
