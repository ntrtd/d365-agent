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
import type { SubBillScheduleTableBiEntitiesApi } from './SubBillScheduleTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';

/**
 * This class represents the entity "SubBillScheduleTableBiEntities" of service "d365_metadata".
 */
export class SubBillScheduleTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillScheduleTableBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillScheduleTableBiEntities.
   */
  static override _entityName = 'SubBillScheduleTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillScheduleTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SubBillBillingScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Bill Billing Schedule Number.
   */
  declare subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Contract Completion Date.
   */
  declare subBillContractCompletionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Billing Classification.
   * @nullable
   */
  declare billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Address.
   */
  declare subBillAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Start Date.
   */
  declare subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Partner Commission Rate.
   */
  declare subBillPartnerCommissionRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Address Name.
   * @nullable
   */
  declare subBillAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Align To Month.
   * @nullable
   */
  declare subBillAlignToMonth?: NoYes | null;
  /**
   * Sub Bill Inv Trans Type.
   * @nullable
   */
  declare subBillInvTransType?: SubBillInvTransType | null;
  /**
   * Sub Bill Auto Renew.
   * @nullable
   */
  declare subBillAutoRenew?: NoYes | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update From Trade Agreement Only At Renewal.
   * @nullable
   */
  declare updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  /**
   * Sub Bill Partner Account.
   * @nullable
   */
  declare subBillPartnerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Termination Date.
   */
  declare subBillTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Interval.
   */
  declare subBillInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Weighted Trade Agreement Price.
   * @nullable
   */
  declare useWeightedTradeAgreementPrice?: NoYes | null;
  /**
   * Sub Bill Cpi Index Calculation.
   * @nullable
   */
  declare subBillCpiIndexCalculation?: SubBillCpiIndexCalculation | null;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Contract Start Date.
   */
  declare subBillContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Proj Invoice Proj Id.
   * @nullable
   */
  declare projInvoiceProjId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Sched.
   * @nullable
   */
  declare paymSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Currency Code.
   * @nullable
   */
  declare custCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Prorate Partial Period.
   * @nullable
   */
  declare subBillProratePartialPeriod?: NoYes | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Frequency.
   * @nullable
   */
  declare subBillFrequency?: SubBillFrequency | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Lines Per Renewal.
   */
  declare subBillLinesPerRenewal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Milestone Template Id.
   * @nullable
   */
  declare subBillMilestoneTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Num Of Periods.
   */
  declare subBillNumOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Schedule Group.
   * @nullable
   */
  declare subBillScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Termination Type.
   * @nullable
   */
  declare subBillTerminationType?: SubBillTerminationType | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Agreement.
   */
  declare matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
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
   * Sub Bill End Date.
   */
  declare subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Schedule Status.
   * @nullable
   */
  declare subBillScheduleStatus?: SubBillScheduleStatus | null;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill End User Account.
   * @nullable
   */
  declare subBillEndUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Invoice Separately.
   * @nullable
   */
  declare subBillInvoiceSeparately?: NoYes | null;

  constructor(_entityApi: SubBillScheduleTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillScheduleTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  subBillContractCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  subBillAddress: DeserializedType<T, 'Edm.Int64'>;
  subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillPartnerCommissionRate: DeserializedType<T, 'Edm.Decimal'>;
  subBillAddressName?: DeserializedType<T, 'Edm.String'> | null;
  subBillAlignToMonth?: NoYes | null;
  subBillInvTransType?: SubBillInvTransType | null;
  subBillAutoRenew?: NoYes | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  subBillPartnerAccount?: DeserializedType<T, 'Edm.String'> | null;
  subBillTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillInterval: DeserializedType<T, 'Edm.Int32'>;
  useWeightedTradeAgreementPrice?: NoYes | null;
  subBillCpiIndexCalculation?: SubBillCpiIndexCalculation | null;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  subBillContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddress?: InvoiceOrderAccount | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceProjId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  paymSched?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  custCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  subBillProratePartialPeriod?: NoYes | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  subBillFrequency?: SubBillFrequency | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  subBillLinesPerRenewal: DeserializedType<T, 'Edm.Int32'>;
  subBillMilestoneTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  subBillNumOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  subBillScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  subBillTerminationType?: SubBillTerminationType | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  subBillScheduleStatus?: SubBillScheduleStatus | null;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillEndUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  subBillInvoiceSeparately?: NoYes | null;
}
