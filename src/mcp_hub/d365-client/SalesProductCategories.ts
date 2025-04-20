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
import type { SalesProductCategoriesApi } from './SalesProductCategoriesApi';

/**
 * This class represents the entity "SalesProductCategories" of service "d365_metadata".
 */
export class SalesProductCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesProductCategoriesType<T>
{
  /**
   * Technical entity name for SalesProductCategories.
   */
  static override _entityName = 'SalesProductCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesProductCategories entity.
   */
  static _keys = ['CategoryName'];
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SalesProductCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesProductCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
}
