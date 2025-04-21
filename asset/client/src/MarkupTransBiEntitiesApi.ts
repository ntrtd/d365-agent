/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarkupTransBiEntities } from './MarkupTransBiEntities';
import { MarkupTransBiEntitiesRequestBuilder } from './MarkupTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { VatTypeRu } from './VatTypeRu';
import { MarkupModuleType } from './MarkupModuleType';
import { HeadingLine } from './HeadingLine';
import { MarkupCategory } from './MarkupCategory';
import { MarkupAllocateAfter } from './MarkupAllocateAfter';
import { PurchBookVatDocumentTypeInvoice_Ru } from './PurchBookVatDocumentTypeInvoice_Ru';
import { DocumentStatus } from './DocumentStatus';
import { McrMarkupTransCreatedBy } from './McrMarkupTransCreatedBy';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class MarkupTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MarkupTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): MarkupTransBiEntitiesApi<DeSerializersT> {
    return new MarkupTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarkupTransBiEntities;

  requestBuilder(): MarkupTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new MarkupTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MarkupTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MarkupTransBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarkupTransBiEntities<DeSerializersT>,
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
    typeof MarkupTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarkupTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_TABLE_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_AMOUNT_MST_W: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FACTURED_AMOUNT_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_TABLE_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTER_COMPANY_MARKUP_VALUE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCR_MISC_CHARGE_OVERRIDE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_OVERRIDDEN_LINE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_MARKUP_USE_VALUE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_POSTED_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_PRORATED_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT_VATMST_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_OVERRIDDEN_FIELD_VALUE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_IN_ROUTE_ID_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_MARKUP_TRANS: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_MODIFIED: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_INVOICE_LINE_ID_REF: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NOTIONAL_CHARGES_IN: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ADVANCED_LINE_PRORATED: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_CODE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTIONAL_PCT_IN: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_COMPOUND: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_REASON_CODE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_MST_W: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKUP_AUTO_TABLE_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_INSTALLMENT_ELIGIBLE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_VEND_POSTED_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_AUTO_CHARGE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_IN_ROUTE_TO_DELIVERY_RU: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_TAX_CHARGE: EdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TAX_AMOUNT_VAT_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_BROKER_CONTRACT_FEE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMS_ASSESSABLE_VALUE_IN: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_ORIGINAL_MISC_CHARGE_VALUE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_INVOICE_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_CLASSIFICATION_BR: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupClassificationBr,
      true,
      true
    >;
    EXCHRATE_SECOND_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_VAT_TYPE_RU: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      VatTypeRu,
      true,
      true
    >;
    MODULE_TYPE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    MCR_RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_REF_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SKIP_IN_FREE_INVOICES_IT: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_RATE_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_SHIPPING_PROMOTION_DISCOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEEP: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODULE_CATEGORY: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      HeadingLine,
      true,
      true
    >;
    BANK_LC_IMPORT_CHARGE_ALLOCATION_SA: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKUP_CATEGORY: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARK_UP_ALLOCATE_AFTER_IN: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupAllocateAfter,
      true,
      true
    >;
    SPECIFIC_UNIT_SYMBOL: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TIERED_CHARGE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_EXCISE_MST_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_DOCUMENT_TYPE_RU: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      PurchBookVatDocumentTypeInvoice_Ru,
      true,
      true
    >;
    PREVIOUS_VALUE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATED_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WRITE_CODE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentStatus,
      true,
      true
    >;
    MARKUP_AUTO_LINE_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_AMOUNT_EXCISE_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_SAVED_TABLE_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SAT_PRODUCT_CODE_MX: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_COUPON_MARKUP: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WITHHOLDING_TYPE_CODE_MX: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_INVOICE_LINE_TEMPLATE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_UNIT_CODE_MX: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VALUE_VAT_RU: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OVERRIDDEN_PRORATED_LINE: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_SAVED_REC_ID: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_MARKUP_TRANS_CREATED_BY: EnumField<
      MarkupTransBiEntities<DeSerializers>,
      DeSerializersT,
      McrMarkupTransCreatedBy,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MarkupTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link transRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'TransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'TransTableId',
          'Edm.Int32',
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
         * Static representation of the {@link fromAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedAmountMstW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT_MST_W: fieldBuilder.buildEdmTypeField(
          'CalculatedAmountMST_W',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link facturedAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURED_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'FacturedAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link origTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'OrigTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link interCompanyMarkupValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_MARKUP_VALUE: fieldBuilder.buildEdmTypeField(
          'InterCompanyMarkupValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'Position',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mcrMiscChargeOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MISC_CHARGE_OVERRIDE: fieldBuilder.buildEnumField(
          'MCRMiscChargeOverride',
          NoYes,
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
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link interCompanyMarkupUseValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_MARKUP_USE_VALUE: fieldBuilder.buildEnumField(
          'InterCompanyMarkupUseValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemPostedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_POSTED_RU: fieldBuilder.buildEdmTypeField(
          'ItemPosted_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedProratedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_PRORATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedProratedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxAmountVatmstRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_VATMST_RU: fieldBuilder.buildEdmTypeField(
          'TaxAmountVATMST_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousOverriddenFieldValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_OVERRIDDEN_FIELD_VALUE: fieldBuilder.buildEdmTypeField(
          'PreviousOverriddenFieldValue',
          'Edm.String',
          true
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
         * Static representation of the {@link goodsInRouteIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_ROUTE_ID_RU: fieldBuilder.buildEdmTypeField(
          'GoodsInRouteId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedMarkupTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_MARKUP_TRANS: fieldBuilder.buildEdmTypeField(
          'CorrectedMarkupTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODIFIED: fieldBuilder.buildEnumField('IsModified', NoYes, true),
        /**
         * Static representation of the {@link custInvoiceLineIdRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_LINE_ID_REF: fieldBuilder.buildEdmTypeField(
          'CustInvoiceLineIdRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link notionalChargesIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIONAL_CHARGES_IN: fieldBuilder.buildEnumField(
          'NotionalCharges_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link isAdvancedLineProrated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADVANCED_LINE_PRORATED: fieldBuilder.buildEnumField(
          'IsAdvancedLineProrated',
          NoYes,
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link notionalPctIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIONAL_PCT_IN: fieldBuilder.buildEdmTypeField(
          'NotionalPct_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCompound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPOUND: fieldBuilder.buildEnumField('IsCompound', NoYes, true),
        /**
         * Static representation of the {@link mcrReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'MCRReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountMstW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_MST_W: fieldBuilder.buildEdmTypeField(
          'TaxAmountMST_W',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link origRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_REC_ID: fieldBuilder.buildEdmTypeField(
          'OrigRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link markupAutoTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_AUTO_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'MarkupAutoTableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mcrInstallmentEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_INSTALLMENT_ELIGIBLE: fieldBuilder.buildEnumField(
          'MCRInstallmentEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custVendPostedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_POSTED_RU: fieldBuilder.buildEdmTypeField(
          'CustVendPosted_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isAutoCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTO_CHARGE: fieldBuilder.buildEnumField(
          'IsAutoCharge',
          NoYes,
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
         * Static representation of the {@link goodsInRouteToDeliveryRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_ROUTE_TO_DELIVERY_RU: fieldBuilder.buildEnumField(
          'GoodsInRouteToDelivery_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link markupTaxCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_TAX_CHARGE: fieldBuilder.buildEdmTypeField(
          'MarkupTaxCharge',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link taxAmountVatRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_VAT_RU: fieldBuilder.buildEdmTypeField(
          'TaxAmountVAT_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mcrBrokerContractFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_CONTRACT_FEE: fieldBuilder.buildEnumField(
          'MCRBrokerContractFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEdmTypeField('Posted', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link customsAssessableValueIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_ASSESSABLE_VALUE_IN: fieldBuilder.buildEnumField(
          'CustomsAssessableValue_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrOriginalMiscChargeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ORIGINAL_MISC_CHARGE_VALUE: fieldBuilder.buildEdmTypeField(
          'MCROriginalMiscChargeValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupClassificationBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CLASSIFICATION_BR: fieldBuilder.buildEnumField(
          'MarkupClassification_BR',
          MarkupClassificationBr,
          true
        ),
        /**
         * Static representation of the {@link exchrateSecondRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHRATE_SECOND_RU: fieldBuilder.buildEdmTypeField(
          'ExchrateSecond_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxVatTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VAT_TYPE_RU: fieldBuilder.buildEnumField(
          'TaxVATType_RU',
          VatTypeRu,
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
         * Static representation of the {@link mcrRetailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'MCRRetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link skipInFreeInvoicesIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_IN_FREE_INVOICES_IT: fieldBuilder.buildEnumField(
          'SkipInFreeInvoices_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchRateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_RU: fieldBuilder.buildEdmTypeField(
          'ExchRate_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailShippingPromotionDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SHIPPING_PROMOTION_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'RetailShippingPromotionDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link keep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP: fieldBuilder.buildEnumField('Keep', NoYes, true),
        /**
         * Static representation of the {@link moduleCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_CATEGORY: fieldBuilder.buildEnumField(
          'ModuleCategory',
          HeadingLine,
          true
        ),
        /**
         * Static representation of the {@link bankLcImportChargeAllocationSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_IMPORT_CHARGE_ALLOCATION_SA: fieldBuilder.buildEdmTypeField(
          'BankLCImportChargeAllocation_SA',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link markupCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CATEGORY: fieldBuilder.buildEnumField(
          'MarkupCategory',
          MarkupCategory,
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
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEnumField('IsDeleted', NoYes, true),
        /**
         * Static representation of the {@link toAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markUpAllocateAfterIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_UP_ALLOCATE_AFTER_IN: fieldBuilder.buildEnumField(
          'MarkUpAllocateAfter_IN',
          MarkupAllocateAfter,
          true
        ),
        /**
         * Static representation of the {@link specificUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SpecificUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTieredCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIERED_CHARGE: fieldBuilder.buildEnumField(
          'IsTieredCharge',
          NoYes,
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
         * Static representation of the {@link taxAmountExciseMstRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_EXCISE_MST_RU: fieldBuilder.buildEdmTypeField(
          'TaxAmountExciseMST_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatDocumentTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DOCUMENT_TYPE_RU: fieldBuilder.buildEnumField(
          'VATDocumentType_RU',
          PurchBookVatDocumentTypeInvoice_Ru,
          true
        ),
        /**
         * Static representation of the {@link previousValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_VALUE: fieldBuilder.buildEdmTypeField(
          'PreviousValue',
          'Edm.Decimal',
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
         * Static representation of the {@link calculatedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxWithholdItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroup',
          'Edm.Int64',
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
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          DocumentStatus,
          true
        ),
        /**
         * Static representation of the {@link markupAutoLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_AUTO_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'MarkupAutoLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxAmountExciseRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_EXCISE_RU: fieldBuilder.buildEdmTypeField(
          'TaxAmountExcise_RU',
          'Edm.Decimal',
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
         * Static representation of the {@link mcrSavedTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_SAVED_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'MCRSavedTableID',
          'Edm.Int32',
          false
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
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link mcrCouponMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_COUPON_MARKUP: fieldBuilder.buildEnumField(
          'MCRCouponMarkup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link withholdingTypeCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TYPE_CODE_MX: fieldBuilder.buildEdmTypeField(
          'WithholdingTypeCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link taxValueVatRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE_VAT_RU: fieldBuilder.buildEdmTypeField(
          'TaxValueVAT_RU',
          'Edm.Decimal',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOverriddenProratedLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDDEN_PRORATED_LINE: fieldBuilder.buildEnumField(
          'IsOverriddenProratedLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrSavedRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_SAVED_REC_ID: fieldBuilder.buildEdmTypeField(
          'MCRSavedRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mcrMarkupTransCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MARKUP_TRANS_CREATED_BY: fieldBuilder.buildEnumField(
          'MCRMarkupTransCreatedBy',
          McrMarkupTransCreatedBy,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarkupTransBiEntities)
      };
    }

    return this._schema;
  }
}
