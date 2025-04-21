/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocumentReceivedXmlViewLines } from './EfDocumentReceivedXmlViewLines';
import { EfDocumentReceivedXmlViewLinesRequestBuilder } from './EfDocumentReceivedXmlViewLinesRequestBuilder';
import { EfDocumentReceivedXmlsApi } from './EfDocumentReceivedXmlsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EfDocumentReceivedXmlViewLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EfDocumentReceivedXmlViewLines<DeSerializersT>, DeSerializersT>
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
  ): EfDocumentReceivedXmlViewLinesApi<DeSerializersT> {
    return new EfDocumentReceivedXmlViewLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link efDocumentReceivedXml} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EF_DOCUMENT_RECEIVED_XML: OneToOneLink<
      EfDocumentReceivedXmlViewLines<DeSerializersT>,
      DeSerializersT,
      EfDocumentReceivedXmlsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EfDocumentReceivedXmlsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EF_DOCUMENT_RECEIVED_XML: new OneToOneLink(
        'EFDocumentReceivedXml',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EfDocumentReceivedXmlViewLines;

  requestBuilder(): EfDocumentReceivedXmlViewLinesRequestBuilder<DeSerializersT> {
    return new EfDocumentReceivedXmlViewLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EfDocumentReceivedXmlViewLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EfDocumentReceivedXmlViewLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocumentReceivedXmlViewLines<DeSerializersT>,
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
    typeof EfDocumentReceivedXmlViewLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocumentReceivedXmlViewLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EF_DOCUMENT_RECEIVED_XML_VIEW_BR: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CFOP: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FCP_ST_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_MARKUP_FREIGHT_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_ST_VALUE: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IPI_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FCP_ST_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FCP_ST_VALUE: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FCI_NUMBER: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_VALUE: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_FISCAL_CLASSIFICATION: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_ST_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_ST_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_MARKUP_OTHER_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IPI_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CST: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IPI_VALUE: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MARKUP_INSURANCE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      EfDocumentReceivedXmlViewLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link efDocumentReceivedXml} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EF_DOCUMENT_RECEIVED_XML: OneToOneLink<
      EfDocumentReceivedXmlViewLines<DeSerializersT>,
      DeSerializersT,
      EfDocumentReceivedXmlsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EfDocumentReceivedXmlViewLines<DeSerializers>>;
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
         * Static representation of the {@link efDocumentReceivedXmlViewBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EF_DOCUMENT_RECEIVED_XML_VIEW_BR: fieldBuilder.buildEdmTypeField(
          'EFDocumentReceivedXmlView_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cfop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP: fieldBuilder.buildEdmTypeField('Cfop', 'Edm.String', true),
        /**
         * Static representation of the {@link fcpStBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCP_ST_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FcpStBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT: fieldBuilder.buildEdmTypeField(
          'Discount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalMarkupFreightAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_FREIGHT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupFreightAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsStValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_ST_VALUE: fieldBuilder.buildEdmTypeField(
          'IcmsStValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ipiBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IPI_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IpiBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fcpStAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCP_ST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FcpStAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fcpStValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCP_ST_VALUE: fieldBuilder.buildEdmTypeField(
          'FcpStValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fciNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCI_NUMBER: fieldBuilder.buildEdmTypeField(
          'FciNumber',
          'Edm.String',
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
         * Static representation of the {@link icmsValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_VALUE: fieldBuilder.buildEdmTypeField(
          'IcmsValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxFiscalClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FISCAL_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'TaxFiscalClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link icmsStBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_ST_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IcmsStBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsStAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_ST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IcmsStAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grossAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GrossAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalMarkupOtherAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_OTHER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupOtherAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IcmsBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IcmsAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link additionalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ipiAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IPI_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IpiAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST: fieldBuilder.buildEdmTypeField('Cst', 'Edm.String', true),
        /**
         * Static representation of the {@link ipiValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IPI_VALUE: fieldBuilder.buildEdmTypeField(
          'IpiValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link totalMarkupInsuranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_INSURANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupInsuranceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocumentReceivedXmlViewLines)
      };
    }

    return this._schema;
  }
}
