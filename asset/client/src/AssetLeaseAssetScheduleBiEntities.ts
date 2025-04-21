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
import type { AssetLeaseAssetScheduleBiEntitiesApi } from './AssetLeaseAssetScheduleBiEntitiesApi';

/**
 * This class represents the entity "AssetLeaseAssetScheduleBiEntities" of service "d365_metadata".
 */
export class AssetLeaseAssetScheduleBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseAssetScheduleBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseAssetScheduleBiEntities.
   */
  static override _entityName = 'AssetLeaseAssetScheduleBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseAssetScheduleBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Rou Accounting Amount.
   */
  declare assetRouAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Rou Transaction Amount.
   */
  declare assetRouTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Rou Reporting Amount.
   */
  declare assetRouReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Life.
   */
  declare assetLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetLeaseAssetScheduleBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseAssetScheduleBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  assetRouAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  assetRouTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  assetRouReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  assetLife: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
