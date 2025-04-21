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
import type { ProductCommonDataServiceCategoryAssignmentsApi } from './ProductCommonDataServiceCategoryAssignmentsApi';

/**
 * This class represents the entity "ProductCommonDataServiceCategoryAssignments" of service "d365_metadata".
 */
export class ProductCommonDataServiceCategoryAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCommonDataServiceCategoryAssignmentsType<T>
{
  /**
   * Technical entity name for ProductCommonDataServiceCategoryAssignments.
   */
  static override _entityName = 'ProductCommonDataServiceCategoryAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCommonDataServiceCategoryAssignments entity.
   */
  static _keys = ['ProductNumber', 'Category', 'CategoryHierarchy'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: ProductCommonDataServiceCategoryAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCommonDataServiceCategoryAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.Int64'>;
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
}
