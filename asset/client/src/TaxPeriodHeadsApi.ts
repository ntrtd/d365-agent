/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxPeriodHeads } from './TaxPeriodHeads';
import { TaxPeriodHeadsRequestBuilder } from './TaxPeriodHeadsRequestBuilder';
import { PeriodUnit } from './PeriodUnit';
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
export class TaxPeriodHeadsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxPeriodHeads<DeSerializersT>, DeSerializersT>
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
  ): TaxPeriodHeadsApi<DeSerializersT> {
    return new TaxPeriodHeadsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxPeriodHeads;

  requestBuilder(): TaxPeriodHeadsRequestBuilder<DeSerializersT> {
    return new TaxPeriodHeadsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxPeriodHeads<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxPeriodHeads<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxPeriodHeads<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxPeriodHeads, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxPeriodHeads, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PERIOD_ID: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DURATION: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_AUTHORITY: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION_UNIT: EnumField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_ZERO_LINES_IT: EnumField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_IN_TAX_CURRENCY_IT: EnumField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACH_REPORT_TO_SALES_TAX_BOOK_STATUS_IT: EnumField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_REVERSE_TRANS_IT: EnumField<
      TaxPeriodHeads<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxPeriodHeads<DeSerializers>>;
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
         * Static representation of the {@link taxPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'TaxPeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'TaxAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link durationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_UNIT: fieldBuilder.buildEnumField(
          'DurationUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
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
         * Static representation of the {@link reportInTaxCurrencyIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_IN_TAX_CURRENCY_IT: fieldBuilder.buildEnumField(
          'ReportInTaxCurrency_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link attachReportToSalesTaxBookStatusIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACH_REPORT_TO_SALES_TAX_BOOK_STATUS_IT: fieldBuilder.buildEnumField(
          'AttachReportToSalesTaxBookStatus_IT',
          NoYes,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxPeriodHeads)
      };
    }

    return this._schema;
  }
}
