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
import type { LeaseExecutoryCostContractImportsApi } from './LeaseExecutoryCostContractImportsApi';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseAcType } from './AssetLeaseAcType';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';

/**
 * This class represents the entity "LeaseExecutoryCostContractImports" of service "d365_metadata".
 */
export class LeaseExecutoryCostContractImports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExecutoryCostContractImportsType<T>
{
  /**
   * Technical entity name for LeaseExecutoryCostContractImports.
   */
  static override _entityName = 'LeaseExecutoryCostContractImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExecutoryCostContractImports entity.
   */
  static _keys = ['LeaseId', 'ImportId', 'StartDate', 'ExpenseType'];
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.String'>;
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
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
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
   * Offset Ledger Dimension Display.
   * @nullable
   */
  declare offsetLedgerDimensionDisplay?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: AssetLeaseAcType | null;

  constructor(_entityApi: LeaseExecutoryCostContractImportsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExecutoryCostContractImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  leaseId: DeserializedType<T, 'Edm.String'>;
  importId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expenseType: DeserializedType<T, 'Edm.String'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  interval?: AssetLeaseLeaseTermInterval | null;
  annuityType?: AssetLeaseAnnuityType | null;
  leaseAcType?: AssetLeaseAcType | null;
  offsetLedgerDimensionDisplay?: DeserializedType<T, 'Edm.String'> | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  frequency?: AssetLeasePaymentFrequency | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountType?: AssetLeaseAcType | null;
}
