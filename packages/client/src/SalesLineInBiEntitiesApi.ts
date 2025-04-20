/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesLineInBiEntities } from './SalesLineInBiEntities';
import { SalesLineInBiEntitiesRequestBuilder } from './SalesLineInBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DirectSettlementIn } from './DirectSettlementIn';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { ItcCategoryIn } from './ItcCategoryIn';
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
export class SalesLineInBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesLineInBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesLineInBiEntitiesApi<DeSerializersT> {
    return new SalesLineInBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesLineInBiEntities;

  requestBuilder(): SalesLineInBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesLineInBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesLineInBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesLineInBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesLineInBiEntities<DeSerializersT>,
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
    typeof SalesLineInBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesLineInBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_AS_PER_ORIGINAL_INVOICE: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AS_PER_ORIGINAL_INVOICE_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEL_TAX_AS_PER_ORIGINAL_INVOICE_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_LOCATION: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_CODE_TABLE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_INFORMATION: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_MAX_RETAIL_PRICE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIRECT_SETTLEMENT_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      DirectSettlementIn,
      true,
      true
    >;
    EXEMPT: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_RETAIL_PRICE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_ORDER: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_NATURE_OF_REMITTANCE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_LINE_NUM: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_RETAIL_PRICE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCISE_RECORD_TYPE_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    EXCISE_TYPE_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseTypeIn,
      true,
      true
    >;
    CUSTOMS_TARIFF_CODE_TABLE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_LINE_NUM_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_LOCATION_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_INVENT_VAT_COMMODITY_CODE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITC_CATEGORY: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      ItcCategoryIn,
      true,
      true
    >;
    INCL_TAX: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_ORDER_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCISE_TARIFF_CODES_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_TAX_FORM_TYPES_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_VOUCHER_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ACTION: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_GROUP_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HSN_CODE_TABLE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATA_AREA_ID_COPY_1: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SCRAP: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_NOTE_DATE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPORT_ORDER_COPY_1: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ACCOUNTING_CODE_TABLE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_COUNTRY_REGION_TO_REMITTANCE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMER_TAX_INFORMATION: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREDIT_NOTE_DATE: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TCS_GROUP: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSABLE_VALUE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSABLE_VALUE_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TDS_GROUP_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_MAX_RETAIL_PRICE_IN: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNMENT_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_ACKNOWLEDGEMENT_NUMBER: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_VOUCHER: OrderableEdmTypeField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSA_IN: EnumField<
      SalesLineInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesLineInBiEntities<DeSerializers>>;
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
         * Static representation of the {@link taxAsPerOriginalInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AS_PER_ORIGINAL_INVOICE: fieldBuilder.buildEnumField(
          'TaxAsPerOriginalInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxAsPerOriginalInvoiceIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AS_PER_ORIGINAL_INVOICE_IN: fieldBuilder.buildEnumField(
          'TaxAsPerOriginalInvoice_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link delTaxAsPerOriginalInvoiceIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEL_TAX_AS_PER_ORIGINAL_INVOICE_IN: fieldBuilder.buildEnumField(
          'DEL_TaxAsPerOriginalInvoice_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LOCATION: fieldBuilder.buildEdmTypeField(
          'CustomerLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'TaxInformation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsMaxRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_MAX_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'CustomsMaxRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link directSettlementIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_SETTLEMENT_IN: fieldBuilder.buildEnumField(
          'DirectSettlement_IN',
          DirectSettlementIn,
          true
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        /**
         * Static representation of the {@link maximumRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_ORDER: fieldBuilder.buildEnumField('ExportOrder', NoYes, true),
        /**
         * Static representation of the {@link taxWithholdNatureOfRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_NATURE_OF_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdNatureOfRemittance',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'TaxWithholdLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumRetailPriceIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE_IN: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exciseRecordTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_RECORD_TYPE_IN: fieldBuilder.buildEnumField(
          'ExciseRecordType_IN',
          ExciseRecordTypeIn,
          true
        ),
        /**
         * Static representation of the {@link exciseTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TYPE_IN: fieldBuilder.buildEnumField(
          'ExciseType_IN',
          ExciseTypeIn,
          true
        ),
        /**
         * Static representation of the {@link customsTariffCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TARIFF_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'CustomsTariffCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdLineNumIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_LINE_NUM_IN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdLineNum_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link companyLocationIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_LOCATION_IN: fieldBuilder.buildEdmTypeField(
          'CompanyLocation_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxInventVatCommodityCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVENT_VAT_COMMODITY_CODE_IN: fieldBuilder.buildEdmTypeField(
          'TaxInventVATCommodityCode_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itcCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITC_CATEGORY: fieldBuilder.buildEnumField(
          'ITCCategory',
          ItcCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link exportOrderIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_ORDER_IN: fieldBuilder.buildEnumField(
          'ExportOrder_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exciseTariffCodesIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TARIFF_CODES_IN: fieldBuilder.buildEdmTypeField(
          'ExciseTariffCodes_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesTaxFormTypesIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_FORM_TYPES_IN: fieldBuilder.buildEdmTypeField(
          'SalesTaxFormTypes_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdVoucherIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VOUCHER_IN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdVoucher_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ACTION: fieldBuilder.buildEdmTypeField(
          'ReturnAction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP: fieldBuilder.buildEdmTypeField(
          'TDSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsGroupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP_IN: fieldBuilder.buildEdmTypeField(
          'TCSGroup_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hsnCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'HSNCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dataAreaIdCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID_COPY_1: fieldBuilder.buildEdmTypeField(
          'DataAreaIdCopy1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCRAP: fieldBuilder.buildEnumField('IsScrap', NoYes, true),
        /**
         * Static representation of the {@link creditNoteDateIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_DATE_IN: fieldBuilder.buildEdmTypeField(
          'CreditNoteDate_IN',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exportOrderCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_ORDER_COPY_1: fieldBuilder.buildEnumField(
          'ExportOrderCopy1',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCountryRegionToRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_COUNTRY_REGION_TO_REMITTANCE:
          fieldBuilder.buildEdmTypeField(
            'TaxWithholdCountryRegionToRemittance',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link customerTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CustomerTaxInformation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creditNoteDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_DATE: fieldBuilder.buildEdmTypeField(
          'CreditNoteDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tcsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP: fieldBuilder.buildEdmTypeField(
          'TCSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assessableValueIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE_IN: fieldBuilder.buildEdmTypeField(
          'AssessableValue_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assessableValueTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AssessableValueTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tdsGroupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP_IN: fieldBuilder.buildEdmTypeField(
          'TDSGroup_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsMaxRetailPriceIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_MAX_RETAIL_PRICE_IN: fieldBuilder.buildEdmTypeField(
          'CustomsMaxRetailPrice_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignmentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_IN: fieldBuilder.buildEnumField(
          'Consignment_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdAcknowledgementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ACKNOWLEDGEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAcknowledgementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VOUCHER: fieldBuilder.buildEdmTypeField(
          'TaxWithholdVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dsaIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_IN: fieldBuilder.buildEnumField('DSA_IN', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesLineInBiEntities)
      };
    }

    return this._schema;
  }
}
