export const currency = function(monto) {
  return new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(monto);
};