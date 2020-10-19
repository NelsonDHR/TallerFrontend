const { Pool } = require('pg');
const Router = require('express-promise-router');

const pool = new Pool({
  user: 'xcqakuzlupntvs',
  host: 'ec2-34-235-62-201.compute-1.amazonaws.com',
  database: 'dcjkiphuqqei47',
  password: '43ae58f36ea34ac8c58483c4a5efa6929760a014b897acd68938204f2da5b0e0',
  port: 5432,  
  connectionString: process.env.DATABASE_URL,
  ssl: 
  {
    rejectUnauthorized: false
  }
}); 

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.post('/insertarpacientes', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`
  );
  res.send('INSERTADO');
});

router.post('/borrarpacientes', async  (req,res) => {
 const {numid} = req.body;

 await pool.query(
  `DELETE FROM pacientes WHERE numid='${numid}'`
  );
 res.send('ELMINADO');
})


router.post('/actualizarpacientes', async  (req,res) => {
  const {nombre, apellido, numid} = req.body;

 await pool.query(
  `UPDATE pacientes SET nombre='${nombre}', apellido='${apellido}' WHERE numid='${numid}'`
  );
  res.send('Actualizado');
})

