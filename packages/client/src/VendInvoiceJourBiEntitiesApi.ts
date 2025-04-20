/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceJourBiEntities } from './VendInvoiceJourBiEntities';
import { VendInvoiceJourBiEntitiesRequestBuilder } from './VendInvoiceJourBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DocumentOrigin } from './DocumentOrigin';
import { Listcode } from './Listcode';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { PurchInvoiceType } from './PurchInvoiceType';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { LtDocOriginator } from './LtDocOriginator';
import { PurchaseType } from './PurchaseType';
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
export class VendInvoiceJourBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceJourBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceJourBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceJourBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceJourBiEntities;

  requestBuilder(): VendInvoiceJourBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceJourBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceJourBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceJourBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceJourBiEntities<DeSerializersT>,
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
    typeof VendInvoiceJourBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceJourBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_SETOFF_VOUCHER_IN: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSIGNOR_ACCOUNT_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_SALES_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ORIGIN: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentOrigin,
      true,
      true
    >;
    PAYM_DAY_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTORNEY_DATE_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMOUNT_MST: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_DOCUMENT_TYPE_BR: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAFOND_DATE_IT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LISTCODE: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ROUND_OFF: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_PURCH_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_CONS_INVOICE_JP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_PRINT_ON_INVOICE: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_LEDGER_VOUCHER: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_INVOICE_ID_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOGISTICS_ELECTRONIC_ADDRESS: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FACTURED_FULLY_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTRACT_NUM_SA: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    DELIVERY_ADDRESS_LT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_PAYMENT_GROUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREPAYMENT: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSESSION_ID_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PURCH_OPERATION_TYPE_BR: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROFORMA: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_POSTED: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_LINE_DISC: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_ON_DLV_ADDRESS_BR: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_INVOICE_DECLARATION_IS: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_BAILEE_RECEIPT_REPORT_ID_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_LC_IMPORT_LINE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_SPECIFY_BY_LINE: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_VAT_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVED_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCL_TAX: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_FINAL_USER_BR: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IMPORTED_SALES_TAX: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TYPE: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      PurchInvoiceType,
      true,
      true
    >;
    SUM_MARKUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_AMOUNT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_MARKUP_MST: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRIANGULATION: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_ADD_VALUE_LV: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_REQUESTED_WORKER_EMAIL: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTORNEY_ID_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_GROUP: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ROUND_OFF: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC_MST: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REVERSE_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_SERIES_MX: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_INVOICE_DATE_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTRASTAT_DISPATCH: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECT_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTION_TYPE_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      FactureCorrectionTypeRu,
      true,
      true
    >;
    VAT_AMOUNT_IN: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_TABLE_REF_BR: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    CFDIUUID_MX: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_ON_PAYMENT_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTORNEY_ISSUED_NAME_RU: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHED: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_INVOICE_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_ID_IT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_INVOICE_PRINTED_LV: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_ADDRESS_LV: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE_LT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_LEDGER_VOUCHER: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_AMOUNT_IN: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_REAL_REVENUE_RU: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EU_SALES_LIST: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WHO_IS_AUTHOR_LT: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      LtDocOriginator,
      true,
      true
    >;
    PURCHASE_TYPE: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_AGREEMENT_HEADER_PSN: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME_LT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE_ES: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_BALANCE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_RECEIPT_DATE_W: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONS_TARGET_JP: EnumField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUM_TAX: OrderableEdmTypeField<
      VendInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceJourBiEntities<DeSerializers>>;
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
         * Static representation of the {@link taxSetoffVoucherIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SETOFF_VOUCHER_IN: fieldBuilder.buildEdmTypeField(
          'TaxSetoffVoucher_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitedVatInvoiceLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITED_VAT_INVOICE_LT: fieldBuilder.buildEnumField(
          'UnitedVATInvoice_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consignorAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNOR_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsignorAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanySalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_SALES_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanySalesId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ORIGIN: fieldBuilder.buildEnumField(
          'DocumentOrigin',
          DocumentOrigin,
          true
        ),
        /**
         * Static representation of the {@link paymDayId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_DAY_ID: fieldBuilder.buildEdmTypeField(
          'PaymDayId',
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attorneyDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTORNEY_DATE_RU: fieldBuilder.buildEdmTypeField(
          'AttorneyDate_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'InvoiceAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TYPE_BR: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentType_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link returnItemNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ITEM_NUM: fieldBuilder.buildEdmTypeField(
          'ReturnItemNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plafondDateIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_DATE_IT: fieldBuilder.buildEdmTypeField(
          'PlafondDate_IT',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
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
         * Static representation of the {@link partyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'PartyTaxID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'TaxRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP: fieldBuilder.buildEdmTypeField(
          'VendGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxInvoicePurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoicePurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
        /**
         * Static representation of the {@link vendConsInvoiceJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CONS_INVOICE_JP: fieldBuilder.buildEdmTypeField(
          'VendConsInvoice_JP',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxPrintOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRINT_ON_INVOICE: fieldBuilder.buildEnumField(
          'TaxPrintOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyLedgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'InterCompanyLedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedInvoiceIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_ID_RU: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link logisticsElectronicAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_ELECTRONIC_ADDRESS: fieldBuilder.buildEdmTypeField(
          'LogisticsElectronicAddress',
          'Edm.Int64',
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
         * Static representation of the {@link contractNumSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_NUM_SA: fieldBuilder.buildEdmTypeField(
          'ContractNum_SA',
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
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddress_LT',
          'Edm.String',
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
         * Static representation of the {@link sourceDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'SourceDocumentHeader',
          'Edm.Int64',
          false
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
         * Static representation of the {@link vendPaymentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PAYMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendPaymentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link offsessionIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSESSION_ID_RU: fieldBuilder.buildEdmTypeField(
          'OffsessionId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
        /**
         * Static representation of the {@link salesPurchOperationTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PURCH_OPERATION_TYPE_BR: fieldBuilder.buildEdmTypeField(
          'SalesPurchOperationType_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link proforma} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFORMA: fieldBuilder.buildEnumField('Proforma', NoYes, true),
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
         * Static representation of the {@link interCompanyPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_POSTED: fieldBuilder.buildEnumField(
          'InterCompanyPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sumLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'SumLineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCodeOnDlvAddressBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_ON_DLV_ADDRESS_BR: fieldBuilder.buildEnumField(
          'ServiceCodeOnDlvAddress_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceDeclarationIs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_DECLARATION_IS: fieldBuilder.buildEdmTypeField(
          'VendInvoiceDeclaration_IS',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventBaileeReceiptReportIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BAILEE_RECEIPT_REPORT_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventBaileeReceiptReportId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankLcImportLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_IMPORT_LINE: fieldBuilder.buildEdmTypeField(
          'BankLCImportLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxSpecifyByLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SPECIFY_BY_LINE: fieldBuilder.buildEnumField(
          'TaxSpecifyByLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorVatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VendorVATDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link receivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'ReceivedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ExchRateSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link vendFinalUserBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_FINAL_USER_BR: fieldBuilder.buildEnumField(
          'VendFinalUser_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link importedSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_SALES_TAX: fieldBuilder.buildEdmTypeField(
          'ImportedSalesTax',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceType',
          PurchInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link sumMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_MARKUP: fieldBuilder.buildEdmTypeField(
          'SumMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link importedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ImportedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sumMarkupMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_MARKUP_MST: fieldBuilder.buildEdmTypeField(
          'SumMarkupMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link triangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULATION: fieldBuilder.buildEnumField(
          'Triangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC: fieldBuilder.buildEdmTypeField(
          'CashDisc',
          'Edm.Decimal',
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link intrastatAddValueLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_ADD_VALUE_LV: fieldBuilder.buildEdmTypeField(
          'IntrastatAddValue_LV',
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
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link cashDiscDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashDiscPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'CashDiscPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorRequestedWorkerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REQUESTED_WORKER_EMAIL: fieldBuilder.buildEdmTypeField(
          'VendorRequestedWorkerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attorneyIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTORNEY_ID_RU: fieldBuilder.buildEdmTypeField(
          'AttorneyId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'RemittanceAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link vendInvoiceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_GROUP: fieldBuilder.buildEdmTypeField(
          'VendInvoiceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'FixedDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'InvoiceRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Decimal', false),
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
         * Static representation of the {@link endDiscMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC_MST: fieldBuilder.buildEdmTypeField(
          'EndDiscMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reverseChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReverseChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceSeriesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SERIES_MX: fieldBuilder.buildEdmTypeField(
          'InvoiceSeries_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedInvoiceDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_DATE_RU: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceDate_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link intrastatDispatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_DISPATCH: fieldBuilder.buildEdmTypeField(
          'IntrastatDispatch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
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
         * Static representation of the {@link correctRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECT_RU: fieldBuilder.buildEnumField('Correct_RU', NoYes, true),
        /**
         * Static representation of the {@link correctionTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TYPE_RU: fieldBuilder.buildEnumField(
          'CorrectionType_RU',
          FactureCorrectionTypeRu,
          true
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
         * Static representation of the {@link reasonTableRefBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF_BR: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef_BR',
          'Edm.Int64',
          false
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
         * Static representation of the {@link cfdiuuidMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDIUUID_MX: fieldBuilder.buildEdmTypeField(
          'CFDIUUID_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatOnPaymentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ON_PAYMENT_RU: fieldBuilder.buildEnumField(
          'VATOnPayment_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link attorneyIssuedNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTORNEY_ISSUED_NAME_RU: fieldBuilder.buildEdmTypeField(
          'AttorneyIssuedName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHED: fieldBuilder.buildEdmTypeField(
          'PaymentSched',
          'Edm.String',
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
         * Static representation of the {@link intentLetterIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateInvoicePrintedLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_INVOICE_PRINTED_LV: fieldBuilder.buildEnumField(
          'StateInvoicePrinted_LV',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dlvAddressLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_ADDRESS_LV: fieldBuilder.buildEdmTypeField(
          'DlvAddress_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCodeLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE_LT: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costLedgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'CostLedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAmount_IN',
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
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link nonRealRevenueRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_REAL_REVENUE_RU: fieldBuilder.buildEnumField(
          'NonRealRevenue_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link euSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST: fieldBuilder.buildEdmTypeField(
          'EUSalesList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link whoIsAuthorLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHO_IS_AUTHOR_LT: fieldBuilder.buildEnumField(
          'WhoIsAuthor_LT',
          LtDocOriginator,
          true
        ),
        /**
         * Static representation of the {@link purchaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_TYPE: fieldBuilder.buildEnumField(
          'PurchaseType',
          PurchaseType,
          true
        ),
        /**
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link purchAgreementHeaderPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT_HEADER_PSN: fieldBuilder.buildEdmTypeField(
          'PurchAgreementHeader_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryNameLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME_LT: fieldBuilder.buildEdmTypeField(
          'DeliveryName_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDateEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_ES: fieldBuilder.buildEdmTypeField(
          'DeliveryDate_ES',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BALANCE: fieldBuilder.buildEdmTypeField(
          'SalesBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField(
          'EndDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link purchReceiptDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_RECEIPT_DATE_W: fieldBuilder.buildEdmTypeField(
          'PurchReceiptDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consTargetJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONS_TARGET_JP: fieldBuilder.buildEnumField(
          'ConsTarget_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'TransportationDocument',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sumTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TAX: fieldBuilder.buildEdmTypeField('SumTax', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceJourBiEntities)
      };
    }

    return this._schema;
  }
}
