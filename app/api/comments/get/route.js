import { sql } from "@vercel/postgres";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || 1;
    const pageSize = 6;
    const offset = (page - 1) * pageSize;

    const result = await sql`
      SELECT id, name, message, hadir, updated_at 
      FROM daftar_hadir 
      ORDER BY updated_at DESC 
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    const totalCount = await sql`
      SELECT COUNT(*) FROM daftar_hadir
    `;

    const totalPages = Math.ceil(totalCount.rows[0].count / pageSize);

    const pagination = {
      currentPage: page,
      totalPages: totalPages,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null,
      totalRecords: totalCount.rows[0].count,
      pageSize: pageSize,
    };

    return Response.json({ result: result.rows, pagination }, { status: 200 });
  } catch (error) {
    return Response.json(
      { status: false, message: "something went wrong" },
      { status: 500 }
    );
  }
}
