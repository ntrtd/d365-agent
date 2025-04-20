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
import type { RetailInventTableApi } from './RetailInventTableApi';

/**
 * This class represents the entity "RetailInventTable" of service "d365_metadata".
 */
export class RetailInventTable<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailInventTableType<T>
{
  /**
   * Technical entity name for RetailInventTable.
   */
  static override _entityName = 'RetailInventTable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInventTable entity.
   */
  static _keys = ['dataAreaId', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Eco Res Product Display Product Number.
   * @nullable
   */
  declare ecoResProductDisplayProductNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: RetailInventTableApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInventTableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  product: DeserializedType<T, 'Edm.Int64'>;
  ecoResProductDisplayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
}
