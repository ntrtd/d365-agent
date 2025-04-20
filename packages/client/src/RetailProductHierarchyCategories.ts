/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailProductHierarchyCategoriesApi } from './RetailProductHierarchyCategoriesApi';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';
import {
  RetailEcoResCategory,
  RetailEcoResCategoryType
} from './RetailEcoResCategory';

/**
 * This class represents the entity "RetailProductHierarchyCategories" of service "d365_metadata".
 */
export class RetailProductHierarchyCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailProductHierarchyCategoriesType<T>
{
  /**
   * Technical entity name for RetailProductHierarchyCategories.
   */
  static override _entityName = 'RetailProductHierarchyCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailProductHierarchyCategories entity.
   */
  static _keys = ['CategoryName', 'CategoryHierarchyName'];
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Category Name.
   * @nullable
   */
  declare parentCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Record Id.
   */
  declare categoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Category Record Id.
   */
  declare parentCategoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailEcoResCategory} entity.
   */
  declare retailEcoResCategory?: RetailEcoResCategory<T> | null;

  constructor(_entityApi: RetailProductHierarchyCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailProductHierarchyCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  parentCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  categoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  parentCategoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
  retailEcoResCategory?: RetailEcoResCategoryType<T> | null;
}
