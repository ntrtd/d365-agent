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
import type { AssetLeaseAmortizationScheduleLineBiEntitiesApi } from './AssetLeaseAmortizationScheduleLineBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetLeaseAmortizationScheduleLineBiEntities" of service "d365_metadata".
 */
export class AssetLeaseAmortizationScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseAmortizationScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseAmortizationScheduleLineBiEntities.
   */
  static override _entityName = 'AssetLeaseAmortizationScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseAmortizationScheduleLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'AmortizationSchedule', 'Months', 'Period'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Amortization Schedule.
   */
  declare amortizationSchedule: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Discounted Payment Amount.
   */
  declare discountedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Term Journal Posted.
   * @nullable
   */
  declare shortTermJournalPosted?: NoYes | null;
  /**
   * Interest.
   */
  declare interest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrued Interest.
   */
  declare accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
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
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Long Term Liability.
   */
  declare longTermLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Interest Expense.
   */
  declare interestExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Journal Created.
   * @nullable
   */
  declare shortTermJournalCreated?: NoYes | null;
  /**
   * Beginning Balance.
   */
  declare beginningBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Subtotal.
   */
  declare subtotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ending Balance.
   */
  declare endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Short Term Journal Num.
   * @nullable
   */
  declare shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
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
   * Principal.
   */
  declare principal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Liability.
   */
  declare shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetLeaseAmortizationScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseAmortizationScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  amortizationSchedule: DeserializedType<T, 'Edm.Int64'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  discountedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  shortTermJournalPosted?: NoYes | null;
  interest: DeserializedType<T, 'Edm.Decimal'>;
  accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
  reversed?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  longTermLiability: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  interestExpense: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalCreated?: NoYes | null;
  beginningBalance: DeserializedType<T, 'Edm.Decimal'>;
  subtotal: DeserializedType<T, 'Edm.Decimal'>;
  endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  yearName: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  principal: DeserializedType<T, 'Edm.Decimal'>;
  shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;
}
