// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      cityId
      categoryId
      _cityId
      _categoryId
      slug
      name
      tagline
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      products {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      cityId
      categoryId
      _cityId
      _categoryId
      slug
      name
      tagline
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      products {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      cityId
      categoryId
      _cityId
      _categoryId
      slug
      name
      tagline
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      products {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      companyId
      companyCategoryId
      company {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        _version
        _deleted
        _lastChangedAt
      }
      name
      isInPromotion
      price
      promotionalPrice
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      companyId
      companyCategoryId
      company {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        _version
        _deleted
        _lastChangedAt
      }
      name
      isInPromotion
      price
      promotionalPrice
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      companyId
      companyCategoryId
      company {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        _version
        _deleted
        _lastChangedAt
      }
      name
      isInPromotion
      price
      promotionalPrice
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
