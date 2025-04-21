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
import type { TrialBalanceFiscalYearSnapshotHeadersApi } from './TrialBalanceFiscalYearSnapshotHeadersApi';
import { LedgerTrialBalanceSnapshotYearsToProcess } from './LedgerTrialBalanceSnapshotYearsToProcess';
import { LedgerTrialBalanceSnapshotStatus } from './LedgerTrialBalanceSnapshotStatus';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "TrialBalanceFiscalYearSnapshotHeaders" of service "d365_metadata".
 */
export class TrialBalanceFiscalYearSnapshotHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrialBalanceFiscalYearSnapshotHeadersType<T>
{
  /**
   * Technical entity name for TrialBalanceFiscalYearSnapshotHeaders.
   */
  static override _entityName = 'TrialBalanceFiscalYearSnapshotHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrialBalanceFiscalYearSnapshotHeaders entity.
   */
  static _keys = ['ExternalTrackingId'];
  /**
   * External Tracking Id.
   */
  declare externalTrackingId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Dim Name 4.
   * @nullable
   */
  declare dimName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 1.
   * @nullable
   */
  declare dimName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 9.
   * @nullable
   */
  declare dimName9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Focus Dimension Hierarchy.
   * @nullable
   */
  declare focusDimensionHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Last Ran.
   */
  declare dateLastRan: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dim Name 10.
   * @nullable
   */
  declare dimName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 11.
   * @nullable
   */
  declare dimName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year Name.
   * @nullable
   */
  declare yearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 6.
   * @nullable
   */
  declare dimName6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 3.
   * @nullable
   */
  declare dimName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Years To Process.
   * @nullable
   */
  declare yearsToProcess?: LedgerTrialBalanceSnapshotYearsToProcess | null;
  /**
   * Dim Name 8.
   * @nullable
   */
  declare dimName8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Name 5.
   * @nullable
   */
  declare dimName5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Name.
   * @nullable
   */
  declare ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: LedgerTrialBalanceSnapshotStatus | null;
  /**
   * Dim Name 2.
   * @nullable
   */
  declare dimName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Dim Name 7.
   * @nullable
   */
  declare dimName7?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrialBalanceFiscalYearSnapshotHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface TrialBalanceFiscalYearSnapshotHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  externalTrackingId: DeserializedType<T, 'Edm.Guid'>;
  dimName4?: DeserializedType<T, 'Edm.String'> | null;
  dimName1?: DeserializedType<T, 'Edm.String'> | null;
  dimName9?: DeserializedType<T, 'Edm.String'> | null;
  focusDimensionHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  dateLastRan: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimName10?: DeserializedType<T, 'Edm.String'> | null;
  dimName11?: DeserializedType<T, 'Edm.String'> | null;
  yearName?: DeserializedType<T, 'Edm.String'> | null;
  dimName6?: DeserializedType<T, 'Edm.String'> | null;
  dimName3?: DeserializedType<T, 'Edm.String'> | null;
  yearsToProcess?: LedgerTrialBalanceSnapshotYearsToProcess | null;
  dimName8?: DeserializedType<T, 'Edm.String'> | null;
  dimName5?: DeserializedType<T, 'Edm.String'> | null;
  ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  status?: LedgerTrialBalanceSnapshotStatus | null;
  dimName2?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  dimName7?: DeserializedType<T, 'Edm.String'> | null;
}
