const usePaginateUsers = (usersList, page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageUsers = usersList.slice(start, end);
  const totalPages = Math.ceil(usersList.length / pageSize);

  return { pageUsers, totalPages };
};

export default usePaginateUsers;
