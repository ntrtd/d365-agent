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
import type { AssetLeaseAssetScheduleLineBiEntitiesApi } from './AssetLeaseAssetScheduleLineBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetLeaseAssetScheduleLineBiEntities" of service "d365_metadata".
 */
export class AssetLeaseAssetScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseAssetScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseAssetScheduleLineBiEntities.
   */
  static override _entityName = 'AssetLeaseAssetScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseAssetScheduleLineBiEntities entity.
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
   * Amortization Expense Accounting Amount.
   */
  declare amortizationExpenseAccountingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Amortization Expense.
   */
  declare amortizationExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Beginning Net Book Value.
   */
  declare beginningNetBookValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period Interest Expense.
   */
  declare periodInterestExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Amortization Reporting Amount.
   */
  declare accumulatedAmortizationReportingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Beginning Net Book Accounting Amount.
   */
  declare beginningNetBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amortization Expense Reporting Amount.
   */
  declare amortizationExpenseReportingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Net Book Value.
   */
  declare netBookValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Beginning Net Book Reporting Amount.
   */
  declare beginningNetBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accumulated Amortization.
   */
  declare accumulatedAmortization: DeserializedType<T, 'Edm.Decimal'>;
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
   * Net Book Reporting Amount.
   */
  declare netBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accumulated Amortization Accounting Amount.
   */
  declare accumulatedAmortizationAccountingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Net Book Accounting Amount.
   */
  declare netBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sl Expense.
   */
  declare slExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year Name.
   */
  declare yearName: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Schedule.
   */
  declare assetSchedule: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetLeaseAssetScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseAssetScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  amortizationExpenseAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  amortizationExpense: DeserializedType<T, 'Edm.Decimal'>;
  beginningNetBookValue: DeserializedType<T, 'Edm.Decimal'>;
  periodInterestExpense: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedAmortizationReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  beginningNetBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  amortizationExpenseReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  reversed?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  netBookValue: DeserializedType<T, 'Edm.Decimal'>;
  beginningNetBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  accumulatedAmortization: DeserializedType<T, 'Edm.Decimal'>;
  journalCreated?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  netBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  accumulatedAmortizationAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  netBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  slExpense: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  yearName: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetSchedule: DeserializedType<T, 'Edm.Int64'>;
}
