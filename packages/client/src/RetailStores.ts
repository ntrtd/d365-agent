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
import type { RetailStoresApi } from './RetailStoresApi';
import { RetailBankDropCalculationBase } from './RetailBankDropCalculationBase';
import { NoYes } from './NoYes';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
import { RetailStartAmountCalculationBase } from './RetailStartAmountCalculationBase';
import { RetailItemIdOnReceiptBase } from './RetailItemIdOnReceiptBase';
import { Timezone } from './Timezone';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { RetailTenderDeclarationCalculationBase } from './RetailTenderDeclarationCalculationBase';
import {
  RetailChannelPriceGroups,
  RetailChannelPriceGroupsType
} from './RetailChannelPriceGroups';
import {
  RetailStoreHardwareStations,
  RetailStoreHardwareStationsType
} from './RetailStoreHardwareStations';
import {
  RetailStoreLocatorGroupOwners,
  RetailStoreLocatorGroupOwnersType
} from './RetailStoreLocatorGroupOwners';
import { RetailTerminals, RetailTerminalsType } from './RetailTerminals';
import {
  RetailStoreTenderTypes,
  RetailStoreTenderTypesType
} from './RetailStoreTenderTypes';
import { StoreShelves, StoreShelvesType } from './StoreShelves';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { Warehouses, WarehousesType } from './Warehouses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  RetailFunctionalityProfiles,
  RetailFunctionalityProfilesType
} from './RetailFunctionalityProfiles';
import {
  RetailTransactionServiceProfiles,
  RetailTransactionServiceProfilesType
} from './RetailTransactionServiceProfiles';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';
import {
  RetailEventNotificationProfiles,
  RetailEventNotificationProfilesType
} from './RetailEventNotificationProfiles';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';

/**
 * This class represents the entity "RetailStores" of service "d365_metadata".
 */
