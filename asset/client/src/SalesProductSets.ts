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
import type { SalesProductSetsApi } from './SalesProductSetsApi';

/**
 * This class represents the entity "SalesProductSets" of service "d365_metadata".
 */
export class SalesProductSets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesProductSetsType<T>
{
  /**
   * Technical entity name for SalesProductSets.
   */
  static override _entityName = 'SalesProductSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesProductSets entity.
   */
  static _keys = ['dataAreaId', 'ProductSetNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Set Number.
   */
  declare productSetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Set Description.
   * @nullable
   */
  declare productSetDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesProductSetsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesProductSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productSetNumber: DeserializedType<T, 'Edm.String'>;
  productSetDescription?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
