const sql = require('better-sqlite3');
const db = sql('weather.db');

const DUMMY_LOCATIONS = [
  {
    name: 'Riva del Garda',
    lat: 45.889896559297625,
    lon: 10.842551359878453,
  },
  {
    name: 'Cortina d\'Ampezzo',
    lat: 46.53743161710854,
    lon: 12.139051453339684,
  },
  {
    name: 'Achensee',
    lat: 47.45866492109506,
    lon: 11.707921109069508,
  },
  {
    name: 'Tegernsee',
    lat: 47.71415638955898,
    lon: 11.754208627605001,
  },
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    lat TEXT NOT NULL,
    lon TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO locations VALUES (
      null,
      @name,
      @lat,
      @lon
    )
  `);

  for (const location of DUMMY_LOCATIONS) {
    stmt.run(location);
  }
}

initData();
