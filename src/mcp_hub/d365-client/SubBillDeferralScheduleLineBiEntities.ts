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
import type { SubBillDeferralScheduleLineBiEntitiesApi } from './SubBillDeferralScheduleLineBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SubBillDeferralScheduleLineBiEntities" of service "d365_metadata".
 */
export class SubBillDeferralScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillDeferralScheduleLineBiEntities.
   */
  static override _entityName = 'SubBillDeferralScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralScheduleLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Line', 'SubBillDeferralScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Deferral Schedule Number.
   */
  declare subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Recognized.
   * @nullable
   */
  declare subBillDeferralRecognized?: NoYes | null;
  /**
   * Sub Bill Cust Invoice Trans Rec Id.
   */
  declare subBillCustInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral End Date.
   */
  declare subBillDeferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Deferral Qty.
   */
  declare subBillDeferralQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Stubbed.
   * @nullable
   */
  declare subBillDeferralStubbed?: NoYes | null;
  /**
   * Sub Bill Deferral Event Description.
   * @nullable
   */
  declare subBillDeferralEventDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Is Adjustment.
   * @nullable
   */
  declare subBillDeferralIsAdjustment?: NoYes | null;
  /**
   * Sub Bill Deferral Recognize On Post.
   * @nullable
   */
  declare subBillDeferralRecognizeOnPost?: NoYes | null;
  /**
   * Recognition Ledger Journal Trans.
   */
  declare recognitionLedgerJournalTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral Start Date.
   */
  declare subBillDeferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SubBillDeferralScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralRecognized?: NoYes | null;
  subBillCustInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillDeferralQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralStubbed?: NoYes | null;
  subBillDeferralEventDescription?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralIsAdjustment?: NoYes | null;
  subBillDeferralRecognizeOnPost?: NoYes | null;
  recognitionLedgerJournalTrans: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
