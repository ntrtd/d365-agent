/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSharedParameters } from './RetailSharedParameters';
import { RetailSharedParametersRequestBuilder } from './RetailSharedParametersRequestBuilder';
import { RetailLabelCreationBase } from './RetailLabelCreationBase';
import { NoYes } from './NoYes';
import { RetailProductAvailabilityJobControlModel } from './RetailProductAvailabilityJobControlModel';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailSharedParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailSharedParameters<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RetailSharedParametersApi<DeSerializersT> {
    return new RetailSharedParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSharedParameters;

  requestBuilder(): RetailSharedParametersRequestBuilder<DeSerializersT> {
    return new RetailSharedParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailSharedParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSharedParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSharedParameters<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailSharedParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSharedParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHELF_LABEL_CREATION: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      RetailLabelCreationBase,
      true,
      true
    >;
    DEPLOYMENT_ROOT_PATH: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_AVAILABILITY_SUM_DELTA_CACHE_PERIOD: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_LOYALTY_ADJUSTMENT_LIMIT_TO_MAX: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_CATEGORIES_WITH_NO_ASSORTED_PRODUCTS: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECO_LIST_BESTSELLING_TRANSACTIONS_INTERVAL_DAYS: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HARDWARE_STATION_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_STORE_COMMERCE_COPILOT: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEVICE_TOKEN_ALGORITHM: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECO_LIST_ENABLED: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATALOG_DEFAULT_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFT_PASSWORD_ENCRYPTION: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EARN_LOYALTY_OFFLINE: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLIENT_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECO_LIST_TRENDING_MAX_AGE_DAYS: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WINDOWS_PHONE_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TYPE_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECO_LIST_TRENDING_TRANSACTIONS_INTERVAL_DAYS: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STAFF_PASSWORD_HASH: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_SERVICE_PASSWORD_ENCRYPTION: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG_ATTRIBUTE_BULK_EDIT_MAX_ROWS: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_LABEL_CREATION: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      RetailLabelCreationBase,
      true,
      true
    >;
    IMAGES_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_AVAILABILITY_SUM_DELTA_CACHE_PERIOD_ECOMMERCE: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HTML_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_LOCAL_STORAGE_BACKUP: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_LOYALTY_POINTS_PER_SALES_LINE: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCAL_STORE_ID: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_DEFAULT_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DEFAULT_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECO_PERSONALIZATION_ENABLED: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BLOCK_TRANSFER_BETWEEN_DIFFERENT_LOYALTY: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_SERVER_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_VALIDATION_TEMPLATE: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_DEFAULT_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHAREPOINT_ASSET_PICKER_URL: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_AVAILABILITY_CACHE_PERIOD: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_SALES_RECEIPT_AS_DEFAULT_RECEIPT_TYPE_IN_JOURNAL: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOUD_POS_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_AVAILABILITY_JOB_POLICY: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      RetailProductAvailabilityJobControlModel,
      true,
      true
    >;
    WORKER_DEFAULT_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_ADVANCED_EXTERNAL_GIFT_CARD: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VIDEOS_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASYNC_CLIENT_APP_INSIGHTS_INSTRUMENTATION_KEY: OrderableEdmTypeField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_PRICE_CHANGE_TRACKING: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TERMINAL_ASSOCIATION_FROM_DEVICE: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_FISCAL_INTEGRATION: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_CUSTOMER_TO_REDEEM_LOYALTY: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_OMNI_CHANNEL_PAYMENTS: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_KIT_APPROVAL_BATCH_FEATURE: EnumField<
      RetailSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailSharedParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link shelfLabelCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LABEL_CREATION: fieldBuilder.buildEnumField(
          'ShelfLabelCreation',
          RetailLabelCreationBase,
          true
        ),
        /**
         * Static representation of the {@link deploymentRootPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPLOYMENT_ROOT_PATH: fieldBuilder.buildEdmTypeField(
          'DeploymentRootPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAvailabilitySumDeltaCachePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_AVAILABILITY_SUM_DELTA_CACHE_PERIOD:
          fieldBuilder.buildEdmTypeField(
            'InventoryAvailabilitySumDeltaCachePeriod',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link retailLoyaltyAdjustmentLimitToMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LOYALTY_ADJUSTMENT_LIMIT_TO_MAX: fieldBuilder.buildEnumField(
          'RetailLoyaltyAdjustmentLimitToMax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeCategoriesWithNoAssortedProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_CATEGORIES_WITH_NO_ASSORTED_PRODUCTS:
          fieldBuilder.buildEnumField(
            'ExcludeCategoriesWithNoAssortedProducts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link recoListBestsellingTransactionsIntervalDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECO_LIST_BESTSELLING_TRANSACTIONS_INTERVAL_DAYS:
          fieldBuilder.buildEdmTypeField(
            'RecoListBestsellingTransactionsIntervalDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link hardwareStationAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_APP_INSIGHTS_INSTRUMENTATION_KEY:
          fieldBuilder.buildEdmTypeField(
            'HardwareStationAppInsightsInstrumentationKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link enableStoreCommerceCopilot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_STORE_COMMERCE_COPILOT: fieldBuilder.buildEnumField(
          'EnableStoreCommerceCopilot',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deviceTokenAlgorithm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_TOKEN_ALGORITHM: fieldBuilder.buildEdmTypeField(
          'DeviceTokenAlgorithm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recoListEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECO_LIST_ENABLED: fieldBuilder.buildEnumField(
          'RecoListEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link catalogDefaultAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_DEFAULT_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CatalogDefaultAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eftPasswordEncryption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFT_PASSWORD_ENCRYPTION: fieldBuilder.buildEdmTypeField(
          'EFTPasswordEncryption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link earnLoyaltyOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARN_LOYALTY_OFFLINE: fieldBuilder.buildEnumField(
          'EarnLoyaltyOffline',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link clientAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_APP_INSIGHTS_INSTRUMENTATION_KEY: fieldBuilder.buildEdmTypeField(
          'ClientAppInsightsInstrumentationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionServiceProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_SERVICE_PROFILE: fieldBuilder.buildEdmTypeField(
          'TransactionServiceProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recoListTrendingMaxAgeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECO_LIST_TRENDING_MAX_AGE_DAYS: fieldBuilder.buildEdmTypeField(
          'RecoListTrendingMaxAgeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link windowsPhoneAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WINDOWS_PHONE_APP_INSIGHTS_INSTRUMENTATION_KEY:
          fieldBuilder.buildEdmTypeField(
            'WindowsPhoneAppInsightsInstrumentationKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link exchangeRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recoListTrendingTransactionsIntervalDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECO_LIST_TRENDING_TRANSACTIONS_INTERVAL_DAYS:
          fieldBuilder.buildEdmTypeField(
            'RecoListTrendingTransactionsIntervalDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link staffPasswordHash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_PASSWORD_HASH: fieldBuilder.buildEdmTypeField(
          'StaffPasswordHash',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionServicePasswordEncryption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_SERVICE_PASSWORD_ENCRYPTION: fieldBuilder.buildEdmTypeField(
          'TransactionServicePasswordEncryption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catalogAttributeBulkEditMaxRows} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_ATTRIBUTE_BULK_EDIT_MAX_ROWS: fieldBuilder.buildEdmTypeField(
          'CatalogAttributeBulkEditMaxRows',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemLabelCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LABEL_CREATION: fieldBuilder.buildEnumField(
          'ItemLabelCreation',
          RetailLabelCreationBase,
          true
        ),
        /**
         * Static representation of the {@link imagesAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGES_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ImagesAttributeTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAvailabilitySumDeltaCachePeriodEcommerce} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_AVAILABILITY_SUM_DELTA_CACHE_PERIOD_ECOMMERCE:
          fieldBuilder.buildEdmTypeField(
            'InventoryAvailabilitySumDeltaCachePeriodEcommerce',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link htmlAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HTML_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'HtmlAttributeTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableLocalStorageBackup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LOCAL_STORAGE_BACKUP: fieldBuilder.buildEnumField(
          'EnableLocalStorageBackup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postLoyaltyPointsPerSalesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_LOYALTY_POINTS_PER_SALES_LINE: fieldBuilder.buildEnumField(
          'PostLoyaltyPointsPerSalesLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link localStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_STORE_ID: fieldBuilder.buildEdmTypeField(
          'LocalStoreId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryDefaultAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_DEFAULT_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryDefaultAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDefaultAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DEFAULT_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDefaultAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recoPersonalizationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECO_PERSONALIZATION_ENABLED: fieldBuilder.buildEnumField(
          'RecoPersonalizationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link blockTransferBetweenDifferentLoyalty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_TRANSFER_BETWEEN_DIFFERENT_LOYALTY: fieldBuilder.buildEnumField(
          'BlockTransferBetweenDifferentLoyalty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailServerAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SERVER_APP_INSIGHTS_INSTRUMENTATION_KEY:
          fieldBuilder.buildEdmTypeField(
            'RetailServerAppInsightsInstrumentationKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link entityValidationTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_VALIDATION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'EntityValidationTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerDefaultAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DEFAULT_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerDefaultAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sharepointAssetPickerUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHAREPOINT_ASSET_PICKER_URL: fieldBuilder.buildEdmTypeField(
          'SharepointAssetPickerUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAvailabilityCachePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_AVAILABILITY_CACHE_PERIOD: fieldBuilder.buildEdmTypeField(
          'InventoryAvailabilityCachePeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useSalesReceiptAsDefaultReceiptTypeInJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SALES_RECEIPT_AS_DEFAULT_RECEIPT_TYPE_IN_JOURNAL:
          fieldBuilder.buildEnumField(
            'UseSalesReceiptAsDefaultReceiptTypeInJournal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link cloudPosAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOUD_POS_APP_INSIGHTS_INSTRUMENTATION_KEY:
          fieldBuilder.buildEdmTypeField(
            'CloudPosAppInsightsInstrumentationKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productAvailabilityJobPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_AVAILABILITY_JOB_POLICY: fieldBuilder.buildEnumField(
          'ProductAvailabilityJobPolicy',
          RetailProductAvailabilityJobControlModel,
          true
        ),
        /**
         * Static representation of the {@link workerDefaultAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_DEFAULT_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerDefaultAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableAdvancedExternalGiftCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ADVANCED_EXTERNAL_GIFT_CARD: fieldBuilder.buildEnumField(
          'EnableAdvancedExternalGiftCard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link videosAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIDEOS_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'VideosAttributeTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link asyncClientAppInsightsInstrumentationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASYNC_CLIENT_APP_INSIGHTS_INSTRUMENTATION_KEY:
          fieldBuilder.buildEdmTypeField(
            'AsyncClientAppInsightsInstrumentationKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link enablePriceChangeTracking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_PRICE_CHANGE_TRACKING: fieldBuilder.buildEnumField(
          'EnablePriceChangeTracking',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTerminalAssociationFromDevice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TERMINAL_ASSOCIATION_FROM_DEVICE: fieldBuilder.buildEnumField(
          'AllowTerminalAssociationFromDevice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableFiscalIntegration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_FISCAL_INTEGRATION: fieldBuilder.buildEnumField(
          'EnableFiscalIntegration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateCustomerToRedeemLoyalty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_CUSTOMER_TO_REDEEM_LOYALTY: fieldBuilder.buildEnumField(
          'ValidateCustomerToRedeemLoyalty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableOmniChannelPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_OMNI_CHANNEL_PAYMENTS: fieldBuilder.buildEnumField(
          'EnableOmniChannelPayments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableKitApprovalBatchFeature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_KIT_APPROVAL_BATCH_FEATURE: fieldBuilder.buildEnumField(
          'EnableKitApprovalBatchFeature',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSharedParameters)
      };
    }

    return this._schema;
  }
}
