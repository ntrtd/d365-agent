/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTransBiEntities } from './AssetTransBiEntities';
import { AssetTransBiEntitiesRequestBuilder } from './AssetTransBiEntitiesRequestBuilder';
import { AssetLowValuePoolTypeAu } from './AssetLowValuePoolTypeAu';
import { NoYes } from './NoYes';
import { RAssetPostingType } from './RAssetPostingType';
import { AssetTransType } from './AssetTransType';
import { AssetTransactionSubType } from './AssetTransactionSubType';
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
export class AssetTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetTransBiEntitiesApi<DeSerializersT> {
    return new AssetTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetTransBiEntities;

  requestBuilder(): AssetTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetTransBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetTransBiEntities<DeSerializersT>,
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
    typeof AssetTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RESERVE_TRANS_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TXT: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOW_VALUE_POOL_TYPE_AU: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLowValuePoolTypeAu,
      true,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIOR_YEAR: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_AMOUNT: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_TYPE_W: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      RAssetPostingType,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_DATE_W: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVALUATION_DONE: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSUMPTION_QTY: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISC_BASE_TRANS_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPOSAL_TRANSACTION: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVALUATION_AMOUNT: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECLASSIFICATION: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_BASE_AMOUNT_MST: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVER: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LVP_TRANSFER_ID_AU: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      AssetTransType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCUMENT_NUM_W: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUED_TRANS_ID: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RESERVE_TRANSFER_DONE: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_REPORTING_CURRENCY_AMOUNT_UPDATED: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVALUATION_TRANS: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TRANS_SUB_TYPE: EnumField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      AssetTransactionSubType,
      true,
      true
    >;
    PAYM_REFERENCE: OrderableEdmTypeField<
      AssetTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link reserveTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ReserveTransId',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lowValuePoolTypeAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_TYPE_AU: fieldBuilder.buildEnumField(
          'LowValuePoolType_AU',
          AssetLowValuePoolTypeAu,
          true
        ),
        /**
         * Static representation of the {@link bookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ID: fieldBuilder.buildEdmTypeField('BookId', 'Edm.String', true),
        /**
         * Static representation of the {@link isPriorYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIOR_YEAR: fieldBuilder.buildEnumField('IsPriorYear', NoYes, true),
        /**
         * Static representation of the {@link interestAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InterestAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link postingTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE_W: fieldBuilder.buildEnumField(
          'PostingType_W',
          RAssetPostingType,
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
         * Static representation of the {@link documentDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_W: fieldBuilder.buildEdmTypeField(
          'DocumentDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link revaluationDone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_DONE: fieldBuilder.buildEnumField(
          'RevaluationDone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consumptionQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_QTY: fieldBuilder.buildEdmTypeField(
          'ConsumptionQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashDiscBaseTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseTransId',
          'Edm.Int64',
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
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
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
         * Static representation of the {@link disposalTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_TRANSACTION: fieldBuilder.buildEnumField(
          'DisposalTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revaluationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RevaluationAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reclassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECLASSIFICATION: fieldBuilder.buildEnumField(
          'Reclassification',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link cashDiscBaseAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseAmountMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lvpTransferIdAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_TRANSFER_ID_AU: fieldBuilder.buildEdmTypeField(
          'LVPTransferId_AU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          AssetTransType,
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
         * Static representation of the {@link documentNumW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM_W: fieldBuilder.buildEdmTypeField(
          'DocumentNum_W',
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
         * Static representation of the {@link revaluedTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUED_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'RevaluedTransID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reserveTransferDone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_TRANSFER_DONE: fieldBuilder.buildEnumField(
          'ReserveTransferDone',
          NoYes,
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
         * Static representation of the {@link isReportingCurrencyAmountUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPORTING_CURRENCY_AMOUNT_UPDATED: fieldBuilder.buildEnumField(
          'IsReportingCurrencyAmountUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revaluationTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_TRANS: fieldBuilder.buildEnumField(
          'RevaluationTrans',
          NoYes,
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
         * Static representation of the {@link assetTransSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANS_SUB_TYPE: fieldBuilder.buildEnumField(
          'AssetTransSubType',
          AssetTransactionSubType,
          true
        ),
        /**
         * Static representation of the {@link paymReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymReference',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetTransBiEntities)
      };
    }

    return this._schema;
  }
}
