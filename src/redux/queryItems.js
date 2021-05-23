export const mediaBase = "http://api.imperiaua.com.ua/media/";

export const wholePaper = (filters) =>
  `query{
  filterPaper${filters ? filters : ""}{
    paper{
      tag{
        tag
      }
      id,
      name,
      brand,
      producer,
      paperLen,
      paperWidth,
      density,
      color,
      inPack,
      inBox,
      image{
        image
      }
      availability,
      top,
      hidden,
      article,
      retailPrice,
      wholesalePrice,
      description,
      wholesaleCount
    }
  }
}`;

export const wholeHilzy = (filters) =>
  `query{
  filterHilzy${filters ? filters : ""}{
    hilzy{
      tag{
        tag
      }
      id,
      name,
      brand,
      producer,
      hilzLen,
      filterLen,
      hilzDiametr,
      inPack,
      inBox,
      image{
        image
      },
      availability,
      top,
      hidden,
      article,
      retailPrice,
      wholesalePrice,
      description,
      wholesaleCount
    }
  }
}`;

export const wholeFilters = (filters) =>
  `query{
  filterFilters${filters ? filters : ""}{
    filters{
      tag{
        tag
      }
      id,
      name,
      brand,
      producer,
      filtersLen,
      filtersDiametr,
      inPack,
      inBox,
      image{
        image
      },
      availability,
      top,
      hidden,
      article,
      retailPrice,
      wholesalePrice,
      description,
      wholesaleCount
    }
  }
}`;

export const wholeAroma = (filters) =>
  `query{
  filterAroma${filters ? filters : ""}{
    aroma{
      tag{
        tag
      }
      id,
      name,
      brand,
      producer,
      aromat,
      inPack,
      inBox,
      image{
        image
      },
      availability,
      top,
      hidden,
      article,
      retailPrice,
      wholesalePrice,
      description,
      wholesaleCount
    }
  }
}`;

export const wholeMashine = (filters) =>
  `query{
  filterMasine${filters ? filters : ""}{
    mashine{
      tag{
        tag
      }
      id,
      name,
      brand,
      producer,
      inBox,
      image{
        image
      },
      availability,
      top,
      hidden,
      article,
      retailPrice,
      wholesalePrice,
      description,
      wholesaleCount
    }
  }
}`;
