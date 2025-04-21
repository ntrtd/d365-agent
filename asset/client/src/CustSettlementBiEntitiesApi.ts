/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustSettlementBiEntities } from './CustSettlementBiEntities';
import { CustSettlementBiEntitiesRequestBuilder } from './CustSettlementBiEntitiesRequestBuilder';
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
export class CustSettlementBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustSettlementBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustSettlementBiEntitiesApi<DeSerializersT> {
    return new CustSettlementBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustSettlementBiEntities;

  requestBuilder(): CustSettlementBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustSettlementBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustSettlementBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustSettlementBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustSettlementBiEntities<DeSerializersT>,
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
    typeof CustSettlementBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustSettlementBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EU_SALES_LIST: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_TRANS_RU: EnumField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PENNY_DIFF: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_COMPANY: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_MST: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_ACCOUNT_NUM: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_INTEREST_DATE: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVERSED_REC_ID_RU: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLE_TAX_1099_AMOUNT: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_AMOUNT_BR: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CAN_BE_REVERSED: EnumField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_AMOUNT_BR: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_ADJUSTMENT_REPORTING: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_DATE_RU: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UTILIZED_CASH_DISC: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_GROUP: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_REC_ID: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_OPEN: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_TYPE: EnumField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_TRANS_VOUCHER: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_ADJUSTMENT: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_CUR: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_RECID: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLE_AMOUNT_REPORTING: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_CASH_DISC_DATE: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_VOUCHER_RU: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_VOUCHER: OrderableEdmTypeField<
      CustSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustSettlementBiEntities<DeSerializers>>;
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
         * Static representation of the {@link euSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST: fieldBuilder.buildEdmTypeField(
          'EUSalesList',
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
         * Static representation of the {@link reverseTransRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_TRANS_RU: fieldBuilder.buildEnumField(
          'ReverseTrans_RU',
          NoYes,
          true
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
         * Static representation of the {@link transCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_COMPANY: fieldBuilder.buildEdmTypeField(
          'TransCompany',
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
         * Static representation of the {@link settleAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'SettleAmountMST',
          'Edm.Decimal',
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
         * Static representation of the {@link offsetAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'OffsetAccountNum',
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
         * Static representation of the {@link lastInterestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_INTEREST_DATE: fieldBuilder.buildEdmTypeField(
          'LastInterestDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link closedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ClosedDate',
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
         * Static representation of the {@link settleTax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099Amount',
          'Edm.Decimal',
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
         * Static representation of the {@link fineAmountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_AMOUNT_BR: fieldBuilder.buildEdmTypeField(
          'FineAmount_BR',
          'Edm.Decimal',
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
         * Static representation of the {@link canBeReversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_BE_REVERSED: fieldBuilder.buildEnumField(
          'CanBeReversed',
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
         * Static representation of the {@link exchAdjustmentReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJUSTMENT_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchAdjustmentReporting',
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
         * Static representation of the {@link utilizedCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UTILIZED_CASH_DISC: fieldBuilder.buildEdmTypeField(
          'UtilizedCashDisc',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link transRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'TransRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          LedgerTransType,
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
         * Static representation of the {@link offsetTransVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TRANS_VOUCHER: fieldBuilder.buildEdmTypeField(
          'OffsetTransVoucher',
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link settleAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SettleAmountCur',
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
         * Static representation of the {@link settleAmountReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_REPORTING: fieldBuilder.buildEdmTypeField(
          'SettleAmountReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custCashDiscDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CASH_DISC_DATE: fieldBuilder.buildEdmTypeField(
          'CustCashDiscDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link settlementVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SettlementVoucher',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustSettlementBiEntities)
      };
    }

    return this._schema;
  }
}
