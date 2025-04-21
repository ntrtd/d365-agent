/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrSalesLineBiEntities } from './McrSalesLineBiEntities';
import { McrSalesLineBiEntitiesRequestBuilder } from './McrSalesLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { McrUpSellOrigin } from './McrUpSellOrigin';
import { McrLineType } from './McrLineType';
import { McrGiftCardType } from './McrGiftCardType';
import { RetailPriceOverrideWorkflowState } from './RetailPriceOverrideWorkflowState';
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
export class McrSalesLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrSalesLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): McrSalesLineBiEntitiesApi<DeSerializersT> {
    return new McrSalesLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrSalesLineBiEntities;

  requestBuilder(): McrSalesLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new McrSalesLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrSalesLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrSalesLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrSalesLineBiEntities<DeSerializersT>,
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
    typeof McrSalesLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrSalesLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GIFT_CARD_EXPIRATION: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPEDITE: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALLMENT_ELIGIBLE: EnumField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_BUYER_EMAIL: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_GIFT_MESSAGE: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UP_SELL_ORIGIN: EnumField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      McrUpSellOrigin,
      true,
      true
    >;
    GIFT_CARD_RECIPIENT_NAME: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      McrLineType,
      true,
      true
    >;
    GIFT_CARD_AMOUNT_RU: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_NUMBER: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUITY_SCHEDULE_ID: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UP_SELL_ORIGIN_REF: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_BUYER_NAME: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_LOT_ID: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_RECIPIENT_EMAIL: OrderableEdmTypeField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_TYPE: EnumField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      McrGiftCardType,
      true,
      true
    >;
    RETAIL_PRICE_OVERRIDE_WORKFLOW_STATE: EnumField<
      McrSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      RetailPriceOverrideWorkflowState,
      true,
      true
    >;
    ALL_FIELDS: AllFields<McrSalesLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link giftCardExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'GiftCardExpiration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expedite} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPEDITE: fieldBuilder.buildEdmTypeField(
          'Expedite',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link installmentEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_ELIGIBLE: fieldBuilder.buildEnumField(
          'InstallmentEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'SourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardBuyerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_BUYER_EMAIL: fieldBuilder.buildEdmTypeField(
          'GiftCardBuyerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeInventRefTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_INVENT_REF_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ExchangeInventRefTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardGiftMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_GIFT_MESSAGE: fieldBuilder.buildEdmTypeField(
          'GiftCardGiftMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upSellOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UP_SELL_ORIGIN: fieldBuilder.buildEnumField(
          'UpSellOrigin',
          McrUpSellOrigin,
          true
        ),
        /**
         * Static representation of the {@link giftCardRecipientName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_RECIPIENT_NAME: fieldBuilder.buildEdmTypeField(
          'GiftCardRecipientName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField('LineType', McrLineType, true),
        /**
         * Static representation of the {@link giftCardAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'GiftCardAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link giftCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'GiftCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link continuityScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'ContinuityScheduleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upSellOriginRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UP_SELL_ORIGIN_REF: fieldBuilder.buildEdmTypeField(
          'UpSellOriginRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardBuyerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_BUYER_NAME: fieldBuilder.buildEdmTypeField(
          'GiftCardBuyerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ParentLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardRecipientEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_RECIPIENT_EMAIL: fieldBuilder.buildEdmTypeField(
          'GiftCardRecipientEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_TYPE: fieldBuilder.buildEnumField(
          'GiftCardType',
          McrGiftCardType,
          true
        ),
        /**
         * Static representation of the {@link retailPriceOverrideWorkflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRICE_OVERRIDE_WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'RetailPriceOverrideWorkflowState',
          RetailPriceOverrideWorkflowState,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrSalesLineBiEntities)
      };
    }

    return this._schema;
  }
}
