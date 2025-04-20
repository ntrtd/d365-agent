/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchTableBiEntities } from './PurchTableBiEntities';
import { PurchTableBiEntitiesRequestBuilder } from './PurchTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { PurchDlvAddr } from './PurchDlvAddr';
import { VersioningDocumentState } from './VersioningDocumentState';
import { UnknownNoYes } from './UnknownNoYes';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { DocumentStatus } from './DocumentStatus';
import { ModuleVendPurch } from './ModuleVendPurch';
import { Listcode } from './Listcode';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { FreightSlipType } from './FreightSlipType';
import { BankDocumentType } from './BankDocumentType';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PurchStatus } from './PurchStatus';
import { PurchaseType } from './PurchaseType';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { SettlementType } from './SettlementType';
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
export class PurchTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): PurchTableBiEntitiesApi<DeSerializersT> {
    return new PurchTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchTableBiEntities;

  requestBuilder(): PurchTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new PurchTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PurchTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchTableBiEntities<DeSerializersT>,
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
    typeof PurchTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXIM_PORTS_IN: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchDlvAddr,
      true,
      true
    >;
    INTER_COMPANY_SALES_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_STATE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      VersioningDocumentState,
      true,
      true
    >;
    MATCHING_AGREEMENT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_NAME: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENCUMBRANCE_REQUIRED: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_ATTENTION: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DLV_EARLIEST: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGIN: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      InterCompanyOrigin,
      true,
      true
    >;
    SERVICE_CATEGORY: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REPLACEMENT_CREATED: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_ENTRY_CHANGE_POLICY: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FSH_AUTO_CREATED: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentStatus,
      true,
      true
    >;
    RETAIL_DRIVER_DETAILS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTRACT_NUM_SA: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAM_VEND_REBATE_GROUP_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_SUMMARY_MODULE_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      ModuleVendPurch,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REF: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_CODE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    PURCHASE_ORDER_HEADER_CREATION_METHOD: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchPurchaseOrderCreationMethod,
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MULTI_LINE_DISC: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_ENTRY_CHANGEPOLICY: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FINALIZE_CLOSING_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_SLIP_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      FreightSlipType,
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankDocumentType,
      true,
      true
    >;
    INTER_COMPANY_ORIGINAL_CUST_ACCOUNT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_DECLARATION_IS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_PURCH_PLACER: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ONE_TIME_VENDOR: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_ORDER: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCH_RATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MODIFIED: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_NUM_REC_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_DIRECT_DELIVERY: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_RETAIL_STATUS_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailRetailStatusTypeBase,
      true,
      true
    >;
    PURCH_POOL_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_DOCKING_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCL_TAX: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCH_RATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ALLOW_INDIRECT_CREATION: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM_TABLE_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxExemptNumberSourceType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AUTO_NUMBERING_LT: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_DROP_SHIPMENT: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_GROUP_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_ADD_VALUE_LV: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COV_STATUS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_NAME: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKUP_GROUP: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CXML_ORDER_ENABLE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMING_PO: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCAL_DELIVERY_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADE_END_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAIL_SALES_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ONE_TIME_SUPPLIER: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCH_ORDER_FORM_NUM: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DLV: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGINAL_SALES_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_SCHED: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTENT_LETTER_ID_IT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_LOCATION: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_ZONE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BILL_TO_ADDRESS: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_STATUS: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    INTER_COMPANY_CUST_PURCH_ORDER_FORM_NUM: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_TYPE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_ENTRY_SOURCE: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      PriceDiscSystemSource,
      true,
      true
    >;
    CHANGE_REQUEST_REQUIRED: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    CONS_TARGET_JP: EnumField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      PurchTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PurchTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField(
          'PurchId',
          'Edm.String',
          false
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
         * Static representation of the {@link eximPortsIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIM_PORTS_IN: fieldBuilder.buildEdmTypeField(
          'EXIMPorts_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'DeliveryType',
          PurchDlvAddr,
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
         * Static representation of the {@link documentState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATE: fieldBuilder.buildEnumField(
          'DocumentState',
          VersioningDocumentState,
          true
        ),
        /**
         * Static representation of the {@link matchingAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'MatchingAgreement',
          'Edm.Int64',
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
         * Static representation of the {@link purchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_NAME: fieldBuilder.buildEdmTypeField(
          'PurchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
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
         * Static representation of the {@link isEncumbranceRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENCUMBRANCE_REQUIRED: fieldBuilder.buildEnumField(
          'IsEncumbranceRequired',
          UnknownNoYes,
          true
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
         * Static representation of the {@link reqAttention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_ATTENTION: fieldBuilder.buildEdmTypeField(
          'ReqAttention',
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
         * Static representation of the {@link confirmedDlvEarliest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DLV_EARLIEST: fieldBuilder.buildEdmTypeField(
          'ConfirmedDlvEarliest',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link vendGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP: fieldBuilder.buildEdmTypeField(
          'VendGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ORIGIN: fieldBuilder.buildEnumField(
          'InterCompanyOrigin',
          InterCompanyOrigin,
          true
        ),
        /**
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ServiceCategory',
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
         * Static representation of the {@link returnReplacementCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REPLACEMENT_CREATED: fieldBuilder.buildEnumField(
          'ReturnReplacementCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link systemEntryChangePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_ENTRY_CHANGE_POLICY: fieldBuilder.buildEdmTypeField(
          'SystemEntryChangePolicy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fshAutoCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FSH_AUTO_CREATED: fieldBuilder.buildEnumField(
          'FSHAutoCreated',
          NoYes,
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
         * Static representation of the {@link retailDriverDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DRIVER_DETAILS: fieldBuilder.buildEdmTypeField(
          'RetailDriverDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link requester} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER: fieldBuilder.buildEdmTypeField(
          'Requester',
          'Edm.Int64',
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
         * Static representation of the {@link tamVendRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_VEND_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TAMVendRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ServiceAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoSummaryModuleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SUMMARY_MODULE_TYPE: fieldBuilder.buildEnumField(
          'AutoSummaryModuleType',
          ModuleVendPurch,
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
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
         * Static representation of the {@link serviceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DATE: fieldBuilder.buildEdmTypeField(
          'ServiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
        /**
         * Static representation of the {@link vendorRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REF: fieldBuilder.buildEdmTypeField(
          'VendorRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
        /**
         * Static representation of the {@link purchaseOrderHeaderCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_HEADER_CREATION_METHOD: fieldBuilder.buildEnumField(
          'PurchaseOrderHeaderCreationMethod',
          PurchPurchaseOrderCreationMethod,
          true
        ),
        /**
         * Static representation of the {@link paymSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SPEC: fieldBuilder.buildEdmTypeField(
          'PaymSpec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link multiLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLineDisc',
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
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualEntryChangepolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_ENTRY_CHANGEPOLICY: fieldBuilder.buildEdmTypeField(
          'ManualEntryChangepolicy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link finalizeClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINALIZE_CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'FinalizeClosingDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link freightSlipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_SLIP_TYPE: fieldBuilder.buildEnumField(
          'FreightSlipType',
          FreightSlipType,
          true
        ),
        /**
         * Static representation of the {@link bankDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BankDocumentType',
          BankDocumentType,
          true
        ),
        /**
         * Static representation of the {@link interCompanyOriginalCustAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ORIGINAL_CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InterCompanyOriginalCustAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerPurchPlacer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PURCH_PLACER: fieldBuilder.buildEdmTypeField(
          'WorkerPurchPlacer',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link oneTimeVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_VENDOR: fieldBuilder.buildEnumField(
          'OneTimeVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ORDER: fieldBuilder.buildEnumField(
          'InterCompanyOrder',
          NoYes,
          true
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
         * Static representation of the {@link reportingCurrencyFixedExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_FIXED_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyFixedExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODIFIED: fieldBuilder.buildEnumField('IsModified', NoYes, true),
        /**
         * Static representation of the {@link vatNumRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_REC_ID: fieldBuilder.buildEdmTypeField(
          'VATNumRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link interCompanyDirectDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_DIRECT_DELIVERY: fieldBuilder.buildEnumField(
          'InterCompanyDirectDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailRetailStatusType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RETAIL_STATUS_TYPE: fieldBuilder.buildEnumField(
          'RetailRetailStatusType',
          RetailRetailStatusTypeBase,
          true
        ),
        /**
         * Static representation of the {@link purchPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_POOL_ID: fieldBuilder.buildEdmTypeField(
          'PurchPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossDockingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCKING_DATE: fieldBuilder.buildEdmTypeField(
          'CrossDockingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link countyOrigDest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIG_DEST: fieldBuilder.buildEdmTypeField(
          'CountyOrigDest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'FixedExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyAllowIndirectCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ALLOW_INDIRECT_CREATION: fieldBuilder.buildEnumField(
          'InterCompanyAllowIndirectCreation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link vatNumTableType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_TABLE_TYPE: fieldBuilder.buildEnumField(
          'VATNumTableType',
          TaxExemptNumberSourceType,
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
         * Static representation of the {@link invoiceAutoNumberingLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AUTO_NUMBERING_LT: fieldBuilder.buildEnumField(
          'InvoiceAutoNumbering_LT',
          NoYes,
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
         * Static representation of the {@link mcrDropShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DROP_SHIPMENT: fieldBuilder.buildEnumField(
          'MCRDropShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC: fieldBuilder.buildEdmTypeField(
          'CashDisc',
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
         * Static representation of the {@link intrastatAddValueLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_ADD_VALUE_LV: fieldBuilder.buildEdmTypeField(
          'IntrastatAddValue_LV',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link covStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_STATUS: fieldBuilder.buildEdmTypeField(
          'CovStatus',
          'Edm.Int32',
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
         * Static representation of the {@link serviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeText',
          'Edm.String',
          true
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
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeCode',
          'Edm.String',
          true
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
         * Static representation of the {@link markupGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_GROUP: fieldBuilder.buildEdmTypeField(
          'MarkupGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cxmlOrderEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CXML_ORDER_ENABLE: fieldBuilder.buildEnumField(
          'CXMLOrderEnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link confirmingPo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMING_PO: fieldBuilder.buildEdmTypeField(
          'ConfirmingPO',
          'Edm.Int64',
          false
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
         * Static representation of the {@link localDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'LocalDeliveryDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link tradeEndCustomerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_END_CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TradeEndCustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link availSalesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAIL_SALES_DATE: fieldBuilder.buildEdmTypeField(
          'AvailSalesDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link oneTimeSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_SUPPLIER: fieldBuilder.buildEnumField(
          'OneTimeSupplier',
          NoYes,
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
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchOrderFormNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ORDER_FORM_NUM: fieldBuilder.buildEdmTypeField(
          'PurchOrderFormNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedDlv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DLV: fieldBuilder.buildEdmTypeField(
          'ConfirmedDlv',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyOriginalSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ORIGINAL_SALES_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyOriginalSalesId',
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
         * Static representation of the {@link interCompanyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyCompanyId',
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
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link exchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'ReplenishmentLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'FreightZone',
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
         * Static representation of the {@link billToAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_TO_ADDRESS: fieldBuilder.buildEdmTypeField(
          'BillToAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_STATUS: fieldBuilder.buildEnumField(
          'PurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link interCompanyCustPurchOrderFormNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_CUST_PURCH_ORDER_FORM_NUM: fieldBuilder.buildEdmTypeField(
          'InterCompanyCustPurchOrderFormNum',
          'Edm.String',
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
         * Static representation of the {@link returnReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemEntrySource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_ENTRY_SOURCE: fieldBuilder.buildEnumField(
          'SystemEntrySource',
          PriceDiscSystemSource,
          true
        ),
        /**
         * Static representation of the {@link changeRequestRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_REQUEST_REQUIRED: fieldBuilder.buildEnumField(
          'ChangeRequestRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField('EndDisc', 'Edm.String', true),
        /**
         * Static representation of the {@link settleVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_VOUCHER: fieldBuilder.buildEnumField(
          'SettleVoucher',
          SettlementType,
          true
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link transportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'TransportationDocument',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchTableBiEntities)
      };
    }

    return this._schema;
  }
}
