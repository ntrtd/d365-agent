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
import type { SubBillScheduleLineBiEntitiesApi } from './SubBillScheduleLineBiEntitiesApi';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { NoYes } from './NoYes';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
import { SubBillItemType } from './SubBillItemType';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillMinMax } from './SubBillMinMax';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillPricingMethod } from './SubBillPricingMethod';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';

/**
 * This class represents the entity "SubBillScheduleLineBiEntities" of service "d365_metadata".
 */
export class SubBillScheduleLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillScheduleLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillScheduleLineBiEntities.
   */
  static override _entityName = 'SubBillScheduleLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillScheduleLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LineNum', 'SubBillBillingScheduleNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Billing Schedule Number.
   */
  declare subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Amount.
   */
  declare salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Revenue Split Parent Line Rec Id.
   */
  declare subBillRevenueSplitParentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Usage Reading Option.
   * @nullable
   */
  declare subBillUsageReadingOption?: SubBillUsageReadingOption | null;
  /**
   * Sub Bill Estimated Completion Date.
   */
  declare subBillEstimatedCompletionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Sub Bill Retail Variant Id.
   * @nullable
   */
  declare subBillRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Skip Auto Link.
   * @nullable
   */
  declare agreementSkipAutoLink?: NoYes | null;
  /**
   * Sales Ordered Qty.
   */
  declare salesOrderedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Alignment Date.
   */
  declare subBillAlignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Revenue Split Allocation Method.
   * @nullable
   */
  declare subBillRevenueSplitAllocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  /**
   * Customer Line Num.
   */
  declare customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Address.
   */
  declare subBillAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Start Date.
   */
  declare subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Free Qty.
   */
  declare subBillFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Item Type.
   * @nullable
   */
  declare subBillItemType?: SubBillItemType | null;
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
   * Sub Bill Auto Renew.
   * @nullable
   */
  declare subBillAutoRenew?: NoYes | null;
  /**
   * Sub Bill Schedule Line Free Text Desc.
   * @nullable
   */
  declare subBillScheduleLineFreeTextDesc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Tax Group.
   * @nullable
   */
  declare projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Unbilled Journal Entry For Renewal.
   * @nullable
   */
  declare requireUnbilledJournalEntryForRenewal?: NoYes | null;
  /**
   * Sub Bill Min Amount.
   */
  declare subBillMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Update From Trade Agreement Only At Renewal.
   * @nullable
   */
  declare updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  /**
   * Milestone Allocation Percentage.
   */
  declare milestoneAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Milestone Header Rec Id.
   */
  declare subBillMilestoneHeaderRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Max Amount.
   */
  declare subBillMaxAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Usage Identifier.
   * @nullable
   */
  declare subBillUsageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Max Qty.
   */
  declare subBillMaxQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Min Max Reset Num Of Periods.
   */
  declare subBillMinMaxResetNumOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Item Group.
   * @nullable
   */
  declare projTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Renewal Lines.
   */
  declare subBillRenewalLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Matching Agreement Line.
   */
  declare matchingAgreementLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Prorate Partial Period.
   * @nullable
   */
  declare subBillProratePartialPeriod?: NoYes | null;
  /**
   * Milestone Completion Percentage.
   */
  declare milestoneCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Schedule Line Text.
   * @nullable
   */
  declare subBillScheduleLineText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Frequency.
   * @nullable
   */
  declare subBillFrequency?: SubBillFrequency | null;
  /**
   * Sub Bill Reset Used Free Qty.
   */
  declare subBillResetUsedFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Estimated Consumption.
   */
  declare subBillEstimatedConsumption: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Main Account.
   */
  declare subBillMainAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Min Max.
   * @nullable
   */
  declare subBillMinMax?: SubBillMinMax | null;
  /**
   * Sub Bill Revenue Split Parent Amount.
   */
  declare subBillRevenueSplitParentAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Line Used Free Qty.
   */
  declare subBillLineUsedFreeQty: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sub Bill Free Qty Reset Num Of Periods.
   */
  declare subBillFreeQtyResetNumOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Code.
   * @nullable
   */
  declare billingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Revenue Split.
   * @nullable
   */
  declare subBillRevenueSplit?: NoYes | null;
  /**
   * Sub Bill Min Qty.
   */
  declare subBillMinQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Milestone Auto Renewed Parent Rec Id.
   */
  declare milestoneAutoRenewedParentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Original Sales Id.
   * @nullable
   */
  declare subBillOriginalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Milestone Orig Amount.
   */
  declare milestoneOrigAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill End Date.
   */
  declare subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Split.
   * @nullable
   */
  declare customerSplit?: NoYes | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Pricing Method.
   * @nullable
   */
  declare subBillPricingMethod?: SubBillPricingMethod | null;
  /**
   * Sub Bill Schedule Status.
   * @nullable
   */
  declare subBillScheduleStatus?: SubBillScheduleStatus | null;
  /**
   * Sub Bill Escalation.
   * @nullable
   */
  declare subBillEscalation?: NoYes | null;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Initial Reading.
   */
  declare subBillInitialReading: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Invoice Separately.
   * @nullable
   */
  declare subBillInvoiceSeparately?: NoYes | null;

  constructor(_entityApi: SubBillScheduleLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillScheduleLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillRevenueSplitParentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  subBillUsageReadingOption?: SubBillUsageReadingOption | null;
  subBillEstimatedCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  agreementSkipAutoLink?: NoYes | null;
  salesOrderedQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillAlignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillRevenueSplitAllocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  customerLineNum: DeserializedType<T, 'Edm.Int32'>;
  subBillAddress: DeserializedType<T, 'Edm.Int64'>;
  subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillItemType?: SubBillItemType | null;
  subBillAddressName?: DeserializedType<T, 'Edm.String'> | null;
  subBillAlignToMonth?: NoYes | null;
  subBillAutoRenew?: NoYes | null;
  subBillScheduleLineFreeTextDesc?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  requireUnbilledJournalEntryForRenewal?: NoYes | null;
  subBillMinAmount: DeserializedType<T, 'Edm.Decimal'>;
  updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  milestoneAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subBillMilestoneHeaderRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillMaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillInterval: DeserializedType<T, 'Edm.Int32'>;
  useWeightedTradeAgreementPrice?: NoYes | null;
  subBillCpiIndexCalculation?: SubBillCpiIndexCalculation | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  subBillUsageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  subBillMaxQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillMinMaxResetNumOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  subBillRenewalLines: DeserializedType<T, 'Edm.Int32'>;
  matchingAgreementLine: DeserializedType<T, 'Edm.Int64'>;
  subBillProratePartialPeriod?: NoYes | null;
  milestoneCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subBillScheduleLineText?: DeserializedType<T, 'Edm.String'> | null;
  subBillFrequency?: SubBillFrequency | null;
  subBillResetUsedFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillEstimatedConsumption: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  subBillMainAccount: DeserializedType<T, 'Edm.Int64'>;
  subBillMinMax?: SubBillMinMax | null;
  subBillRevenueSplitParentAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  subBillLineUsedFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillTerminationType?: SubBillTerminationType | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  subBillFreeQtyResetNumOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  billingCode?: DeserializedType<T, 'Edm.String'> | null;
  subBillRevenueSplit?: NoYes | null;
  subBillMinQty: DeserializedType<T, 'Edm.Decimal'>;
  milestoneAutoRenewedParentRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillOriginalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  milestoneOrigAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  customerSplit?: NoYes | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  subBillPricingMethod?: SubBillPricingMethod | null;
  subBillScheduleStatus?: SubBillScheduleStatus | null;
  subBillEscalation?: NoYes | null;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillInitialReading: DeserializedType<T, 'Edm.Decimal'>;
  subBillInvoiceSeparately?: NoYes | null;
}
