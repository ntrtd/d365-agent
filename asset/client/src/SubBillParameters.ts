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
import type { SubBillParametersApi } from './SubBillParametersApi';
import { NoYes } from './NoYes';
import { SubBillSupportAndRenewalQuantity } from './SubBillSupportAndRenewalQuantity';
import { SubBillShortTermUnbilledMethod } from './SubBillShortTermUnbilledMethod';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { SubBillProrationMethod } from './SubBillProrationMethod';
import { SubBillInvoiceBillingScheduleDateFilter } from './SubBillInvoiceBillingScheduleDateFilter';
import { SubBillSupDefaultStartDate } from './SubBillSupDefaultStartDate';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillUniqueScheduleType } from './SubBillUniqueScheduleType';
import { SubBillCreditOption } from './SubBillCreditOption';
import { SubBillSupportRenewalFrequency } from './SubBillSupportRenewalFrequency';
import { SubBillPostSalesOrderOption } from './SubBillPostSalesOrderOption';

/**
 * This class represents the entity "SubBillParametersCollection" of service "d365_metadata".
 */
export class SubBillParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubBillParametersType<T>
{
  /**
   * Technical entity name for SubBillParameters.
   */
  static override _entityName = 'SubBillParametersCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Copy Serial Number.
   * @nullable
   */
  declare copySerialNumber?: NoYes | null;
  /**
   * Billing Schedule Group.
   * @nullable
   */
  declare billingScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Sales Agreements.
   * @nullable
   */
  declare useSalesAgreements?: NoYes | null;
  /**
   * Support And Renewal Quantity.
   * @nullable
   */
  declare supportAndRenewalQuantity?: SubBillSupportAndRenewalQuantity | null;
  /**
   * Short Term Unbilled Method.
   * @nullable
   */
  declare shortTermUnbilledMethod?: SubBillShortTermUnbilledMethod | null;
  /**
   * Consolidate By Customer.
   * @nullable
   */
  declare consolidateByCustomer?: NoYes | null;
  /**
   * Hold.
   * @nullable
   */
  declare hold?: NoYes | null;
  /**
   * Update From Trade Agreement Only At Renewal.
   * @nullable
   */
  declare updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  /**
   * Cpi Index Calculation.
   * @nullable
   */
  declare cpiIndexCalculation?: SubBillCpiIndexCalculation | null;
  /**
   * Proration Method.
   * @nullable
   */
  declare prorationMethod?: SubBillProrationMethod | null;
  /**
   * Use Weighted Trade Agreement Price.
   * @nullable
   */
  declare useWeightedTradeAgreementPrice?: NoYes | null;
  /**
   * Include Discount In Calculation.
   * @nullable
   */
  declare includeDiscountInCalculation?: NoYes | null;
  /**
   * Use Trade Agreements.
   * @nullable
   */
  declare useTradeAgreements?: NoYes | null;
  /**
   * Consolidate By Item.
   * @nullable
   */
  declare consolidateByItem?: NoYes | null;
  /**
   * Create Deferral For Credit.
   * @nullable
   */
  declare createDeferralForCredit?: NoYes | null;
  /**
   * Invoice Billing Schedule Date Filter.
   * @nullable
   */
  declare invoiceBillingScheduleDateFilter?: SubBillInvoiceBillingScheduleDateFilter | null;
  /**
   * Use Active Status For On Hold Header.
   * @nullable
   */
  declare useActiveStatusForOnHoldHeader?: NoYes | null;
  /**
   * Support Default Start Date.
   * @nullable
   */
  declare supportDefaultStartDate?: SubBillSupDefaultStartDate | null;
  /**
   * Prorate Daily.
   * @nullable
   */
  declare prorateDaily?: NoYes | null;
  /**
   * Termination Type.
   * @nullable
   */
  declare terminationType?: SubBillTerminationType | null;
  /**
   * One Time Terminate With Refund.
   * @nullable
   */
  declare oneTimeTerminateWithRefund?: NoYes | null;
  /**
   * Align Deferral To Billing.
   * @nullable
   */
  declare alignDeferralToBilling?: NoYes | null;
  /**
   * Inv Trans Type.
   * @nullable
   */
  declare invTransType?: SubBillInvTransType | null;
  /**
   * Unique Schedule Type.
   * @nullable
   */
  declare uniqueScheduleType?: SubBillUniqueScheduleType | null;
  /**
   * Credit Option.
   * @nullable
   */
  declare creditOption?: SubBillCreditOption | null;
  /**
   * Auto Post Unbilled Revenue.
   * @nullable
   */
  declare autoPostUnbilledRevenue?: NoYes | null;
  /**
   * Exclude Zero Qty.
   * @nullable
   */
  declare excludeZeroQty?: NoYes | null;
  /**
   * Align To Month.
   * @nullable
   */
  declare alignToMonth?: NoYes | null;
  /**
   * Add Billing Dates To Item.
   * @nullable
   */
  declare addBillingDatesToItem?: NoYes | null;
  /**
   * Support And Renewal Level.
   * @nullable
   */
  declare supportAndRenewalLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split By Item Group.
   * @nullable
   */
  declare splitByItemGroup?: NoYes | null;
  /**
   * Default Journal Name.
   * @nullable
   */
  declare defaultJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Frequency.
   * @nullable
   */
  declare supportFrequency?: SubBillSupportRenewalFrequency | null;
  /**
   * Align By Item Group.
   * @nullable
   */
  declare alignByItemGroup?: NoYes | null;
  /**
   * Auto Enable Support And Renewal.
   * @nullable
   */
  declare autoEnableSupportAndRenewal?: NoYes | null;
  /**
   * Consolidate All Periods.
   * @nullable
   */
  declare consolidateAllPeriods?: NoYes | null;
  /**
   * Renewal Frequency.
   * @nullable
   */
  declare renewalFrequency?: SubBillSupportRenewalFrequency | null;
  /**
   * Align To Next Unbilled Period.
   * @nullable
   */
  declare alignToNextUnbilledPeriod?: NoYes | null;
  /**
   * Customer Split.
   * @nullable
   */
  declare customerSplit?: NoYes | null;
  /**
   * Posting Option.
   * @nullable
   */
  declare postingOption?: SubBillPostSalesOrderOption | null;
  /**
   * Prorate Partial Periods.
   * @nullable
   */
  declare proratePartialPeriods?: NoYes | null;
  /**
   * Revenue Split Automatic Items.
   * @nullable
   */
  declare revenueSplitAutomaticItems?: NoYes | null;
  /**
   * Suppress Child Items.
   * @nullable
   */
  declare suppressChildItems?: NoYes | null;

