/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpanishVatBooks } from './SpanishVatBooks';
import { SpanishVatBooksRequestBuilder } from './SpanishVatBooksRequestBuilder';
import { NoYes } from './NoYes';
import { TaxBookTypeEs } from './TaxBookTypeEs';
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
export class SpanishVatBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SpanishVatBooks<DeSerializersT>, DeSerializersT>
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
  ): SpanishVatBooksApi<DeSerializersT> {
    return new SpanishVatBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SpanishVatBooks;

  requestBuilder(): SpanishVatBooksRequestBuilder<DeSerializersT> {
    return new SpanishVatBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SpanishVatBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SpanishVatBooks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SpanishVatBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SpanishVatBooks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SpanishVatBooks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAT_BOOK: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EQUIVALENCE_CHARGE_SALES_TAX_CODE: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_REVERSE_CHARGE: EnumField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_BOOK_TYPE: EnumField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      TaxBookTypeEs,
      true,
      true
    >;
    IS_NON_DEDUCTIBLE_VAT: EnumField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      SpanishVatBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SpanishVatBooks<DeSerializers>>;
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
         * Static representation of the {@link vatBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_BOOK: fieldBuilder.buildEdmTypeField(
          'VATBook',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link equivalenceChargeSalesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIVALENCE_CHARGE_SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'EquivalenceChargeSalesTaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isReverseCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSE_CHARGE: fieldBuilder.buildEnumField(
          'IsReverseCharge',
          NoYes,
          true
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
         * Static representation of the {@link vatBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_BOOK_TYPE: fieldBuilder.buildEnumField(
          'VATBookType',
          TaxBookTypeEs,
          true
        ),
        /**
         * Static representation of the {@link isNonDeductibleVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NON_DEDUCTIBLE_VAT: fieldBuilder.buildEnumField(
          'IsNonDeductibleVAT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SpanishVatBooks)
      };
    }

    return this._schema;
  }
}
