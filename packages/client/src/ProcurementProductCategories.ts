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
import type { ProcurementProductCategoriesApi } from './ProcurementProductCategoriesApi';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';

/**
 * This class represents the entity "ProcurementProductCategories" of service "d365_metadata".
 */
export class ProcurementProductCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcurementProductCategoriesType<T>
{
  /**
   * Technical entity name for ProcurementProductCategories.
   */
  static override _entityName = 'ProcurementProductCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcurementProductCategories entity.
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
   * Category Code.
   * @nullable
   */
  declare categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Hierarchy Name.
   */
  declare parentHierarchyName: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link ProcurementProductCategories} entity.
   */
  declare parentProcurementProductCategory?: ProcurementProductCategories<T> | null;
  /**
   * One-to-many navigation property to the {@link ProcurementProductCategories} entity.
   */
  declare childProcurementProductCategory: ProcurementProductCategories<T>[];

  constructor(_entityApi: ProcurementProductCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProcurementProductCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  parentCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  parentHierarchyName: DeserializedType<T, 'Edm.Int64'>;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
  parentProcurementProductCategory?: ProcurementProductCategoriesType<T> | null;
  childProcurementProductCategory: ProcurementProductCategoriesType<T>[];
}
