/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxUncommittedBiEntities } from './TaxUncommittedBiEntities';
import { TaxUncommittedBiEntitiesRequestBuilder } from './TaxUncommittedBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { LedgerPostingType } from './LedgerPostingType';
import { TaxWarning } from './TaxWarning';
import { TaxTypeBr } from './TaxTypeBr';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { TaxTypeMx } from './TaxTypeMx';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { TaxOrigin } from './TaxOrigin';
import { TaxModuleType } from './TaxModuleType';
import { TaxDirection } from './TaxDirection';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';
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
export class TaxUncommittedBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxUncommittedBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxUncommittedBiEntitiesApi<DeSerializersT> {
    return new TaxUncommittedBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxUncommittedBiEntities;

  requestBuilder(): TaxUncommittedBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxUncommittedBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxUncommittedBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxUncommittedBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxUncommittedBiEntities<DeSerializersT>,
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
    typeof TaxUncommittedBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxUncommittedBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMPTY_TAX_BASE_FOR_OUTGOING_TAX_W: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_RECEIVABLE_LONG_TERM_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_RATE_BASE_AMOUNT_CUR_REGULATED: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXEMPT_TAX: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISV_FEATURE_SETUP_NAME: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE_TAX_BASE_AMOUNT_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_OVER_UNDER_PAYMENT: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_EXEMPT_BASE_AMOUNT_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_TAX_EXCHANGE_RATE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATION_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_VALUE_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxFiscalValueBr,
      true,
      true
    >;
    EXCHANGE_RATE_SOURCE_BASE_AMOUNT_REGULATED: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_IN_COST_PRICE_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATION_POSTING_TYPE: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARNING: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWarning,
      true,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_DIMENSION_REV_IN_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISV_FEATURE_SETUP_GUID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TAX_BASE_AMOUNT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR_REAL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_TAX_AMOUNT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_DUE_DATE_W: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_IN_COST_PRICE_MST: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_OTHER_BASE_AMOUNT_MST_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PREPAYMENT: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_LIMIT_REACHED: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADING_TABLE_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUST_VEND_NAME_PL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_RU_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_OTHER_TAX_AMOUNT_MST_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_OTHER_BASE_TAX_AMOUNT_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_SOURCE_REC_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MANUAL_INSERTED_TAX: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVERSE_CHARGE_W: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_EXCHANGE_RATE_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TYPE_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    INVOICE_REC_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WITHOUT_TAX_TRANS_RU: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAXATION_CODE_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TAX_AMOUNT_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCLUDED_IN_PRICE_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_OFFSET: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTPONE_VAT: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_RATE_TAX_BASE_AMOUNT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_NUM_PL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_IN_COST_PRICE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_IN_COST_PRICE_REGULATED: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_EXCHANGE_RATE_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAXATION_CODE_ADJ_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_EXEMPT_TAX_AMOUNT_MST_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_SALES_OFFSET_LEDGER_DIMENSION_BR_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_SOURCE_REGULATE_AMOUNT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_IN_COST_PRICE_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESSING_PL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRACOM_VAT: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    TAX_OFFSET_USE_TAX_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CURRENCY_CODE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_OPERATION_CODE_RU: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_TAX_AGENT_VEND_ACCOUNT_RU: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATION_DATE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_BASE_AMOUNT_REP: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE_RU: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_EXEMPT_BASE_AMOUNT_MST_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GSTHST_TAX_TYPE_CA: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    TAX_REDUCTION_PCT_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TAX_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_REGULATED: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNREALIZED_TAX: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TYPE_MX: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeMx,
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_RAW: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_BASE_AMOUNT_ORIG: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE_PL: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_OTHER_BASE_AMOUNT_BR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_CALCULATED: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_REPORTS: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CODE_COMBINATION_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_DIMENSION_IN_VALUES_JSON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAXATION_ORIGIN_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      FiTaxationOriginBr,
      true,
      true
    >;
    NEGATIVE_TAX: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ORIGIN: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxOrigin,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VALUE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxModuleType,
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_DIRECTION: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxDirection,
      true,
      true
    >;
    TAX_BASE_AMOUNT_RAW: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADING_REC_ID: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_BASE_QTY: OrderableEdmTypeField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_SUBSTITUTION_BR: EnumField<
      TaxUncommittedBiEntities<DeSerializers>,
      DeSerializersT,
      TaxSubstitutionEnumBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxUncommittedBiEntities<DeSerializers>>;
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
         * Static representation of the {@link emptyTaxBaseForOutgoingTaxW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPTY_TAX_BASE_FOR_OUTGOING_TAX_W: fieldBuilder.buildEnumField(
          'EmptyTaxBaseForOutgoingTax_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxReceivableLongTermBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RECEIVABLE_LONG_TERM_BR: fieldBuilder.buildEnumField(
          'TaxReceivableLongTerm_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchangeRateBaseAmountCurRegulated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_BASE_AMOUNT_CUR_REGULATED: fieldBuilder.buildEdmTypeField(
          'ExchangeRateBaseAmountCurRegulated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exemptTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_TAX: fieldBuilder.buildEnumField('ExemptTax', NoYes, true),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link isvFeatureSetupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISV_FEATURE_SETUP_NAME: fieldBuilder.buildEdmTypeField(
          'ISVFeatureSetupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateTaxBaseAmountRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_BASE_AMOUNT_REP: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxBaseAmountRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isOverUnderPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVER_UNDER_PAYMENT: fieldBuilder.buildEnumField(
          'IsOverUnderPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceExemptBaseAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_EXEMPT_BASE_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'SourceExemptBaseAmount_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link partyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'PartyTaxId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesTaxExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SalesTaxExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceTaxAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TAX_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceTaxAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'OperationLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalValueBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_VALUE_BR: fieldBuilder.buildEnumField(
          'FiscalValue_BR',
          TaxFiscalValueBr,
          true
        ),
        /**
         * Static representation of the {@link exchangeRateSourceBaseAmountRegulated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_SOURCE_BASE_AMOUNT_REGULATED:
          fieldBuilder.buildEdmTypeField(
            'ExchangeRateSourceBaseAmountRegulated',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxInCostPriceCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE_CUR: fieldBuilder.buildEdmTypeField(
          'TaxInCostPriceCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_POSTING_TYPE: fieldBuilder.buildEnumField(
          'OperationPostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link taxAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARNING: fieldBuilder.buildEnumField('Warning', TaxWarning, true),
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
         * Static representation of the {@link ledgerDimensionRevInValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_REV_IN_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionRev_INValuesJson',
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
         * Static representation of the {@link isvFeatureSetupGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISV_FEATURE_SETUP_GUID: fieldBuilder.buildEdmTypeField(
          'ISVFeatureSetupGuid',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link taxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceTaxAmountCurReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TAX_AMOUNT_CUR_REAL: fieldBuilder.buildEdmTypeField(
          'SourceTaxAmountCurReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DUE_DATE_W: fieldBuilder.buildEdmTypeField(
          'VatDueDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxInCostPriceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE_MST: fieldBuilder.buildEdmTypeField(
          'TaxInCostPriceMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceOtherBaseAmountMstBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OTHER_BASE_AMOUNT_MST_BR: fieldBuilder.buildEdmTypeField(
          'SourceOtherBaseAmountMST_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentSourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ParentSourceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
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
         * Static representation of the {@link taxLimitReached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIMIT_REACHED: fieldBuilder.buildEnumField(
          'TaxLimitReached',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceBaseAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCur',
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
         * Static representation of the {@link custVendNamePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_NAME_PL: fieldBuilder.buildEdmTypeField(
          'CustVendName_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionRuValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_RU_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimension_RUValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceOtherTaxAmountMstBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OTHER_TAX_AMOUNT_MST_BR: fieldBuilder.buildEdmTypeField(
          'SourceOtherTaxAmountMST_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceOtherBaseTaxAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OTHER_BASE_TAX_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'SourceOtherBaseTaxAmount_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxAmountRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_REP: fieldBuilder.buildEdmTypeField(
          'TaxAmountRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentSourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentSourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link manualInsertedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_INSERTED_TAX: fieldBuilder.buildEnumField(
          'ManualInsertedTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
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
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
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
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
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
         * Static representation of the {@link salesTaxExchangeRateCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_EXCHANGE_RATE_CUR: fieldBuilder.buildEdmTypeField(
          'SalesTaxExchangeRateCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_BR: fieldBuilder.buildEnumField('TaxType_BR', TaxTypeBr, true),
        /**
         * Static representation of the {@link invoiceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link withoutTaxTransRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHOUT_TAX_TRANS_RU: fieldBuilder.buildEnumField(
          'WithoutTaxTrans_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxationCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateTaxAmountRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_AMOUNT_REP: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxAmountRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link includedInPriceBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDED_IN_PRICE_BR: fieldBuilder.buildEnumField(
          'IncludedInPrice_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OFFSET: fieldBuilder.buildEnumField('IsOffset', NoYes, true),
        /**
         * Static representation of the {@link postponeVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTPONE_VAT: fieldBuilder.buildEnumField('PostponeVAT', NoYes, true),
        /**
         * Static representation of the {@link exchangeRateTaxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatNumPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_PL: fieldBuilder.buildEdmTypeField(
          'VATNum_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxInCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'TaxInCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link taxInCostPriceRegulated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE_REGULATED: fieldBuilder.buildEdmTypeField(
          'TaxInCostPriceRegulated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxExchangeRateRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_EXCHANGE_RATE_REP: fieldBuilder.buildEdmTypeField(
          'SalesTaxExchangeRateRep',
          'Edm.Decimal',
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
         * Static representation of the {@link exchangeRateRegulateAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_REGULATE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'ExchangeRateRegulateAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxationCodeAdjBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE_ADJ_BR: fieldBuilder.buildEdmTypeField(
          'TaxationCodeAdj_BR',
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
         * Static representation of the {@link sourceExemptTaxAmountMstBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_EXEMPT_TAX_AMOUNT_MST_BR: fieldBuilder.buildEdmTypeField(
          'SourceExemptTaxAmountMST_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxSalesOffsetLedgerDimensionBrValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SALES_OFFSET_LEDGER_DIMENSION_BR_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'TaxSalesOffsetLedgerDimension_BRValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEnumField('IsDeleted', NoYes, true),
        /**
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateSourceRegulateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_SOURCE_REGULATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateSourceRegulateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxInCostPriceRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE_REP: fieldBuilder.buildEdmTypeField(
          'TaxInCostPriceRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressingPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSING_PL: fieldBuilder.buildEdmTypeField(
          'Addressing_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intracomVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRACOM_VAT: fieldBuilder.buildEnumField('IntracomVAT', NoYes, true),
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
         * Static representation of the {@link taxOffsetUseTaxLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OFFSET_USE_TAX_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'TaxOffsetUseTaxLedgerDimensionValuesJson',
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SourceCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatOperationCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE_RU: fieldBuilder.buildEdmTypeField(
          'VATOperationCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatTaxAgentVendAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_TAX_AGENT_VEND_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATTaxAgentVendAccount_RU',
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
         * Static representation of the {@link calculationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_DATE: fieldBuilder.buildEdmTypeField(
          'CalculationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxBaseAmountRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_REP: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingProfileRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_RU: fieldBuilder.buildEdmTypeField(
          'PostingProfile_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceExemptBaseAmountMstBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_EXEMPT_BASE_AMOUNT_MST_BR: fieldBuilder.buildEdmTypeField(
          'SourceExemptBaseAmountMST_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchRateSecond} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECOND: fieldBuilder.buildEdmTypeField(
          'ExchRateSecond',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link gsthstTaxTypeCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTHST_TAX_TYPE_CA: fieldBuilder.buildEnumField(
          'GSTHSTTaxType_CA',
          GsthstTaxTypeCa,
          true
        ),
        /**
         * Static representation of the {@link taxReductionPctBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REDUCTION_PCT_BR: fieldBuilder.buildEdmTypeField(
          'TaxReductionPct_BR',
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
         * Static representation of the {@link exchangeRateTaxBaseAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_BASE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxBaseAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceBaseAmountCurRegulated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR_REGULATED: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCurRegulated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateTaxAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TAX_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTaxAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unrealizedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_TAX: fieldBuilder.buildEnumField(
          'UnrealizedTax',
          NoYes,
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
         * Static representation of the {@link taxTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_MX: fieldBuilder.buildEnumField('TaxType_MX', TaxTypeMx, true),
        /**
         * Static representation of the {@link sourceBaseAmountCurRaw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR_RAW: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCurRaw',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxBaseAmountOrig} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_ORIG: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountOrig',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_PL: fieldBuilder.buildEdmTypeField(
          'DocumentDate_PL',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceOtherBaseAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OTHER_BASE_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'SourceOtherBaseAmount_BR',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link sourceRegulateAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REGULATE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceRegulateAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceBaseAmountCurCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR_CALCULATED: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCurCalculated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORTS: fieldBuilder.buildEnumField('TaxReports', NoYes, true),
        /**
         * Static representation of the {@link taxCodeCombinationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_COMBINATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeCombinationId',
          'Edm.Int32',
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
         * Static representation of the {@link ledgerDimensionInValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_IN_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimension_INValuesJson',
          'Edm.String',
          true
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
         * Static representation of the {@link taxationOriginBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_ORIGIN_BR: fieldBuilder.buildEnumField(
          'TaxationOrigin_BR',
          FiTaxationOriginBr,
          true
        ),
        /**
         * Static representation of the {@link negativeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_TAX: fieldBuilder.buildEnumField('NegativeTax', NoYes, true),
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
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true),
        /**
         * Static representation of the {@link taxOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ORIGIN: fieldBuilder.buildEnumField('TaxOrigin', TaxOrigin, true),
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
         * Static representation of the {@link taxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField('Source', TaxModuleType, true),
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
         * Static representation of the {@link taxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DIRECTION: fieldBuilder.buildEnumField(
          'TaxDirection',
          TaxDirection,
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountRaw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_RAW: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountRaw',
          'Edm.Decimal',
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
         * Static representation of the {@link taxBaseQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_QTY: fieldBuilder.buildEdmTypeField(
          'TaxBaseQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxSubstitutionBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SUBSTITUTION_BR: fieldBuilder.buildEnumField(
          'TaxSubstitution_BR',
          TaxSubstitutionEnumBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxUncommittedBiEntities)
      };
    }

    return this._schema;
  }
}
