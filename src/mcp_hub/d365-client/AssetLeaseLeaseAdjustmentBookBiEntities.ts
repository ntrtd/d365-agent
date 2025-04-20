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
import type { AssetLeaseLeaseAdjustmentBookBiEntitiesApi } from './AssetLeaseLeaseAdjustmentBookBiEntitiesApi';

/**
 * This class represents the entity "AssetLeaseLeaseAdjustmentBookBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLeaseAdjustmentBookBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLeaseAdjustmentBookBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLeaseAdjustmentBookBiEntities.
   */
  static override _entityName = 'AssetLeaseLeaseAdjustmentBookBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLeaseAdjustmentBookBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseAdjustment', 'LeaseBookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Adjustment.
   */
  declare leaseAdjustment: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Lease Book Id.
   */
  declare leaseBookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Previous Liability Accounting Amount.
   */
  declare previousLiabilityAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Asset Amount.
   */
  declare newAssetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjustment Accounting Amount.
   */
  declare adjustmentAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Asset Accounting Amount.
   */
  declare newAssetAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Adjustment Amount.
   */
  declare adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Liability Amount.
   */
  declare newLiabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Asset Reporting Amount.
   */
  declare newAssetReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Liability Accounting Amount.
   */
  declare newLiabilityAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Liability Reporting Amount.
   */
  declare newLiabilityReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Liability Reporting Amount.
   */
  declare previousLiabilityReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Asset Amount.
   */
  declare previousAssetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Liability Amount.
   */
  declare previousLiabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Asset Reporting Amount.
   */
  declare previousAssetReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjustment Reporting Amount.
   */
  declare adjustmentReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Asset Accounting Amount.
   */
  declare previousAssetAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetLeaseLeaseAdjustmentBookBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseLeaseAdjustmentBookBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseAdjustment: DeserializedType<T, 'Edm.Int64'>;
  leaseBookId: DeserializedType<T, 'Edm.String'>;
  previousLiabilityAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  newAssetAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  adjustmentAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  newAssetAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  newLiabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  newAssetReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  newLiabilityAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  newLiabilityReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  previousLiabilityReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  previousAssetAmount: DeserializedType<T, 'Edm.Decimal'>;
  previousLiabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  previousAssetReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  adjustmentReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  previousAssetAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
}
