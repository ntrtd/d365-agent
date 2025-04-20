/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTableBiEntities } from './SalesTableBiEntities';
import { SalesTableBiEntitiesRequestBuilder } from './SalesTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { WhsReleaseStatus } from './WhsReleaseStatus';
import { Listcode } from './Listcode';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { CommissionTypeIt } from './CommissionTypeIt';
import { PaymentStub } from './PaymentStub';
import { ShipCarrierDlvType } from './ShipCarrierDlvType';
import { DocumentStatus } from './DocumentStatus';
import { InvoiceTypeW } from './InvoiceTypeW';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { ModuleCustSales } from './ModuleCustSales';
import { SalesType } from './SalesType';
import { FreightSlipType } from './FreightSlipType';
import { BankDocumentType } from './BankDocumentType';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PlFiscalDocType } from './PlFiscalDocType';
import { DomExceptionType } from './DomExceptionType';
import { DomProcessStatus } from './DomProcessStatus';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { SettlementType } from './SettlementType';
import { ItemReservation } from './ItemReservation';
import { SalesStatus } from './SalesStatus';
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
export class SalesTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesTableBiEntitiesApi<DeSerializersT> {
    return new SalesTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTableBiEntities;

  requestBuilder(): SalesTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTableBiEntities<DeSerializersT>,
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
    typeof SalesTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXIM_PORTS_IN: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_ORDER_STOPPED: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_CFDI_CONFIRM_NUMBER_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_AGREEMENT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASE_STATUS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      WhsReleaseStatus,
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_FOLLOW_ORIGINAL_PRICING_METHOD: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMM_SALES_AMOUNT_TOTAL: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_DYNAMIC_QR_CODE_IN: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMISSION_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_GROUP_IN: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUM_REG_ID_TRIB_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_REGISTER_LT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_CONTRACT_END_DATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MPS_EXCLUDE_SALES_ORDER: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CARRIER_ACCOUNT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    REV_REC_MULTIPLE_SO_REALLOCATION: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DEADLINE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CFDI_TEMPORARY_EXPORT_MX: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_REALLOCATION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGIN: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      InterCompanyOrigin,
      true,
      true
    >;
    MPS_FULL_RUN_CTP_STATUS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      MpsFullRunCtpStatus,
      true,
      true
    >;
    SOURCE_CERTIFICATE_MX: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_IN_CREDIT_CONTROL: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_EXCLUDE_SALES_ORDER: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_REASON: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_TYPE_IT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      CommissionTypeIt,
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOM_IGNORE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    RETURN_REPLACEMENT_CREATED: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAT_PAYM_METHOD_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_ENTRY_CHANGE_POLICY: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIP_CARRIER_DLV_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      ShipCarrierDlvType,
      true,
      true
    >;
    CERTIFICATE_NUMBER_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASE_TAGGING: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_INVOICE_FRAMEWORK_TYPE_FR: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentStatus,
      true,
      true
    >;
    INVOICE_TYPE_W: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceTypeW,
      true,
      true
    >;
    DELIVERY_DATE_CONTROL_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    E_INVOICE_LINE_SPEC: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMM_CAMPAIGN_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_AUTHORIZATION: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_CONTRACT_START_DATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SAT_SHIPPING_REASON_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_REGIME_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AUTO_SUMMARY_MODULE_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      ModuleCustSales,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_REJECTED: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_TAGGING: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_INVOICE_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_POOL_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesType,
      true,
      true
    >;
    PDS_REBATE_PROGRAM_TMA_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTER_COMPANY_AUTO_CREATE_ORDERS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_LINE_DISC: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_LATEST_REVERSE_JOURNAL: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIP_CARRIER_RESIDENTIAL: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_ENTRY_CHANGEPOLICY: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKER_SALES_TAKER: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CRED_MAN_RELEASED_FROM_CREDIT_CONTROL: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_SLIP_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      FreightSlipType,
      true,
      true
    >;
    RETURN_REPLACEMENT_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankDocumentType,
      true,
      true
    >;
    CREDIT_CARD_CUST_REF_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIP_CARRIER_NAME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONE_TIME_CUSTOMER: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_ORIGINAL_CUST_ACCOUNT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CHANNEL_TABLE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_ORDER: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECT_DEBIT_MANDATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC_BASE_DAYS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_MODIFIED_TRANSACTION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREDIT_NOTE_REASON_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_EXPORT_ORDER_IN: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_MANAGER_FR: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_BATCH_ATTRIB_AUTO_RES: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCH_RATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_REGISTER_LT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM_REC_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_DIRECT_DELIVERY: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_STATUS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      ReturnStatusHeader,
      true,
      true
    >;
    SUB_BILL_CREATED_FROM_SB: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_REASON: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CODE_REF_REC_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCH_RATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ALLOW_INDIRECT_CREATION: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_SUPPRESS_CHILD_ITEMS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM_TABLE_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxExemptNumberSourceType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PALLET_TAGGING: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_SALES_RESPONSIBLE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_AUTO_NUMBERING_LT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FUNDING_SOURCE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_GROUP_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_ADD_VALUE_LV: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTER_COMPANY_DIRECT_DELIVERY_ORIG: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COV_STATUS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_CARD_AUTHORIZATION_ERROR: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAM_DEDUCTION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOM_ITERATIONS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_APPROVAL_AMOUNT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TDS_GROUP_IN: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUR_BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CARRIER_DELIVERY_CONTACT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOC_TYPE_PL: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      PlFiscalDocType,
      true,
      true
    >;
    DOM_EXCEPTION_TYPE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      DomExceptionType,
      true,
      true
    >;
    CRED_MAN_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_PURPOSE_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FOREIGN_TRADE_MX: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_ORDER_FORM_NUM: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMS_SHIPPING_BILL_IN: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_FR: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_BILL_TO_POSTAL_ADDRESS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOM_PROCESSED: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      DomProcessStatus,
      true,
      true
    >;
    INTER_COMPANY_ORIGINAL_SALES_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_CONFIRMED: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASOH_ORDER_CLASS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUP_SKIP_PRICING_CALCULATION: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GUP_DELAY_PRICING_CALCULATION: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_CUST_REBATE_GROUP_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHED: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAM_REBATE_REFERENCE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_ID_IT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_POSTAL_ADDRESS: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIP_CARRIER_EXPEDITED_SHIPMENT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_PURCH_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FISCAL_ADDRESS_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_ZONE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_AUTO_NUMBERING_LT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_ALLOW_INDIRECT_CREATION_ORIG: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CARRIER_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_NAME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEADLINE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CARRIER_BLIND_SHIPMENT: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORIGIN_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYSTEM_ENTRY_SOURCE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      PriceDiscSystemSource,
      true,
      true
    >;
    CASH_DISC_BASE_DATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_INCOTERM_CODE_MX: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_ASSESSEE_IN: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    SUB_BILL_BILL_TO_NAME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    ESTIMATE: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVATION: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    DOM_PROCESSED_DATE_TIME: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONS_TARGET_JP: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_FUEL_SURCHARGE: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_STATUS: EnumField<
      SalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
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
         * Static representation of the {@link mcrOrderStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ORDER_STOPPED: fieldBuilder.buildEnumField(
          'MCROrderStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link eInvoiceCfdiConfirmNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_CFDI_CONFIRM_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'EInvoiceCFDIConfirmNumber_MX',
          'Edm.String',
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
         * Static representation of the {@link releaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_STATUS: fieldBuilder.buildEnumField(
          'ReleaseStatus',
          WhsReleaseStatus,
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
         * Static representation of the {@link returnItemNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ITEM_NUM: fieldBuilder.buildEdmTypeField(
          'ReturnItemNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecFollowOriginalPricingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_FOLLOW_ORIGINAL_PRICING_METHOD: fieldBuilder.buildEnumField(
          'RevRecFollowOriginalPricingMethod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link smmSalesAmountTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_SALES_AMOUNT_TOTAL: fieldBuilder.buildEdmTypeField(
          'smmSalesAmountTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link printDynamicQrCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DYNAMIC_QR_CODE_IN: fieldBuilder.buildEnumField(
          'PrintDynamicQRCode_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link commissionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP: fieldBuilder.buildEdmTypeField(
          'CommissionGroup',
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
         * Static representation of the {@link numRegIdTribMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_REG_ID_TRIB_MX: fieldBuilder.buildEdmTypeField(
          'NumRegIdTrib_MX',
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
         * Static representation of the {@link packingSlipRegisterLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_REGISTER_LT: fieldBuilder.buildEnumField(
          'PackingSlipRegister_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecContractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mpsExcludeSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPS_EXCLUDE_SALES_ORDER: fieldBuilder.buildEnumField(
          'MpsExcludeSalesOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipCarrierAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link revRecMultipleSoReallocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_MULTIPLE_SO_REALLOCATION: fieldBuilder.buildEnumField(
          'RevRecMultipleSOReallocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DEADLINE: fieldBuilder.buildEdmTypeField(
          'ReturnDeadline',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link cfdiTemporaryExportMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_TEMPORARY_EXPORT_MX: fieldBuilder.buildEnumField(
          'CFDITemporaryExport_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecReallocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_REALLOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RevRecReallocationId',
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
         * Static representation of the {@link mpsFullRunCtpStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPS_FULL_RUN_CTP_STATUS: fieldBuilder.buildEnumField(
          'MPSFullRunCTPStatus',
          MpsFullRunCtpStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceCertificateMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CERTIFICATE_MX: fieldBuilder.buildEnumField(
          'SourceCertificate_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ShippingDateRequested',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link credManInCreditControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_IN_CREDIT_CONTROL: fieldBuilder.buildEnumField(
          'CredManInCreditControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManExcludeSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_EXCLUDE_SALES_ORDER: fieldBuilder.buildEnumField(
          'CredManExcludeSalesOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dlvReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_REASON: fieldBuilder.buildEdmTypeField(
          'DlvReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionTypeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_TYPE_IT: fieldBuilder.buildEnumField(
          'CommissionType_IT',
          CommissionTypeIt,
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
        /**
         * Static representation of the {@link domIgnore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_IGNORE: fieldBuilder.buildEnumField('DOMIgnore', NoYes, true),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
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
         * Static representation of the {@link satPaymMethodMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PAYM_METHOD_MX: fieldBuilder.buildEdmTypeField(
          'SATPaymMethod_MX',
          'Edm.String',
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
         * Static representation of the {@link shipCarrierDlvType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_DLV_TYPE: fieldBuilder.buildEnumField(
          'ShipCarrierDlvType',
          ShipCarrierDlvType,
          true
        ),
        /**
         * Static representation of the {@link certificateNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'CertificateNumber_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caseTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_TAGGING: fieldBuilder.buildEnumField('CaseTagging', NoYes, true),
        /**
         * Static representation of the {@link electronicInvoiceFrameworkTypeFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_INVOICE_FRAMEWORK_TYPE_FR: fieldBuilder.buildEdmTypeField(
          'ElectronicInvoiceFrameworkType_FR',
          'Edm.Int64',
          false
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
         * Static representation of the {@link invoiceTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE_W: fieldBuilder.buildEnumField(
          'InvoiceType_W',
          InvoiceTypeW,
          true
        ),
        /**
         * Static representation of the {@link deliveryDateControlType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_CONTROL_TYPE: fieldBuilder.buildEnumField(
          'DeliveryDateControlType',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link eInvoiceLineSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_LINE_SPEC: fieldBuilder.buildEnumField(
          'EInvoiceLineSpec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link smmCampaignId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_CAMPAIGN_ID: fieldBuilder.buildEdmTypeField(
          'smmCampaignId',
          'Edm.String',
          true
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
         * Static representation of the {@link quotationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_ID: fieldBuilder.buildEdmTypeField(
          'QuotationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTHORIZATION: fieldBuilder.buildEdmTypeField(
          'CreditCardAuthorization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecContractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link satShippingReasonMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_SHIPPING_REASON_MX: fieldBuilder.buildEdmTypeField(
          'SATShippingReason_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsRegimeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_REGIME_MX: fieldBuilder.buildEdmTypeField(
          'CustomsRegime_MX',
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
         * Static representation of the {@link autoSummaryModuleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SUMMARY_MODULE_TYPE: fieldBuilder.buildEnumField(
          'AutoSummaryModuleType',
          ModuleCustSales,
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
         * Static representation of the {@link credManRejected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_REJECTED: fieldBuilder.buildEnumField(
          'CredManRejected',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TAGGING: fieldBuilder.buildEnumField('ItemTagging', NoYes, true),
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
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
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
         * Static representation of the {@link custInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TYPE: fieldBuilder.buildEnumField('SalesType', SalesType, true),
        /**
         * Static representation of the {@link pdsRebateProgramTmaGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_REBATE_PROGRAM_TMA_GROUP: fieldBuilder.buildEdmTypeField(
          'PdsRebateProgramTMAGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ShippingDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link interCompanyAutoCreateOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_AUTO_CREATE_ORDERS: fieldBuilder.buildEnumField(
          'InterCompanyAutoCreateOrders',
          NoYes,
          true
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
         * Static representation of the {@link revRecLatestReverseJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_LATEST_REVERSE_JOURNAL: fieldBuilder.buildEdmTypeField(
          'RevRecLatestReverseJournal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierResidential} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_RESIDENTIAL: fieldBuilder.buildEnumField(
          'ShipCarrierResidential',
          NoYes,
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
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
         * Static representation of the {@link workerSalesTaker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_TAKER: fieldBuilder.buildEdmTypeField(
          'WorkerSalesTaker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link credManReleasedFromCreditControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_RELEASED_FROM_CREDIT_CONTROL: fieldBuilder.buildEnumField(
          'CredManReleasedFromCreditControl',
          NoYes,
          true
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
         * Static representation of the {@link returnReplacementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REPLACEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ReturnReplacementId',
          'Edm.String',
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
         * Static representation of the {@link creditCardCustRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CUST_REF_ID: fieldBuilder.buildEdmTypeField(
          'CreditCardCustRefId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_NAME: fieldBuilder.buildEdmTypeField(
          'ShipCarrierName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'OneTimeCustomer',
          NoYes,
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
         * Static representation of the {@link customerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF: fieldBuilder.buildEdmTypeField(
          'CustomerRef',
          'Edm.String',
          true
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
         * Static representation of the {@link retailChannelTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_TABLE: fieldBuilder.buildEdmTypeField(
          'RetailChannelTable',
          'Edm.Int64',
          false
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
         * Static representation of the {@link directDebitMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE: fieldBuilder.buildEdmTypeField(
          'DirectDebitMandate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cashDiscBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysModifiedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creditNoteReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CreditNoteReasonCode',
          'Edm.Int64',
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
         * Static representation of the {@link customsExportOrderIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_EXPORT_ORDER_IN: fieldBuilder.buildEnumField(
          'CustomsExportOrder_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectManagerFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_FR: fieldBuilder.buildEdmTypeField(
          'ProjectManager_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsBatchAttribAutoRes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_BATCH_ATTRIB_AUTO_RES: fieldBuilder.buildEnumField(
          'PdsBatchAttribAutoRes',
          NoYes,
          true
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
         * Static representation of the {@link invoiceRegisterLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REGISTER_LT: fieldBuilder.buildEnumField(
          'InvoiceRegister_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link returnStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STATUS: fieldBuilder.buildEnumField(
          'ReturnStatus',
          ReturnStatusHeader,
          true
        ),
        /**
         * Static representation of the {@link subBillCreatedFromSb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CREATED_FROM_SB: fieldBuilder.buildEnumField(
          'SubBillCreatedFromSB',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exportReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_REASON: fieldBuilder.buildEdmTypeField(
          'ExportReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link serviceCodeRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ServiceCodeRefRecId',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link subBillSuppressChildItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SUPPRESS_CHILD_ITEMS: fieldBuilder.buildEnumField(
          'SubBillSuppressChildItems',
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
         * Static representation of the {@link palletTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PALLET_TAGGING: fieldBuilder.buildEnumField(
          'PalletTagging',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link shipCarrierAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerSalesResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'WorkerSalesResponsible',
          'Edm.Int64',
          false
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
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxId', 'Edm.Int64', false),
        /**
         * Static representation of the {@link fundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'FundingSource',
          'Edm.Int64',
          false
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
         * Static representation of the {@link interCompanyDirectDeliveryOrig} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_DIRECT_DELIVERY_ORIG: fieldBuilder.buildEnumField(
          'InterCompanyDirectDeliveryOrig',
          NoYes,
          true
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
         * Static representation of the {@link covStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_STATUS: fieldBuilder.buildEdmTypeField(
          'CovStatus',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateRequested',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link creditCardAuthorizationError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTHORIZATION_ERROR: fieldBuilder.buildEnumField(
          'CreditCardAuthorizationError',
          NoYes,
          true
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
         * Static representation of the {@link tamDeductionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_ID: fieldBuilder.buildEdmTypeField(
          'TAMDeductionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link domIterations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_ITERATIONS: fieldBuilder.buildEdmTypeField(
          'DOMIterations',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardApprovalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_APPROVAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditCardApprovalAmount',
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
         * Static representation of the {@link curBankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUR_BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'CurBankAccount_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
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
         * Static representation of the {@link shipCarrierDeliveryContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_DELIVERY_CONTACT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierDeliveryContact',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocTypePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOC_TYPE_PL: fieldBuilder.buildEnumField(
          'FiscalDocType_PL',
          PlFiscalDocType,
          true
        ),
        /**
         * Static representation of the {@link domExceptionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_EXCEPTION_TYPE: fieldBuilder.buildEnumField(
          'DOMExceptionType',
          DomExceptionType,
          true
        ),
        /**
         * Static representation of the {@link credManId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ID: fieldBuilder.buildEdmTypeField(
          'CredManId',
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
         * Static representation of the {@link satPurposeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PURPOSE_MX: fieldBuilder.buildEdmTypeField(
          'SATPurpose_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'BankAccount_LV',
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
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link foreignTradeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_TRADE_MX: fieldBuilder.buildEnumField(
          'ForeignTrade_MX',
          NoYes,
          true
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
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customsShippingBillIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_SHIPPING_BILL_IN: fieldBuilder.buildEnumField(
          'CustomsShippingBill_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCodeFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_FR: fieldBuilder.buildEdmTypeField(
          'ServiceCode_FR',
          'Edm.String',
          true
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
         * Static representation of the {@link subBillBillToPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILL_TO_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'SubBillBillToPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link domProcessed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_PROCESSED: fieldBuilder.buildEnumField(
          'DOMProcessed',
          DomProcessStatus,
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
         * Static representation of the {@link receiptDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateConfirmed',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link asohOrderClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASOH_ORDER_CLASS: fieldBuilder.buildEdmTypeField(
          'ASOHOrderClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gupSkipPricingCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUP_SKIP_PRICING_CALCULATION: fieldBuilder.buildEnumField(
          'GUPSkipPricingCalculation',
          NoYes,
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
         * Static representation of the {@link gupDelayPricingCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUP_DELAY_PRICING_CALCULATION: fieldBuilder.buildEnumField(
          'GUPDelayPricingCalculation',
          NoYes,
          true
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
         * Static representation of the {@link pdsCustRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CUST_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PdsCustRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custBankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'CustBankAccount_LV',
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
         * Static representation of the {@link tamRebateReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'TAMRebateReference',
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
         * Static representation of the {@link intentLetterIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ShipCarrierPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierExpeditedShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_EXPEDITED_SHIPMENT: fieldBuilder.buildEnumField(
          'ShipCarrierExpeditedShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyPurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyPurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link fiscalAddressMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ADDRESS_MX: fieldBuilder.buildEdmTypeField(
          'FiscalAddress_MX',
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
         * Static representation of the {@link packingSlipAutoNumberingLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_AUTO_NUMBERING_LT: fieldBuilder.buildEnumField(
          'PackingSlipAutoNumbering_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyAllowIndirectCreationOrig} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ALLOW_INDIRECT_CREATION_ORIG: fieldBuilder.buildEnumField(
          'InterCompanyAllowIndirectCreationOrig',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShipCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_NAME: fieldBuilder.buildEdmTypeField(
          'SalesName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEADLINE: fieldBuilder.buildEdmTypeField(
          'Deadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierBlindShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_BLIND_SHIPMENT: fieldBuilder.buildEnumField(
          'ShipCarrierBlindShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'SalesOriginId',
          'Edm.String',
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
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link cashDiscBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link satIncotermCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_INCOTERM_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATIncotermCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField('EndDisc', 'Edm.String', true),
        /**
         * Static representation of the {@link natureOfAssesseeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE_IN: fieldBuilder.buildEnumField(
          'NatureOfAssessee_IN',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link subBillBillToName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILL_TO_NAME: fieldBuilder.buildEdmTypeField(
          'SubBillBillToName',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link estimate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE: fieldBuilder.buildEdmTypeField(
          'Estimate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION: fieldBuilder.buildEnumField(
          'Reservation',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link domProcessedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_PROCESSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DOMProcessedDateTime',
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
         * Static representation of the {@link salesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'SalesUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierFuelSurcharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_FUEL_SURCHARGE: fieldBuilder.buildEnumField(
          'ShipCarrierFuelSurcharge',
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link salesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STATUS: fieldBuilder.buildEnumField(
          'SalesStatus',
          SalesStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTableBiEntities)
      };
    }

    return this._schema;
  }
}
