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
import type { SubBillBillingScheduleTablesApi } from './SubBillBillingScheduleTablesApi';
import { SubBillAllocMeaType } from './SubBillAllocMeaType';
import { SubBillFrequency } from './SubBillFrequency';
import { NoYes } from './NoYes';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
import {
  SubBillBillingScheduleLines,
  SubBillBillingScheduleLinesType
} from './SubBillBillingScheduleLines';

/**
 * This class represents the entity "SubBillBillingScheduleTables" of service "d365_metadata".
 */
export class SubBillBillingScheduleTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingScheduleTablesType<T>
{
  /**
   * Technical entity name for SubBillBillingScheduleTables.
   */
  static override _entityName = 'SubBillBillingScheduleTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingScheduleTables entity.
   */
  static _keys = ['dataAreaId', 'ScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Group.
   * @nullable
   */
  declare billingScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Milestone Template.
   * @nullable
   */
  declare milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Classification.
   * @nullable
   */
  declare billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Start Date.
   */
  declare contractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mea Type.
   * @nullable
   */
  declare meaType?: SubBillAllocMeaType | null;
  /**
   * Mea Number.
   * @nullable
   */
  declare meaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Start Date.
   */
  declare billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Frequency.
   * @nullable
   */
  declare billingFrequency?: SubBillFrequency | null;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Code.
   * @nullable
   */
  declare deliveryPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Completion Date.
   */
  declare contractCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Partner Account.
   * @nullable
   */
  declare partnerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update From Trade Agreement Only At Renewal.
   * @nullable
   */
  declare updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  /**
   * Billing End Date.
   */
  declare billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Address Name.
   * @nullable
   */
  declare billingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Weighted Trade Agreement Price.
   * @nullable
   */
  declare useWeightedTradeAgreementPrice?: NoYes | null;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Separately.
   * @nullable
   */
  declare invoiceSeparately?: NoYes | null;
  /**
   * End User Account.
   * @nullable
   */
  declare endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address.
   * @nullable
   */
  declare invoiceAddress?: InvoiceOrderAccount | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Periods.
   */
  declare numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Delivery Address.
   * @nullable
   */
  declare isOneTimeDeliveryAddress?: NoYes | null;
  /**
   * Delivery Country Region Id.
   * @nullable
   */
  declare deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Interval.
   */
  declare billingInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery City.
   * @nullable
   */
  declare deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Align To Month.
   * @nullable
   */
  declare alignToMonth?: NoYes | null;
  /**
   * Billing Address Rec Id.
   */
  declare billingAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Transaction Type.
   * @nullable
   */
  declare invoiceTransactionType?: SubBillInvTransType | null;
  /**
   * Delivery Street.
   * @nullable
   */
  declare deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schedule Status.
   * @nullable
   */
  declare scheduleStatus?: SubBillScheduleStatus | null;
  /**
   * Deferred Contract Revenue Account.
   * @nullable
   */
  declare deferredContractRevenueAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Agreement Number.
   * @nullable
   */
  declare salesAgreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prorate Partial Periods.
   * @nullable
   */
  declare proratePartialPeriods?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link SubBillBillingScheduleLines} entity.
   */
  declare relationToSubBillScheduleTableEntity: SubBillBillingScheduleLines<T>[];

  constructor(_entityApi: SubBillBillingScheduleTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingScheduleTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  billingScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  contractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  meaType?: SubBillAllocMeaType | null;
  meaNumber?: DeserializedType<T, 'Edm.String'> | null;
  billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingFrequency?: SubBillFrequency | null;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  contractCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partnerAccount?: DeserializedType<T, 'Edm.String'> | null;
  updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  useWeightedTradeAgreementPrice?: NoYes | null;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  invoiceSeparately?: NoYes | null;
  endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddress?: InvoiceOrderAccount | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeDeliveryAddress?: NoYes | null;
  deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  billingInterval: DeserializedType<T, 'Edm.Int32'>;
  deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  alignToMonth?: NoYes | null;
  billingAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTransactionType?: SubBillInvTransType | null;
  deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  scheduleStatus?: SubBillScheduleStatus | null;
  deferredContractRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  proratePartialPeriods?: NoYes | null;
  relationToSubBillScheduleTableEntity: SubBillBillingScheduleLinesType<T>[];
}
