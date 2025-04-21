/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendSettlementBiEntities } from './VendSettlementBiEntities';
import { VendSettlementBiEntitiesRequestBuilder } from './VendSettlementBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';
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
export class VendSettlementBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendSettlementBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendSettlementBiEntitiesApi<DeSerializersT> {
    return new VendSettlementBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendSettlementBiEntities;

  requestBuilder(): VendSettlementBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendSettlementBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendSettlementBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendSettlementBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendSettlementBiEntities<DeSerializersT>,
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
    typeof VendSettlementBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendSettlementBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLE_TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_TAX_AGENT_AMOUNT_RU: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_CASH_DISC_DATE: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLE_TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_TRANS_RU: EnumField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FINE_AMOUNT_BR: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_DATE_RU: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PENNY_DIFF: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UTILIZED_CASH_DISC: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_AMOUNT_CUR: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_REC_ID: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VOUCHER_RU: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_REPORTING: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISCOUNT_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_MST: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_PAYMENT_GROUP: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_ADJUSTMENT: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_ADJUSTMENT_REPORTING: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_RECID: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLEMENT_VOUCHER: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANS_VOUCHER: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_NUM: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVERSED_REC_ID_RU: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_COMPANY: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_VOUCHER: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_OPEN: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CAN_BE_REVERSED: EnumField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_GROUP: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTEREST_AMOUNT_BR: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_INTEREST_DATE_DUMMY: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      VendSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendSettlementBiEntities<DeSerializers>>;
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
         * Static representation of the {@link settleTax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatTaxAgentAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_TAX_AGENT_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATTaxAgentAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendCashDiscDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CASH_DISC_DATE: fieldBuilder.buildEdmTypeField(
          'VendCashDiscDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link reverseTransRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_TRANS_RU: fieldBuilder.buildEnumField(
          'ReverseTrans_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fineAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'FineAmount_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportingDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_DATE_RU: fieldBuilder.buildEdmTypeField(
          'ReportingDate_RU',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link pennyDiff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PENNY_DIFF: fieldBuilder.buildEdmTypeField(
          'PennyDiff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link utilizedCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UTILIZED_CASH_DISC: fieldBuilder.buildEdmTypeField(
          'UtilizedCashDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settleAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SettleAmountCur',
          'Edm.Decimal',
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
         * Static representation of the {@link thirdPartyBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankAccountId',
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
         * Static representation of the {@link taxVoucherRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VOUCHER_RU: fieldBuilder.buildEdmTypeField(
          'TaxVoucher_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE_BR: fieldBuilder.buildEdmTypeField(
          'InterestCode_BR',
          'Edm.String',
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
         * Static representation of the {@link settleAmountReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_REPORTING: fieldBuilder.buildEdmTypeField(
          'SettleAmountReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'CashDiscountLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link settleAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'SettleAmountMST',
          'Edm.Decimal',
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
         * Static representation of the {@link exchAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'ExchAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchAdjustmentReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJUSTMENT_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchAdjustmentReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offsetRecid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_RECID: fieldBuilder.buildEdmTypeField(
          'OffsetRecid',
          'Edm.Int64',
          false
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
         * Static representation of the {@link remittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'RemittanceAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fineCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'FineCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetTransVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TRANS_VOUCHER: fieldBuilder.buildEdmTypeField(
          'OffsetTransVoucher',
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
         * Static representation of the {@link offsetAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'OffsetAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          LedgerTransType,
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reversedRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_REC_ID_RU: fieldBuilder.buildEdmTypeField(
          'ReversedRecId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_COMPANY: fieldBuilder.buildEdmTypeField(
          'TransCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statusVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_VOUCHER: fieldBuilder.buildEdmTypeField(
          'StatusVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transOpen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_OPEN: fieldBuilder.buildEdmTypeField(
          'TransOpen',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link canBeReversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_BE_REVERSED: fieldBuilder.buildEnumField(
          'CanBeReversed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlementGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'SettlementGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link offsetCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_COMPANY: fieldBuilder.buildEdmTypeField(
          'OffsetCompany',
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
         * Static representation of the {@link interestAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'InterestAmount_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastInterestDateDummy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_INTEREST_DATE_DUMMY: fieldBuilder.buildEdmTypeField(
          'LastInterestDateDummy',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendSettlementBiEntities)
      };
    }

    return this._schema;
  }
}
