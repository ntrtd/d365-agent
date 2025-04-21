/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionMarkupTransBiEntities } from './RetailTransactionMarkupTransBiEntities';
import { RetailTransactionMarkupTransBiEntitiesRequestBuilder } from './RetailTransactionMarkupTransBiEntitiesRequestBuilder';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { ItcCategoryIn } from './ItcCategoryIn';
import { MarkupModuleType } from './MarkupModuleType';
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
export class RetailTransactionMarkupTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionMarkupTransBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailTransactionMarkupTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionMarkupTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionMarkupTransBiEntities;

  requestBuilder(): RetailTransactionMarkupTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionMarkupTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionMarkupTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionMarkupTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionMarkupTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionMarkupTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionMarkupTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALE_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKUP_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_CATEGORY_IN: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      ServiceCategoryIn,
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_IN: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AMOUNT_EXCLUSIVE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ACCOUNTING_CODE_IN: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OVERRIDDEN_LINE: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HSN_CODE_IN: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITC_CATEGORY_IN: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      ItcCategoryIn,
      true,
      true
    >;
    MODULE_TYPE: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    MARKUP_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_INCLUSIVE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_GST_IN: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEEP: EnumField<
      RetailTransactionMarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionMarkupTransBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('store', 'Edm.String', false),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'terminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'transactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link saleLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'saleLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markupLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'markupLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceCategoryIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY_IN: fieldBuilder.buildEnumField(
          'ServiceCategory_IN',
          ServiceCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
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
         * Static representation of the {@link exemptIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_IN: fieldBuilder.buildEnumField('Exempt_IN', NoYes, true),
        /**
         * Static representation of the {@link taxAmountExclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_EXCLUSIVE: fieldBuilder.buildEdmTypeField(
          'TaxAmountExclusive',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'replicationCounterFromOrigin',
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
         * Static representation of the {@link method} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD: fieldBuilder.buildEnumField('Method', MarkupCategory, true),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCode_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOverriddenLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDDEN_LINE: fieldBuilder.buildEnumField(
          'IsOverriddenLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hsnCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_IN: fieldBuilder.buildEdmTypeField(
          'HSNCode_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link taxExemptPriceInclusiveReductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveReductionAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link calculatedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itcCategoryIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITC_CATEGORY_IN: fieldBuilder.buildEnumField(
          'ITCCategory_IN',
          ItcCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          MarkupModuleType,
          true
        ),
        /**
         * Static representation of the {@link markupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE: fieldBuilder.buildEdmTypeField(
          'MarkupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_INCLUSIVE: fieldBuilder.buildEdmTypeField(
          'TaxAmountInclusive',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link nonGstIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST_IN: fieldBuilder.buildEnumField('NonGST_IN', NoYes, true),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveOriginalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveOriginalPrice',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link keep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP: fieldBuilder.buildEnumField('Keep', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionMarkupTransBiEntities)
      };
    }

    return this._schema;
  }
}