export class RetailStores<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailStoresType<T>
{
  /**
   * Technical entity name for RetailStores.
   */
  static override _entityName = 'RetailStores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStores entity.
   */
  static _keys = ['RetailChannelId'];
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
   * Sql Server Name.
   * @nullable
   */
  declare sqlServerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Drop Calculation.
   * @nullable
   */
  declare bankDropCalculation?: RetailBankDropCalculationBase | null;
  /**
   * Maximum Text Length On Receipt.
   */
  declare maximumTextLengthOnReceipt: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Customer Legal Entity.
   * @nullable
   */
  declare defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Tax Per Tax Component.
   * @nullable
   */
  declare displayTaxPerTaxComponent?: NoYes | null;
  /**
   * Warehouse Id For Customer Order.
   * @nullable
   */
  declare warehouseIdForCustomerOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Lookup.
   * @nullable
   */
  declare inventoryLookup?: NoYes | null;
  /**
   * Statement Method.
   * @nullable
   */
  declare statementMethod?: RetailStaffTerminalTotal | null;
  /**
   * Default Customer Account.
   * @nullable
   */
  declare defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Rounding Tax Amount.
   */
  declare maxRoundingTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Store Area.
   */
  declare storeArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Category Hierarchy Name.
   * @nullable
   */
  declare productCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Charge Prompt.
   * @nullable
   */
  declare serviceChargePrompt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generates Item Labels.
   * @nullable
   */
  declare generatesItemLabels?: NoYes | null;
  /**
   * One Statement Per Day.
   * @nullable
   */
  declare oneStatementPerDay?: NoYes | null;
  /**
   * Payment Method To Remove Or Add.
   * @nullable
   */
  declare paymentMethodToRemoveOrAdd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Live Database Connection Profile Name.
   * @nullable
   */
  declare liveDatabaseConnectionProfileName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Layout Id.
   * @nullable
   */
  declare layoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Store Number.
   * @nullable
   */
  declare electronicFundsTransferStoreNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statement Post As Business Day.
   * @nullable
   */
  declare statementPostAsBusinessDay?: NoYes | null;
  /**
   * Create Labels For Zero Price.
   * @nullable
   */
  declare createLabelsForZeroPrice?: NoYes | null;
  /**
   * Transaction Service Profile.
   * @nullable
   */
  declare transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
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
   * Use Default Customer Account.
   * @nullable
   */
  declare useDefaultCustomerAccount?: NoYes | null;
  /**
   * Number Of Top Or Bottom Lines.
   */
  declare numberOfTopOrBottomLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Amount Calculation.
   * @nullable
   */
  declare startAmountCalculation?: RetailStartAmountCalculationBase | null;
  /**
   * Warehouse Legal Entity.
   * @nullable
   */
  declare warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Of Business Day.
   */
  declare endOfBusinessDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rounding Tax Account.
   * @nullable
   */
  declare roundingTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Code.
   * @nullable
   */
  declare taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generates Shelf Labels.
   * @nullable
   */
  declare generatesShelfLabels?: NoYes | null;
  /**
   * Max Rounding Amount.
   */
  declare maxRoundingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Customer Based Tax.
   * @nullable
   */
  declare useCustomerBasedTax?: NoYes | null;
  /**
   * Service Charge Percentage.
   */
  declare serviceChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Price Includes Sales Tax.
   * @nullable
   */
  declare priceIncludesSalesTax?: NoYes | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method Name.
   * @nullable
   */
  declare paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functionality Profile.
   * @nullable
   */
  declare functionalityProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Open To.
   */
  declare openTo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Override Group Code.
   * @nullable
   */
  declare taxOverrideGroupCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Override Group Code Legal Entity.
   * @nullable
   */
  declare taxOverrideGroupCodeLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rounding Account Ledger Dimension Display Value.
   * @nullable
   */
  declare roundingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Identification Number.
   * @nullable
   */
  declare taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number On Receipt.
   * @nullable
   */
  declare productNumberOnReceipt?: RetailItemIdOnReceiptBase | null;
  /**
   * Channel Time Zone.
   * @nullable
   */
  declare channelTimeZone?: Timezone | null;
  /**
   * Purchase Order Item Filter.
   * @nullable
   */
  declare purchaseOrderItemFilter?: NoYes | null;
  /**
   * Closing Method.
   * @nullable
   */
  declare closingMethod?: RetailClosingMethodType | null;
  /**
   * Max Transaction Difference Amount.
   */
  declare maxTransactionDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hide Training Mode.
   * @nullable
   */
  declare hideTrainingMode?: NoYes | null;
  /**
   * Channel Profile Name.
   * @nullable
   */
  declare channelProfileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Culture Name.
   * @nullable
   */
  declare cultureName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Shift Difference Amount.
   */
  declare maxShiftDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Declaration Calculation.
   * @nullable
   */
  declare tenderDeclarationCalculation?: RetailTenderDeclarationCalculationBase | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Posting Difference.
   */
  declare maximumPostingDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Separate Statement Per Staff Terminal.
   * @nullable
   */
  declare separateStatementPerStaffTerminal?: NoYes | null;
  /**
   * Use Destination Based Tax.
   * @nullable
   */
  declare useDestinationBasedTax?: NoYes | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Open From.
   */
  declare openFrom: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link RetailChannelPriceGroups} entity.
   */
  declare retailChannelPriceGroup: RetailChannelPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreHardwareStations} entity.
   */
  declare retailStoreHardwareStation: RetailStoreHardwareStations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreLocatorGroupOwners} entity.
   */
  declare retailStoreLocatorGroupOwner: RetailStoreLocatorGroupOwners<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTerminals} entity.
   */
  declare retailTerminal: RetailTerminals<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypes} entity.
   */
  declare retailStoreTenderType: RetailStoreTenderTypes<T>[];
  /**
   * One-to-one navigation property to the {@link StoreShelves} entity.
   */
  declare storeShelf?: StoreShelves<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTillLayouts} entity.
   */
  declare retailTillLayout?: RetailTillLayouts<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailFunctionalityProfiles} entity.
   */
  declare retailFunctionalityProfile?: RetailFunctionalityProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionServiceProfiles} entity.
   */
  declare retailTransactionServiceProfile?: RetailTransactionServiceProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailEventNotificationProfiles} entity.
   */
  declare retailEventNotificationProfile?: RetailEventNotificationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm?: PaymentTerms<T> | null;

  constructor(_entityApi: RetailStoresApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  sqlServerName?: DeserializedType<T, 'Edm.String'> | null;
  bankDropCalculation?: RetailBankDropCalculationBase | null;
  maximumTextLengthOnReceipt: DeserializedType<T, 'Edm.Int32'>;
  defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  displayTaxPerTaxComponent?: NoYes | null;
  warehouseIdForCustomerOrder?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLookup?: NoYes | null;
  statementMethod?: RetailStaffTerminalTotal | null;
  defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  maxRoundingTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  storeArea: DeserializedType<T, 'Edm.Decimal'>;
  productCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  serviceChargePrompt?: DeserializedType<T, 'Edm.String'> | null;
  generatesItemLabels?: NoYes | null;
  oneStatementPerDay?: NoYes | null;
  paymentMethodToRemoveOrAdd?: DeserializedType<T, 'Edm.String'> | null;
  liveDatabaseConnectionProfileName?: DeserializedType<T, 'Edm.String'> | null;
  layoutId?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  statementPostAsBusinessDay?: NoYes | null;
  createLabelsForZeroPrice?: NoYes | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  databaseName?: DeserializedType<T, 'Edm.String'> | null;
  useCustomerBasedTaxExemption?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  useDefaultCustomerAccount?: NoYes | null;
  numberOfTopOrBottomLines: DeserializedType<T, 'Edm.Int32'>;
  startAmountCalculation?: RetailStartAmountCalculationBase | null;
  warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  endOfBusinessDay: DeserializedType<T, 'Edm.Int32'>;
  roundingTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  generatesShelfLabels?: NoYes | null;
  maxRoundingAmount: DeserializedType<T, 'Edm.Decimal'>;
  useCustomerBasedTax?: NoYes | null;
  serviceChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  offlineProfileName?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  priceIncludesSalesTax?: NoYes | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  functionalityProfile?: DeserializedType<T, 'Edm.String'> | null;
  openTo: DeserializedType<T, 'Edm.Int32'>;
  taxOverrideGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  channelTimeZoneInfoId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  taxOverrideGroupCodeLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  roundingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  productNumberOnReceipt?: RetailItemIdOnReceiptBase | null;
  channelTimeZone?: Timezone | null;
  purchaseOrderItemFilter?: NoYes | null;
  closingMethod?: RetailClosingMethodType | null;
  maxTransactionDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  hideTrainingMode?: NoYes | null;
  channelProfileName?: DeserializedType<T, 'Edm.String'> | null;
  cultureName?: DeserializedType<T, 'Edm.String'> | null;
  maxShiftDifferenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  tenderDeclarationCalculation?: RetailTenderDeclarationCalculationBase | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  maximumPostingDifference: DeserializedType<T, 'Edm.Decimal'>;
  separateStatementPerStaffTerminal?: NoYes | null;
  useDestinationBasedTax?: NoYes | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  openFrom: DeserializedType<T, 'Edm.Int32'>;
  retailChannelPriceGroup: RetailChannelPriceGroupsType<T>[];
  retailStoreHardwareStation: RetailStoreHardwareStationsType<T>[];
  retailStoreLocatorGroupOwner: RetailStoreLocatorGroupOwnersType<T>[];
  retailTerminal: RetailTerminalsType<T>[];
  retailStoreTenderType: RetailStoreTenderTypesType<T>[];
  storeShelf?: StoreShelvesType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  retailFunctionalityProfile?: RetailFunctionalityProfilesType<T> | null;
  retailTransactionServiceProfile?: RetailTransactionServiceProfilesType<T> | null;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
  retailEventNotificationProfile?: RetailEventNotificationProfilesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  operatingUnit?: OperatingUnitsType<T> | null;
  paymentTerm?: PaymentTermsType<T> | null;
}
