/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesRebateAgreementLines } from './SalesRebateAgreementLines';
import { SalesRebateAgreementLinesRequestBuilder } from './SalesRebateAgreementLinesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SalesRebateAgreementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesRebateAgreementLines<DeSerializersT>, DeSerializersT>
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
  ): SalesRebateAgreementLinesApi<DeSerializersT> {
    return new SalesRebateAgreementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesRebateAgreementLines;

  requestBuilder(): SalesRebateAgreementLinesRequestBuilder<DeSerializersT> {
    return new SalesRebateAgreementLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesRebateAgreementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesRebateAgreementLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesRebateAgreementLines<DeSerializersT>,
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
    typeof SalesRebateAgreementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesRebateAgreementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_AGREEMENT_ID: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_SALES_QUANTITY: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_NET_SALES_AMOUNT: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_NET_SALES_AMOUNT: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_GROSS_SALES_AMOUNT: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_VALIDATED: EnumField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_AMOUNT_PER_PRODUCT_UNIT_SOLD: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_GROSS_SALES_AMOUNT: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_PERCENTAGE: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_SALES_QUANTITY: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALIDATING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_REBATE_AMOUNT: OrderableEdmTypeField<
      SalesRebateAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SalesRebateAgreementLines<DeSerializers>>;
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
         * Static representation of the {@link rebateAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RebateAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ToSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductUnitSymbol',
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
         * Static representation of the {@link fromNetSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_NET_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromNetSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toNetSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_NET_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToNetSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromGrossSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_GROSS_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromGrossSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isValidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALIDATED: fieldBuilder.buildEnumField('IsValidated', NoYes, true),
        /**
         * Static representation of the {@link rebateAmountPerProductUnitSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AMOUNT_PER_PRODUCT_UNIT_SOLD: fieldBuilder.buildEdmTypeField(
          'RebateAmountPerProductUnitSold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toGrossSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_GROSS_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToGrossSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebatePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RebatePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link validatingWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValidatingWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedRebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedRebateAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesRebateAgreementLines)
      };
    }

    return this._schema;
  }
}
