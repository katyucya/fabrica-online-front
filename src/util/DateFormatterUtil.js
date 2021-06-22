class DateFormatterUtil {
  static ISOtoBR(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
}

export default DateFormatterUtil;
