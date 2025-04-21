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
import type { ProductCommonDataServiceCategoryAssignmentsV2Api } from './ProductCommonDataServiceCategoryAssignmentsV2Api';

/**
 * This class represents the entity "ProductCommonDataServiceCategoryAssignmentsV2" of service "d365_metadata".
 */
export class ProductCommonDataServiceCategoryAssignmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCommonDataServiceCategoryAssignmentsV2Type<T>
{
  /**
   * Technical entity name for ProductCommonDataServiceCategoryAssignmentsV2.
   */
  static override _entityName = 'ProductCommonDataServiceCategoryAssignmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCommonDataServiceCategoryAssignmentsV2 entity.
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

  constructor(_entityApi: ProductCommonDataServiceCategoryAssignmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductCommonDataServiceCategoryAssignmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productCategoryName: DeserializedType<T, 'Edm.String'>;
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
}
