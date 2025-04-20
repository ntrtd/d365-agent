/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxWithholdUncommitted_InBiEntities } from './TaxWithholdUncommitted_InBiEntities';
import { TaxWithholdUncommitted_InBiEntitiesRequestBuilder } from './TaxWithholdUncommitted_InBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxWithholdTransactionstatusIn } from './TaxWithholdTransactionstatusIn';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
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
export class TaxWithholdUncommitted_InBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TaxWithholdUncommitted_InBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): TaxWithholdUncommitted_InBiEntitiesApi<DeSerializersT> {
    return new TaxWithholdUncommitted_InBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxWithholdUncommitted_InBiEntities;

  requestBuilder(): TaxWithholdUncommitted_InBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxWithholdUncommitted_InBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxWithholdUncommitted_InBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxWithholdUncommitted_InBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxWithholdUncommitted_InBiEntities<DeSerializersT>,
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
    typeof TaxWithholdUncommitted_InBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxWithholdUncommitted_InBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXEMPT_TAX: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCESSION_CERTIFICATE_NUMBER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERLOOK_THRESHOLD: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_CODE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_INTERIM: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_CALC_AS_NON_TAX_TRANS_IN_VOUCHER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_CURRENCY_C_ODE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_BASE_AMOUNT: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR_REAL: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdTransactionstatusIn,
      true,
      true
    >;
    THRESHOLD_VALID_FROM: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADING_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CP_ORIG_INVOICE_REF_REC_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    THRESHOLD_VALID_TO: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTRY_REGION_TO_REMITTANCE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_TRANS_DATE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_TRANS_TABLE_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALC_UNCALC_POSTED_TRANS: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_DIMENSION_DEFAULT_ACCOUNT_VALUES_JSON: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TURNOVER_THRESHOLD: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NATURE_OF_REMITTANCE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RATE_OF_DEDUCTION: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADVANCE_PAYMENT: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CURRENCY_CODE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_APPLICABILITY: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdTaxApplicabilityIn,
      true,
      true
    >;
    TAX_WITHHOLD_VALUE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATION_DATE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_TYPE: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdCodeTypeIn,
      true,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TRANS_VOUCHER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_REGULATED: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_RAW: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_TRANS_REC_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TAX_CALCULATED: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_CALCULATED: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_ORIGIN_MST: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PART_OF_TURN_OVER: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE: EnumField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      TaxModuleType,
      true,
      true
    >;
    HEADING_REC_ID: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_BASE_AMOUNT_RAW: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACKNOWLEDGERMENT_NUMBER: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BASE_QTY: OrderableEdmTypeField<
      TaxWithholdUncommitted_InBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxWithholdUncommitted_InBiEntities<DeSerializers>>;
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
         * Static representation of the {@link concessionCertificateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCESSION_CERTIFICATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConcessionCertificateNumber',
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
         * Static representation of the {@link taxWithholdCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CODE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCode',
          'Edm.String',
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
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxCalcAsNonTaxTransInVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALC_AS_NON_TAX_TRANS_IN_VOUCHER: fieldBuilder.buildEdmTypeField(
          'TaxCalcAsNonTaxTransInVoucher',
          'Edm.String',
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
         * Static representation of the {@link sourceCurrencyCOde} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CURRENCY_C_ODE: fieldBuilder.buildEdmTypeField(
          'SourceCurrencyCOde',
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
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link taxAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'TaxAmountCur',
          'Edm.Decimal',
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          TaxWithholdTransactionstatusIn,
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
         * Static representation of the {@link cpOrigInvoiceRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CP_ORIG_INVOICE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'CPOrigInvoiceRefRecId',
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
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
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
         * Static representation of the {@link sourceTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'SourceTransDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link calcUncalcPostedTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_UNCALC_POSTED_TRANS: fieldBuilder.buildEnumField(
          'CalcUncalcPostedTrans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDefaultAccountValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DEFAULT_ACCOUNT_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'LedgerDimensionDefaultAccountValuesJson',
            'Edm.String',
            true
          ),
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
         * Static representation of the {@link natureOfRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'NatureOfRemittance',
          'Edm.Int64',
          false
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
         * Static representation of the {@link advancePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_PAYMENT: fieldBuilder.buildEnumField(
          'AdvancePayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCurrencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link taxWithholdValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link taxWithholdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_TYPE: fieldBuilder.buildEnumField(
          'TaxWithholdType',
          TaxWithholdCodeTypeIn,
          true
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
         * Static representation of the {@link sourceTransVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SourceTransVoucher',
          'Edm.String',
          true
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
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link sourceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceTransRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link isTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsTaxCalculated',
          NoYes,
          true
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
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link isPartOfTurnOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PART_OF_TURN_OVER: fieldBuilder.buildEnumField(
          'IsPartOfTurnOver',
          NoYes,
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField('Source', TaxModuleType, true),
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
         * Static representation of the {@link taxBaseAmountRaw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_RAW: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountRaw',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxBaseQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_QTY: fieldBuilder.buildEdmTypeField(
          'TaxBaseQty',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxWithholdUncommitted_InBiEntities)
      };
    }

    return this._schema;
  }
}
