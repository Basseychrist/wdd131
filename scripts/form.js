const productArray = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', productsLoading);
  
  function productsLoading() {
    const selectElement = document.getElementById('product');
  
    productArray.forEach(function(product) {
      const selections = document.createElement('option');
      selections.value = product.averagerating;
      selections.textContent =product.name;
     
      selectElement.appendChild(selections);
    });
  }