  constructor(_entityApi: SubBillParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  copySerialNumber?: NoYes | null;
  billingScheduleGroup?: DeserializedType<T, 'Edm.String'> | null;
  useSalesAgreements?: NoYes | null;
  supportAndRenewalQuantity?: SubBillSupportAndRenewalQuantity | null;
  shortTermUnbilledMethod?: SubBillShortTermUnbilledMethod | null;
  consolidateByCustomer?: NoYes | null;
  hold?: NoYes | null;
  updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  cpiIndexCalculation?: SubBillCpiIndexCalculation | null;
  prorationMethod?: SubBillProrationMethod | null;
  useWeightedTradeAgreementPrice?: NoYes | null;
  includeDiscountInCalculation?: NoYes | null;
  useTradeAgreements?: NoYes | null;
  consolidateByItem?: NoYes | null;
  createDeferralForCredit?: NoYes | null;
  invoiceBillingScheduleDateFilter?: SubBillInvoiceBillingScheduleDateFilter | null;
  useActiveStatusForOnHoldHeader?: NoYes | null;
  supportDefaultStartDate?: SubBillSupDefaultStartDate | null;
  prorateDaily?: NoYes | null;
  terminationType?: SubBillTerminationType | null;
  oneTimeTerminateWithRefund?: NoYes | null;
  alignDeferralToBilling?: NoYes | null;
  invTransType?: SubBillInvTransType | null;
  uniqueScheduleType?: SubBillUniqueScheduleType | null;
  creditOption?: SubBillCreditOption | null;
  autoPostUnbilledRevenue?: NoYes | null;
  excludeZeroQty?: NoYes | null;
  alignToMonth?: NoYes | null;
  addBillingDatesToItem?: NoYes | null;
  supportAndRenewalLevel?: DeserializedType<T, 'Edm.String'> | null;
  splitByItemGroup?: NoYes | null;
  defaultJournalName?: DeserializedType<T, 'Edm.String'> | null;
  supportFrequency?: SubBillSupportRenewalFrequency | null;
  alignByItemGroup?: NoYes | null;
  autoEnableSupportAndRenewal?: NoYes | null;
  consolidateAllPeriods?: NoYes | null;
  renewalFrequency?: SubBillSupportRenewalFrequency | null;
  alignToNextUnbilledPeriod?: NoYes | null;
  customerSplit?: NoYes | null;
  postingOption?: SubBillPostSalesOrderOption | null;
  proratePartialPeriods?: NoYes | null;
  revenueSplitAutomaticItems?: NoYes | null;
  suppressChildItems?: NoYes | null;
}
