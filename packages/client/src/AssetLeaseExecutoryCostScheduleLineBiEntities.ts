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
import type { AssetLeaseExecutoryCostScheduleLineBiEntitiesApi } from './AssetLeaseExecutoryCostScheduleLineBiEntitiesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { AssetLeaseAcType } from './AssetLeaseAcType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetLeaseExecutoryCostScheduleLineBiEntities" of service "d365_metadata".
 */
export class AssetLeaseExecutoryCostScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseExecutoryCostScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseExecutoryCostScheduleLineBiEntities.
   */
  static override _entityName = 'AssetLeaseExecutoryCostScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseExecutoryCostScheduleLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ExecutoryCostSchedule', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Executory Cost Schedule.
   */
  declare executoryCostSchedule: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Ac Type.
   * @nullable
   */
  declare leaseAcType?: AssetLeaseAcType | null;
  /**
   * Offset Ledger Dimension.
   */
  declare offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Latest Journal Num.
   * @nullable
   */
  declare latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Posted.
   * @nullable
   */
  declare journalPosted?: NoYes | null;
  /**
   * Schedule Line Date.
   */
  declare scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Present Value.
   */
  declare presentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Executory Cost Contract.
   */
  declare executoryCostContract: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetLeaseExecutoryCostScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseExecutoryCostScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  executoryCostSchedule: DeserializedType<T, 'Edm.Int64'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  offsetAccountType?: LedgerJournalAcType | null;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  leaseAcType?: AssetLeaseAcType | null;
  offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  reversed?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  journalCreated?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expenseType?: DeserializedType<T, 'Edm.String'> | null;
  executoryCostContract: DeserializedType<T, 'Edm.Int64'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
