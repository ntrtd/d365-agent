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
import type { TrialBalanceFiscalYearSnapshotsApi } from './TrialBalanceFiscalYearSnapshotsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerTrialBalanceSnapshotStatus } from './LedgerTrialBalanceSnapshotStatus';
import { FiscalPeriodType } from './FiscalPeriodType';

/**
 * This class represents the entity "TrialBalanceFiscalYearSnapshots" of service "d365_metadata".
 */
export class TrialBalanceFiscalYearSnapshots<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrialBalanceFiscalYearSnapshotsType<T>
{
  /**
   * Technical entity name for TrialBalanceFiscalYearSnapshots.
   */
  static override _entityName = 'TrialBalanceFiscalYearSnapshots';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrialBalanceFiscalYearSnapshots entity.
   */
  static _keys = [
    'SnapshotHeader',
    'DimensionHierarchyId',
    'FiscalCalendarYearRecId',
    'LedgerRecId'
  ];
  /**
   * Snapshot Header.
   */
  declare snapshotHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dimension Hierarchy Id.
   */
  declare dimensionHierarchyId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fiscal Calendar Year Rec Id.
   */
  declare fiscalCalendarYearRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Rec Id.
   */
  declare ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Dimension Value 1.
   * @nullable
   */
  declare dimensionValue1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 3.
   * @nullable
   */
  declare dimensionValue3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 2.
   * @nullable
   */
  declare dimensionValue2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 5.
   * @nullable
   */
  declare dimensionValue5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 4.
   * @nullable
   */
  declare dimensionValue4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 7.
   * @nullable
   */
  declare dimensionValue7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Name.
   * @nullable
   */
  declare periodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 6.
   * @nullable
   */
  declare dimensionValue6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 9.
   * @nullable
   */
  declare dimensionValue9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 8.
   * @nullable
   */
  declare dimensionValue8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Focus Dimension Hierarchy.
   * @nullable
   */
  declare focusDimensionHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: LedgerTrialBalanceSnapshotStatus | null;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * External Tracking Id.
   */
  declare externalTrackingId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Dimension Value 10.
   * @nullable
   */
  declare dimensionValue10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Opening Balance.
   */
  declare openingBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Name.
   * @nullable
   */
  declare ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Credit.
   */
  declare amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Year Name.
   * @nullable
   */
  declare yearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Debit.
   */
  declare amountDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Type.
   * @nullable
   */
  declare periodType?: FiscalPeriodType | null;
  /**
   * Dimension Value 11.
   * @nullable
   */
  declare dimensionValue11?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrialBalanceFiscalYearSnapshotsApi<T>) {
    super(_entityApi);
  }
}

export interface TrialBalanceFiscalYearSnapshotsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  snapshotHeader: DeserializedType<T, 'Edm.Int64'>;
  dimensionHierarchyId: DeserializedType<T, 'Edm.Int64'>;
  fiscalCalendarYearRecId: DeserializedType<T, 'Edm.Int64'>;
  ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  dimensionValue1?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue3?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue2?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue5?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue4?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue7?: DeserializedType<T, 'Edm.String'> | null;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue6?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue9?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue8?: DeserializedType<T, 'Edm.String'> | null;
  focusDimensionHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  status?: LedgerTrialBalanceSnapshotStatus | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalTrackingId: DeserializedType<T, 'Edm.Guid'>;
  dimensionValue10?: DeserializedType<T, 'Edm.String'> | null;
  openingBalance: DeserializedType<T, 'Edm.Decimal'>;
  ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  yearName?: DeserializedType<T, 'Edm.String'> | null;
  amountDebit: DeserializedType<T, 'Edm.Decimal'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodType?: FiscalPeriodType | null;
  dimensionValue11?: DeserializedType<T, 'Edm.String'> | null;
}
