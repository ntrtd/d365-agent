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
import type { SubBillDeferralDecliningsApi } from './SubBillDeferralDecliningsApi';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';

/**
 * This class represents the entity "SubBillDeferralDeclinings" of service "d365_metadata".
 */
export class SubBillDeferralDeclinings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralDecliningsType<T>
{
  /**
   * Technical entity name for SubBillDeferralDeclinings.
   */
  static override _entityName = 'SubBillDeferralDeclinings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralDeclinings entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Name.
   * @nullable
   */
  declare invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Period 15.
   */
  declare amountPeriod15: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 18.
   */
  declare amountPeriod18: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 25.
   */
  declare amountPeriod25: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 11.
   */
  declare amountPeriod11: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 14.
   */
  declare amountPeriod14: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 21.
   */
  declare amountPeriod21: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 24.
   */
  declare amountPeriod24: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Markup Code.
   * @nullable
   */
  declare markupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Period 10.
   */
  declare amountPeriod10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 17.
   */
  declare amountPeriod17: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 20.
   */
  declare amountPeriod20: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Or Def Account.
   * @nullable
   */
  declare revOrDefAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Period 13.
   */
  declare amountPeriod13: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 23.
   */
  declare amountPeriod23: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Main Account Num.
   * @nullable
   */
  declare mainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Period 8.
   */
  declare amountPeriod8: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 9.
   */
  declare amountPeriod9: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 1.
   */
  declare amountPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Schedule Number.
   * @nullable
   */
  declare subBillScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Period 2.
   */
  declare amountPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 12.
   */
  declare amountPeriod12: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 3.
   */
  declare amountPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 4.
   */
  declare amountPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 22.
   */
  declare amountPeriod22: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 5.
   */
  declare amountPeriod5: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 6.
   */
  declare amountPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 7.
   */
  declare amountPeriod7: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Transaction Type.
   * @nullable
   */
  declare subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  /**
   * Deferral Schedule Status.
   * @nullable
   */
  declare deferralScheduleStatus?: SubBillDeferralScheduleStatus | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Start Date.
   */
  declare deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Deferral Recognition Type.
   * @nullable
   */
  declare subBillDeferralRecognitionType?: DebitCredit | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Schedule Number.
   * @nullable
   */
  declare deferralScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Amount.
   */
  declare deferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 16.
   */
  declare amountPeriod16: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Period 26.
   */
  declare amountPeriod26: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Schedule Type.
   * @nullable
   */
  declare subBillDeferralScheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Amount Period 19.
   */
  declare amountPeriod19: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Schedule Status.
   * @nullable
   */
  declare subBillScheduleStatus?: SubBillScheduleStatus | null;

  constructor(_entityApi: SubBillDeferralDecliningsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralDecliningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  amountPeriod15: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod18: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod25: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod11: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod14: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod21: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod24: DeserializedType<T, 'Edm.Decimal'>;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  markupCode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountPeriod10: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod17: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod20: DeserializedType<T, 'Edm.Decimal'>;
  revOrDefAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountPeriod13: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod23: DeserializedType<T, 'Edm.Decimal'>;
  mainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  amountPeriod8: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod9: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  subBillScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  amountPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod12: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod22: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod5: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod7: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  deferralScheduleStatus?: SubBillDeferralScheduleStatus | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillDeferralRecognitionType?: DebitCredit | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  deferralScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  deferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod16: DeserializedType<T, 'Edm.Decimal'>;
  amountPeriod26: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralScheduleType?: SubBillDeferralScheduleType | null;
  amountPeriod19: DeserializedType<T, 'Edm.Decimal'>;
  subBillScheduleStatus?: SubBillScheduleStatus | null;
}
