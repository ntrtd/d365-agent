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
import type { RetailSharedParametersApi } from './RetailSharedParametersApi';
import { RetailLabelCreationBase } from './RetailLabelCreationBase';
import { NoYes } from './NoYes';
import { RetailProductAvailabilityJobControlModel } from './RetailProductAvailabilityJobControlModel';

/**
 * This class represents the entity "RetailSharedParameters" of service "d365_metadata".
 */
export class RetailSharedParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSharedParametersType<T>
{
  /**
   * Technical entity name for RetailSharedParameters.
   */
  static override _entityName = 'RetailSharedParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSharedParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Shelf Label Creation.
   * @nullable
   */
  declare shelfLabelCreation?: RetailLabelCreationBase | null;
  /**
   * Deployment Root Path.
   * @nullable
   */
  declare deploymentRootPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Availability Sum Delta Cache Period.
   */
  declare inventoryAvailabilitySumDeltaCachePeriod: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Retail Loyalty Adjustment Limit To Max.
   * @nullable
   */
  declare retailLoyaltyAdjustmentLimitToMax?: NoYes | null;
  /**
   * Exclude Categories With No Assorted Products.
   * @nullable
   */
  declare excludeCategoriesWithNoAssortedProducts?: NoYes | null;
  /**
   * Reco List Bestselling Transactions Interval Days.
   */
  declare recoListBestsellingTransactionsIntervalDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Hardware Station App Insights Instrumentation Key.
   * @nullable
   */
  declare hardwareStationAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Store Commerce Copilot.
   * @nullable
   */
  declare enableStoreCommerceCopilot?: NoYes | null;
  /**
   * Device Token Algorithm.
   * @nullable
   */
  declare deviceTokenAlgorithm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reco List Enabled.
   * @nullable
   */
  declare recoListEnabled?: NoYes | null;
  /**
   * Catalog Default Attribute Group Name.
   * @nullable
   */
  declare catalogDefaultAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Eft Password Encryption.
   * @nullable
   */
  declare eftPasswordEncryption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Earn Loyalty Offline.
   * @nullable
   */
  declare earnLoyaltyOffline?: NoYes | null;
  /**
   * Client App Insights Instrumentation Key.
   * @nullable
   */
  declare clientAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Service Profile.
   * @nullable
   */
  declare transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reco List Trending Max Age Days.
   */
  declare recoListTrendingMaxAgeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Windows Phone App Insights Instrumentation Key.
   * @nullable
   */
  declare windowsPhoneAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exchange Rate Type Name.
   * @nullable
   */
  declare exchangeRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reco List Trending Transactions Interval Days.
   */
  declare recoListTrendingTransactionsIntervalDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Staff Password Hash.
   * @nullable
   */
  declare staffPasswordHash?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Service Password Encryption.
   * @nullable
   */
  declare transactionServicePasswordEncryption?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Catalog Attribute Bulk Edit Max Rows.
   */
  declare catalogAttributeBulkEditMaxRows: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Label Creation.
   * @nullable
   */
  declare itemLabelCreation?: RetailLabelCreationBase | null;
  /**
   * Images Attribute Type Name.
   * @nullable
   */
  declare imagesAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Availability Sum Delta Cache Period Ecommerce.
   */
  declare inventoryAvailabilitySumDeltaCachePeriodEcommerce: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Html Attribute Type Name.
   * @nullable
   */
  declare htmlAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Local Storage Backup.
   * @nullable
   */
  declare enableLocalStorageBackup?: NoYes | null;
  /**
   * Post Loyalty Points Per Sales Line.
   * @nullable
   */
  declare postLoyaltyPointsPerSalesLine?: NoYes | null;
  /**
   * Local Store Id.
   * @nullable
   */
  declare localStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Default Attribute Group Name.
   * @nullable
   */
  declare categoryDefaultAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Default Attribute Group Name.
   * @nullable
   */
  declare productDefaultAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reco Personalization Enabled.
   * @nullable
   */
  declare recoPersonalizationEnabled?: NoYes | null;
  /**
   * Block Transfer Between Different Loyalty.
   * @nullable
   */
  declare blockTransferBetweenDifferentLoyalty?: NoYes | null;
  /**
   * Retail Server App Insights Instrumentation Key.
   * @nullable
   */
  declare retailServerAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Entity Validation Template.
   * @nullable
   */
  declare entityValidationTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Default Attribute Group Name.
   * @nullable
   */
  declare customerDefaultAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sharepoint Asset Picker Url.
   * @nullable
   */
  declare sharepointAssetPickerUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Availability Cache Period.
   */
  declare inventoryAvailabilityCachePeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Sales Receipt As Default Receipt Type In Journal.
   * @nullable
   */
  declare useSalesReceiptAsDefaultReceiptTypeInJournal?: NoYes | null;
  /**
   * Cloud Pos App Insights Instrumentation Key.
   * @nullable
   */
  declare cloudPosAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Availability Job Policy.
   * @nullable
   */
  declare productAvailabilityJobPolicy?: RetailProductAvailabilityJobControlModel | null;
  /**
   * Worker Default Attribute Group Name.
   * @nullable
   */
  declare workerDefaultAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Advanced External Gift Card.
   * @nullable
   */
  declare enableAdvancedExternalGiftCard?: NoYes | null;
  /**
   * Videos Attribute Type Name.
   * @nullable
   */
  declare videosAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Async Client App Insights Instrumentation Key.
   * @nullable
   */
  declare asyncClientAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Price Change Tracking.
   * @nullable
   */
  declare enablePriceChangeTracking?: NoYes | null;
  /**
   * Allow Terminal Association From Device.
   * @nullable
   */
  declare allowTerminalAssociationFromDevice?: NoYes | null;
  /**
   * Enable Fiscal Integration.
   * @nullable
   */
  declare enableFiscalIntegration?: NoYes | null;
  /**
   * Validate Customer To Redeem Loyalty.
   * @nullable
   */
  declare validateCustomerToRedeemLoyalty?: NoYes | null;
  /**
   * Enable Omni Channel Payments.
   * @nullable
   */
  declare enableOmniChannelPayments?: NoYes | null;
  /**
   * Enable Kit Approval Batch Feature.
   * @nullable
   */
  declare enableKitApprovalBatchFeature?: NoYes | null;

