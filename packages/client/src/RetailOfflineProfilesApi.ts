/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailOfflineProfiles } from './RetailOfflineProfiles';
import { RetailOfflineProfilesRequestBuilder } from './RetailOfflineProfilesRequestBuilder';
import { RetailOfflineLimitCustomerEnum } from './RetailOfflineLimitCustomerEnum';
import { NoYes } from './NoYes';
import { RetailOfflineLimitProductEnum } from './RetailOfflineLimitProductEnum';
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
export class RetailOfflineProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailOfflineProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailOfflineProfilesApi<DeSerializersT> {
    return new RetailOfflineProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailOfflineProfiles;

  requestBuilder(): RetailOfflineProfilesRequestBuilder<DeSerializersT> {
    return new RetailOfflineProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailOfflineProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailOfflineProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailOfflineProfiles<DeSerializersT>,
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
    typeof RetailOfflineProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailOfflineProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHECK_NEW_DB_INTERVAL: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIMIT_AVAILABLE_CUSTOMERS: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      RetailOfflineLimitCustomerEnum,
      true,
      true
    >;
    PRODUCTS_BY_SPECIFIC_CATEGORY: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_BY_SALES_AMOUNT_DAY_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_BY_ADDRESS: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_BY_SALES_AMOUNT_NUM_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UPLOAD_TRANSACTION_SIZE: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETRY_COUNT_TO_OFFLINE: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_HEALTH_CHECK_INTERVAL: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIR_ADDRESS_BOOK_NAME: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONNECT_INTERVAL: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_SALES_QUANTITY_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_ADVANCED_OFFLINE_SWITCHING: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_BY_SALES_AMOUNT: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIMEOUT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_ASSORTMENT_TABLE_ASSORTMENT_ID: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTS_ARRIVAL_LIMIT_DAYS: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_BY_VISITS_DAY_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_BY_VISITS_NUM_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAUSE_OFFLINE_SYNC: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_BY_VISITS: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_ASSORTED_PRODUCTS: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      RetailOfflineLimitProductEnum,
      true,
      true
    >;
    DB_EXPORT_PATH: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMAGE_PATH: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SALES_AMOUNT_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTS_BY_SALES_QUANTITY: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTS_BY_SALES_AMOUNT: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTS_ARRIVAL_LIMIT: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_SALES_QUANTITY_LIMIT_DAYS: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_MANUAL_OFFLINE_BEFORE_SIGN_IN: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFLINE_SWITCH_API_PERFORMANCE_THRESHOLD: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTS_BY_RECENT_ARRIVAL: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROMPT_ON_SEAMLESS_OFFLINE: EnumField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SALES_AMOUNT_LIMIT_DAYS: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRX_UPLOAD_INTERVAL: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECONNECT_FROM_PERFORMANCE_INDUCED_OFFLINE_INTERVAL: OrderableEdmTypeField<
      RetailOfflineProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailOfflineProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link checkNewDbInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NEW_DB_INTERVAL: fieldBuilder.buildEdmTypeField(
          'CheckNewDBInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link limitAvailableCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_AVAILABLE_CUSTOMERS: fieldBuilder.buildEnumField(
          'LimitAvailableCustomers',
          RetailOfflineLimitCustomerEnum,
          true
        ),
        /**
         * Static representation of the {@link productsBySpecificCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_BY_SPECIFIC_CATEGORY: fieldBuilder.buildEnumField(
          'ProductsBySpecificCategory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerBySalesAmountDayLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_SALES_AMOUNT_DAY_LIMIT: fieldBuilder.buildEdmTypeField(
          'CustomerBySalesAmountDayLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerByAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_ADDRESS: fieldBuilder.buildEnumField(
          'CustomerByAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerBySalesAmountNumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_SALES_AMOUNT_NUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'CustomerBySalesAmountNumLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uploadTransactionSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPLOAD_TRANSACTION_SIZE: fieldBuilder.buildEdmTypeField(
          'UploadTransactionSize',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retryCountToOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETRY_COUNT_TO_OFFLINE: fieldBuilder.buildEdmTypeField(
          'RetryCountToOffline',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link systemHealthCheckInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_HEALTH_CHECK_INTERVAL: fieldBuilder.buildEdmTypeField(
          'SystemHealthCheckInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dirAddressBookName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIR_ADDRESS_BOOK_NAME: fieldBuilder.buildEdmTypeField(
          'DirAddressBook_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconnectInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONNECT_INTERVAL: fieldBuilder.buildEdmTypeField(
          'ReconnectInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productSalesQuantityLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_QUANTITY_LIMIT: fieldBuilder.buildEdmTypeField(
          'ProductSalesQuantityLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enableAdvancedOfflineSwitching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ADVANCED_OFFLINE_SWITCHING: fieldBuilder.buildEnumField(
          'EnableAdvancedOfflineSwitching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerBySalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_SALES_AMOUNT: fieldBuilder.buildEnumField(
          'CustomerBySalesAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMEOUT: fieldBuilder.buildEdmTypeField('Timeout', 'Edm.Int32', false),
        /**
         * Static representation of the {@link retailAssortmentTableAssortmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ASSORTMENT_TABLE_ASSORTMENT_ID: fieldBuilder.buildEdmTypeField(
          'RetailAssortmentTable_AssortmentID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productsArrivalLimitDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_ARRIVAL_LIMIT_DAYS: fieldBuilder.buildEdmTypeField(
          'ProductsArrivalLimitDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerByVisitsDayLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_VISITS_DAY_LIMIT: fieldBuilder.buildEdmTypeField(
          'CustomerByVisitsDayLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerByVisitsNumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_VISITS_NUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'CustomerByVisitsNumLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pauseOfflineSync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAUSE_OFFLINE_SYNC: fieldBuilder.buildEnumField(
          'PauseOfflineSync',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerByVisits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_BY_VISITS: fieldBuilder.buildEnumField(
          'CustomerByVisits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link limitAssortedProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_ASSORTED_PRODUCTS: fieldBuilder.buildEnumField(
          'LimitAssortedProducts',
          RetailOfflineLimitProductEnum,
          true
        ),
        /**
         * Static representation of the {@link dbExportPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DB_EXPORT_PATH: fieldBuilder.buildEdmTypeField(
          'DBExportPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link imagePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE_PATH: fieldBuilder.buildEdmTypeField(
          'ImagePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSalesAmountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'ProductSalesAmountLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productsBySalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_BY_SALES_QUANTITY: fieldBuilder.buildEnumField(
          'ProductsBySalesQuantity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productsBySalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_BY_SALES_AMOUNT: fieldBuilder.buildEnumField(
          'ProductsBySalesAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productsArrivalLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_ARRIVAL_LIMIT: fieldBuilder.buildEdmTypeField(
          'ProductsArrivalLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productSalesQuantityLimitDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_QUANTITY_LIMIT_DAYS: fieldBuilder.buildEdmTypeField(
          'ProductSalesQuantityLimitDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowManualOfflineBeforeSignIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MANUAL_OFFLINE_BEFORE_SIGN_IN: fieldBuilder.buildEnumField(
          'AllowManualOfflineBeforeSignIn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offlineSwitchApiPerformanceThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFLINE_SWITCH_API_PERFORMANCE_THRESHOLD:
          fieldBuilder.buildEdmTypeField(
            'OfflineSwitchApiPerformanceThreshold',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link productsByRecentArrival} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS_BY_RECENT_ARRIVAL: fieldBuilder.buildEnumField(
          'ProductsByRecentArrival',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link promptOnSeamlessOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT_ON_SEAMLESS_OFFLINE: fieldBuilder.buildEnumField(
          'PromptOnSeamlessOffline',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productSalesAmountLimitDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_AMOUNT_LIMIT_DAYS: fieldBuilder.buildEdmTypeField(
          'ProductSalesAmountLimitDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link trxUploadInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRX_UPLOAD_INTERVAL: fieldBuilder.buildEdmTypeField(
          'TrxUploadInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reconnectFromPerformanceInducedOfflineInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONNECT_FROM_PERFORMANCE_INDUCED_OFFLINE_INTERVAL:
          fieldBuilder.buildEdmTypeField(
            'ReconnectFromPerformanceInducedOfflineInterval',
            'Edm.Int32',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailOfflineProfiles)
      };
    }

    return this._schema;
  }
}
