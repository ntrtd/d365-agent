/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCallCenters } from './RetailCallCenters';
import { RetailCallCentersRequestBuilder } from './RetailCallCentersRequestBuilder';
import { RetailChannelPriceGroupsApi } from './RetailChannelPriceGroupsApi';
import { RetailStoreTenderTypesApi } from './RetailStoreTenderTypesApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { WarehousesApi } from './WarehousesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
import { RetailEventNotificationProfilesApi } from './RetailEventNotificationProfilesApi';
import { RetailTransactionServiceProfilesApi } from './RetailTransactionServiceProfilesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { Timezone } from './Timezone';
import { RetailChannelType } from './RetailChannelType';
import { NoYes } from './NoYes';
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
export class RetailCallCentersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailCallCenters<DeSerializersT>, DeSerializersT>
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
  ): RetailCallCentersApi<DeSerializersT> {
    return new RetailCallCentersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelPriceGroupsApi<DeSerializersT>,
      RetailStoreTenderTypesApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProductCategoryHierarchiesApi<DeSerializersT>,
      RetailEventNotificationProfilesApi<DeSerializersT>,
      RetailTransactionServiceProfilesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL_PRICE_GROUP: new OneToManyLink(
        'RetailChannelPriceGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_STORE_TENDER_TYPE: new OneToManyLink(
        'RetailStoreTenderType',
        this,
        linkedApis[1]
      ),
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[2]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[3]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4]),
      PRODUCT_CATEGORY_HIERARCHY: new OneToOneLink(
        'ProductCategoryHierarchy',
        this,
        linkedApis[5]
      ),
      RETAIL_EVENT_NOTIFICATION_PROFILE: new OneToOneLink(
        'RetailEventNotificationProfile',
        this,
        linkedApis[6]
      ),
      RETAIL_TRANSACTION_SERVICE_PROFILE: new OneToOneLink(
        'RetailTransactionServiceProfile',
        this,
        linkedApis[7]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[8]),
      OPERATING_UNIT: new OneToOneLink('OperatingUnit', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = RetailCallCenters;

  requestBuilder(): RetailCallCentersRequestBuilder<DeSerializersT> {
    return new RetailCallCentersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailCallCenters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailCallCenters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailCallCenters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailCallCenters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCallCenters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANNEL_TIME_ZONE: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CHANNEL_TYPE: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      RetailChannelType,
      true,
      true
    >;
    CHANNEL_TIME_ZONE_INFO_ID: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_AREA: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EVENT_NOTIFICATION_PROFILE_ID: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_ORDER_COMPLETION: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_DIRECT_SELL: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_INFO_CODE: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CREDIT_INFO_CODE: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_OVERRIDE_INFO_CODE: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CUSTOMER_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_ORDER_PRICE_CONTROL: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_TAX_PER_TAX_COMPONENT: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_INCLUDES_SALES_TAX: EnumField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailCallCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      RetailCallCenters<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCallCenters<DeSerializers>>;
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
         * Static representation of the {@link channelTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TIME_ZONE: fieldBuilder.buildEnumField(
          'ChannelTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link channelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TYPE: fieldBuilder.buildEnumField(
          'ChannelType',
          RetailChannelType,
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
         * Static representation of the {@link storeArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_AREA: fieldBuilder.buildEdmTypeField(
          'StoreArea',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link canOrderCompletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ORDER_COMPLETION: fieldBuilder.buildEnumField(
          'CanOrderCompletion',
          NoYes,
          true
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
         * Static representation of the {@link canDirectSell} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_DIRECT_SELL: fieldBuilder.buildEnumField(
          'CanDirectSell',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reasonInfoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_INFO_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonInfoCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerCreditInfoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CREDIT_INFO_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerCreditInfoCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceOverrideInfoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_OVERRIDE_INFO_CODE: fieldBuilder.buildEdmTypeField(
          'PriceOverrideInfoCode',
          'Edm.String',
          true
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
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
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
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canOrderPriceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ORDER_PRICE_CONTROL: fieldBuilder.buildEnumField(
          'CanOrderPriceControl',
          NoYes,
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
         * Static representation of the {@link displayTaxPerTaxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TAX_PER_TAX_COMPONENT: fieldBuilder.buildEnumField(
          'DisplayTaxPerTaxComponent',
          NoYes,
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
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
         * Static representation of the {@link warehouseLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'WarehouseLegalEntity',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCallCenters)
      };
    }

    return this._schema;
  }
}
