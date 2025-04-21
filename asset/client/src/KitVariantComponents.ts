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
import type { KitVariantComponentsApi } from './KitVariantComponentsApi';

/**
 * This class represents the entity "KitVariantComponents" of service "d365_metadata".
 */
export class KitVariantComponents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KitVariantComponentsType<T>
{
  /**
   * Technical entity name for KitVariantComponents.
   */
  static override _entityName = 'KitVariantComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KitVariantComponents entity.
   */
  static _keys = [
    'ProductNumber',
    'ProductVariantNumber',
    'KitProductNumber',
    'KitComponentLineNumber'
  ];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Variant Number.
   */
  declare productVariantNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Component Line Number.
   */
  declare kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: KitVariantComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface KitVariantComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
