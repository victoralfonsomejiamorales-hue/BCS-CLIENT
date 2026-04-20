const EmptyProductList = () => {
  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4">
      <p className="text-gray-600">
        No se encontraron productos que coincidan con los filtros seleccionados.
      </p>
    </div>
  );
};

export default EmptyProductList;
