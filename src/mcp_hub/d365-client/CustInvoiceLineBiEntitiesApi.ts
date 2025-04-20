/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustInvoiceLineBiEntities } from './CustInvoiceLineBiEntities';
import { CustInvoiceLineBiEntitiesRequestBuilder } from './CustInvoiceLineBiEntitiesRequestBuilder';
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
export class CustInvoiceLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustInvoiceLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustInvoiceLineBiEntitiesApi<DeSerializersT> {
    return new CustInvoiceLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustInvoiceLineBiEntities;

  requestBuilder(): CustInvoiceLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustInvoiceLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustInvoiceLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustInvoiceLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustInvoiceLineBiEntities<DeSerializersT>,
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
    typeof CustInvoiceLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustInvoiceLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_DOC_DATE_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_CHARGE_INVOICE_LINE_BASE_FROM_DATE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAMPLES_MX: EnumField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAT_CUSTOM_UNIT_OF_MEASURE_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_RU: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NGP_CODES_TABLE_FR: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_FUNDING_SOURCE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_GTD_RU: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_TABLE_BR: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_NAME_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_STATE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TXT: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID_RU: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_REC_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_NAME_RU: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PK_WI_U_CODE_PL: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_NUMBER_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_WRITE_CODE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNMENT_MX: EnumField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAT_PRODUCT_CODE_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_DIRECTIVE_PSN: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAT_CUSTOMS_QTY_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_INVOICE_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_CUST_INVOICE_LINE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_TARIFF_FRACTION_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_BILLING_CODE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_INVOICE_LINE_TEMPLATE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_UNIT_CODE_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_CHARGE_INVOICE_LINE_BASE_TO_DATE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DETAILS: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_LINE_REFERENCE_NO: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE_INTERNAL_REF_PL: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BRAND_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_DOC_NUMBER_MX: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_BOOK_ID: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_RETURN_INVOICE_TRANS_W: OrderableEdmTypeField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_INVOICE_BR: EnumField<
      CustInvoiceLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustInvoiceLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link taxWithholdItemGroupHeadingTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeading_TH',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link statProcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_PROC_ID: fieldBuilder.buildEdmTypeField(
          'StatProcId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eInvoiceAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsDocDateMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOC_DATE_MX: fieldBuilder.buildEdmTypeField(
          'CustomsDocDate_MX',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodChargeInvoiceLineBaseFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CHARGE_INVOICE_LINE_BASE_FROM_DATE:
          fieldBuilder.buildEdmTypeField(
            'PeriodChargeInvoiceLineBaseFromDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link samplesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAMPLES_MX: fieldBuilder.buildEnumField('Samples_MX', NoYes, true),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link satCustomUnitOfMeasureMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_CUSTOM_UNIT_OF_MEASURE_MX: fieldBuilder.buildEdmTypeField(
          'SATCustomUnitOfMeasure_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnitRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_RU: fieldBuilder.buildEdmTypeField(
          'SalesUnit_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ngpCodesTableFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODES_TABLE_FR: fieldBuilder.buildEdmTypeField(
          'NGPCodesTable_FR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource',
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
         * Static representation of the {@link invoiceGtdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_GTD_RU: fieldBuilder.buildEdmTypeField(
          'InvoiceGtd_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfopTableBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_TABLE_BR: fieldBuilder.buildEdmTypeField(
          'CFOPTable_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsNameMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_NAME_MX: fieldBuilder.buildEdmTypeField(
          'CustomsName_MX',
          'Edm.String',
          true
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
         * Static representation of the {@link origState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE: fieldBuilder.buildEdmTypeField(
          'OrigState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TXT: fieldBuilder.buildEdmTypeField(
          'InvoiceTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link assetIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID_RU: fieldBuilder.buildEdmTypeField(
          'AssetId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
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
         * Static representation of the {@link parentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxServiceCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SERVICE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxServiceCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
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
         * Static representation of the {@link countryNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_NAME_RU: fieldBuilder.buildEdmTypeField(
          'CountryName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pkWiUCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE_PL: fieldBuilder.buildEdmTypeField(
          'PKWiUCode_PL',
          'Edm.String',
          true
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
         * Static representation of the {@link propertyNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'PropertyNumber_MX',
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
         * Static representation of the {@link taxWriteCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WRITE_CODE: fieldBuilder.buildEdmTypeField(
          'TaxWriteCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consignmentMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_MX: fieldBuilder.buildEnumField(
          'Consignment_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link satProductCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PRODUCT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATProductCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custDirectivePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_DIRECTIVE_PSN: fieldBuilder.buildEdmTypeField(
          'CustDirective_PSN',
          'Edm.Int64',
          false
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
         * Static representation of the {@link satCustomsQtyMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_CUSTOMS_QTY_MX: fieldBuilder.buildEdmTypeField(
          'SATCustomsQty_MX',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link correctedCustInvoiceLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_CUST_INVOICE_LINE: fieldBuilder.buildEdmTypeField(
          'CorrectedCustInvoiceLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link satTariffFractionMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_TARIFF_FRACTION_MX: fieldBuilder.buildEdmTypeField(
          'SATTariffFraction_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custBillingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'CustBillingCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custInvoiceLineTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_LINE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'CustInvoiceLineTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link satUnitCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_UNIT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATUnitCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodChargeInvoiceLineBaseToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CHARGE_INVOICE_LINE_BASE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodChargeInvoiceLineBaseToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxAutogenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTOGENERATED: fieldBuilder.buildEnumField(
          'TaxAutogenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link amountDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DETAILS: fieldBuilder.buildEdmTypeField(
          'AmountDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderLineReferenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_REFERENCE_NO: fieldBuilder.buildEdmTypeField(
          'OrderLineReference_NO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditNoteInternalRefPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_INTERNAL_REF_PL: fieldBuilder.buildEdmTypeField(
          'CreditNoteInternalRef_PL',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link brandMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAND_MX: fieldBuilder.buildEdmTypeField(
          'Brand_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsDocNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOC_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'CustomsDocNumber_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'AssetBookId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link refReturnInvoiceTransW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_RETURN_INVOICE_TRANS_W: fieldBuilder.buildEdmTypeField(
          'RefReturnInvoiceTrans_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceInvoiceBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_INVOICE_BR: fieldBuilder.buildEnumField(
          'ServiceInvoice_BR',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustInvoiceLineBiEntities)
      };
    }

    return this._schema;
  }
}
