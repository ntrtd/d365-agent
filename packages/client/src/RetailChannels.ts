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
import type { RetailChannelsApi } from './RetailChannelsApi';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { NoYes } from './NoYes';
import { RetailTenderDeclarationCalculationBase } from './RetailTenderDeclarationCalculationBase';
import { RetailItemIdOnReceiptBase } from './RetailItemIdOnReceiptBase';
import { RetailChannelType } from './RetailChannelType';
import { Timezone } from './Timezone';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
import {
  RetailChannelPriceGroups,
  RetailChannelPriceGroupsType
} from './RetailChannelPriceGroups';
import {
  RetailReplenishmentRuleLines,
  RetailReplenishmentRuleLinesType
} from './RetailReplenishmentRuleLines';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  RetailTenderTypeCards,
  RetailTenderTypeCardsType
} from './RetailTenderTypeCards';
import {
  ChannelCategoryAttributes,
  ChannelCategoryAttributesType
} from './ChannelCategoryAttributes';
import {
  ReplenishmentRuleLinesV2,
  ReplenishmentRuleLinesV2Type
} from './ReplenishmentRuleLinesV2';
import {
  RetailStoreAddressBooks,
  RetailStoreAddressBooksType
} from './RetailStoreAddressBooks';

/**
 * This class represents the entity "RetailChannels" of service "d365_metadata".
 */
