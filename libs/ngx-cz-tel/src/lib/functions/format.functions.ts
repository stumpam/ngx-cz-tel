export function formatCzechPhoneNumber(value: string): string {
  if (
    !(
      value.length === 9 ||
      (value.length === 13 && value.startsWith('+420')) ||
      value.startsWith('+421')
    )
  ) {
    throw new Error('It is not valid czech or slovak number');
  }

  const hasPrefix = value.startsWith('+42') && value.length === 13;
  const phone = [...value];

  const prefix = hasPrefix ? `${phone.splice(0, 4).join('')} ` : '';

  const formattedPhone = phone
    .map((d, i) => (i % 3 === 0 ? ' ' + d : d))
    .join('')
    .trim();

  return `${prefix}${formattedPhone}`;
}
