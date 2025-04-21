/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmLedgerJournalTrans } from './LtmLedgerJournalTrans';
import { LtmLedgerJournalTransRequestBuilder } from './LtmLedgerJournalTransRequestBuilder';
import { NoYes } from './NoYes';
import { LtmCheckSource } from './LtmCheckSource';
import { LtmCollectPaymDocAction } from './LtmCollectPaymDocAction';
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
export class LtmLedgerJournalTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmLedgerJournalTrans<DeSerializersT>, DeSerializersT>
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
  ): LtmLedgerJournalTransApi<DeSerializersT> {
    return new LtmLedgerJournalTransApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmLedgerJournalTrans;

  requestBuilder(): LtmLedgerJournalTransRequestBuilder<DeSerializersT> {
    return new LtmLedgerJournalTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmLedgerJournalTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmLedgerJournalTrans<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmLedgerJournalTrans<DeSerializersT>,
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
    typeof LtmLedgerJournalTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmLedgerJournalTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRESERVE_NUM: EnumField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_POINT_PREFIX: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE_DOCUMENT_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_07: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_06: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_05: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_04: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_03: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_02: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_01: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_09: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_08: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFICIARY: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CHEQUE_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_CODE_10: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CONCEPT: EnumField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONCEPT_3: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CPD_SOURCE: EnumField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      LtmCheckSource,
      true,
      true
    >;
    COUNTRY_DOC_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_2: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_BASE_MST: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CPD_CUST_POSTING_PROFILE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSSINESS_NAME: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COLLECT_PAYM_DOC: EnumField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WITHHOLDING_EFFECTIVE_RATE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_1: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAICAE_DUE_DATE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTRY_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CPD_ACTION: EnumField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      LtmCollectPaymDocAction,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAICAE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLD_ACCRUED_BASE_MST: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TREASURY_ACTUAL: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_10: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_CODE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_09: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_08: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_05: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_04: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_07: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_06: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_01: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_03: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_FIELD_02: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TREASURY_ENTER: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOLDER_ACCOUNT_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_SET_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NUM: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLD_ACCRUED_AMOUNT_MST: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmLedgerJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmLedgerJournalTrans<DeSerializers>>;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preserveNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESERVE_NUM: fieldBuilder.buildEnumField('PreserveNum', NoYes, true),
        /**
         * Static representation of the {@link salesPointPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_PREFIX: fieldBuilder.buildEdmTypeField(
          'SalesPointPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completeDocumentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'CompleteDocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_07: fieldBuilder.buildEdmTypeField(
          'ListFieldCode07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_06: fieldBuilder.buildEdmTypeField(
          'ListFieldCode06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_05: fieldBuilder.buildEdmTypeField(
          'ListFieldCode05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_04: fieldBuilder.buildEdmTypeField(
          'ListFieldCode04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_03: fieldBuilder.buildEdmTypeField(
          'ListFieldCode03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_02: fieldBuilder.buildEdmTypeField(
          'ListFieldCode02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_01: fieldBuilder.buildEdmTypeField(
          'ListFieldCode01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_09: fieldBuilder.buildEdmTypeField(
          'ListFieldCode09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listFieldCode08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_08: fieldBuilder.buildEdmTypeField(
          'ListFieldCode08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beneficiary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFICIARY: fieldBuilder.buildEdmTypeField(
          'Beneficiary',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankChequeNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHEQUE_NUM: fieldBuilder.buildEdmTypeField(
          'BankChequeNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
        /**
         * Static representation of the {@link listFieldCode10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_CODE_10: fieldBuilder.buildEdmTypeField(
          'ListFieldCode10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCUR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isConcept} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONCEPT: fieldBuilder.buildEnumField('IsConcept', NoYes, true),
        /**
         * Static representation of the {@link concept3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_3: fieldBuilder.buildEdmTypeField(
          'Concept3',
          'Edm.String',
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
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cpdSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_SOURCE: fieldBuilder.buildEnumField(
          'CPDSource',
          LtmCheckSource,
          true
        ),
        /**
         * Static representation of the {@link countryDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'CountryDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_2: fieldBuilder.buildEdmTypeField(
          'Concept2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingBaseMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_BASE_MST: fieldBuilder.buildEdmTypeField(
          'WithholdingBaseMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cpdCustPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_CUST_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'CPDCustPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bussinessName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSSINESS_NAME: fieldBuilder.buildEdmTypeField(
          'BussinessName',
          'Edm.String',
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
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCollectPaymDoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COLLECT_PAYM_DOC: fieldBuilder.buildEnumField(
          'IsCollectPaymDoc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link withholdingEffectiveRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_EFFECTIVE_RATE: fieldBuilder.buildEdmTypeField(
          'WithholdingEffectiveRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BankGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'StateDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_1: fieldBuilder.buildEdmTypeField(
          'Concept1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caicaeDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAICAE_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'CAICAEDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link countryDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CountryDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cpdAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ACTION: fieldBuilder.buildEnumField(
          'CPDAction',
          LtmCollectPaymDocAction,
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
         * Static representation of the {@link caicae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAICAE: fieldBuilder.buildEdmTypeField('CAICAE', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdAccruedBaseMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLD_ACCRUED_BASE_MST: fieldBuilder.buildEdmTypeField(
          'WithholdAccruedBaseMST',
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
         * Static representation of the {@link treasuryActual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREASURY_ACTUAL: fieldBuilder.buildEdmTypeField(
          'TreasuryActual',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_10: fieldBuilder.buildEdmTypeField(
          'ListField10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_CODE: fieldBuilder.buildEdmTypeField(
          'ControlCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_09: fieldBuilder.buildEdmTypeField(
          'ListField09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_08: fieldBuilder.buildEdmTypeField(
          'ListField08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_05: fieldBuilder.buildEdmTypeField(
          'ListField05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_04: fieldBuilder.buildEdmTypeField(
          'ListField04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_07: fieldBuilder.buildEdmTypeField(
          'ListField07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_06: fieldBuilder.buildEdmTypeField(
          'ListField06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_01: fieldBuilder.buildEdmTypeField(
          'ListField01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_03: fieldBuilder.buildEdmTypeField(
          'ListField03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'StateDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listField02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_02: fieldBuilder.buildEdmTypeField(
          'ListField02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link treasuryEnter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREASURY_ENTER: fieldBuilder.buildEdmTypeField(
          'TreasuryEnter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link holderAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLDER_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'HolderAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_ID: fieldBuilder.buildEdmTypeField('ShiftID', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdingSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_SET_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingSetID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'BankAccountNum',
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
         * Static representation of the {@link withholdAccruedAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLD_ACCRUED_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'WithholdAccruedAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmLedgerJournalTrans)
      };
    }

    return this._schema;
  }
}
