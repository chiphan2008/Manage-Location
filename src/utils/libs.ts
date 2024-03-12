export const capitalize = ([first, ...rest]: string, lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

export function paginate({
  data,
  limit,
  page,
  totalItems,
}: {
  data: any[];
  limit: number;
  page: number;
  totalItems: number;
}) {
  return {
    items: data,
    pagination: {
      page,
      totalPage: Math.ceil(totalItems / limit),
      limit,
      total: totalItems,
    },
  };
}
