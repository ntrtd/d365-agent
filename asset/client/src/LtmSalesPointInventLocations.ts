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
import type { LtmSalesPointInventLocationsApi } from './LtmSalesPointInventLocationsApi';

/**
 * This class represents the entity "LTMSalesPointInventLocations" of service "d365_metadata".
 */
export class LtmSalesPointInventLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmSalesPointInventLocationsType<T>
{
  /**
   * Technical entity name for LtmSalesPointInventLocations.
   */
  static override _entityName = 'LTMSalesPointInventLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmSalesPointInventLocations entity.
   */
  static _keys = ['dataAreaId', 'InventLocationId', 'SalesPointId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   */
  declare salesPointId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmSalesPointInventLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmSalesPointInventLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  salesPointId: DeserializedType<T, 'Edm.String'>;
}
