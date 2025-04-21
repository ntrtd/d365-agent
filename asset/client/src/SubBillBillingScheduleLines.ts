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
import type { SubBillBillingScheduleLinesApi } from './SubBillBillingScheduleLinesApi';
import { NoYes } from './NoYes';
import { SubBillMinMax } from './SubBillMinMax';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillItemType } from './SubBillItemType';
import { SubBillCalculateUnitPriceFrequency } from './SubBillCalculateUnitPriceFrequency';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { SubBillPricingMethod } from './SubBillPricingMethod';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  SubBillBillingScheduleTables,
  SubBillBillingScheduleTablesType
} from './SubBillBillingScheduleTables';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SubBillBillingScheduleLines" of service "d365_metadata".
 */
export class SubBillBillingScheduleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingScheduleLinesType<T>
{
  /**
   * Technical entity name for SubBillBillingScheduleLines.
   */
  static override _entityName = 'SubBillBillingScheduleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingScheduleLines entity.
   */
  static _keys = ['dataAreaId', 'ScheduleNumber', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External.
   * @nullable
   */
  declare external?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Price.
   */
  declare contractPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prorate Partial Period.
   * @nullable
   */
  declare proratePartialPeriod?: NoYes | null;
  /**
   * Unbilled Discount Offset Account.
   * @nullable
   */
  declare unbilledDiscountOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Revenue.
   * @nullable
   */
  declare unbilledRevenue?: NoYes | null;
  /**
   * Standalone Selling Price.
   */
  declare standaloneSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Support Level.
   * @nullable
   */
  declare originalSupportLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alignment Date.
   */
  declare alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Min Max Type.
   * @nullable
   */
  declare minMaxType?: SubBillMinMax | null;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Billing Amount.
   */
  declare maximumBillingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: SubBillScheduleStatus | null;
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
   * Original Sales Item.
   * @nullable
   */
  declare originalSalesItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Frequency.
   * @nullable
   */
  declare billingFrequency?: SubBillFrequency | null;
  /**
   * Auto Renew.
   * @nullable
   */
  declare autoRenew?: NoYes | null;
  /**
   * Proj Tax Group.
   * @nullable
   */
  declare projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Id.
   * @nullable
   */
  declare variantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: SubBillItemType | null;
  /**
   * Delivery Postal Code.
   * @nullable
   */
  declare deliveryPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Calculate Unit Price Frequency.
   * @nullable
   */
  declare subBillCalculateUnitPriceFrequency?: SubBillCalculateUnitPriceFrequency | null;
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
   * Support Level.
   * @nullable
   */
  declare supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Schedule Type.
   * @nullable
   */
  declare deferralScheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Deferred.
   * @nullable
   */
  declare deferred?: NoYes | null;
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
   * Unbilled Discount Account.
   * @nullable
   */
  declare unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Customer Split.
   * @nullable
   */
  declare isCustomerSplit?: NoYes | null;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Event Template.
   * @nullable
   */
  declare deferralEventTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Separately.
   * @nullable
   */
  declare invoiceSeparately?: NoYes | null;
  /**
   * Parent Amount.
   */
  declare parentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Straight Line Template.
   * @nullable
   */
  declare deferralStraightLineTemplate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Free Quantity.
   */
  declare freeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferral Start Date.
   */
  declare deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Identifier.
   * @nullable
   */
  declare usageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Offset Account.
   * @nullable
   */
  declare recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Consumption.
   */
  declare estimatedConsumption: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Net Amount.
   */
  declare originalNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Revenue Split.
   * @nullable
   */
  declare revenueSplit?: NoYes | null;
  /**
   * Postal Address.
   */
  declare postalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Deferral Recognition Account.
   * @nullable
   */
  declare deferralRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lines To Add Per Renewal.
   */
  declare linesToAddPerRenewal: DeserializedType<T, 'Edm.Int32'>;
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
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Delivery Address.
   * @nullable
   */
  declare isOneTimeDeliveryAddress?: NoYes | null;
  /**
   * Minimum Billing Quantity.
   */
  declare minimumBillingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standalone Selling Price Origin.
   * @nullable
   */
  declare standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Interval.
   */
  declare billingInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Country Region Id.
   * @nullable
   */
  declare deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stubbing Cutoff Date.
   */
  declare stubbingCutoffDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * External Line Number.
   */
  declare externalLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery City.
   * @nullable
   */
  declare deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Quantity Reset Number Of Periods.
   */
  declare freeQuantityResetNumberOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Text.
   * @nullable
   */
  declare lineText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Term Account.
   * @nullable
   */
  declare shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Reading.
   */
  declare initialReading: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Initial Recognition Account.
   * @nullable
   */
  declare initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Escalation.
   * @nullable
   */
  declare escalation?: NoYes | null;
  /**
   * Maximum Billing Quantity.
   */
  declare maximumBillingQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Unbilled Revenue Offset Account.
   * @nullable
   */
  declare unbilledRevenueOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unbilled Revenue Account.
   * @nullable
   */
  declare unbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Reading Option.
   * @nullable
   */
  declare usageReadingOption?: SubBillUsageReadingOption | null;
  /**
   * Renewal Percentage.
   */
  declare renewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Min Max Reset Number Of Periods.
   */
  declare minMaxResetNumberOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Renewal Amount.
   */
  declare renewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Code.
   * @nullable
   */
  declare billingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street.
   * @nullable
   */
  declare deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Contract Revenue Account.
   * @nullable
   */
  declare deferredContractRevenueAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Billing Amount.
   */
  declare minimumBillingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Renewal Amount.
   */
  declare originalRenewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Renewal Percentage.
   */
  declare originalRenewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pricing Method.
   * @nullable
   */
  declare pricingMethod?: SubBillPricingMethod | null;
  /**
   * Original Sales Order.
   * @nullable
   */
  declare originalSalesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombinationEntity?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link SubBillBillingScheduleTables} entity.
   */
  declare subBillScheduleTableEntity?: SubBillBillingScheduleTables<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntity?: DimensionSets<T> | null;

