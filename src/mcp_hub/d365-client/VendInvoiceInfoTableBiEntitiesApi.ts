/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceInfoTableBiEntities } from './VendInvoiceInfoTableBiEntities';
import { VendInvoiceInfoTableBiEntitiesRequestBuilder } from './VendInvoiceInfoTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DocumentOrigin } from './DocumentOrigin';
import { VendInvoiceMatchStatus } from './VendInvoiceMatchStatus';
import { VendInvoiceAutomationStatus } from './VendInvoiceAutomationStatus';
import { VendInvoiceSaveStatus } from './VendInvoiceSaveStatus';
import { LastMatchVarianceOptions } from './LastMatchVarianceOptions';
import { Listcode } from './Listcode';
import { UnknownNoYes } from './UnknownNoYes';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PurchInvoiceType } from './PurchInvoiceType';
import { DocumentStatus } from './DocumentStatus';
import { ParmJobStatus } from './ParmJobStatus';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
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
export class VendInvoiceInfoTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceInfoTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceInfoTableBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceInfoTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceInfoTableBiEntities;

  requestBuilder(): VendInvoiceInfoTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceInfoTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceInfoTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceInfoTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceInfoTableBiEntities<DeSerializersT>,
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
    typeof VendInvoiceInfoTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceInfoTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_REF_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORNO: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_ORIGIN: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentOrigin,
      true,
      true
    >;
    PURCH_NAME: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_DATE_COMMENT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAFOND_DATE_IT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCH_STATUS: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceMatchStatus,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ROUND_OFF: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTOMATION_STATUS: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceAutomationStatus,
      true,
      true
    >;
    VARIANCE_APPROVED_DATE_TIME: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_INVOICE_SAVE_STATUS: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceSaveStatus,
      true,
      true
    >;
    INCLUDE_IN_AUTOMATED_PROCESSING: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RE_CALCULATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LAST_MATCH_VARIANCE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      LastMatchVarianceOptions,
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOGISTICS_ELECTRONIC_ADDRESS: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VARIANCE_APPROVER: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_PAYMENT_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORM_FULL_INVOICE_MATCHING: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_ADVANCED: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_CODE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CORRECTION: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUM: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_LC_IMPORT_LINE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APPROVED: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HOLD: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_NUM_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VENDOR_VAT_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVED_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCL_TAX: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCH_RATE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POOL_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IMPORTED_SALES_TAX: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_NUM_TABLE_TYPE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxExemptNumberSourceType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TYPE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchInvoiceType,
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERING: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      DocumentStatus,
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IGNORE_CALCULATED_SALES_TAX: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARM_JOB_STATUS: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      ParmJobStatus,
      true,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_REQUESTED_WORKER_EMAIL: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ROUND_OFF: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUEST_STATUS: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceRequestStatus,
      true,
      true
    >;
    VARIANCE_COMMENT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_RELEASE_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBCONTRACT_INVOICE: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVER: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_SCHED: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMITTANCE_LOCATION: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BATCH_ADMINISTRATION: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANCE_APPROVED: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_AGREEMENT_HEADER_PSN: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT: OrderableEdmTypeField<
      VendInvoiceInfoTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceInfoTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link tableRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REF_ID: fieldBuilder.buildEdmTypeField(
          'TableRefId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', false),
        /**
         * Static representation of the {@link storno} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO: fieldBuilder.buildEnumField('Storno', NoYes, true),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link releaseDateComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReleaseDateComment',
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
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_STATUS: fieldBuilder.buildEnumField(
          'MatchStatus',
          VendInvoiceMatchStatus,
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
         * Static representation of the {@link taxRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'TaxRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link automationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_STATUS: fieldBuilder.buildEnumField(
          'AutomationStatus',
          VendInvoiceAutomationStatus,
          true
        ),
        /**
         * Static representation of the {@link varianceApprovedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_APPROVED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'VarianceApprovedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceSaveStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_SAVE_STATUS: fieldBuilder.buildEnumField(
          'VendInvoiceSaveStatus',
          VendInvoiceSaveStatus,
          true
        ),
        /**
         * Static representation of the {@link includeInAutomatedProcessing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_AUTOMATED_PROCESSING: fieldBuilder.buildEnumField(
          'IncludeInAutomatedProcessing',
          NoYes,
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
         * Static representation of the {@link reCalculate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RE_CALCULATE: fieldBuilder.buildEdmTypeField(
          'ReCalculate',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link lastMatchVariance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MATCH_VARIANCE: fieldBuilder.buildEnumField(
          'LastMatchVariance',
          LastMatchVarianceOptions,
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
         * Static representation of the {@link varianceApprover} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_APPROVER: fieldBuilder.buildEdmTypeField(
          'VarianceApprover',
          'Edm.Int64',
          false
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
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
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
         * Static representation of the {@link performFullInvoiceMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORM_FULL_INVOICE_MATCHING: fieldBuilder.buildEnumField(
          'PerformFullInvoiceMatching',
          NoYes,
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
         * Static representation of the {@link processingAdvanced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_ADVANCED: fieldBuilder.buildEnumField(
          'ProcessingAdvanced',
          NoYes,
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
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
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
         * Static representation of the {@link creditCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CORRECTION: fieldBuilder.buildEnumField(
          'CreditCorrection',
          UnknownNoYes,
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
         * Static representation of the {@link num} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM: fieldBuilder.buildEdmTypeField('Num', 'Edm.String', true),
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
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
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
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
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
         * Static representation of the {@link hold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD: fieldBuilder.buildEnumField('Hold', NoYes, true),
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
         * Static representation of the {@link vendorVatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VendorVATDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
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
        FIXED_EXCH_RATE: fieldBuilder.buildEnumField(
          'FixedExchRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link poolRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_REC_ID: fieldBuilder.buildEdmTypeField(
          'PoolRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
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
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
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
         * Static representation of the {@link importedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ImportedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ordering} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING: fieldBuilder.buildEnumField('Ordering', DocumentStatus, true),
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
         * Static representation of the {@link vendBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'VendBankAccountID',
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
         * Static representation of the {@link statProcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_PROC_ID: fieldBuilder.buildEdmTypeField(
          'StatProcId',
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
         * Static representation of the {@link cashDiscDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ignoreCalculatedSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_CALCULATED_SALES_TAX: fieldBuilder.buildEnumField(
          'IgnoreCalculatedSalesTax',
          NoYes,
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
         * Static representation of the {@link parmJobStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_JOB_STATUS: fieldBuilder.buildEnumField(
          'ParmJobStatus',
          ParmJobStatus,
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
         * Static representation of the {@link vendorRequestedWorkerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REQUESTED_WORKER_EMAIL: fieldBuilder.buildEdmTypeField(
          'VendorRequestedWorkerEmail',
          'Edm.String',
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
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
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
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          VendInvoiceRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link varianceComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_COMMENT: fieldBuilder.buildEdmTypeField(
          'VarianceComment',
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
         * Static representation of the {@link euroTriangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EURO_TRIANGULATION: fieldBuilder.buildEnumField(
          'EUROTriangulation',
          NoYes,
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
         * Static representation of the {@link invoiceReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReleaseDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link subcontractInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACT_INVOICE: fieldBuilder.buildEnumField(
          'SubcontractInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link approver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER: fieldBuilder.buildEdmTypeField(
          'Approver',
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
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link remittanceLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_LOCATION: fieldBuilder.buildEdmTypeField(
          'RemittanceLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link batchAdministration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ADMINISTRATION: fieldBuilder.buildEnumField(
          'BatchAdministration',
          NoYes,
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
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link varianceApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_APPROVED: fieldBuilder.buildEnumField(
          'VarianceApproved',
          NoYes,
          true
        ),
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
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField(
          'EndDisc',
          'Edm.Decimal',
          false
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
        ALL_FIELDS: new AllFields('*', VendInvoiceInfoTableBiEntities)
      };
    }

    return this._schema;
  }
}
