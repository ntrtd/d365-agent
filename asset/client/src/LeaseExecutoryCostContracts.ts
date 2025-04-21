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
import type { LeaseExecutoryCostContractsApi } from './LeaseExecutoryCostContractsApi';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "LeaseExecutoryCostContracts" of service "d365_metadata".
 */
export class LeaseExecutoryCostContracts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExecutoryCostContractsType<T>
{
  /**
   * Technical entity name for LeaseExecutoryCostContracts.
   */
  static override _entityName = 'LeaseExecutoryCostContracts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExecutoryCostContracts entity.
   */
  static _keys = ['dataAreaId', 'LeaseId', 'StartDate', 'ExpenseType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expense Type.
   */
  declare expenseType: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Frequency.
   * @nullable
   */
  declare paymentFrequency?: AssetLeasePaymentFrequency | null;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;

  constructor(_entityApi: LeaseExecutoryCostContractsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExecutoryCostContractsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expenseType: DeserializedType<T, 'Edm.String'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymentFrequency?: AssetLeasePaymentFrequency | null;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  interval?: AssetLeaseLeaseTermInterval | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountType?: LedgerJournalAcType | null;
}
