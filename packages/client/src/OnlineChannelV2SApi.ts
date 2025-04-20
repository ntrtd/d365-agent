/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnlineChannelV2S } from './OnlineChannelV2S';
import { OnlineChannelV2SRequestBuilder } from './OnlineChannelV2SRequestBuilder';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { RetailTransactionServiceProfilesApi } from './RetailTransactionServiceProfilesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { RetailEventNotificationProfilesApi } from './RetailEventNotificationProfilesApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { OnlineStoreCustomerType } from './OnlineStoreCustomerType';
import { RetailOnlineChannelPublishStatusType } from './RetailOnlineChannelPublishStatusType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnlineChannelV2SApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OnlineChannelV2S<DeSerializersT>, DeSerializersT>
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
  ): OnlineChannelV2SApi<DeSerializersT> {
    return new OnlineChannelV2SApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerPaymentMethodsApi<DeSerializersT>,
      RetailTransactionServiceProfilesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      RetailEventNotificationProfilesApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[0]
      ),
      RETAIL_TRANSACTION_SERVICE_PROFILE: new OneToOneLink(
        'RetailTransactionServiceProfile',
        this,
        linkedApis[1]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[2]),
      RETAIL_EVENT_NOTIFICATION_PROFILE: new OneToOneLink(
        'RetailEventNotificationProfile',
        this,
        linkedApis[3]
      ),
      PAYMENT_TERM: new OneToOneLink('PaymentTerm', this, linkedApis[4]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = OnlineChannelV2S;

  requestBuilder(): OnlineChannelV2SRequestBuilder<DeSerializersT> {
    return new OnlineChannelV2SRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OnlineChannelV2S<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OnlineChannelV2S<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OnlineChannelV2S<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof OnlineChannelV2S, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnlineChannelV2S,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_TYPE: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      OnlineStoreCustomerType,
      true,
      true
    >;
    PUBLISH_STATUS: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      RetailOnlineChannelPublishStatusType,
      true,
      true
    >;
    CHANNEL_TIME_ZONE: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CHANNEL_TYPE: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      RetailChannelType,
      true,
      true
    >;
    STORE_AREA: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMAIL_NOTIFICATION_PROFILE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUBLISH_STATUS_MESSAGE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_MULTIPLE_UNITS_OF_MEASURE: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CUSTOMER_LEGAL_ENTITY: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICES_INCLUDE_SALES_TAX: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLINE_STORE_AZURE_B_2_C_PROFILE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE_IDENTIFIER: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLINE_CATALOG_NAME: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_TAX_AMOUNT_PER_TAX_COMPONENT: EnumField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LEGAL_ENTITY: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      OnlineChannelV2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      OnlineChannelV2S<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnlineChannelV2S<DeSerializers>>;
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TYPE: fieldBuilder.buildEnumField(
          'CustomerType',
          OnlineStoreCustomerType,
          true
        ),
        /**
         * Static representation of the {@link publishStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISH_STATUS: fieldBuilder.buildEnumField(
          'PublishStatus',
          RetailOnlineChannelPublishStatusType,
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
         * Static representation of the {@link channelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TYPE: fieldBuilder.buildEnumField(
          'ChannelType',
          RetailChannelType,
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
         * Static representation of the {@link emailNotificationProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_NOTIFICATION_PROFILE: fieldBuilder.buildEdmTypeField(
          'EmailNotificationProfile',
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
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link publishStatusMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISH_STATUS_MESSAGE: fieldBuilder.buildEdmTypeField(
          'PublishStatusMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableMultipleUnitsOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_MULTIPLE_UNITS_OF_MEASURE: fieldBuilder.buildEnumField(
          'EnableMultipleUnitsOfMeasure',
          NoYes,
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
         * Static representation of the {@link pricesIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICES_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'PricesIncludeSalesTax',
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
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onlineStoreAzureB2CProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLINE_STORE_AZURE_B_2_C_PROFILE: fieldBuilder.buildEdmTypeField(
          'OnlineStoreAzureB2CProfile',
          'Edm.String',
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
         * Static representation of the {@link timeZoneIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'TimeZoneIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onlineCatalogName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLINE_CATALOG_NAME: fieldBuilder.buildEdmTypeField(
          'OnlineCatalogName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayTaxAmountPerTaxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TAX_AMOUNT_PER_TAX_COMPONENT: fieldBuilder.buildEnumField(
          'DisplayTaxAmountPerTaxComponent',
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
         * Static representation of the {@link warehouseLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'WarehouseLegalEntity',
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
        ALL_FIELDS: new AllFields('*', OnlineChannelV2S)
      };
    }

    return this._schema;
  }
}
