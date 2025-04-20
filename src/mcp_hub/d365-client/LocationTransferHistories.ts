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
import type { LocationTransferHistoriesApi } from './LocationTransferHistoriesApi';

/**
 * This class represents the entity "LocationTransferHistories" of service "d365_metadata".
 */
export class LocationTransferHistories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LocationTransferHistoriesType<T>
{
  /**
   * Technical entity name for LocationTransferHistories.
   */
  static override _entityName = 'LocationTransferHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LocationTransferHistories entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetNumber', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * From Location.
   * @nullable
   */
  declare fromLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Comments.
   * @nullable
   */
  declare transferComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Date.
   */
  declare transferDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Location.
   * @nullable
   */
  declare toLocation?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LocationTransferHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface LocationTransferHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  fromLocation?: DeserializedType<T, 'Edm.String'> | null;
  transferComments?: DeserializedType<T, 'Edm.String'> | null;
  transferDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toLocation?: DeserializedType<T, 'Edm.String'> | null;
}
