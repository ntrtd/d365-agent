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
import type { SubBillDeferralBalancesListEntityApi } from './SubBillDeferralBalancesListEntityApi';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';

/**
 * This class represents the entity "SubBillDeferralBalancesListEntity" of service "d365_metadata".
 */
export class SubBillDeferralBalancesListEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralBalancesListEntityType<T>
{
  /**
   * Technical entity name for SubBillDeferralBalancesListEntity.
   */
  static override _entityName = 'SubBillDeferralBalancesListEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralBalancesListEntity entity.
   */
  static _keys = [
    'dataAreaId',
    'DeferralScheduleNumber',
    'ItemNumber',
    'BillingScheduleNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Schedule Number.
   */
  declare deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Number.
   */
  declare billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Status.
   * @nullable
   */
  declare scheduleLineStatus?: SubBillScheduleStatus | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferral Start Date.
   */
  declare deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Schedule Status.
   * @nullable
   */
  declare scheduleStatus?: SubBillDeferralScheduleStatus | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoicing Name.
   * @nullable
   */
  declare invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schedule Type.
   * @nullable
   */
  declare scheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Original Deferral Amount.
   */
  declare originalDeferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Charges Code.
   * @nullable
   */
  declare chargesCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Account Display Value.
   * @nullable
   */
  declare deferralAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SubBillDeferralTransactionType | null;
  /**
   * Recognized Amount.
   */
  declare recognizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Balance.
   */
  declare deferralBalance: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubBillDeferralBalancesListEntityApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralBalancesListEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  scheduleLineStatus?: SubBillScheduleStatus | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduleStatus?: SubBillDeferralScheduleStatus | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  scheduleType?: SubBillDeferralScheduleType | null;
  originalDeferralAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargesCode?: DeserializedType<T, 'Edm.String'> | null;
  deferralAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: SubBillDeferralTransactionType | null;
  recognizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferralBalance: DeserializedType<T, 'Edm.Decimal'>;
}
