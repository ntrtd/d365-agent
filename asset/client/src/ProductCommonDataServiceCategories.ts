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
import type { ProductCommonDataServiceCategoriesApi } from './ProductCommonDataServiceCategoriesApi';

/**
 * This class represents the entity "ProductCommonDataServiceCategories" of service "d365_metadata".
 */
export class ProductCommonDataServiceCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCommonDataServiceCategoriesType<T>
{
  /**
   * Technical entity name for ProductCommonDataServiceCategories.
   */
  static override _entityName = 'ProductCommonDataServiceCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCommonDataServiceCategories entity.
   */
  static _keys = ['CategoryId'];
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Category.
   */
  declare parentCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductCommonDataServiceCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCommonDataServiceCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.Int64'>;
  parentCategory: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
