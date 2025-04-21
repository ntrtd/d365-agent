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
import type { ForeignTradeParametersApi } from './ForeignTradeParametersApi';
import { NoYes } from './NoYes';
import { PeriodOfReporting } from './PeriodOfReporting';
import { RoundOffType } from './RoundOffType';
import { IntrastatWeightRounding } from './IntrastatWeightRounding';
import { IntrastatCalcMethodHu } from './IntrastatCalcMethodHu';
import { NoneOneOfAllSelected } from './NoneOneOfAllSelected';

/**
 * This class represents the entity "ForeignTradeParameters" of service "d365_metadata".
 */
export class ForeignTradeParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ForeignTradeParametersType<T>
{
  /**
   * Technical entity name for ForeignTradeParameters.
   */
  static override _entityName = 'ForeignTradeParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ForeignTradeParameters entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Commodity.
   * @nullable
   */
  declare commodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Type.
   * @nullable
   */
  declare exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Company Floor Number.
   * @nullable
   */
  declare eslCompanyFloorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items With Additional Units.
   * @nullable
   */
  declare itemsWithAdditionalUnits?: NoYes | null;
  /**
   * Terms Of Delivery.
   * @nullable
   */
  declare termsOfDelivery?: NoYes | null;
  /**
   * Report Level Export.
   */
  declare reportLevelExport: DeserializedType<T, 'Edm.Int32'>;
  /**
   * State Or Province.
   * @nullable
   */
  declare stateOrProvince?: NoYes | null;
  /**
   * Esl Company Door Number.
   * @nullable
   */
  declare eslCompanyDoorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Filled By Worker Personnel Number.
   * @nullable
   */
  declare eslFilledByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Fax.
   * @nullable
   */
  declare contactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Amount Decimals.
   */
  declare eslAmountDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Info Data Area Id.
   * @nullable
   */
  declare companyInfoDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: NoYes | null;
  /**
   * Sales Reporting Period.
   * @nullable
   */
  declare salesReportingPeriod?: PeriodOfReporting | null;
  /**
   * Esl Transfer Cash Discount.
   * @nullable
   */
  declare eslTransferCashDiscount?: NoYes | null;
  /**
   * Purchase Reporting Period.
   * @nullable
   */
  declare purchaseReportingPeriod?: PeriodOfReporting | null;
  /**
   * Esl Amount Round Off.
   */
  declare eslAmountRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Weight Rounding Method.
   * @nullable
   */
  declare intrastatWeightRoundingMethod?: RoundOffType | null;
  /**
   * Intrastat Report Er Solution Name.
   * @nullable
   */
  declare intrastatReportErSolutionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Esl Amount Round Off Use Minimum Value.
   * @nullable
   */
  declare eslAmountRoundOffUseMinimumValue?: NoYes | null;
  /**
   * Esl Report Er Format Name.
   * @nullable
   */
  declare eslReportErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check State Sender Receiver.
   * @nullable
   */
  declare checkStateSenderReceiver?: NoYes | null;
  /**
   * Weight.
   * @nullable
   */
  declare weight?: NoYes | null;
  /**
   * Check Statistic Procedure.
   * @nullable
   */
  declare checkStatisticProcedure?: NoYes | null;
  /**
   * Intrastat Amount Rounding Rule.
   */
  declare intrastatAmountRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Email.
   * @nullable
   */
  declare contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms.
   * @nullable
   */
  declare deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Weight Decimals.
   */
  declare intrastatWeightDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Agent Branch Id.
   * @nullable
   */
  declare agentBranchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl File Er Solution Name.
   * @nullable
   */
  declare eslFileErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Low Weight Rounding.
   * @nullable
   */
  declare intrastatLowWeightRounding?: IntrastatWeightRounding | null;
  /**
   * Contact Url.
   * @nullable
   */
  declare contactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Transfer Purchases.
   * @nullable
   */
  declare eslTransferPurchases?: NoYes | null;
  /**
   * Nonservice Items.
   * @nullable
   */
  declare nonserviceItems?: NoYes | null;
  /**
   * Intrastat Amount Round Off Use Minimum Value.
   * @nullable
   */
  declare intrastatAmountRoundOffUseMinimumValue?: NoYes | null;
  /**
   * Port Parm.
   * @nullable
   */
  declare portParm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: NoYes | null;
  /**
   * Statistic Procedure.
   * @nullable
   */
  declare statisticProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items With Commodity Code.
   * @nullable
   */
  declare itemsWithCommodityCode?: NoYes | null;
  /**
   * Agent Phone.
   * @nullable
   */
  declare agentPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Weight Rounding Rule.
   */
  declare intrastatWeightRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agent Name.
   * @nullable
   */
  declare agentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Company Building Number.
   * @nullable
   */
  declare eslCompanyBuildingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agent Fax.
   * @nullable
   */
  declare agentFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Codes.
   * @nullable
   */
  declare transactionCodes?: NoYes | null;
  /**
   * Commodity Hierarchy Name.
   * @nullable
   */
  declare commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Units.
   * @nullable
   */
  declare additionalUnits?: NoYes | null;
  /**
   * Intrastat Check Fulfillment Date.
   * @nullable
   */
  declare intrastatCheckFulfillmentDate?: NoYes | null;
  /**
   * Esl File Er Vendor Url.
   * @nullable
   */
  declare eslFileErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items With Weight.
   * @nullable
   */
  declare itemsWithWeight?: NoYes | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: NoYes | null;
  /**
   * Print Export Statistical Report.
   * @nullable
   */
  declare printExportStatisticalReport?: NoYes | null;
  /**
   * Esl Report Er Vendor Url.
   * @nullable
   */
  declare eslReportErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Qty.
   * @nullable
   */
  declare checkQty?: NoYes | null;
  /**
   * Intrastat Spec Move.
   * @nullable
   */
  declare intrastatSpecMove?: NoYes | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: NoYes | null;
  /**
   * Esl Tax Authority.
   * @nullable
   */
  declare eslTaxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Specific Movement.
   * @nullable
   */
  declare intrastatSpecificMovement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Code.
   * @nullable
   */
  declare commodityCode?: NoYes | null;
  /**
   * Intrastat Amount Rounding Method.
   * @nullable
   */
  declare intrastatAmountRoundingMethod?: RoundOffType | null;
  /**
   * Intrastat File Er Solution Name.
   * @nullable
   */
  declare intrastatFileErSolutionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Calc Method.
   * @nullable
   */
  declare intrastatCalcMethod?: IntrastatCalcMethodHu | null;
  /**
   * Transfer Order.
   * @nullable
   */
  declare transferOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Report Er Vendor Url.
   * @nullable
   */
  declare intrastatReportErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Level Import.
   */
  declare reportLevelImport: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   * @nullable
   */
  declare amount?: NoYes | null;
  /**
   * Max Amount.
   */
  declare maxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat File Er Format Name.
   * @nullable
   */
  declare intrastatFileErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agent Tax Exempt Number.
   * @nullable
   */
  declare agentTaxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Report Er Solution Name.
   * @nullable
   */
  declare eslReportErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Authorized By Role.
   * @nullable
   */
  declare eslAuthorizedByRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Report Er Format Name.
   * @nullable
   */
  declare intrastatReportErFormatName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Esl File Er Format Name.
   * @nullable
   */
  declare eslFileErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Country Region Sender Receiver.
   * @nullable
   */
  declare checkCountryRegionSenderReceiver?: NoYes | null;
  /**
   * Esl Company Stairway Number.
   * @nullable
   */
  declare eslCompanyStairwayNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Mode Code.
   * @nullable
   */
  declare transportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Note.
   * @nullable
   */
  declare creditNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer When Meeting Criterion For.
   * @nullable
   */
  declare transferWhenMeetingCriterionFor?: NoneOneOfAllSelected | null;
  /**
   * Intrastat File Er Vendor Url.
   * @nullable
   */
  declare intrastatFileErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esl Authorized By Worker Personnel Number.
   * @nullable
   */
  declare eslAuthorizedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Max Weight.
   */
  declare maxWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: NoYes | null;
  /**
   * Contact Phone.
   * @nullable
   */
  declare contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: NoYes | null;
  /**
   * Esl Company Name Appendix.
   * @nullable
   */
  declare eslCompanyNameAppendix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Origin Destination.
   * @nullable
   */
  declare countyOriginDestination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Info Location Id.
   * @nullable
   */
  declare companyInfoLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Empty Warning.
   * @nullable
   */
  declare intrastatFulfillmentDateEmptyWarning?: NoYes | null;
  /**
   * Intrastat Amount Decimals.
   */
  declare intrastatAmountDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Esl Amount Round Off Type.
   * @nullable
   */
  declare eslAmountRoundOffType?: RoundOffType | null;

