import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'dd MMM, yyyy hh:mm a', { locale: es })
}
