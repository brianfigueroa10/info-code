import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'dd MMM, yyyy hh:mm a', { locale: es })
}

export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })

  if (seconds < 60) {
    return rtf.format(-seconds, 'second')
  } else if (minutes < 60) {
    return rtf.format(-minutes, 'minute')
  } else if (hours < 24) {
    return rtf.format(-hours, 'hour')
  } else {
    return rtf.format(-days, 'day')
  }
}
