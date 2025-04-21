/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailChannels } from './RetailChannels';
import { RetailChannelsRequestBuilder } from './RetailChannelsRequestBuilder';
import { RetailChannelPriceGroupsApi } from './RetailChannelPriceGroupsApi';
import { RetailReplenishmentRuleLinesApi } from './RetailReplenishmentRuleLinesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailTenderTypeCardsApi } from './RetailTenderTypeCardsApi';
import { ChannelCategoryAttributesApi } from './ChannelCategoryAttributesApi';
import { ReplenishmentRuleLinesV2Api } from './ReplenishmentRuleLinesV2Api';
import { RetailStoreAddressBooksApi } from './RetailStoreAddressBooksApi';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { NoYes } from './NoYes';
import { RetailTenderDeclarationCalculationBase } from './RetailTenderDeclarationCalculationBase';
import { RetailItemIdOnReceiptBase } from './RetailItemIdOnReceiptBase';
import { RetailChannelType } from './RetailChannelType';
import { Timezone } from './Timezone';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
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
export class RetailChannelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailChannels<DeSerializersT>, DeSerializersT>
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
  ): RetailChannelsApi<DeSerializersT> {
    return new RetailChannelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailChannelPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_PRICE_GROUP: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailReplenishmentRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE_LINE: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTenderTypeCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TENDER_TYPE_CARD: OneToOneLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailTenderTypeCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link channelCategoryAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHANNEL_CATEGORY_ATTRIBUTE: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      ChannelCategoryAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreAddressBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_ADDRESS_BOOK: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreAddressBooksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelPriceGroupsApi<DeSerializersT>,
      RetailReplenishmentRuleLinesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      RetailTenderTypeCardsApi<DeSerializersT>,
      ChannelCategoryAttributesApi<DeSerializersT>,
      ReplenishmentRuleLinesV2Api<DeSerializersT>,
      RetailStoreAddressBooksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL_PRICE_GROUP: new OneToManyLink(
        'RetailChannelPriceGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_REPLENISHMENT_RULE_LINE: new OneToManyLink(
        'RetailReplenishmentRuleLine',
        this,
        linkedApis[1]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2]),
      RETAIL_TENDER_TYPE_CARD: new OneToOneLink(
        'RetailTenderTypeCard',
        this,
        linkedApis[3]
      ),
      CHANNEL_CATEGORY_ATTRIBUTE: new OneToManyLink(
        'ChannelCategoryAttribute',
        this,
        linkedApis[4]
      ),
      REPLENISHMENT_RULE_LINES_V_2: new OneToManyLink(
        'ReplenishmentRuleLinesV2',
        this,
        linkedApis[5]
      ),
      RETAIL_STORE_ADDRESS_BOOK: new OneToManyLink(
        'RetailStoreAddressBook',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = RetailChannels;

  requestBuilder(): RetailChannelsRequestBuilder<DeSerializersT> {
    return new RetailChannelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailChannels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailChannels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailChannels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailChannels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailChannels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_SHIFT_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SQL_SERVER_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLINE_CATALOG_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_TRANSACTION_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_CUSTOMER_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_METHOD: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      RetailClosingMethodType,
      true,
      true
    >;
    TAX_OVERRIDE_GROUP: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISPLAY_TAX_PER_TAX_COMPONENT: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CHARGE_PCT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEPARATE_STMT_PER_STAFF_TERMINAL: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_ENABLE_ORDER_PRICE_CONTROL: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORE_AREA: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CULTURE_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIVE_DATABASE_CONNECTION_PROFILE_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID_FOR_CUSTOMER_ORDER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STMT_POST_AS_BUSINESS_DAY: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_SERVICE_PROFILE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_LABELS_FOR_ZERO_PRICE: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATABASE_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CUSTOMER_BASED_TAX_EXEMPTION: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_NOTIFICATION_PROFILE_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_RETURN_POLICY_CHANNEL: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_TAX_GROUP_W: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CHARGE_PROMPT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP_CODE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_DECLARATION_CALCULATION: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      RetailTenderDeclarationCalculationBase,
      true,
      true
    >;
    USE_CUSTOMER_BASED_TAX: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_ENABLE_DIRECTED_SELLING: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMOVE_ADD_TENDER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFLINE_PROFILE_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID_ON_RECEIPT: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      RetailItemIdOnReceiptBase,
      true,
      true
    >;
    PRICE_INCLUDES_SALES_TAX: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DEFAULT_CUST_ACCOUNT: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PO_ITEM_FILTER: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_ACCEPT: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_REQ_PLAN_ID_SCHED: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_PRICE_OVERRIDE_RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPEN_FROM: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_OVERRIDE_GROUP_CODE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_REASON_CODE_RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_TIME_ZONE_INFO_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_DATA_AREA_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_TYPE: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      RetailChannelType,
      true,
      true
    >;
    HIDE_TRAINING_MODE: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STMT_CALC_BATCH_END_TIME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHANNEL_TIME_ZONE: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_ROUNDING_TAX_AMOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_TEXT_LENGTH_ON_RECEIPT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROUNDING_TAX_ACCOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_ENABLE_ORDER_COMPLETION: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALC_EXEMPT_TAXES_FOR_PRICE_INCLUSIVE: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANNEL_PROFILE_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONE_STATEMENT_PER_DAY: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATES_ITEM_LABELS: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_CUSTOMER_CREDIT_RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONALITY_PROFILE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFT_STORE_NUMBER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_METHOD: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      RetailStaffTerminalTotal,
      true,
      true
    >;
    OPEN_TO: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_POSTING_DIFFERENCE: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_LOOKUP: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATES_SHELF_LABELS: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_TOP_OR_BOTTOM_LINES: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_DESTINATION_BASED_TAX: EnumField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_ROUNDING_AMOUNT: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailChannels<DeSerializers>,
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
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailChannelPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailReplenishmentRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE_LINE: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTenderTypeCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TENDER_TYPE_CARD: OneToOneLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailTenderTypeCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link channelCategoryAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHANNEL_CATEGORY_ATTRIBUTE: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      ChannelCategoryAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreAddressBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_ADDRESS_BOOK: OneToManyLink<
      RetailChannels<DeSerializersT>,
      DeSerializersT,
      RetailStoreAddressBooksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailChannels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link maxShiftDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SHIFT_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'maxShiftDifferenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
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
         * Static representation of the {@link onlineCatalogName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLINE_CATALOG_NAME: fieldBuilder.buildEdmTypeField(
          'OnlineCatalogName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxTransactionDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TRANSACTION_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'maxTransactionDifferenceAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link closingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_METHOD: fieldBuilder.buildEnumField(
          'closingMethod',
          RetailClosingMethodType,
          true
        ),
        /**
         * Static representation of the {@link taxOverrideGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OVERRIDE_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxOverrideGroup',
          'Edm.Int64',
          false
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
         * Static representation of the {@link serviceChargePct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CHARGE_PCT: fieldBuilder.buildEdmTypeField(
          'serviceChargePct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link separateStmtPerStaffTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_STMT_PER_STAFF_TERMINAL: fieldBuilder.buildEnumField(
          'separateStmtPerStaffTerminal',
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
         * Static representation of the {@link mcrEnableOrderPriceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ENABLE_ORDER_PRICE_CONTROL: fieldBuilder.buildEnumField(
          'MCREnableOrderPriceControl',
          NoYes,
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
         * Static representation of the {@link cultureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CULTURE_NAME: fieldBuilder.buildEdmTypeField(
          'cultureName',
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
         * Static representation of the {@link inventLocationIdForCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_FOR_CUSTOMER_ORDER: fieldBuilder.buildEdmTypeField(
          'InventLocationIdForCustomerOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stmtPostAsBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STMT_POST_AS_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'stmtPostAsBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
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
         * Static representation of the {@link createLabelsForZeroPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_LABELS_FOR_ZERO_PRICE: fieldBuilder.buildEnumField(
          'createLabelsForZeroPrice',
          NoYes,
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
         * Static representation of the {@link retailReturnPolicyChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RETURN_POLICY_CHANNEL: fieldBuilder.buildEdmTypeField(
          'RetailReturnPolicyChannel',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link returnTaxGroupW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TAX_GROUP_W: fieldBuilder.buildEdmTypeField(
          'ReturnTaxGroup_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceChargePrompt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CHARGE_PROMPT: fieldBuilder.buildEdmTypeField(
          'serviceChargePrompt',
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
         * Static representation of the {@link tenderDeclarationCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DECLARATION_CALCULATION: fieldBuilder.buildEnumField(
          'tenderDeclarationCalculation',
          RetailTenderDeclarationCalculationBase,
          true
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
         * Static representation of the {@link mcrEnableDirectedSelling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ENABLE_DIRECTED_SELLING: fieldBuilder.buildEnumField(
          'MCREnableDirectedSelling',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link removeAddTender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMOVE_ADD_TENDER: fieldBuilder.buildEdmTypeField(
          'removeAddTender',
          'Edm.String',
          true
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
         * Static representation of the {@link itemIdOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID_ON_RECEIPT: fieldBuilder.buildEnumField(
          'itemIdOnReceipt',
          RetailItemIdOnReceiptBase,
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
         * Static representation of the {@link useDefaultCustAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_CUST_ACCOUNT: fieldBuilder.buildEnumField(
          'UseDefaultCustAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link poItemFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_ITEM_FILTER: fieldBuilder.buildEnumField(
          'poItemFilter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link manualAccept} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_ACCEPT: fieldBuilder.buildEnumField('ManualAccept', NoYes, true),
        /**
         * Static representation of the {@link retailReqPlanIdSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_REQ_PLAN_ID_SCHED: fieldBuilder.buildEdmTypeField(
          'RetailReqPlanIdSched',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrPriceOverrideRetailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PRICE_OVERRIDE_RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'MCRPriceOverrideRetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_FROM: fieldBuilder.buildEdmTypeField(
          'openFrom',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('phone', 'Edm.String', true),
        /**
         * Static representation of the {@link mcrReasonCodeRetailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_REASON_CODE_RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'MCRReasonCodeRetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link inventLocationDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationDataAreaId',
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
         * Static representation of the {@link channelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_TYPE: fieldBuilder.buildEnumField(
          'ChannelType',
          RetailChannelType,
          true
        ),
        /**
         * Static representation of the {@link hideTrainingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_TRAINING_MODE: fieldBuilder.buildEnumField(
          'hideTrainingMode',
          NoYes,
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
         * Static representation of the {@link stmtCalcBatchEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STMT_CALC_BATCH_END_TIME: fieldBuilder.buildEdmTypeField(
          'stmtCalcBatchEndTime',
          'Edm.Int32',
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
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link maxRoundingTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ROUNDING_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'maxRoundingTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumTextLengthOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TEXT_LENGTH_ON_RECEIPT: fieldBuilder.buildEdmTypeField(
          'maximumTextLengthOnReceipt',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link roundingTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'roundingTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrEnableOrderCompletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ENABLE_ORDER_COMPLETION: fieldBuilder.buildEnumField(
          'MCREnableOrderCompletion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calcExemptTaxesForPriceInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_EXEMPT_TAXES_FOR_PRICE_INCLUSIVE: fieldBuilder.buildEnumField(
          'CalcExemptTaxesForPriceInclusive',
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
         * Static representation of the {@link oneStatementPerDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_STATEMENT_PER_DAY: fieldBuilder.buildEnumField(
          'oneStatementPerDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'InventLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generatesItemLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATES_ITEM_LABELS: fieldBuilder.buildEnumField(
          'generatesItemLabels',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrCustomerCreditRetailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CUSTOMER_CREDIT_RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'MCRCustomerCreditRetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalityProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONALITY_PROFILE: fieldBuilder.buildEdmTypeField(
          'functionalityProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eftStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFT_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EFTStoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_METHOD: fieldBuilder.buildEnumField(
          'statementMethod',
          RetailStaffTerminalTotal,
          true
        ),
        /**
         * Static representation of the {@link openTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_TO: fieldBuilder.buildEdmTypeField('openTo', 'Edm.Int32', false),
        /**
         * Static representation of the {@link maximumPostingDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_POSTING_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'maximumPostingDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryLookup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOOKUP: fieldBuilder.buildEnumField(
          'inventoryLookup',
          NoYes,
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
         * Static representation of the {@link generatesShelfLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATES_SHELF_LABELS: fieldBuilder.buildEnumField(
          'generatesShelfLabels',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfTopOrBottomLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_TOP_OR_BOTTOM_LINES: fieldBuilder.buildEdmTypeField(
          'numberOfTopOrBottomLines',
          'Edm.Int32',
          false
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
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxRoundingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ROUNDING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'maxRoundingAmount',
          'Edm.Decimal',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailChannels)
      };
    }

    return this._schema;
  }
}
