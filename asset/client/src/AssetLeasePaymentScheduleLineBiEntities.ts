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
import type { AssetLeasePaymentScheduleLineBiEntitiesApi } from './AssetLeasePaymentScheduleLineBiEntitiesApi';
import { NoYes } from './NoYes';
import { NoYesCombo } from './NoYesCombo';

/**
 * This class represents the entity "AssetLeasePaymentScheduleLineBiEntities" of service "d365_metadata".
 */
export class AssetLeasePaymentScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeasePaymentScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeasePaymentScheduleLineBiEntities.
   */
  static override _entityName = 'AssetLeasePaymentScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeasePaymentScheduleLineBiEntities entity.
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
   * Payment Schedule.
   */
  declare paymentSchedule: DeserializedType<T, 'Edm.Int64'>;
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
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
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
   * Deferred Rent Charge.
   */
  declare deferredRentCharge: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Straight Line Cost.
   */
  declare straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Rent Balance.
   */
  declare deferredRentBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Balloon Payment.
   * @nullable
   */
  declare balloonPayment?: NoYesCombo | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(_entityApi: AssetLeasePaymentScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeasePaymentScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymentSchedule: DeserializedType<T, 'Edm.Int64'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  counter: DeserializedType<T, 'Edm.Int32'>;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  reversed?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  journalCreated?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  deferredRentCharge: DeserializedType<T, 'Edm.Decimal'>;
  straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
  deferredRentBalance: DeserializedType<T, 'Edm.Decimal'>;
  balloonPayment?: NoYesCombo | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  yearName: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
