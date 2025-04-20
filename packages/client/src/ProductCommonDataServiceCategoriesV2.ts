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
import type { ProductCommonDataServiceCategoriesV2Api } from './ProductCommonDataServiceCategoriesV2Api';

/**
 * This class represents the entity "ProductCommonDataServiceCategoriesV2" of service "d365_metadata".
 */
export class ProductCommonDataServiceCategoriesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCommonDataServiceCategoriesV2Type<T>
{
  /**
   * Technical entity name for ProductCommonDataServiceCategoriesV2.
   */
  static override _entityName = 'ProductCommonDataServiceCategoriesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCommonDataServiceCategoriesV2 entity.
   */
  static _keys = ['ProductCategoryName'];
  /**
   * Product Category Name.
   */
  declare productCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Product Category Name.
   * @nullable
   */
  declare parentProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freindly Product Category Name.
   * @nullable
   */
  declare freindlyProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductCommonDataServiceCategoriesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductCommonDataServiceCategoriesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productCategoryName: DeserializedType<T, 'Edm.String'>;
  parentProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  freindlyProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
}
