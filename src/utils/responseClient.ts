const responseCliente = (statusCode: number, data: unknown, message: string) => {
  return Response.json(
    {
      error: false,
      data,
      message,
    },
    { status: statusCode }
  );
};

export default responseCliente;