  constructor(_entityApi: SubBillBillingScheduleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingScheduleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  external?: DeserializedType<T, 'Edm.String'> | null;
  contractPrice: DeserializedType<T, 'Edm.Decimal'>;
  proratePartialPeriod?: NoYes | null;
  unbilledDiscountOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenue?: NoYes | null;
  standaloneSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  originalSupportLevel?: DeserializedType<T, 'Edm.String'> | null;
  alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  minMaxType?: SubBillMinMax | null;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  maximumBillingAmount: DeserializedType<T, 'Edm.Decimal'>;
  status?: SubBillScheduleStatus | null;
  meaNumber?: DeserializedType<T, 'Edm.String'> | null;
  billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalSalesItem?: DeserializedType<T, 'Edm.String'> | null;
  billingFrequency?: SubBillFrequency | null;
  autoRenew?: NoYes | null;
  projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  variantId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  itemType?: SubBillItemType | null;
  deliveryPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  subBillCalculateUnitPriceFrequency?: SubBillCalculateUnitPriceFrequency | null;
  updateFromTradeAgreementOnlyAtRenewal?: NoYes | null;
  billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  deferralScheduleType?: SubBillDeferralScheduleType | null;
  deferred?: NoYes | null;
  billingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  useWeightedTradeAgreementPrice?: NoYes | null;
  unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  isCustomerSplit?: NoYes | null;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  deferralEventTemplate?: DeserializedType<T, 'Edm.String'> | null;
  invoiceSeparately?: NoYes | null;
  parentAmount: DeserializedType<T, 'Edm.Decimal'>;
  site?: DeserializedType<T, 'Edm.String'> | null;
  deferralStraightLineTemplate?: DeserializedType<T, 'Edm.String'> | null;
  freeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  usageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  estimatedConsumption: DeserializedType<T, 'Edm.Decimal'>;
  originalNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  revenueSplit?: NoYes | null;
  postalAddress: DeserializedType<T, 'Edm.Int64'>;
  deferralRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  linesToAddPerRenewal: DeserializedType<T, 'Edm.Int32'>;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeDeliveryAddress?: NoYes | null;
  minimumBillingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  billingInterval: DeserializedType<T, 'Edm.Int32'>;
  deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  stubbingCutoffDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalLineNumber: DeserializedType<T, 'Edm.Int32'>;
  deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  freeQuantityResetNumberOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  lineText?: DeserializedType<T, 'Edm.String'> | null;
  shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  initialReading: DeserializedType<T, 'Edm.Decimal'>;
  initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  escalation?: NoYes | null;
  maximumBillingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  alignToMonth?: NoYes | null;
  billingAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  unbilledRevenueOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  usageReadingOption?: SubBillUsageReadingOption | null;
  renewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  minMaxResetNumberOfPeriods: DeserializedType<T, 'Edm.Decimal'>;
  renewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  billingCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  deferredContractRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumBillingAmount: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  originalRenewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  originalRenewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  pricingMethod?: SubBillPricingMethod | null;
  originalSalesOrder?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombinationEntity?: DimensionCombinationsType<T> | null;
  subBillScheduleTableEntity?: SubBillBillingScheduleTablesType<T> | null;
  dimensionSetEntity?: DimensionSetsType<T> | null;
}
