const paperFilters = {
  name: "Бумага",
  path: "paper",
  filters: [
    "Бренд",
    "Колір",
    "Довжина",
    "Ширина",
    "Густота",
    "Країна виробництва",
  ],
};
const hilzyFilters = {
  name: "Гільзи",
  path: "hilzy",
  filters: [
    "Бренд",
    "Довжина гільзи",
    "Довжина фільтру",
    "Діаметр гільзи",
    "Країна виробництва",
  ],
};
const filterFilters = {
  name: "Фільтри",
  path: "filter",
  filters: ["Бренд", "Довжина фільтрів", "Діаметр фільтрів"],
};
const aromaFilters = {
  name: "Аромати",
  path: "aroma",
  filters: ["Бренд", "Аромат", "Країна виробництва"],
};
const mashineFilters = {
  name: "Машинки",
  path: "mashine",
  filters: ["Бренд", "Країна виробництва"],
};

export const menuItems = [
  paperFilters,
  hilzyFilters,
  filterFilters,
  aromaFilters,
  mashineFilters,
];
