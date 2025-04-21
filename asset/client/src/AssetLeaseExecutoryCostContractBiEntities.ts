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
import type { AssetLeaseExecutoryCostContractBiEntitiesApi } from './AssetLeaseExecutoryCostContractBiEntitiesApi';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseAcType } from './AssetLeaseAcType';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "AssetLeaseExecutoryCostContractBiEntities" of service "d365_metadata".
 */
export class AssetLeaseExecutoryCostContractBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseExecutoryCostContractBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseExecutoryCostContractBiEntities.
   */
  static override _entityName = 'AssetLeaseExecutoryCostContractBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseExecutoryCostContractBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Lease Ac Type.
   * @nullable
   */
  declare leaseAcType?: AssetLeaseAcType | null;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: AssetLeasePaymentFrequency | null;
  /**
   * Offset Ledger Dimension.
   */
  declare offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Id.
   * @nullable
   */
  declare leaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;

  constructor(_entityApi: AssetLeaseExecutoryCostContractBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseExecutoryCostContractBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  interval?: AssetLeaseLeaseTermInterval | null;
  expenseType?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  leaseAcType?: AssetLeaseAcType | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  frequency?: AssetLeasePaymentFrequency | null;
  offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountType?: LedgerJournalAcType | null;
}
