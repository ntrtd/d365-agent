/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnlineChannels } from './OnlineChannels';
import { OnlineChannelsRequestBuilder } from './OnlineChannelsRequestBuilder';
import { RetailChannelPaymentConnectorLinesApi } from './RetailChannelPaymentConnectorLinesApi';
import { RetailChannelPriceGroupsApi } from './RetailChannelPriceGroupsApi';
import { RetailStoreLocatorGroupOwnersApi } from './RetailStoreLocatorGroupOwnersApi';
import { OnlineChannelCountryRegionsApi } from './OnlineChannelCountryRegionsApi';
import { RetailStoreTenderTypesApi } from './RetailStoreTenderTypesApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { RetailTransactionServiceProfilesApi } from './RetailTransactionServiceProfilesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { RetailEventNotificationProfilesApi } from './RetailEventNotificationProfilesApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailChannelAttributeGroupsApi } from './RetailChannelAttributeGroupsApi';
import { RetailOnlineChannelLanguagesApi } from './RetailOnlineChannelLanguagesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnlineChannelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OnlineChannels<DeSerializersT>, DeSerializersT>
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
  ): OnlineChannelsApi<DeSerializersT> {
    return new OnlineChannelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPaymentConnectorLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PAYMENT_CONNECTOR_LINE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPaymentConnectorLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreLocatorGroupOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_LOCATOR_GROUP_OWNER: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_COUNTRY_REGION: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      OnlineChannelCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_ATTRIBUTE_GROUP: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailOnlineChannelLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ONLINE_CHANNEL_LANGUAGE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailOnlineChannelLanguagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelPaymentConnectorLinesApi<DeSerializersT>,
      RetailChannelPriceGroupsApi<DeSerializersT>,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>,
      OnlineChannelCountryRegionsApi<DeSerializersT>,
      RetailStoreTenderTypesApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      RetailTransactionServiceProfilesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      RetailEventNotificationProfilesApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      RetailChannelAttributeGroupsApi<DeSerializersT>,
      RetailOnlineChannelLanguagesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL_PAYMENT_CONNECTOR_LINE: new OneToManyLink(
        'RetailChannelPaymentConnectorLine',
        this,
        linkedApis[0]
      ),
      RETAIL_CHANNEL_PRICE_GROUP: new OneToManyLink(
        'RetailChannelPriceGroup',
        this,
        linkedApis[1]
      ),
      RETAIL_STORE_LOCATOR_GROUP_OWNER: new OneToManyLink(
        'RetailStoreLocatorGroupOwner',
        this,
        linkedApis[2]
      ),
      ONLINE_CHANNEL_COUNTRY_REGION: new OneToManyLink(
        'OnlineChannelCountryRegion',
        this,
        linkedApis[3]
      ),
      RETAIL_STORE_TENDER_TYPE: new OneToManyLink(
        'RetailStoreTenderType',
        this,
        linkedApis[4]
      ),
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[5]
      ),
      RETAIL_TRANSACTION_SERVICE_PROFILE: new OneToOneLink(
        'RetailTransactionServiceProfile',
        this,
        linkedApis[6]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[7]),
      RETAIL_EVENT_NOTIFICATION_PROFILE: new OneToOneLink(
        'RetailEventNotificationProfile',
        this,
        linkedApis[8]
      ),
      PAYMENT_TERM: new OneToOneLink('PaymentTerm', this, linkedApis[9]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[10]),
      RETAIL_CHANNEL_ATTRIBUTE_GROUP: new OneToManyLink(
        'RetailChannelAttributeGroup',
        this,
        linkedApis[11]
      ),
      RETAIL_ONLINE_CHANNEL_LANGUAGE: new OneToManyLink(
        'RetailOnlineChannelLanguage',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = OnlineChannels;

  requestBuilder(): OnlineChannelsRequestBuilder<DeSerializersT> {
    return new OnlineChannelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OnlineChannels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OnlineChannels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OnlineChannels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof OnlineChannels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(OnlineChannels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUBLISH_STATUS: EnumField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      RetailOnlineChannelPublishStatusType,
      true,
      true
    >;
    CHANNEL_TIME_ZONE: EnumField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CHANNEL_TYPE: EnumField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      RetailChannelType,
      true,
      true
    >;
    STORE_AREA: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMAIL_NOTIFICATION_PROFILE: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUBLISH_STATUS_MESSAGE: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CUSTOMER_LEGAL_ENTITY: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICES_INCLUDE_SALES_TAX: EnumField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE_IDENTIFIER: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLINE_CATALOG_NAME: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_TAX_AMOUNT_PER_TAX_COMPONENT: EnumField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LEGAL_ENTITY: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      OnlineChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPaymentConnectorLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PAYMENT_CONNECTOR_LINE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPaymentConnectorLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreLocatorGroupOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_LOCATOR_GROUP_OWNER: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreLocatorGroupOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_COUNTRY_REGION: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      OnlineChannelCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreTenderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_TENDER_TYPE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreTenderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionServiceProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_SERVICE_PROFILE: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailTransactionServiceProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEventNotificationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_EVENT_NOTIFICATION_PROFILE: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailEventNotificationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_ATTRIBUTE_GROUP: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailOnlineChannelLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ONLINE_CHANNEL_LANGUAGE: OneToManyLink<
      OnlineChannels<DeSerializersT>,
      DeSerializersT,
      RetailOnlineChannelLanguagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnlineChannels<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', OnlineChannels)
      };
    }

    return this._schema;
  }
}
