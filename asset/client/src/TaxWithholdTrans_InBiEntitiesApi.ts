/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxWithholdTrans_InBiEntities } from './TaxWithholdTrans_InBiEntities';
import { TaxWithholdTrans_InBiEntitiesRequestBuilder } from './TaxWithholdTrans_InBiEntitiesRequestBuilder';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
import { NoYes } from './NoYes';
import { TaxWithholdTransactionstatusIn } from './TaxWithholdTransactionstatusIn';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { TaxWithholdMinorHeadCodeIn } from './TaxWithholdMinorHeadCodeIn';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdComponentStatusIn } from './TaxWithholdComponentStatusIn';
import { PanStatusIn } from './PanStatusIn';
import { TaxModuleType } from './TaxModuleType';
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
export class TaxWithholdTrans_InBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TaxWithholdTrans_InBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxWithholdTrans_InBiEntitiesApi<DeSerializersT> {
    return new TaxWithholdTrans_InBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxWithholdTrans_InBiEntities;

  requestBuilder(): TaxWithholdTrans_InBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxWithholdTrans_InBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxWithholdTrans_InBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxWithholdTrans_InBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxWithholdTrans_InBiEntities<DeSerializersT>,
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
    typeof TaxWithholdTrans_InBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxWithholdTrans_InBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_ACCOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_DATE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAN: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NATURE_OF_REMITTANCE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_STATUS: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACKNOWLEDGERMENT_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_VEND_TRANS_INVOICE_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CERTIFICATE_RECEIVED_DATE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAN_REFERENCE_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_APPLICABILITY: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdTaxApplicabilityIn,
      true,
      true
    >;
    IS_TAX_INTERIM: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXEMPT: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_PAYM_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLED_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_COMPONENT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_COMPANY: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_LINE_NUM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERSON_DESIGNATION: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PART_OF_TURN_OVER: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_TRANS: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOVERABLE_CERTIFICATE_NUM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_FATHERS_NAME: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_AMOUNT_ORIGIN: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TURNOVER_THRESHOLD: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROVISIONAL_RECEIPT_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BSR_CODE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_OF_DEDUCTION: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_REP_COUNTER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CP_ORIG_INVOICE_REF_REC_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_CURRENCY: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_RECEIVABLE_ACCOUNT_VALUES_JSON: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TRANS_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE_ISSUE_DATE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HEADING_REC_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHEQUE_NUM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCESSION_CERTIFICATE_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdTransactionstatusIn,
      true,
      true
    >;
    TAX_WITHHOLD_AMOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADING_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REASON: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TRANS_REC_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_CODE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOVERABLE_ACCOUNT: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CERTIFICATE_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_VALID_FROM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHALLAN_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TAX_WITHHOLD_AMOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_TO_REMITTANCE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NATURE_OF_ASSESSEE: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    SETTLED: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTED_BASE_AMOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_COMPONENT_GROUP: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    THRESHOLD_VALID_TO: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_CALC_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINOR_HEAD_CODE: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdMinorHeadCodeIn,
      true,
      true
    >;
    WITHHOLD_BASE_AMOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdCodeTypeIn,
      true,
      true
    >;
    TAX_WITHHOLD_VALUE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AUTO_GENERATED: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALC_UNCALC_POSTED_TRANS: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPONENT_STATUS: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdComponentStatusIn,
      true,
      true
    >;
    ADJUSTED_TAX_WITHHOLD_AMOUNT: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TRANS_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADVANCE_PAYMENT: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_NAME: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERLOOK_THRESHOLD: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_TRANS_DATE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAMEOFDEDUCTEE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_LEDGER_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_INVOICE_INTERNAL_DEFAULT_GROUP: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SECTION_CODE: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_STATUS: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      PanStatusIn,
      true,
      true
    >;
    SOURCE: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxModuleType,
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORITY: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_CALCULATED: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURN_VOUCHER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_SETTLEMENT_PERIOD: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_REVERSAL: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_REG_NUMBER: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOOK_ENTRY: EnumField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_ORIGIN_MST: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      TaxWithholdTrans_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxWithholdTrans_InBiEntities<DeSerializers>>;
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
         * Static representation of the {@link paymAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link challanDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_DATE: fieldBuilder.buildEdmTypeField(
          'ChallanDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN: fieldBuilder.buildEdmTypeField('PAN', 'Edm.String', true),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link natureOfRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'NatureOfRemittance',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_STATUS: fieldBuilder.buildEdmTypeField(
          'LineStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acknowledgermentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACKNOWLEDGERMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AcknowledgermentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custVendTransInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_TRANS_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'CustVendTransInvoiceId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link certificateReceivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'CertificateReceivedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link panReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANReferenceNumber',
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
         * Static representation of the {@link taxApplicability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_APPLICABILITY: fieldBuilder.buildEnumField(
          'TaxApplicability',
          TaxWithholdTaxApplicabilityIn,
          true
        ),
        /**
         * Static representation of the {@link isTaxInterim} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_INTERIM: fieldBuilder.buildEnumField(
          'IsTaxInterim',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdBaseAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_BASE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxWithholdBaseAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        /**
         * Static representation of the {@link transPaymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_PAYM_ID: fieldBuilder.buildEdmTypeField(
          'TransPaymId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settledVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SettledVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlementVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SettlementVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_COMPONENT: fieldBuilder.buildEdmTypeField(
          'TaxWithholdComponent',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_COMPANY: fieldBuilder.buildEdmTypeField(
          'PaymCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ReturnLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link personDesignation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_DESIGNATION: fieldBuilder.buildEdmTypeField(
          'PersonDesignation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPartOfTurnOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PART_OF_TURN_OVER: fieldBuilder.buildEnumField(
          'IsPartOfTurnOver',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'AccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_TRANS: fieldBuilder.buildEdmTypeField(
          'CustInvoiceTrans',
          'Edm.Int64',
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
         * Static representation of the {@link recoverableCertificateNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_CERTIFICATE_NUM: fieldBuilder.buildEdmTypeField(
          'RecoverableCertificateNum',
          'Edm.String',
          true
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
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link personFathersName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FATHERS_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFathersName',
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
         * Static representation of the {@link taxWithholdAmountOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_AMOUNT_ORIGIN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAmountOrigin',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'InvoiceVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link turnoverThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TURNOVER_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'TurnoverThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link provisionalReceiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISIONAL_RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProvisionalReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bsrCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BSR_CODE: fieldBuilder.buildEdmTypeField('BSRCode', 'Edm.String', true),
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
         * Static representation of the {@link rateOfDeduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_OF_DEDUCTION: fieldBuilder.buildEdmTypeField(
          'RateOfDeduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxRepCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REP_COUNTER: fieldBuilder.buildEdmTypeField(
          'TaxRepCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cpOrigInvoiceRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CP_ORIG_INVOICE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'CPOrigInvoiceRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link ledgerDimensionReceivableAccountValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_RECEIVABLE_ACCOUNT_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'LedgerDimensionReceivableAccountValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sourceTransVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SourceTransVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificateIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'CertificateIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link headingRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADING_REC_ID: fieldBuilder.buildEdmTypeField(
          'HeadingRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link chequeNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHEQUE_NUM: fieldBuilder.buildEdmTypeField(
          'ChequeNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concessionCertificateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCESSION_CERTIFICATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConcessionCertificateNumber',
          'Edm.String',
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
         * Static representation of the {@link taxWithholdAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          TaxWithholdTransactionstatusIn,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headingTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADING_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'HeadingTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CODE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link recoverableAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_ACCOUNT: fieldBuilder.buildEnumField(
          'RecoverableAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link certificateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CertificateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thresholdValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ThresholdValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link challanNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChallanNumber',
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
         * Static representation of the {@link taxTaxWithholdAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TAX_WITHHOLD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxTaxWithholdAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countryRegionToRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_TO_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'CountryRegionToRemittance',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link natureOfAssessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE: fieldBuilder.buildEnumField(
          'NatureOfAssessee',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link settled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED: fieldBuilder.buildEnumField('Settled', NoYes, true),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link adjustedBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustedBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdComponentGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link thresholdValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ThresholdValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCalcAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALC_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCalcAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link minorHeadCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINOR_HEAD_CODE: fieldBuilder.buildEnumField(
          'MinorHeadCode',
          TaxWithholdMinorHeadCodeIn,
          true
        ),
        /**
         * Static representation of the {@link withholdBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLD_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WithholdBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdCodeTypeIn,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxAutoGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTO_GENERATED: fieldBuilder.buildEnumField(
          'TaxAutoGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calcUncalcPostedTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_UNCALC_POSTED_TRANS: fieldBuilder.buildEnumField(
          'CalcUncalcPostedTrans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link componentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_STATUS: fieldBuilder.buildEnumField(
          'ComponentStatus',
          TaxWithholdComponentStatusIn,
          true
        ),
        /**
         * Static representation of the {@link adjustedTaxWithholdAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_TAX_WITHHOLD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustedTaxWithholdAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceTransTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTransTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link advancePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_PAYMENT: fieldBuilder.buildEnumField(
          'AdvancePayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'PersonName',
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
         * Static representation of the {@link overlookThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERLOOK_THRESHOLD: fieldBuilder.buildEnumField(
          'OverlookThreshold',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'SourceTransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nameofdeductee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAMEOFDEDUCTEE: fieldBuilder.buildEdmTypeField(
          'Nameofdeductee',
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceInternalDefaultGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_INTERNAL_DEFAULT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendInvoiceInternalDefaultGroup',
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
         * Static representation of the {@link sectionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_CODE: fieldBuilder.buildEdmTypeField(
          'SectionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_STATUS: fieldBuilder.buildEnumField('PANStatus', PanStatusIn, true),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField('Source', TaxModuleType, true),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY: fieldBuilder.buildEdmTypeField(
          'Authority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATED: fieldBuilder.buildEnumField(
          'TaxWithholdCalculated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link returnVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ReturnVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdSettlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxWithholdSettlementPeriod',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transactionReversal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_REVERSAL: fieldBuilder.buildEnumField(
          'TransactionReversal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdRegNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_REG_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxWithholdRegNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bookEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ENTRY: fieldBuilder.buildEnumField('BookEntry', NoYes, true),
        /**
         * Static representation of the {@link amountOriginMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_ORIGIN_MST: fieldBuilder.buildEdmTypeField(
          'AmountOriginMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxWithholdTrans_InBiEntities)
      };
    }

    return this._schema;
  }
}
