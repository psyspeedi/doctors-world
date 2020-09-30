export default function (countries, filter) {
  return countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
}