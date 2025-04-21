/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSalesTableBiEntities } from './RetailSalesTableBiEntities';
import { RetailSalesTableBiEntitiesRequestBuilder } from './RetailSalesTableBiEntitiesRequestBuilder';
import { RetailPaymentsType } from './RetailPaymentsType';
import { NoYes } from './NoYes';
import { RetailCfdiDocumentTypeMx } from './RetailCfdiDocumentTypeMx';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailSalesTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailSalesTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): RetailSalesTableBiEntitiesApi<DeSerializersT> {
    return new RetailSalesTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSalesTableBiEntities;

  requestBuilder(): RetailSalesTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailSalesTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailSalesTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSalesTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSalesTableBiEntities<DeSerializersT>,
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
    typeof RetailSalesTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSalesTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENTS_TYPE: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailPaymentsType,
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TMP_PRICE_DISCOUNT_DATA: EdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    RETAIL_STORE_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_TYPE_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_PRODUCT_LIST_UPDATE_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUPONS: EdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_TRANSACTION_TIME: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_TERMINAL_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_REPLENISHMENT_LOCATION_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OVERRIDE_CODE: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_ORDER: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_TRANSACTION_ID_FROM_POS_IN: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRICE_AND_DISCOUNT_RECALCULATION_REQUIRED: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_CODES: EdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    GST_TRANSACTION_ID_IN: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_PREPAYMENT_OVERRIDDEN: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_CFDI_DOCUMENT_TYPE_MX: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailCfdiDocumentTypeMx,
      true,
      true
    >;
    CHANNEL_REFERENCE_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_PRODUCT_LIST_UPDATE_NAME: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOULD_USE_UNIFIED_PRICING_ENGINE_ON_SALES_ORDER: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INITIAL_RECEIPT_ID: OrderableEdmTypeField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_RETAIL_STATUS_TYPE: EnumField<
      RetailSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailRetailStatusTypeBase,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailSalesTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link paymentsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENTS_TYPE: fieldBuilder.buildEnumField(
          'PaymentsType',
          RetailPaymentsType,
          true
        ),
        /**
         * Static representation of the {@link totalManualDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tmpPriceDiscountData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TMP_PRICE_DISCOUNT_DATA: fieldBuilder.buildEdmTypeField(
          'TmpPriceDiscountData',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link retailStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_ID: fieldBuilder.buildEdmTypeField(
          'RetailStoreId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CreditCardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailProductListUpdateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_LIST_UPDATE_ID: fieldBuilder.buildEdmTypeField(
          'RetailProductListUpdateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coupons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPONS: fieldBuilder.buildEdmTypeField('Coupons', 'Edm.Binary', true),
        /**
         * Static representation of the {@link isTaxExemptedForPriceInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: fieldBuilder.buildEnumField(
          'IsTaxExemptedForPriceInclusive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originalTransactionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TRANSACTION_TIME: fieldBuilder.buildEdmTypeField(
          'OriginalTransactionTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'RetailTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailReplenishmentLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_REPLENISHMENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RetailReplenishmentLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOverrideCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OVERRIDE_CODE: fieldBuilder.buildEdmTypeField(
          'TaxOverrideCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ORDER: fieldBuilder.buildEnumField('RetailOrder', NoYes, true),
        /**
         * Static representation of the {@link creditCardTenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CreditCardTenderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gstTransactionIdFromPosIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_TRANSACTION_ID_FROM_POS_IN: fieldBuilder.buildEnumField(
          'GSTTransactionIdFromPOS_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPriceAndDiscountRecalculationRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_AND_DISCOUNT_RECALCULATION_REQUIRED:
          fieldBuilder.buildEnumField(
            'IsPriceAndDiscountRecalculationRequired',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link discountCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CODES: fieldBuilder.buildEdmTypeField(
          'DiscountCodes',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link gstTransactionIdIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_TRANSACTION_ID_IN: fieldBuilder.buildEdmTypeField(
          'GSTTransactionId_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalManualDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailPrepaymentOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PREPAYMENT_OVERRIDDEN: fieldBuilder.buildEnumField(
          'RetailPrepaymentOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailCfdiDocumentTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CFDI_DOCUMENT_TYPE_MX: fieldBuilder.buildEnumField(
          'RetailCFDIDocumentType_MX',
          RetailCfdiDocumentTypeMx,
          true
        ),
        /**
         * Static representation of the {@link channelReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ChannelReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailProductListUpdateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_LIST_UPDATE_NAME: fieldBuilder.buildEdmTypeField(
          'RetailProductListUpdateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shouldUseUnifiedPricingEngineOnSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_USE_UNIFIED_PRICING_ENGINE_ON_SALES_ORDER:
          fieldBuilder.buildEnumField(
            'ShouldUseUnifiedPricingEngineOnSalesOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link initialReceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'InitialReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailRetailStatusType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RETAIL_STATUS_TYPE: fieldBuilder.buildEnumField(
          'RetailRetailStatusType',
          RetailRetailStatusTypeBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSalesTableBiEntities)
      };
    }

    return this._schema;
  }
}
