/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItalianSalesTaxBooks } from './ItalianSalesTaxBooks';
import { ItalianSalesTaxBooksRequestBuilder } from './ItalianSalesTaxBooksRequestBuilder';
import { NoYes } from './NoYes';
import { TaxBookType } from './TaxBookType';
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
export class ItalianSalesTaxBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItalianSalesTaxBooks<DeSerializersT>, DeSerializersT>
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
  ): ItalianSalesTaxBooksApi<DeSerializersT> {
    return new ItalianSalesTaxBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItalianSalesTaxBooks;

  requestBuilder(): ItalianSalesTaxBooksRequestBuilder<DeSerializersT> {
    return new ItalianSalesTaxBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItalianSalesTaxBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItalianSalesTaxBooks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItalianSalesTaxBooks<DeSerializersT>,
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
    typeof ItalianSalesTaxBooks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItalianSalesTaxBooks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_BOOK: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCLUDE_REVERSE_TRANS_IT: EnumField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_SUMMARY_AND_PAYMENT: EnumField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_ZERO_LINES_IT: EnumField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATECOFIN_CODE: OrderableEdmTypeField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_BOOK_TYPE: EnumField<
      ItalianSalesTaxBooks<DeSerializers>,
      DeSerializersT,
      TaxBookType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItalianSalesTaxBooks<DeSerializers>>;
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
         * Static representation of the {@link salesTaxBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_BOOK: fieldBuilder.buildEdmTypeField(
          'SalesTaxBook',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link includeReverseTransIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_REVERSE_TRANS_IT: fieldBuilder.buildEnumField(
          'IncludeReverseTrans_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link euSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES: fieldBuilder.buildEdmTypeField('EUSales', 'Edm.String', true),
        /**
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printSummaryAndPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_SUMMARY_AND_PAYMENT: fieldBuilder.buildEnumField(
          'PrintSummaryAndPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeZeroLinesIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ZERO_LINES_IT: fieldBuilder.buildEnumField(
          'IncludeZeroLines_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link atecofinCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATECOFIN_CODE: fieldBuilder.buildEdmTypeField(
          'ATECOFINCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_BOOK_TYPE: fieldBuilder.buildEnumField(
          'SalesTaxBookType',
          TaxBookType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItalianSalesTaxBooks)
      };
    }

    return this._schema;
  }
}
