import moment from 'moment'

const useDate = (date: Date) => {
  const dateFull = moment(date).format('DD-MM-YYYY')

  return { dateFull }
}

export default useDate
