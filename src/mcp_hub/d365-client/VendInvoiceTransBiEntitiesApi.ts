/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceTransBiEntities } from './VendInvoiceTransBiEntities';
import { VendInvoiceTransBiEntitiesRequestBuilder } from './VendInvoiceTransBiEntitiesRequestBuilder';
import { ExciseTypeIn } from './ExciseTypeIn';
import { NoYes } from './NoYes';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { PurchInvoiceLineType } from './PurchInvoiceLineType';
import { PurchBookVatDocumentTypeInvoice_Ru } from './PurchBookVatDocumentTypeInvoice_Ru';
import { NoYesCombo } from './NoYesCombo';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { InventRefType } from './InventRefType';
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
export class VendInvoiceTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceTransBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceTransBiEntities;

  requestBuilder(): VendInvoiceTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceTransBiEntities<DeSerializersT>,
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
    typeof VendInvoiceTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VENDOR_LOCATION_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCISE_TYPE_IN: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseTypeIn,
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_NAME_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_AMOUNT_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TCS_GROUP_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_PHYSICAL: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT_MST: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSABLE_VALUE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REGISTRATION_POSTAL_ADDRESS_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUDGET_RESERVATION_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_RETURN_INVOICE_TRANS_W: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_AMOUNT_TAX: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_LINE_NUM_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_NUM: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_PURCH_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_TARIFF_CODE_TABLE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VAT_DEFERRED_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RBO_PACKAGE_LINE_NUM: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_RELEASE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FACTURED_FULLY_RU: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_GOODS_TYPE_IN: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      VatGoodsTypeIn,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_DATE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_QTY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_VALUE_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCISE_AMOUNT_MST_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_REC_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NGP_CODES_TABLE_FR: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_GTD_ID_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAXIMUM_RETAIL_PRICE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_RECOVERABLE_PERCENT_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_CODE_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_DISPATCH_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      PurchInvoiceLineType,
      true,
      true
    >;
    EXCISE_AMOUNT_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DATE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_DIRECTIVE_PSN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_EXPENSE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_CHARGE_W: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALCOHOL_LICENSE_SERIES_NUM_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_APPLICATION_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLE_TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PWP: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PART_DELIVERY: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCISE_TARIFF_CODES_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_MST_W: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MARKUP: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_DOCUMENT_TYPE_RU: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      PurchBookVatDocumentTypeInvoice_Ru,
      true,
      true
    >;
    TDS_GROUP_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTURED_QTY_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    READY_FOR_PAYMENT: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_AMOUNT_MST_W: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_VOUCHER_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_PACKAGE_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEST_COUNTY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCISE_RECORD_TYPE_IN: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_LINE_LINE_NUMBER: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_AMOUNT_MST_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_AMOUNT_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    INTERNAL_INVOICE_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_RETAINAGE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEST_STATE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSA_IN: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_TABLE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_NOTE_DATE_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATISTIC_VALUE_LT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCISE_VALUE_RU: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GTA_SERVICE_CATEGORY_IN: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      GtaServiceCategoryIn,
      true,
      true
    >;
    SALES_TAX_FORM_TYPES_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_BASE_CUR_TH: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_REF_TYPE: EnumField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    COMPANY_LOCATION_IN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_GROUP_TH: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_COMMITMENT_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WRITE_CODE: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY_PHYSICAL: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEST_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link vendorLocationIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_LOCATION_IN: fieldBuilder.buildEdmTypeField(
          'VendorLocation_IN',
          'Edm.Int64',
          false
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
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchPrice',
          'Edm.Decimal',
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
         * Static representation of the {@link discPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OrigStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'numberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_NAME_RU: fieldBuilder.buildEdmTypeField(
          'CountryRegionName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATAmount_RU',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link pdsCwQtyPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link registrationPostalAddressIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_POSTAL_ADDRESS_IN: fieldBuilder.buildEdmTypeField(
          'RegistrationPostalAddress_IN',
          'Edm.Int64',
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
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link budgetReservationLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'BudgetReservationLine_PSN',
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
         * Static representation of the {@link lineAmountTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_TAX: fieldBuilder.buildEdmTypeField(
          'LineAmountTax',
          'Edm.Decimal',
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
         * Static representation of the {@link intrastatCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tax1099Num} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NUM: fieldBuilder.buildEdmTypeField(
          'Tax1099Num',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origPurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'OrigPurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
          false
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
         * Static representation of the {@link vatDeferredIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEFERRED_IN: fieldBuilder.buildEdmTypeField(
          'VATDeferred_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rboPackageLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_PACKAGE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'RBOPackageLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PSAReleaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link facturedFullyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURED_FULLY_RU: fieldBuilder.buildEnumField(
          'FacturedFully_RU',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_ID: fieldBuilder.buildEdmTypeField(
          'InventRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatGoodsTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GOODS_TYPE_IN: fieldBuilder.buildEnumField(
          'VATGoodsType_IN',
          VatGoodsTypeIn,
          true
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
         * Static representation of the {@link inventRefTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventRefTransId',
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
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099Date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_DATE: fieldBuilder.buildEdmTypeField(
          'Tax1099Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_QTY: fieldBuilder.buildEdmTypeField(
          'InventQty',
          'Edm.Decimal',
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatValueRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_VALUE_RU: fieldBuilder.buildEdmTypeField(
          'VATValue_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exciseAmountMstRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_AMOUNT_MST_RU: fieldBuilder.buildEdmTypeField(
          'ExciseAmountMST_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099RecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REC_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099RecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link settleTax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099StateAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceGtdIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_GTD_ID_RU: fieldBuilder.buildEdmTypeField(
          'InvoiceGTDId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'AgreementLine_PSN',
          'Edm.Int64',
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
         * Static representation of the {@link nonRecoverablePercentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_RECOVERABLE_PERCENT_IN: fieldBuilder.buildEdmTypeField(
          'NonRecoverablePercent_IN',
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
         * Static representation of the {@link markupCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE_RU: fieldBuilder.buildEdmTypeField(
          'MarkupCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatDispatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_DISPATCH_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatDispatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchInvoiceLineType,
          true
        ),
        /**
         * Static representation of the {@link exciseAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ExciseAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLnPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_PERCENT: fieldBuilder.buildEdmTypeField(
          'MultiLnPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DATE: fieldBuilder.buildEdmTypeField(
          'InventDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendDirectivePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_DIRECTIVE_PSN: fieldBuilder.buildEdmTypeField(
          'VendDirective_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link linePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PERCENT: fieldBuilder.buildEdmTypeField(
          'LinePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchID', 'Edm.String', true),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatExpenseIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_EXPENSE_IN: fieldBuilder.buildEdmTypeField(
          'VATExpense_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reverseChargeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_W: fieldBuilder.buildEnumField(
          'ReverseCharge_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alcoholLicenseSeriesNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_LICENSE_SERIES_NUM_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholLicenseSeriesNum_RU',
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
         * Static representation of the {@link advanceApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'AdvanceApplicationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settleTax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPwp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PWP: fieldBuilder.buildEnumField('IsPwp', NoYes, true),
        /**
         * Static representation of the {@link partDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PART_DELIVERY: fieldBuilder.buildEnumField('PartDelivery', NoYes, true),
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
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
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
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_MARKUP: fieldBuilder.buildEdmTypeField(
          'PurchMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link vatDocumentTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DOCUMENT_TYPE_RU: fieldBuilder.buildEnumField(
          'VATDocumentType_RU',
          PurchBookVatDocumentTypeInvoice_Ru,
          true
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
         * Static representation of the {@link facturedQtyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURED_QTY_RU: fieldBuilder.buildEdmTypeField(
          'FacturedQty_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link readyForPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READY_FOR_PAYMENT: fieldBuilder.buildEnumField(
          'ReadyForPayment',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProcurementCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineAmountMstW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_MST_W: fieldBuilder.buildEdmTypeField(
          'LineAmountMST_W',
          'Edm.Decimal',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link taxWithholdVoucherIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VOUCHER_IN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdVoucher_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailPackageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'RetailPackageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_COUNTY: fieldBuilder.buildEdmTypeField(
          'DestCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatFulfillmentDateHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FULFILLMENT_DATE_HU: fieldBuilder.buildEdmTypeField(
          'IntrastatFulfillmentDate_HU',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseLineLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link vatAmountMstRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_AMOUNT_MST_RU: fieldBuilder.buildEdmTypeField(
          'VATAmountMST_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'VATAmount_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link interCompanyInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE_MX: fieldBuilder.buildEnumField(
          'OperationType_MX',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link internalInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InternalInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaRetainageAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RETAINAGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PSARetainageAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link destState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_STATE: fieldBuilder.buildEdmTypeField(
          'DestState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dsaIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_IN: fieldBuilder.buildEnumField('DSA_IN', NoYes, true),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
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
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link statisticValueLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTIC_VALUE_LT: fieldBuilder.buildEdmTypeField(
          'StatisticValue_LT',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stockedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCKED_PRODUCT: fieldBuilder.buildEnumField(
          'StockedProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exciseValueRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_VALUE_RU: fieldBuilder.buildEdmTypeField(
          'ExciseValue_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link gtaServiceCategoryIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTA_SERVICE_CATEGORY_IN: fieldBuilder.buildEnumField(
          'GTAServiceCategory_IN',
          GtaServiceCategoryIn,
          true
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
         * Static representation of the {@link taxWithholdBaseCurTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_BASE_CUR_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdBaseCur_TH',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventRefType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TYPE: fieldBuilder.buildEnumField(
          'InventRefType',
          InventRefType,
          true
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
         * Static representation of the {@link taxWithholdGroupTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchCommitmentLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_COMMITMENT_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'PurchCommitmentLine_PSN',
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
         * Static representation of the {@link qtyPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'QtyPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLnDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLnDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link destCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DestCountryRegionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceTransBiEntities)
      };
    }

    return this._schema;
  }
}
