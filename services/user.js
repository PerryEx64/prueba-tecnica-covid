import { openDatabase } from './conection'

const db = openDatabase()

export const CreateTableUser = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists users (id text primary key not null, name text)',
        [],
        () => {
          console.log('Tabla de usuarios creada')
        },
        (_, error) => {
          console.log('Error al crear la tabla', error)
        }
      )
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * Create user in table users
 * @param {string} id UUID
 * @param {string} name name employee
 */
export const CreateUser = (id, name) => {
  db.transaction((tx) => {
    tx.executeSql(
      'insert into users (id, name) values (?, ?)',
      [id, name],
      (_, { insertId, rowsAffected }) => {
        if (rowsAffected > 0) {
          // La inserción fue exitosa
          console.log('Usuario creado con éxito. ID:', insertId)
        } else {
          console.log('No se insertaron registros.')
        }
      },
      (_, error) => {
        console.error('Error al insertar usuario:', error)
      }
    )

    tx.executeSql(
      'select * from users',
      [],
      (_, { rows }) => {
        console.log('Consulta exitosa:', rows)
      },
      (_, error) => {
        console.error('Error en la consulta:', error)
      }
    )
  })
}