  constructor(_entityApi: RetailSharedParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSharedParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  shelfLabelCreation?: RetailLabelCreationBase | null;
  deploymentRootPath?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAvailabilitySumDeltaCachePeriod: DeserializedType<T, 'Edm.Int32'>;
  retailLoyaltyAdjustmentLimitToMax?: NoYes | null;
  excludeCategoriesWithNoAssortedProducts?: NoYes | null;
  recoListBestsellingTransactionsIntervalDays: DeserializedType<T, 'Edm.Int32'>;
  hardwareStationAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  enableStoreCommerceCopilot?: NoYes | null;
  deviceTokenAlgorithm?: DeserializedType<T, 'Edm.String'> | null;
  recoListEnabled?: NoYes | null;
  catalogDefaultAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  eftPasswordEncryption?: DeserializedType<T, 'Edm.String'> | null;
  earnLoyaltyOffline?: NoYes | null;
  clientAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  recoListTrendingMaxAgeDays: DeserializedType<T, 'Edm.Int32'>;
  windowsPhoneAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  exchangeRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  recoListTrendingTransactionsIntervalDays: DeserializedType<T, 'Edm.Int32'>;
  staffPasswordHash?: DeserializedType<T, 'Edm.String'> | null;
  transactionServicePasswordEncryption?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  catalogAttributeBulkEditMaxRows: DeserializedType<T, 'Edm.Int32'>;
  itemLabelCreation?: RetailLabelCreationBase | null;
  imagesAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAvailabilitySumDeltaCachePeriodEcommerce: DeserializedType<
    T,
    'Edm.Int32'
  >;
  htmlAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  enableLocalStorageBackup?: NoYes | null;
  postLoyaltyPointsPerSalesLine?: NoYes | null;
  localStoreId?: DeserializedType<T, 'Edm.String'> | null;
  categoryDefaultAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productDefaultAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  recoPersonalizationEnabled?: NoYes | null;
  blockTransferBetweenDifferentLoyalty?: NoYes | null;
  retailServerAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  entityValidationTemplate?: DeserializedType<T, 'Edm.String'> | null;
  customerDefaultAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  sharepointAssetPickerUrl?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAvailabilityCachePeriod: DeserializedType<T, 'Edm.Int32'>;
  useSalesReceiptAsDefaultReceiptTypeInJournal?: NoYes | null;
  cloudPosAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productAvailabilityJobPolicy?: RetailProductAvailabilityJobControlModel | null;
  workerDefaultAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  enableAdvancedExternalGiftCard?: NoYes | null;
  videosAttributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
  asyncClientAppInsightsInstrumentationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  enablePriceChangeTracking?: NoYes | null;
  allowTerminalAssociationFromDevice?: NoYes | null;
  enableFiscalIntegration?: NoYes | null;
  validateCustomerToRedeemLoyalty?: NoYes | null;
  enableOmniChannelPayments?: NoYes | null;
  enableKitApprovalBatchFeature?: NoYes | null;
}
