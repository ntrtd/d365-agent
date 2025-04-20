/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustTransOpens } from './CustTransOpens';
import { CustTransOpensRequestBuilder } from './CustTransOpensRequestBuilder';
import { CustTransactionsApi } from './CustTransactionsApi';
import { UseCashDisc } from './UseCashDisc';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { NoYes } from './NoYes';
import { PaymSchedTaxDistribution } from './PaymSchedTaxDistribution';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustTransOpensApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustTransOpens<DeSerializersT>, DeSerializersT>
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
  ): CustTransOpensApi<DeSerializersT> {
    return new CustTransOpensApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link custTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANSACTION: OneToOneLink<
      CustTransOpens<DeSerializersT>,
      DeSerializersT,
      CustTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustTransactionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUST_TRANSACTION: new OneToOneLink('CustTransaction', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CustTransOpens;

  requestBuilder(): CustTransOpensRequestBuilder<DeSerializersT> {
    return new CustTransOpensRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustTransOpens<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustTransOpens<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustTransOpens<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustTransOpens, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustTransOpens, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_REC_ID: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TDS_AMOUNT_IN: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CASH_DISC: EnumField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    SETTLED_TOTAL_AMOUNT_IN: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLED_LINE_PERCENT_IN: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_AMOUNT_ORIGIN_IN: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLLECTION_LETTER_CODE: EnumField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterCode,
      true,
      true
    >;
    LAST_INTEREST_DATE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_ADJ_UNREALIZED: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISC_DATE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FINE_AMOUNT_PAYM_CUR_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSSIBLE_CASH_DISC: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FINE_AMOUNT_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLLECTION_LETTER: EnumField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_AMOUNT_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COV_STATUS: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_DISC_NOTICE_DEADLINE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_PRIORITY_CASH_DISC_DATE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_ADJ_UNREALIZED_REPORTING: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_AMOUNT_PAYM_CUR_BR: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TCS_AMOUNT_IN: OrderableEdmTypeField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_DISTRIBUTION: EnumField<
      CustTransOpens<DeSerializers>,
      DeSerializersT,
      PaymSchedTaxDistribution,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANSACTION: OneToOneLink<
      CustTransOpens<DeSerializersT>,
      DeSerializersT,
      CustTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustTransOpens<DeSerializers>>;
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
         * Static representation of the {@link sysRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SysRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tdsAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'TDSAmount_IN',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link useCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CASH_DISC: fieldBuilder.buildEnumField(
          'UseCashDisc',
          UseCashDisc,
          true
        ),
        /**
         * Static representation of the {@link settledTotalAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED_TOTAL_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'SettledTotalAmount_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settledLinePercentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED_LINE_PERCENT_IN: fieldBuilder.buildEdmTypeField(
          'SettledLinePercent_IN',
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
         * Static representation of the {@link taxWithholdAmountOriginIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_AMOUNT_ORIGIN_IN: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAmountOrigin_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link collectionLetterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE: fieldBuilder.buildEnumField(
          'CollectionLetterCode',
          CustCollectionLetterCode,
          true
        ),
        /**
         * Static representation of the {@link lastInterestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_INTEREST_DATE: fieldBuilder.buildEdmTypeField(
          'LastInterestDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchAdjUnrealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJ_UNREALIZED: fieldBuilder.buildEdmTypeField(
          'ExchAdjUnrealized',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fineAmountPaymCurBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_AMOUNT_PAYM_CUR_BR: fieldBuilder.buildEdmTypeField(
          'FineAmountPaymCur_BR',
          'Edm.Decimal',
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
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link possibleCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSSIBLE_CASH_DISC: fieldBuilder.buildEdmTypeField(
          'PossibleCashDisc',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link collectionLetter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER: fieldBuilder.buildEnumField(
          'CollectionLetter',
          NoYes,
          true
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
         * Static representation of the {@link covStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_STATUS: fieldBuilder.buildEdmTypeField(
          'CovStatus',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankDiscNoticeDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DISC_NOTICE_DEADLINE: fieldBuilder.buildEdmTypeField(
          'BankDiscNoticeDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settlementPriorityCashDiscDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PRIORITY_CASH_DISC_DATE: fieldBuilder.buildEdmTypeField(
          'SettlementPriorityCashDiscDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link exchAdjUnrealizedReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJ_UNREALIZED_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchAdjUnrealizedReporting',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link fineCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'FineCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestAmountPaymCurBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_AMOUNT_PAYM_CUR_BR: fieldBuilder.buildEdmTypeField(
          'InterestAmountPaymCur_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tcsAmountIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_AMOUNT_IN: fieldBuilder.buildEdmTypeField(
          'TCSAmount_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DISTRIBUTION: fieldBuilder.buildEnumField(
          'TaxDistribution',
          PaymSchedTaxDistribution,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustTransOpens)
      };
    }

    return this._schema;
  }
}
