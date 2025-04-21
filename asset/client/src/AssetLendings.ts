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
import type { AssetLendingsApi } from './AssetLendingsApi';

/**
 * This class represents the entity "AssetLendings" of service "d365_metadata".
 */
export class AssetLendings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetLendingsType<T>
{
  /**
   * Technical entity name for AssetLendings.
   */
  static override _entityName = 'AssetLendings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLendings entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber', 'DateOfLease'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Of Lease.
   */
  declare dateOfLease: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Return Date.
   */
  declare actualReturnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Return Date.
   */
  declare expectedReturnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leaseholder.
   * @nullable
   */
  declare leaseholder?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetLendingsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLendingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  dateOfLease: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualReturnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  expectedReturnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseholder?: DeserializedType<T, 'Edm.String'> | null;
}
