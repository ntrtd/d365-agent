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
import type { DimAttributeTrvTravelTxtsApi } from './DimAttributeTrvTravelTxtsApi';

/**
 * This class represents the entity "DimAttributeTrvTravelTxts" of service "d365_metadata".
 */
export class DimAttributeTrvTravelTxts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeTrvTravelTxtsType<T>
{
  /**
   * Technical entity name for DimAttributeTrvTravelTxts.
   */
  static override _entityName = 'DimAttributeTrvTravelTxts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeTrvTravelTxts entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeTrvTravelTxtsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeTrvTravelTxtsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
