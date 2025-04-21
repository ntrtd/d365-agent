/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAutomaticSalesDocumentHeaderCharges } from './SalesAutomaticSalesDocumentHeaderCharges';
import { SalesAutomaticSalesDocumentHeaderChargesRequestBuilder } from './SalesAutomaticSalesDocumentHeaderChargesRequestBuilder';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
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
export class SalesAutomaticSalesDocumentHeaderChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializersT>,
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
  ): SalesAutomaticSalesDocumentHeaderChargesApi<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesAutomaticSalesDocumentHeaderCharges;

  requestBuilder(): SalesAutomaticSalesDocumentHeaderChargesRequestBuilder<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAutomaticSalesDocumentHeaderCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAutomaticSalesDocumentHeaderCharges<DeSerializersT>,
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
    typeof SalesAutomaticSalesDocumentHeaderCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAutomaticSalesDocumentHeaderCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_COMPOUND: EnumField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_DOCUMENT_CURRENCY_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_CHARGE_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INVOICE_PROCESSING_KEEP_CHARGE: EnumField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    FROM_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      SalesAutomaticSalesDocumentHeaderCharges<DeSerializers>
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
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
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link isCompound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPOUND: fieldBuilder.buildEnumField('IsCompound', NoYes, true),
        /**
         * Static representation of the {@link toTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToTotalLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesDocumentCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesDocumentCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeAccountingCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_ACCOUNTING_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeAccountingCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willInvoiceProcessingKeepCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVOICE_PROCESSING_KEEP_CHARGE: fieldBuilder.buildEnumField(
          'WillInvoiceProcessingKeepCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CATEGORY: fieldBuilder.buildEnumField(
          'ChargeCategory',
          MarkupCategory,
          true
        ),
        /**
         * Static representation of the {@link fromTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromTotalLineAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAutomaticSalesDocumentHeaderCharges)
      };
    }

    return this._schema;
  }
}