  constructor(_entityApi: ForeignTradeParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ForeignTradeParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  eslCompanyFloorNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemsWithAdditionalUnits?: NoYes | null;
  termsOfDelivery?: NoYes | null;
  reportLevelExport: DeserializedType<T, 'Edm.Int32'>;
  stateOrProvince?: NoYes | null;
  eslCompanyDoorNumber?: DeserializedType<T, 'Edm.String'> | null;
  eslFilledByWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactFax?: DeserializedType<T, 'Edm.String'> | null;
  eslAmountDecimals: DeserializedType<T, 'Edm.Int32'>;
  companyInfoDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegion?: NoYes | null;
  salesReportingPeriod?: PeriodOfReporting | null;
  eslTransferCashDiscount?: NoYes | null;
  purchaseReportingPeriod?: PeriodOfReporting | null;
  eslAmountRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  intrastatWeightRoundingMethod?: RoundOffType | null;
  intrastatReportErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  eslAmountRoundOffUseMinimumValue?: NoYes | null;
  eslReportErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  checkStateSenderReceiver?: NoYes | null;
  weight?: NoYes | null;
  checkStatisticProcedure?: NoYes | null;
  intrastatAmountRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  intrastatWeightDecimals: DeserializedType<T, 'Edm.Int32'>;
  agentBranchId?: DeserializedType<T, 'Edm.String'> | null;
  eslFileErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatLowWeightRounding?: IntrastatWeightRounding | null;
  contactUrl?: DeserializedType<T, 'Edm.String'> | null;
  eslTransferPurchases?: NoYes | null;
  nonserviceItems?: NoYes | null;
  intrastatAmountRoundOffUseMinimumValue?: NoYes | null;
  portParm?: DeserializedType<T, 'Edm.String'> | null;
  transport?: NoYes | null;
  statisticProcedure?: DeserializedType<T, 'Edm.String'> | null;
  itemsWithCommodityCode?: NoYes | null;
  agentPhone?: DeserializedType<T, 'Edm.String'> | null;
  intrastatWeightRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  agentName?: DeserializedType<T, 'Edm.String'> | null;
  eslCompanyBuildingNumber?: DeserializedType<T, 'Edm.String'> | null;
  agentFax?: DeserializedType<T, 'Edm.String'> | null;
  transactionCodes?: NoYes | null;
  commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  additionalUnits?: NoYes | null;
  intrastatCheckFulfillmentDate?: NoYes | null;
  eslFileErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  itemsWithWeight?: NoYes | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  county?: NoYes | null;
  printExportStatisticalReport?: NoYes | null;
  eslReportErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  checkQty?: NoYes | null;
  intrastatSpecMove?: NoYes | null;
  origin?: NoYes | null;
  eslTaxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  intrastatSpecificMovement?: DeserializedType<T, 'Edm.String'> | null;
  commodityCode?: NoYes | null;
  intrastatAmountRoundingMethod?: RoundOffType | null;
  intrastatFileErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCalcMethod?: IntrastatCalcMethodHu | null;
  transferOrder?: DeserializedType<T, 'Edm.String'> | null;
  intrastatReportErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  reportLevelImport: DeserializedType<T, 'Edm.Int32'>;
  amount?: NoYes | null;
  maxAmount: DeserializedType<T, 'Edm.Decimal'>;
  intrastatFileErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  agentTaxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  eslReportErSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  eslAuthorizedByRole?: DeserializedType<T, 'Edm.String'> | null;
  intrastatReportErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  eslFileErFormatName?: DeserializedType<T, 'Edm.String'> | null;
  checkCountryRegionSenderReceiver?: NoYes | null;
  eslCompanyStairwayNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  creditNote?: DeserializedType<T, 'Edm.String'> | null;
  transferWhenMeetingCriterionFor?: NoneOneOfAllSelected | null;
  intrastatFileErVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  eslAuthorizedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  maxWeight: DeserializedType<T, 'Edm.Decimal'>;
  port?: NoYes | null;
  contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: NoYes | null;
  eslCompanyNameAppendix?: DeserializedType<T, 'Edm.String'> | null;
  countyOriginDestination?: DeserializedType<T, 'Edm.String'> | null;
  companyInfoLocationId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateEmptyWarning?: NoYes | null;
  intrastatAmountDecimals: DeserializedType<T, 'Edm.Int32'>;
  eslAmountRoundOffType?: RoundOffType | null;
}