export class RetailChannels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailChannelsType<T>
{
  /**
   * Technical entity name for RetailChannels.
   */
  static override _entityName = 'RetailChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannels entity.
   */
  static _keys = ['dataAreaId', 'RetailChannelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Shift Difference Amount.
   */
  declare maxShiftDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sql Server Name.
   * @nullable
   */
  declare sqlServerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Online Catalog Name.
   * @nullable
   */
  declare onlineCatalogName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Transaction Difference Amount.
   */
  declare maxTransactionDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Customer Legal Entity.
   * @nullable
   */
  declare defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Method.
   * @nullable
   */
  declare closingMethod?: RetailClosingMethodType | null;
  /**
   * Tax Override Group.
   */
  declare taxOverrideGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Display Tax Per Tax Component.
   * @nullable
   */
  declare displayTaxPerTaxComponent?: NoYes | null;
  /**
   * Service Charge Pct.
   */
  declare serviceChargePct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Stmt Per Staff Terminal.
   * @nullable
   */
  declare separateStmtPerStaffTerminal?: NoYes | null;
  /**
   * Default Customer Account.
   * @nullable
   */
  declare defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Enable Order Price Control.
   * @nullable
   */
  declare mcrEnableOrderPriceControl?: NoYes | null;
  /**
   * Store Area.
   */
  declare storeArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Culture Name.
   * @nullable
   */
  declare cultureName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Live Database Connection Profile Name.
   * @nullable
   */
  declare liveDatabaseConnectionProfileName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invent Location Id For Customer Order.
   * @nullable
   */
  declare inventLocationIdForCustomerOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Stmt Post As Business Day.
   * @nullable
   */
  declare stmtPostAsBusinessDay?: NoYes | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Service Profile.
   * @nullable
   */
  declare transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Labels For Zero Price.
   * @nullable
   */
  declare createLabelsForZeroPrice?: NoYes | null;
  /**
   * Database Name.
   * @nullable
   */
  declare databaseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Customer Based Tax Exemption.
   * @nullable
   */
  declare useCustomerBasedTaxExemption?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Event Notification Profile Id.
   * @nullable
   */
  declare eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Return Policy Channel.
   */
  declare retailReturnPolicyChannel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Return Tax Group W.
   * @nullable
   */
  declare returnTaxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Charge Prompt.
   * @nullable
   */
  declare serviceChargePrompt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Code.
   * @nullable
   */
  declare taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Declaration Calculation.
   * @nullable
   */
  declare tenderDeclarationCalculation?: RetailTenderDeclarationCalculationBase | null;
  /**
   * Use Customer Based Tax.
   * @nullable
   */
  declare useCustomerBasedTax?: NoYes | null;
  /**
   * Mcr Enable Directed Selling.
   * @nullable
   */
  declare mcrEnableDirectedSelling?: NoYes | null;
  /**
   * Remove Add Tender.
   * @nullable
   */
  declare removeAddTender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offline Profile Name.
   * @nullable
   */
  declare offlineProfileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id On Receipt.
   * @nullable
   */
  declare itemIdOnReceipt?: RetailItemIdOnReceiptBase | null;
  /**
   * Price Includes Sales Tax.
   * @nullable
   */
  declare priceIncludesSalesTax?: NoYes | null;
  /**
   * Use Default Cust Account.
   * @nullable
   */
  declare useDefaultCustAccount?: NoYes | null;
  /**
   * Po Item Filter.
   * @nullable
   */
  declare poItemFilter?: NoYes | null;
  /**
   * Manual Accept.
   * @nullable
   */
  declare manualAccept?: NoYes | null;
  /**
   * Retail Req Plan Id Sched.
   * @nullable
   */
  declare retailReqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Price Override Retail Infocode Id.
   * @nullable
   */
  declare mcrPriceOverrideRetailInfocodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Open From.
   */
  declare openFrom: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Override Group Code.
   * @nullable
   */
  declare taxOverrideGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Reason Code Retail Infocode Id.
   * @nullable
   */
  declare mcrReasonCodeRetailInfocodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Time Zone Info Id.
   * @nullable
   */
  declare channelTimeZoneInfoId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Legal Entity.
   * @nullable
   */
  declare taxGroupLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Data Area Id.
   * @nullable
   */
  declare inventLocationDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Account Ledger Dimension Display Value.
   * @nullable
   */
  declare roundingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Channel Type.
   * @nullable
   */
  declare channelType?: RetailChannelType | null;
  /**
   * Hide Training Mode.
   * @nullable
   */
  declare hideTrainingMode?: NoYes | null;
  /**
   * Tax Identification Number.
   * @nullable
   */
  declare taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stmt Calc Batch End Time.
   */
  declare stmtCalcBatchEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Channel Time Zone.
   * @nullable
   */
  declare channelTimeZone?: Timezone | null;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Rounding Tax Amount.
   */
  declare maxRoundingTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Text Length On Receipt.
   */
  declare maximumTextLengthOnReceipt: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rounding Tax Account.
   * @nullable
   */
  declare roundingTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Enable Order Completion.
   * @nullable
   */
  declare mcrEnableOrderCompletion?: NoYes | null;
  /**
   * Calc Exempt Taxes For Price Inclusive.
   * @nullable
   */
  declare calcExemptTaxesForPriceInclusive?: NoYes | null;
  /**
   * Channel Profile Name.
   * @nullable
   */
  declare channelProfileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One Statement Per Day.
   * @nullable
   */
  declare oneStatementPerDay?: NoYes | null;
  /**
   * Invent Location.
   * @nullable
   */
  declare inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generates Item Labels.
   * @nullable
   */
  declare generatesItemLabels?: NoYes | null;
  /**
   * Mcr Customer Credit Retail Infocode Id.
   * @nullable
   */
  declare mcrCustomerCreditRetailInfocodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Functionality Profile.
   * @nullable
   */
  declare functionalityProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eft Store Number.
   * @nullable
   */
  declare eftStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Method.
   * @nullable
   */
  declare statementMethod?: RetailStaffTerminalTotal | null;
  /**
   * Open To.
   */
  declare openTo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Posting Difference.
   */
  declare maximumPostingDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Lookup.
   * @nullable
   */
  declare inventoryLookup?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generates Shelf Labels.
   * @nullable
   */
  declare generatesShelfLabels?: NoYes | null;
  /**
   * Number Of Top Or Bottom Lines.
   */
  declare numberOfTopOrBottomLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Destination Based Tax.
   * @nullable
   */
  declare useDestinationBasedTax?: NoYes | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Rounding Amount.
   */
  declare maxRoundingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailChannelPriceGroups} entity.
   */
  declare retailChannelPriceGroup: RetailChannelPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailReplenishmentRuleLines} entity.
   */
  declare retailReplenishmentRuleLine: RetailReplenishmentRuleLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTenderTypeCards} entity.
   */
  declare retailTenderTypeCard?: RetailTenderTypeCards<T> | null;
  /**
   * One-to-many navigation property to the {@link ChannelCategoryAttributes} entity.
   */
  declare channelCategoryAttribute: ChannelCategoryAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link ReplenishmentRuleLinesV2} entity.
   */
  declare replenishmentRuleLinesV2: ReplenishmentRuleLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreAddressBooks} entity.
   */
  declare retailStoreAddressBook: RetailStoreAddressBooks<T>[];

  constructor(_entityApi: RetailChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  maxShiftDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  sqlServerName?: DeserializedType<T, 'Edm.String'> | null;
  onlineCatalogName?: DeserializedType<T, 'Edm.String'> | null;
  maxTransactionDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  closingMethod?: RetailClosingMethodType | null;
  taxOverrideGroup: DeserializedType<T, 'Edm.Int64'>;
  displayTaxPerTaxComponent?: NoYes | null;
  serviceChargePct: DeserializedType<T, 'Edm.Decimal'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  separateStmtPerStaffTerminal?: NoYes | null;
  defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  mcrEnableOrderPriceControl?: NoYes | null;
  storeArea: DeserializedType<T, 'Edm.Decimal'>;
  cultureName?: DeserializedType<T, 'Edm.String'> | null;
  liveDatabaseConnectionProfileName?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationIdForCustomerOrder?: DeserializedType<T, 'Edm.String'> | null;
  stmtPostAsBusinessDay?: NoYes | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  createLabelsForZeroPrice?: NoYes | null;
  databaseName?: DeserializedType<T, 'Edm.String'> | null;
  useCustomerBasedTaxExemption?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  retailReturnPolicyChannel: DeserializedType<T, 'Edm.Int64'>;
  returnTaxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  serviceChargePrompt?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tenderDeclarationCalculation?: RetailTenderDeclarationCalculationBase | null;
  useCustomerBasedTax?: NoYes | null;
  mcrEnableDirectedSelling?: NoYes | null;
  removeAddTender?: DeserializedType<T, 'Edm.String'> | null;
  offlineProfileName?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemIdOnReceipt?: RetailItemIdOnReceiptBase | null;
  priceIncludesSalesTax?: NoYes | null;
  useDefaultCustAccount?: NoYes | null;
  poItemFilter?: NoYes | null;
  manualAccept?: NoYes | null;
  retailReqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  mcrPriceOverrideRetailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  openFrom: DeserializedType<T, 'Edm.Int32'>;
  taxOverrideGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  mcrReasonCodeRetailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  channelTimeZoneInfoId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  roundingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  channelType?: RetailChannelType | null;
  hideTrainingMode?: NoYes | null;
  taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  stmtCalcBatchEndTime: DeserializedType<T, 'Edm.Int32'>;
  channelTimeZone?: Timezone | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  maxRoundingTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  maximumTextLengthOnReceipt: DeserializedType<T, 'Edm.Int32'>;
  roundingTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  mcrEnableOrderCompletion?: NoYes | null;
  calcExemptTaxesForPriceInclusive?: NoYes | null;
  channelProfileName?: DeserializedType<T, 'Edm.String'> | null;
  oneStatementPerDay?: NoYes | null;
  inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  generatesItemLabels?: NoYes | null;
  mcrCustomerCreditRetailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  functionalityProfile?: DeserializedType<T, 'Edm.String'> | null;
  eftStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  statementMethod?: RetailStaffTerminalTotal | null;
  openTo: DeserializedType<T, 'Edm.Int32'>;
  maximumPostingDifference: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLookup?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  generatesShelfLabels?: NoYes | null;
  numberOfTopOrBottomLines: DeserializedType<T, 'Edm.Int32'>;
  useDestinationBasedTax?: NoYes | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  maxRoundingAmount: DeserializedType<T, 'Edm.Decimal'>;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelPriceGroup: RetailChannelPriceGroupsType<T>[];
  retailReplenishmentRuleLine: RetailReplenishmentRuleLinesType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
  retailTenderTypeCard?: RetailTenderTypeCardsType<T> | null;
  channelCategoryAttribute: ChannelCategoryAttributesType<T>[];
  replenishmentRuleLinesV2: ReplenishmentRuleLinesV2Type<T>[];
  retailStoreAddressBook: RetailStoreAddressBooksType<T>[];
}
