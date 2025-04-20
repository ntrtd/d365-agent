/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStores } from './RetailStores';
import { RetailStoresRequestBuilder } from './RetailStoresRequestBuilder';
import { RetailChannelPriceGroupsApi } from './RetailChannelPriceGroupsApi';
import { RetailStoreHardwareStationsApi } from './RetailStoreHardwareStationsApi';
import { RetailStoreLocatorGroupOwnersApi } from './RetailStoreLocatorGroupOwnersApi';
import { RetailTerminalsApi } from './RetailTerminalsApi';
import { RetailStoreTenderTypesApi } from './RetailStoreTenderTypesApi';
import { StoreShelvesApi } from './StoreShelvesApi';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { WarehousesApi } from './WarehousesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailFunctionalityProfilesApi } from './RetailFunctionalityProfilesApi';
import { RetailTransactionServiceProfilesApi } from './RetailTransactionServiceProfilesApi';
import { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
import { RetailEventNotificationProfilesApi } from './RetailEventNotificationProfilesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { RetailBankDropCalculationBase } from './RetailBankDropCalculationBase';
import { NoYes } from './NoYes';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
import { RetailStartAmountCalculationBase } from './RetailStartAmountCalculationBase';
import { RetailItemIdOnReceiptBase } from './RetailItemIdOnReceiptBase';
import { Timezone } from './Timezone';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { RetailTenderDeclarationCalculationBase } from './RetailTenderDeclarationCalculationBase';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailStoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStores<DeSerializersT>, DeSerializersT>
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
  ): RetailStoresApi<DeSerializersT> {
    return new RetailStoresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_HARDWARE_STATION: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreHardwareStationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreLocatorGroupOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_LOCATOR_GROUP_OWNER: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storeShelf} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORE_SHELF: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      StoreShelvesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailFunctionalityProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_FUNCTIONALITY_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailFunctionalityProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelPriceGroupsApi<DeSerializersT>,
      RetailStoreHardwareStationsApi<DeSerializersT>,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>,
      RetailTerminalsApi<DeSerializersT>,
      RetailStoreTenderTypesApi<DeSerializersT>,
      StoreShelvesApi<DeSerializersT>,
      RetailTillLayoutsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      RetailFunctionalityProfilesApi<DeSerializersT>,
      RetailTransactionServiceProfilesApi<DeSerializersT>,
      ProductCategoryHierarchiesApi<DeSerializersT>,
      RetailEventNotificationProfilesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL_PRICE_GROUP: new OneToManyLink(
        'RetailChannelPriceGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_STORE_HARDWARE_STATION: new OneToManyLink(
        'RetailStoreHardwareStation',
        this,
        linkedApis[1]
      ),
      RETAIL_STORE_LOCATOR_GROUP_OWNER: new OneToManyLink(
        'RetailStoreLocatorGroupOwner',
        this,
        linkedApis[2]
      ),
      RETAIL_TERMINAL: new OneToManyLink('RetailTerminal', this, linkedApis[3]),
      RETAIL_STORE_TENDER_TYPE: new OneToManyLink(
        'RetailStoreTenderType',
        this,
        linkedApis[4]
      ),
      STORE_SHELF: new OneToOneLink('StoreShelf', this, linkedApis[5]),
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[6]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[7]
      ),
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[8]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[9]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[10]),
      RETAIL_FUNCTIONALITY_PROFILE: new OneToOneLink(
        'RetailFunctionalityProfile',
        this,
        linkedApis[11]
      ),
      RETAIL_TRANSACTION_SERVICE_PROFILE: new OneToOneLink(
        'RetailTransactionServiceProfile',
        this,
        linkedApis[12]
      ),
      PRODUCT_CATEGORY_HIERARCHY: new OneToOneLink(
        'ProductCategoryHierarchy',
        this,
        linkedApis[13]
      ),
      RETAIL_EVENT_NOTIFICATION_PROFILE: new OneToOneLink(
        'RetailEventNotificationProfile',
        this,
        linkedApis[14]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[15]),
      OPERATING_UNIT: new OneToOneLink('OperatingUnit', this, linkedApis[16]),
      PAYMENT_TERM: new OneToOneLink('PaymentTerm', this, linkedApis[17])
    };
    return this;
  }

  entityConstructor = RetailStores;

  requestBuilder(): RetailStoresRequestBuilder<DeSerializersT> {
    return new RetailStoresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailStores<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailStores<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailStores, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailStores, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SQL_SERVER_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DROP_CALCULATION: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailBankDropCalculationBase,
      true,
      true
    >;
    MAXIMUM_TEXT_LENGTH_ON_RECEIPT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_CUSTOMER_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_TAX_PER_TAX_COMPONENT: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_ID_FOR_CUSTOMER_ORDER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_LOOKUP: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_METHOD: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailStaffTerminalTotal,
      true,
      true
    >;
    DEFAULT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_ROUNDING_TAX_AMOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORE_AREA: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CHARGE_PROMPT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATES_ITEM_LABELS: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ONE_STATEMENT_PER_DAY: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD_TO_REMOVE_OR_ADD: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIVE_DATABASE_CONNECTION_PROFILE_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_ID: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_STORE_NUMBER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_POST_AS_BUSINESS_DAY: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_LABELS_FOR_ZERO_PRICE: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATABASE_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CUSTOMER_BASED_TAX_EXEMPTION: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_NOTIFICATION_PROFILE_ID: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_DEFAULT_CUSTOMER_ACCOUNT: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_TOP_OR_BOTTOM_LINES: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_AMOUNT_CALCULATION: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailStartAmountCalculationBase,
      true,
      true
    >;
    WAREHOUSE_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_OF_BUSINESS_DAY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROUNDING_TAX_ACCOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP_CODE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATES_SHELF_LABELS: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_ROUNDING_AMOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_CUSTOMER_BASED_TAX: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFLINE_PROFILE_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_INCLUDES_SALES_TAX: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONALITY_PROFILE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPEN_TO: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_OVERRIDE_GROUP_CODE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_TIME_ZONE_INFO_ID: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OVERRIDE_GROUP_CODE_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER_ON_RECEIPT: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailItemIdOnReceiptBase,
      true,
      true
    >;
    CHANNEL_TIME_ZONE: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PURCHASE_ORDER_ITEM_FILTER: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSING_METHOD: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailClosingMethodType,
      true,
      true
    >;
    MAX_TRANSACTION_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HIDE_TRAINING_MODE: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANNEL_PROFILE_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CULTURE_NAME: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_SHIFT_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENDER_DECLARATION_CALCULATION: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      RetailTenderDeclarationCalculationBase,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_POSTING_DIFFERENCE: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEPARATE_STATEMENT_PER_STAFF_TERMINAL: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DESTINATION_BASED_TAX: EnumField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPEN_FROM: OrderableEdmTypeField<
      RetailStores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_HARDWARE_STATION: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreHardwareStationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreLocatorGroupOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_LOCATOR_GROUP_OWNER: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storeShelf} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORE_SHELF: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      StoreShelvesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailFunctionalityProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_FUNCTIONALITY_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailFunctionalityProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      RetailStores<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStores<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sqlServerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQL_SERVER_NAME: fieldBuilder.buildEdmTypeField(
          'SQLServerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDropCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DROP_CALCULATION: fieldBuilder.buildEnumField(
          'BankDropCalculation',
          RetailBankDropCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link maximumTextLengthOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TEXT_LENGTH_ON_RECEIPT: fieldBuilder.buildEdmTypeField(
          'MaximumTextLengthOnReceipt',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultCustomerLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'DefaultCustomerLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayTaxPerTaxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TAX_PER_TAX_COMPONENT: fieldBuilder.buildEnumField(
          'DisplayTaxPerTaxComponent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseIdForCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID_FOR_CUSTOMER_ORDER: fieldBuilder.buildEdmTypeField(
          'WarehouseIdForCustomerOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryLookup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOOKUP: fieldBuilder.buildEnumField(
          'InventoryLookup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link statementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_METHOD: fieldBuilder.buildEnumField(
          'StatementMethod',
          RetailStaffTerminalTotal,
          true
        ),
        /**
         * Static representation of the {@link defaultCustomerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultCustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxRoundingTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ROUNDING_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxRoundingTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storeArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_AREA: fieldBuilder.buildEdmTypeField(
          'StoreArea',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceChargePrompt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CHARGE_PROMPT: fieldBuilder.buildEdmTypeField(
          'ServiceChargePrompt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generatesItemLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATES_ITEM_LABELS: fieldBuilder.buildEnumField(
          'GeneratesItemLabels',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link oneStatementPerDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_STATEMENT_PER_DAY: fieldBuilder.buildEnumField(
          'OneStatementPerDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodToRemoveOrAdd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_TO_REMOVE_OR_ADD: fieldBuilder.buildEdmTypeField(
          'PaymentMethodToRemoveOrAdd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link liveDatabaseConnectionProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIVE_DATABASE_CONNECTION_PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'LiveDatabaseConnectionProfileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferStoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementPostAsBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_POST_AS_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'StatementPostAsBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createLabelsForZeroPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_LABELS_FOR_ZERO_PRICE: fieldBuilder.buildEnumField(
          'CreateLabelsForZeroPrice',
          NoYes,
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
         * Static representation of the {@link databaseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATABASE_NAME: fieldBuilder.buildEdmTypeField(
          'DatabaseName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useCustomerBasedTaxExemption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CUSTOMER_BASED_TAX_EXEMPTION: fieldBuilder.buildEnumField(
          'UseCustomerBasedTaxExemption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventNotificationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_NOTIFICATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'EventNotificationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useDefaultCustomerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_CUSTOMER_ACCOUNT: fieldBuilder.buildEnumField(
          'UseDefaultCustomerAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfTopOrBottomLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_TOP_OR_BOTTOM_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfTopOrBottomLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startAmountCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_AMOUNT_CALCULATION: fieldBuilder.buildEnumField(
          'StartAmountCalculation',
          RetailStartAmountCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link warehouseLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'WarehouseLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endOfBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_OF_BUSINESS_DAY: fieldBuilder.buildEdmTypeField(
          'EndOfBusinessDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link roundingTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RoundingTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generatesShelfLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATES_SHELF_LABELS: fieldBuilder.buildEnumField(
          'GeneratesShelfLabels',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxRoundingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ROUNDING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxRoundingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useCustomerBasedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CUSTOMER_BASED_TAX: fieldBuilder.buildEnumField(
          'UseCustomerBasedTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceChargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ServiceChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offlineProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFLINE_PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'OfflineProfileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceIncludesSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_INCLUDES_SALES_TAX: fieldBuilder.buildEnumField(
          'PriceIncludesSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalityProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONALITY_PROFILE: fieldBuilder.buildEdmTypeField(
          'FunctionalityProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_TO: fieldBuilder.buildEdmTypeField('OpenTo', 'Edm.Int32', false),
        /**
         * Static representation of the {@link taxOverrideGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OVERRIDE_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TaxOverrideGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link channelTimeZoneInfoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TIME_ZONE_INFO_ID: fieldBuilder.buildEdmTypeField(
          'ChannelTimeZoneInfoId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroupLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'TaxGroupLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOverrideGroupCodeLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OVERRIDE_GROUP_CODE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'TaxOverrideGroupCodeLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingAccountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RoundingAccountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumberOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER_ON_RECEIPT: fieldBuilder.buildEnumField(
          'ProductNumberOnReceipt',
          RetailItemIdOnReceiptBase,
          true
        ),
        /**
         * Static representation of the {@link channelTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TIME_ZONE: fieldBuilder.buildEnumField(
          'ChannelTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderItemFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM_FILTER: fieldBuilder.buildEnumField(
          'PurchaseOrderItemFilter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_METHOD: fieldBuilder.buildEnumField(
          'ClosingMethod',
          RetailClosingMethodType,
          true
        ),
        /**
         * Static representation of the {@link maxTransactionDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TRANSACTION_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxTransactionDifferenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hideTrainingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_TRAINING_MODE: fieldBuilder.buildEnumField(
          'HideTrainingMode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link channelProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'ChannelProfileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cultureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CULTURE_NAME: fieldBuilder.buildEdmTypeField(
          'CultureName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxShiftDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SHIFT_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxShiftDifferenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tenderDeclarationCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DECLARATION_CALCULATION: fieldBuilder.buildEnumField(
          'TenderDeclarationCalculation',
          RetailTenderDeclarationCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumPostingDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_POSTING_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'MaximumPostingDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link separateStatementPerStaffTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_STATEMENT_PER_STAFF_TERMINAL: fieldBuilder.buildEnumField(
          'SeparateStatementPerStaffTerminal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useDestinationBasedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DESTINATION_BASED_TAX: fieldBuilder.buildEnumField(
          'UseDestinationBasedTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_FROM: fieldBuilder.buildEdmTypeField(
          'OpenFrom',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStores)
      };
    }

    return this._schema;
  }
}
