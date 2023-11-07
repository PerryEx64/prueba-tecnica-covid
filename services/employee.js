import { openDatabase } from './conection'

const db = openDatabase()

export const CreateTableEmployee = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'create table if not exists employees (id text primary key not null, name text, jobTitle text, vaccineAdministered text, firstDoseDate text, secondDoseDate text)',
      [],
      () => {
        console.log('Tabla empleado creada')
      },
      (_, error) => {
        console.log('No se pudo crear la tabla', error)
      }
    )
  })
}

/**
 * Create employee in table
 * @param {*} data form new employee
 */
export const CreateEmployee = (data) => {
  db.transaction((tx) => {
    tx.executeSql(
      'insert into employees (id, name, jobTitle, vaccineAdministered, firstDoseDate, secondDoseDate) values (?,?,?,?,?,?)',
      [
        data.id,
        data.name,
        data.jobTitle,
        data.vaccineAdministered,
        data.firstDoseDate,
        data.secondDoseDate
      ],
      (_, { insertId, rowsAffected }) => {
        if (rowsAffected > 0) {
          // La inserción fue exitosa
          console.log('Empleado creado con éxito. ID:', insertId)
        } else {
          console.log('No se insertaron registros.')
        }
      },
      (_, error) => {
        console.error('Error al insertar empleado:', error)
      }
    )
  })
}

export const GetEmployees = (setEmployees) => {
  db.transaction((tx) => {
    tx.executeSql(
      'select * from employees',
      [],
      (_, { rows: { _array } }) => {
        console.log('employee', _array)
        setEmployees(_array)
      },
      (_, error) => {
        console.error('ah ocurrido un error', error)
        setEmployees([])
      }
    )
  })
}

export const DropEmployeeTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'DROP TABLE IF EXISTS employees',
      [],
      () => {
        console.log('Tabla "employee" eliminada con éxito.')
      },
      (_, error) => {
        console.error('Error al eliminar la tabla "employee":', error)
      }
    )
  })
}

/**
 * where delete employee with table employees
 * @param {*} id id employee
 */
export const DeleteEmployee = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM employees where id = ?',
      [id],
      () => {
        console.log('Empleado eliminada con éxito.')
      },
      (_, error) => {
        console.error('Error al eliminar empleado:', error)
      }
    )
  })
}

export const UpdateEmployee = (data) => {
  db.transaction((tx) => {
    tx.executeSql(
      'update employees set id = ?, name = ?, jobTitle = ?, vaccineAdministered = ?, firstDoseDate = ?, secondDoseDate = ? where id = ?',
      [
        data.id,
        data.name,
        data.jobTitle,
        data.vaccineAdministered,
        data.firstDoseDate,
        data.secondDoseDate,
        data.id
      ],
      (_, { insertId, rowsAffected }) => {
        if (rowsAffected > 0) {
          // La inserción fue exitosa
          console.log('Empleado actualizado con éxito. ID:', insertId)
        } else {
          console.log('No se insertaron registros.')
        }
      },
      (_, error) => {
        console.error('Error al insertar empleado:', error)
      }
    )
  })
}
