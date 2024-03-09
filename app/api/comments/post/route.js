import { sql } from "@vercel/postgres";

export async function POST(request) {
  const data = await request.json();
  try {
    const query =
      await sql`SELECT name FROM daftar_hadir WHERE name=${data.name} LIMIT 1`;
    if (query.rows.length > 0) {
      return Response.json(
        {
          status: true,
          message: "anda sudah mengkonfirmasi daftar hadir",
          has_recorded: true,
        },
        { status: 200 }
      );
    }
    const insert = await sql`
        INSERT INTO daftar_hadir (name, message, hadir)
        VALUES (${data.name}, ${data.message}, ${data.hadir})`;
    if (insert.rowCount > 0) {
      const page = 1;
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
      return Response.json(
        {
          status: true,
          message: "daftar hadir berhasil di tambahkan",
          result: result.rows,
          pagination,
          has_recorded: false,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json(
      { status: false, message: "something went wrong" },
      { status: 500 }
    );
  }
}
