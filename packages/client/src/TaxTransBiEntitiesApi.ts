/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransBiEntities } from './TaxTransBiEntities';
import { TaxTransBiEntitiesRequestBuilder } from './TaxTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxAccountingPostingAccountType } from './TaxAccountingPostingAccountType';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxObligationCompany } from './TaxObligationCompany';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { TaxTypeMx } from './TaxTypeMx';
import { TaxOrigin } from './TaxOrigin';
import { TaxModuleType } from './TaxModuleType';
import { TaxDirection } from './TaxDirection';
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
export class TaxTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransBiEntitiesApi<DeSerializersT> {
    return new TaxTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransBiEntities;

  requestBuilder(): TaxTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransBiEntities<DeSerializersT>,
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
    typeof TaxTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMPTY_TAX_BASE_FOR_OUTGOING_TAX_W: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXEMPT_TAX: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNREALIZED_TAX_EXT: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISV_FEATURE_SETUP_NAME: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OVER_UNDER_PAYMENT: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_BOOK: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARTY_TAX_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ACCOUNT_TYPE: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxAccountingPostingAccountType,
      true,
      true
    >;
    TAX_IN_COST_PRICE_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REALIZED_DATE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGIN_TAX_TRANS_REC_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISV_FEATURE_SETUP_GUID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TAX_BASE_AMOUNT: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BOOK_SECTION: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_IN_COST_PRICE_MST: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_CHARGE_APPLIES_UK: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_EXEMPT_PCT: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADING_TABLE_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_REP: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVERSE_CHARGE_W: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTPONE_VAT: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_IN_COST_PRICE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_IN_COST_PRICE_REGULATED: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TRANS_REF_REC_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_PRINT_DETAIL: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxPrintDetail,
      true,
      true
    >;
    TAX_REP_COUNTER: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_IN_COST_PRICE_REP: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRACOM_VAT: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_OBLIGATION_COMPANY: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxObligationCompany,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PERIOD: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CURRENCY_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_BASE_AMOUNT_REP: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GSTHST_TAX_TYPE_CA: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    TAX_JURISDICTION_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_REGULATED: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNREALIZED_TAX: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TYPE_MX: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeMx,
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_DIFF_ORIG_REC_ID: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ORIGIN: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxOrigin,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VALUE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxModuleType,
      true,
      true
    >;
    TAX_DIRECTION: EnumField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      TaxDirection,
      true,
      true
    >;
    TAX_BASE_QTY: OrderableEdmTypeField<
      TaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link exemptTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_TAX: fieldBuilder.buildEnumField('ExemptTax', NoYes, true),
        /**
         * Static representation of the {@link unrealizedTaxExt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_TAX_EXT: fieldBuilder.buildEnumField(
          'UnrealizedTaxExt',
          NoYes,
          true
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
         * Static representation of the {@link isvFeatureSetupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISV_FEATURE_SETUP_NAME: fieldBuilder.buildEdmTypeField(
          'ISVFeatureSetupName',
          'Edm.String',
          true
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
         * Static representation of the {@link taxBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BOOK: fieldBuilder.buildEdmTypeField('TaxBook', 'Edm.Int64', false),
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
         * Static representation of the {@link partyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'PartyTaxId',
          'Edm.Int64',
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
         * Static representation of the {@link taxAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'TaxAccountType',
          TaxAccountingPostingAccountType,
          true
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
         * Static representation of the {@link realizedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_DATE: fieldBuilder.buildEdmTypeField(
          'RealizedDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link originTaxTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_TAX_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'OriginTaxTransRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link printCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CODE: fieldBuilder.buildEdmTypeField(
          'PrintCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxBookSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BOOK_SECTION: fieldBuilder.buildEdmTypeField(
          'TaxBookSection',
          'Edm.Int64',
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
         * Static representation of the {@link reverseChargeAppliesUk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_APPLIES_UK: fieldBuilder.buildEnumField(
          'ReverseChargeApplies_UK',
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
         * Static representation of the {@link vatExemptPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_EXEMPT_PCT: fieldBuilder.buildEdmTypeField(
          'VATExemptPct',
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postponeVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTPONE_VAT: fieldBuilder.buildEnumField('PostponeVAT', NoYes, true),
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
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxTransRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'TaxTransRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxPrintDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRINT_DETAIL: fieldBuilder.buildEnumField(
          'TaxPrintDetail',
          TaxPrintDetail,
          true
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
         * Static representation of the {@link taxInCostPriceRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IN_COST_PRICE_REP: fieldBuilder.buildEdmTypeField(
          'TaxInCostPriceRep',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intracomVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRACOM_VAT: fieldBuilder.buildEnumField('IntracomVAT', NoYes, true),
        /**
         * Static representation of the {@link taxObligationCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OBLIGATION_COMPANY: fieldBuilder.buildEnumField(
          'TaxObligationCompany',
          TaxObligationCompany,
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
         * Static representation of the {@link taxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxPeriod',
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
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
         * Static representation of the {@link gsthstTaxTypeCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTHST_TAX_TYPE_CA: fieldBuilder.buildEnumField(
          'GSTHSTTaxType_CA',
          GsthstTaxTypeCa,
          true
        ),
        /**
         * Static representation of the {@link taxJurisdictionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_JURISDICTION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxJurisdictionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_CODE: fieldBuilder.buildEdmTypeField(
          'ExemptCode',
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
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
         * Static representation of the {@link sourceRegulateAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REGULATE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceRegulateAmountCur',
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
         * Static representation of the {@link taxAutogenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTOGENERATED: fieldBuilder.buildEnumField(
          'TaxAutogenerated',
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
         * Static representation of the {@link exchRateDiffOrigRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_DIFF_ORIG_REC_ID: fieldBuilder.buildEdmTypeField(
          'ExchRateDiffOrigRecId',
          'Edm.Int64',
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
         * Static representation of the {@link taxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DIRECTION: fieldBuilder.buildEnumField(
          'TaxDirection',
          TaxDirection,
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
        ALL_FIELDS: new AllFields('*', TaxTransBiEntities)
      };
    }

    return this._schema;
  }
}
