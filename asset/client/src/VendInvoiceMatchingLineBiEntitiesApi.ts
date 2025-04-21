/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceMatchingLineBiEntities } from './VendInvoiceMatchingLineBiEntities';
import { VendInvoiceMatchingLineBiEntitiesRequestBuilder } from './VendInvoiceMatchingLineBiEntitiesRequestBuilder';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
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
export class VendInvoiceMatchingLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceMatchingLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceMatchingLineBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceMatchingLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceMatchingLineBiEntities;

  requestBuilder(): VendInvoiceMatchingLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceMatchingLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceMatchingLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceMatchingLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceMatchingLineBiEntities<DeSerializersT>,
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
    typeof VendInvoiceMatchingLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceMatchingLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTENDED_PRICE_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_MULTI_LN_PERCENT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPECTED_QTY: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTENDED_PRICE_VARIANCE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTENDED_PRICE_VARIANCE_AMOUNT_MST: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_LINE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATCHING_POLICY: EnumField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOption,
      true,
      true
    >;
    EXPECTED_LINE_PERCENT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_MULTI_LN_DISC: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTENDED_PRICE_TOLERANCE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_PRICE_UNIT: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_PRICE: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_LINE_DISC: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_MARKUP: OrderableEdmTypeField<
      VendInvoiceMatchingLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceMatchingLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link extendedPriceTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedMultiLnPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_MULTI_LN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ExpectedMultiLnPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expectedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_QTY: fieldBuilder.buildEdmTypeField(
          'ExpectedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link extendedPriceVarianceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_VARIANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceVarianceAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link extendedPriceVarianceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_VARIANCE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceVarianceAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PriceTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExpectedLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyOption,
          true
        ),
        /**
         * Static representation of the {@link expectedLinePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_LINE_PERCENT: fieldBuilder.buildEdmTypeField(
          'ExpectedLinePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedMultiLnDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_MULTI_LN_DISC: fieldBuilder.buildEdmTypeField(
          'ExpectedMultiLnDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link extendedPriceToleranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_TOLERANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceToleranceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedPriceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'ExpectedPriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_PRICE: fieldBuilder.buildEdmTypeField(
          'ExpectedPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ExpectedCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'ExpectedLineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_MARKUP: fieldBuilder.buildEdmTypeField(
          'ExpectedMarkup',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceMatchingLineBiEntities)
      };
    }

    return this._schema;
  }
}
