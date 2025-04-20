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
import type { ProductSwatchOverridesApi } from './ProductSwatchOverridesApi';
import { RetailProductDimensionType } from './RetailProductDimensionType';

/**
 * This class represents the entity "ProductSwatchOverrides" of service "d365_metadata".
 */
export class ProductSwatchOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSwatchOverridesType<T>
{
  /**
   * Technical entity name for ProductSwatchOverrides.
   */
  static override _entityName = 'ProductSwatchOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSwatchOverrides entity.
   */
  static _keys = [
    'ProductMaster',
    'DimensionValue',
    'DimensionType',
    'CatalogId',
    'LanguageId',
    'InternalOrganization'
  ];
  /**
   * Product Master.
   */
  declare productMaster: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dimension Value.
   */
  declare dimensionValue: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dimension Type.
   * @nullable
   */
  declare dimensionType?: RetailProductDimensionType | null;
  /**
   * Catalog Id.
   */
  declare catalogId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Organization.
   */
  declare internalOrganization: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hex Code.
   * @nullable
   */
  declare hexCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image.
   */
  declare image: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductSwatchOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSwatchOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMaster: DeserializedType<T, 'Edm.Int64'>;
  dimensionValue: DeserializedType<T, 'Edm.Int64'>;
  dimensionType?: RetailProductDimensionType | null;
  catalogId: DeserializedType<T, 'Edm.Int64'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  internalOrganization: DeserializedType<T, 'Edm.Int64'>;
  hexCode?: DeserializedType<T, 'Edm.String'> | null;
  image: DeserializedType<T, 'Edm.Int64'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
