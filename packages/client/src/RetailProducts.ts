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
import type { RetailProductsApi } from './RetailProductsApi';
import { EcoResProductType } from './EcoResProductType';

/**
 * This class represents the entity "RetailProducts" of service "d365_metadata".
 */
export class RetailProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailProductsType<T>
{
  /**
   * Technical entity name for RetailProducts.
   */
  static override _entityName = 'RetailProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailProducts entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Retail Category Name.
   * @nullable
   */
  declare retailCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailProductsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productType?: EcoResProductType | null;
  retailCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
}
