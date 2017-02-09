export default function _moneyFormat(val) {
  if(!_.isInteger(intVal)) {
    return null;
  }

  return String(intVal).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
