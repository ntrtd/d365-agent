/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionGteChargeTaxLines } from './TransactionGteChargeTaxLines';
import { TransactionGteChargeTaxLinesRequestBuilder } from './TransactionGteChargeTaxLinesRequestBuilder';
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
export class TransactionGteChargeTaxLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransactionGteChargeTaxLines<DeSerializersT>, DeSerializersT>
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
  ): TransactionGteChargeTaxLinesApi<DeSerializersT> {
    return new TransactionGteChargeTaxLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionGteChargeTaxLines;

  requestBuilder(): TransactionGteChargeTaxLinesRequestBuilder<DeSerializersT> {
    return new TransactionGteChargeTaxLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransactionGteChargeTaxLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionGteChargeTaxLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionGteChargeTaxLines<DeSerializersT>,
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
    typeof TransactionGteChargeTaxLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionGteChargeTaxLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALE_LINE_NUM: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKUP_LINE_NUM: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_COMPONENT: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PERCENTAGE: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INCLUDED_IN_PRICE: EnumField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_BASIS: OrderableEdmTypeField<
      TransactionGteChargeTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransactionGteChargeTaxLines<DeSerializers>>;
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link saleLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'SaleLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markupLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'MarkupLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMPONENT: fieldBuilder.buildEdmTypeField(
          'TaxComponent',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TaxPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isIncludedInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCLUDED_IN_PRICE: fieldBuilder.buildEnumField(
          'IsIncludedInPrice',
          NoYes,
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
         * Static representation of the {@link taxBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASIS: fieldBuilder.buildEdmTypeField(
          'TaxBasis',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionGteChargeTaxLines)
      };
    }

    return this._schema;
  }
}
