/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustInvoiceJourBiEntities } from './CustInvoiceJourBiEntities';
import { CustInvoiceJourBiEntitiesRequestBuilder } from './CustInvoiceJourBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { CommissionTypeIt } from './CommissionTypeIt';
import { PaymentStub } from './PaymentStub';
import { InvoiceTypeW } from './InvoiceTypeW';
import { SalesType } from './SalesType';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import { RefNum } from './RefNum';
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
export class CustInvoiceJourBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustInvoiceJourBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustInvoiceJourBiEntitiesApi<DeSerializersT> {
    return new CustInvoiceJourBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustInvoiceJourBiEntities;

  requestBuilder(): CustInvoiceJourBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustInvoiceJourBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustInvoiceJourBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustInvoiceJourBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustInvoiceJourBiEntities<DeSerializersT>,
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
    typeof CustInvoiceJourBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustInvoiceJourBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_PAYM_AMOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_DAY_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ITEM_NUM: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_TAX_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_DYNAMIC_QR_CODE_IN: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RC_SALES_LIST_UK: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTENT_LETTER_FROM_DATE_IT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_TYPE_IT: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      CommissionTypeIt,
      true,
      true
    >;
    BACKORDER: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    TAX_PRINT_ON_INVOICE: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    E_INVOICE_LINE_SPECIFIC: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_INVOICE_FRAMEWORK_TYPE_FR: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_TYPE_W: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceTypeW,
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CORRECTION: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ON_ACCOUNT_AMOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_LC_EXPORT_LINE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREPAYMENT: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TYPE: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      SalesType,
      true,
      true
    >;
    QR_CODE_SA: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_INTERNAL_ID_IT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFORMA: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_SALES_TAKER: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_POSTED: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_LINE_DISC: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONE_TIME_CUSTOMER: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISIONAL_ASSESSMENT_IN: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_MANDATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_POSTAL_ADDRESS: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SENT_ELECTRONICALLY: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_MANAGER_FR: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_SPECIFY_BY_LINE: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ROUND_OFF_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_INVOICE_SALES_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURN_STATUS: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      ReturnStatusHeader,
      true,
      true
    >;
    EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED_REC_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INCL_TAX: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CODE_REF_REC_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BILL_OF_LADING_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_MARKUP: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_EMAIL: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_MARKUP_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRIANGULATION: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COV_STATUS: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTED_ORIGINALS: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_LINE_DISC_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_MGMT_SITE_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ROUND_OFF: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_CODE_FR: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_NUM: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      RefNum,
      true,
      true
    >;
    REVERSE_CHARGE_AMOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_DISPATCH: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_COMPANY_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHED: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_ID_IT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_PURCH_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICING_NAME: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_TO_DATE_IT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CARRIER_BLIND_SHIPMENT: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EU_SALES_LIST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_SECONDARY: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_ORIGIN_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_CONFIRMED_ES: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_BALANCE_MST: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_BASE_DATE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_BALANCE: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UPDATED: EnumField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_DUE_AMOUNT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUM_TAX: OrderableEdmTypeField<
      CustInvoiceJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustInvoiceJourBiEntities<DeSerializers>>;
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
         * Static representation of the {@link mcrPaymAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PAYM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MCRPaymAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'InvoiceAmountMST',
          'Edm.Decimal',
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
         * Static representation of the {@link sumTaxMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TAX_MST: fieldBuilder.buildEdmTypeField(
          'SumTaxMST',
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
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
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rcSalesListUk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RC_SALES_LIST_UK: fieldBuilder.buildEdmTypeField(
          'RCSalesList_UK',
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
         * Static representation of the {@link intentLetterFromDateIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_FROM_DATE_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterFromDate_IT',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link eInvoiceAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
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
         * Static representation of the {@link backorder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKORDER: fieldBuilder.buildEnumField('Backorder', NoYes, true),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
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
         * Static representation of the {@link eInvoiceLineSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_LINE_SPECIFIC: fieldBuilder.buildEnumField(
          'EInvoiceLineSpecific',
          NoYes,
          true
        ),
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
         * Static representation of the {@link invoiceTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE_W: fieldBuilder.buildEnumField(
          'InvoiceType_W',
          InvoiceTypeW,
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
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CORRECTION: fieldBuilder.buildEnumField('IsCorrection', NoYes, true),
        /**
         * Static representation of the {@link onAccountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OnAccountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankLcExportLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_EXPORT_LINE: fieldBuilder.buildEdmTypeField(
          'BankLCExportLine',
          'Edm.Int64',
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
         * Static representation of the {@link salesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TYPE: fieldBuilder.buildEnumField('SalesType', SalesType, true),
        /**
         * Static representation of the {@link qrCodeSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CODE_SA: fieldBuilder.buildEdmTypeField(
          'QRCode_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intentLetterInternalIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_INTERNAL_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterInternalId_IT',
          'Edm.String',
          true
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
         * Static representation of the {@link workerSalesTaker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_TAKER: fieldBuilder.buildEdmTypeField(
          'WorkerSalesTaker',
          'Edm.Int64',
          false
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
         * Static representation of the {@link oneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'OneTimeCustomer',
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
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'inventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionalAssessmentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISIONAL_ASSESSMENT_IN: fieldBuilder.buildEnumField(
          'ProvisionalAssessment_IN',
          NoYes,
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
         * Static representation of the {@link directDebitMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE: fieldBuilder.buildEdmTypeField(
          'DirectDebitMandate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoicePostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InvoicePostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sentElectronically} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENT_ELECTRONICALLY: fieldBuilder.buildEnumField(
          'SentElectronically',
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
         * Static representation of the {@link taxSpecifyByLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SPECIFY_BY_LINE: fieldBuilder.buildEnumField(
          'TaxSpecifyByLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceRoundOffMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ROUND_OFF_MST: fieldBuilder.buildEdmTypeField(
          'InvoiceRoundOffMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxInvoiceSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_SALES_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceSalesId',
          'Edm.String',
          true
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
         * Static representation of the {@link returnStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STATUS: fieldBuilder.buildEnumField(
          'ReturnStatus',
          ReturnStatusHeader,
          true
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
         * Static representation of the {@link reversedRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReversedRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link billOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'BillOfLadingId',
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
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
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
         * Static representation of the {@link mcrEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_EMAIL: fieldBuilder.buildEdmTypeField(
          'MCREmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
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
         * Static representation of the {@link covStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_STATUS: fieldBuilder.buildEdmTypeField(
          'CovStatus',
          'Edm.Int32',
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
         * Static representation of the {@link printedOriginals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED_ORIGINALS: fieldBuilder.buildEdmTypeField(
          'PrintedOriginals',
          'Edm.Int32',
          false
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sumLineDiscMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC_MST: fieldBuilder.buildEdmTypeField(
          'SumLineDiscMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link printMgmtSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_MGMT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'PrintMgmtSiteId',
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
         * Static representation of the {@link refNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_NUM: fieldBuilder.buildEnumField('RefNum', RefNum, true),
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
         * Static representation of the {@link interCompanyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyCompanyId',
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
         * Static representation of the {@link intentLetterIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
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
         * Static representation of the {@link invoicingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_NAME: fieldBuilder.buildEdmTypeField(
          'InvoicingName',
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
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link intentLetterToDateIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_TO_DATE_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterToDate_IT',
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
         * Static representation of the {@link euSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST: fieldBuilder.buildEdmTypeField(
          'EUSalesList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_SECONDARY:
          fieldBuilder.buildEdmTypeField(
            'ReportingCurrencyExchangeRateSecondary',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link salesOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'SalesOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptDateConfirmedEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_CONFIRMED_ES: fieldBuilder.buildEdmTypeField(
          'ReceiptDateConfirmed_ES',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesBalanceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BALANCE_MST: fieldBuilder.buildEdmTypeField(
          'SalesBalanceMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
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
         * Static representation of the {@link salesBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BALANCE: fieldBuilder.buildEdmTypeField(
          'SalesBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link updated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATED: fieldBuilder.buildEnumField('Updated', NoYes, true),
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
         * Static representation of the {@link mcrDueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MCRDueAmount',
          'Edm.Decimal',
          false
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
        ALL_FIELDS: new AllFields('*', CustInvoiceJourBiEntities)
      };
    }

    return this._schema;
  }
}
