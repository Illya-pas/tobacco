export const sorting = (items, filters) => {
	let sorted = [...items];
	let filterList;
	let newList = [...items];

	filters[0].filters.map((filtr) => {
		switch (filtr) {
			case "Бренд":
				filterList = items.map((item) => {
					return item.brand;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.brand === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;
			case "Колір":
				filterList = items.map((item) => {
					return item.color;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.color === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Довжина":
				filterList = items.map((item) => {
					return item.paperLen;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.paperLen === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Ширина":
				filterList = items.map((item) => {
					return item.paperWidth;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.paperWidth === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Густота":
				filterList = items.map((item) => {
					return item.density;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.density === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Країна виробництва":
				filterList = items.map((item) => {
					return item.producer;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.producer === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Довжина гільзи":
				filterList = items.map((item) => {
					return item.hilzLen;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.hilzLen === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Довжина фільтру":
				filterList = items.map((item) => {
					return item.filterLen;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.filterLen === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Діаметр гільзи":
				filterList = items.map((item) => {
					return item.hilzDiametr;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.hilzDiametr === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Довжина фільтрів":
				filterList = items.map((item) => {
					return item.filtersLen;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.filtersLen === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Діаметр фільтрів":
				filterList = items.map((item) => {
					return item.filtersDiametr;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.filtersDiametr === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;

			case "Аромат":
				filterList = items.map((item) => {
					return item.aromat;
				});
				filterList.sort();
				sorted.map((sortedItem, index) => {
					let oldIndex = index;
					filterList.map((filteredItem, index) => {
						if (sortedItem.aromat === filteredItem) {
							newList[index] = sorted[oldIndex];
						}
					});
				});
				return;
		}
	});

	return newList;
};
