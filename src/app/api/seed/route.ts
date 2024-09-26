import prisma from "@/lib/prisma";

export const GET = async (request: Request) => {
	await prisma.todo.deleteMany();

	await prisma.todo.createMany({
		data: [
			{ description: "Piedra del alma", completed: true },
			{ description: "Piedra del poder" },
			{ description: "Piedra del tiempo" },
			{ description: "Piedra del espacio" },
			{ description: "Piedra de la realidad" },
		],
	});
	return Response.json({ message: "Seeed Excuted" });
};
