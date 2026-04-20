const SimulatorError = () => {
  return (
    <div className="w-full mx-auto border border-red-200 rounded-lg shadow-sm bg-red-50 p-4">
      <h2 className="mb-2 text-xl font-bold text-red-700">Error</h2>
      <p className="text-red-600">Ocurrió un error al simular</p>
    </div>
  );
};

export default SimulatorError;
