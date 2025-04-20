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
import type { ProductCategoryAssignmentsApi } from './ProductCategoryAssignmentsApi';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { ProductCategories, ProductCategoriesType } from './ProductCategories';
import { AllProducts, AllProductsType } from './AllProducts';

/**
 * This class represents the entity "ProductCategoryAssignments" of service "d365_metadata".
 */
export class ProductCategoryAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCategoryAssignmentsType<T>
{
  /**
   * Technical entity name for ProductCategoryAssignments.
   */
  static override _entityName = 'ProductCategoryAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCategoryAssignments entity.
   */
  static _keys = [
    'ProductNumber',
    'ProductCategoryName',
    'ProductCategoryHierarchyName'
  ];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Name.
   */
  declare productCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare productCategory?: ProductCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;

  constructor(_entityApi: ProductCategoryAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCategoryAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productCategoryName: DeserializedType<T, 'Edm.String'>;
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  productV2?: ProductsV2Type<T> | null;
  productCategory?: ProductCategoriesType<T> | null;
  everyProduct?: AllProductsType<T> | null;
}
