/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustPaymModeTableBiEntities } from './CustPaymModeTableBiEntities';
import { CustPaymModeTableBiEntitiesRequestBuilder } from './CustPaymModeTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { PaymentTypeMx } from './PaymentTypeMx';
import { PaymSumBy } from './PaymSumBy';
import { CustPaymentType } from './CustPaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PrimaryMethodBr } from './PrimaryMethodBr';
import { TypeOfDraft } from './TypeOfDraft';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { EfDocPaymentMethodBr } from './EfDocPaymentMethodBr';
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
export class CustPaymModeTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustPaymModeTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustPaymModeTableBiEntitiesApi<DeSerializersT> {
    return new CustPaymModeTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustPaymModeTableBiEntities;

  requestBuilder(): CustPaymModeTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustPaymModeTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustPaymModeTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustPaymModeTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustPaymModeTableBiEntities<DeSerializersT>,
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
    typeof CustPaymModeTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustPaymModeTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYM_ON_INVOICE: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_COLLECTION_IT: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_GER_CONFIGURATION: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_SEQUENCE_NUM_DATE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_SET: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_CUSTOM_FORMAT_RU: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CLIENT_DOCUMENT_TYPE_ID_RU: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_INSTRUMENT_W: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLASS_ID: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_TYPE_MX: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentTypeMx,
      true,
      true
    >;
    NUMBER_SEQUENCE_TABLE_LT: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLASS_ID_REMITTANCE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FURTHER_POSTING: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_SUM_BY: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymSumBy,
      true,
      true
    >;
    PAYM_JOURNAL_NAME_ID: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ER_MODEL_MAPPING_TABLE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SPLIT_PAYMENT_W: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_LAYOUT_GROUP_ID_BR: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_GRACE_DAYS: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERVICE_LEVEL_W: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXPORT_REFUND: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_DISCOUNT_IT: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_BEARER_W: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_TYPE: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustPaymentType,
      true,
      true
    >;
    LAST_SEQUENCE_NUM_TODAY: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    PAYMENT_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_ID_FILE_ANALYZE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIRECT_DEBIT: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CUST_PAYM_ID_TABLE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRIMARY_METHOD_BR: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      PrimaryMethodBr,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESC_PRIMARY_METHOD_BR: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_GER_IMPORT: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIM_CTRL: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_TRANS_TYPE: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_SEPA: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ER_FORMAT_MAPPING_ID: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDC_CLEARING_POSTING: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CLIENT_CLASS_ID_RU: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURN_LAYOUT_GROUP_ID_BR: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_ID_RETURN: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATEGORY_PURPOSE_W: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TYPE_OF_DRAFT: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      TypeOfDraft,
      true,
      true
    >;
    CLASS_ID_IN: OrderableEdmTypeField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPORT_ON_INVOICE: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_STATUS: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendPaymStatus,
      true,
      true
    >;
    PAYMENT_METHOD_BR: EnumField<
      CustPaymModeTableBiEntities<DeSerializers>,
      DeSerializersT,
      EfDocPaymentMethodBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustPaymModeTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ON_INVOICE: fieldBuilder.buildEnumField(
          'PaymOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileBillsRemitCollectionIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_COLLECTION_IT:
          fieldBuilder.buildEdmTypeField(
            'PostingProfileBillsRemitCollection_IT',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link useGerConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_GER_CONFIGURATION: fieldBuilder.buildEnumField(
          'UseGERConfiguration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastSequenceNumDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SEQUENCE_NUM_DATE: fieldBuilder.buildEdmTypeField(
          'LastSequenceNumDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dimensionAttributeSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_SET: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeSet',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link useCustomFormatRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CUSTOM_FORMAT_RU: fieldBuilder.buildEnumField(
          'UseCustomFormat_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankClientDocumentTypeIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CLIENT_DOCUMENT_TYPE_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankClientDocumentTypeId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localInstrumentW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_INSTRUMENT_W: fieldBuilder.buildEdmTypeField(
          'LocalInstrument_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link classId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_ID: fieldBuilder.buildEdmTypeField('ClassId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link paymentTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE_MX: fieldBuilder.buildEnumField(
          'PaymentType_MX',
          PaymentTypeMx,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceTableLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_TABLE_LT: fieldBuilder.buildEdmTypeField(
          'NumberSequenceTable_LT',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link classIdRemittance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_ID_REMITTANCE: fieldBuilder.buildEdmTypeField(
          'ClassIdRemittance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link furtherPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FURTHER_POSTING: fieldBuilder.buildEnumField(
          'FurtherPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymSumBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SUM_BY: fieldBuilder.buildEnumField('PaymSumBy', PaymSumBy, true),
        /**
         * Static representation of the {@link paymJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'PaymJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link erModelMappingTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_MODEL_MAPPING_TABLE: fieldBuilder.buildEdmTypeField(
          'ERModelMappingTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link splitPaymentW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYMENT_W: fieldBuilder.buildEnumField(
          'SplitPayment_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exportLayoutGroupIdBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_LAYOUT_GROUP_ID_BR: fieldBuilder.buildEdmTypeField(
          'ExportLayoutGroupId_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discGraceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_GRACE_DAYS: fieldBuilder.buildEdmTypeField(
          'DiscGraceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LastSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link serviceLevelW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_W: fieldBuilder.buildEdmTypeField(
          'ServiceLevel_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exportRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_REFUND: fieldBuilder.buildEnumField('ExportRefund', NoYes, true),
        /**
         * Static representation of the {@link postingProfileBillsRemitDiscountIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_DISCOUNT_IT: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitDiscount_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeBearerW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_BEARER_W: fieldBuilder.buildEdmTypeField(
          'ChargeBearer_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'PaymentType',
          CustPaymentType,
          true
        ),
        /**
         * Static representation of the {@link lastSequenceNumToday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SEQUENCE_NUM_TODAY: fieldBuilder.buildEdmTypeField(
          'LastSequenceNumToday',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link paymentLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'PaymentLedgerDimensionValuesJson',
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
         * Static representation of the {@link classIdFileAnalyze} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_ID_FILE_ANALYZE: fieldBuilder.buildEdmTypeField(
          'ClassIdFileAnalyze',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link directDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT: fieldBuilder.buildEnumField('DirectDebit', NoYes, true),
        /**
         * Static representation of the {@link bankCustPaymIdTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CUST_PAYM_ID_TABLE: fieldBuilder.buildEdmTypeField(
          'BankCustPaymIdTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link primaryMethodBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_METHOD_BR: fieldBuilder.buildEnumField(
          'PrimaryMethod_BR',
          PrimaryMethodBr,
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
         * Static representation of the {@link descPrimaryMethodBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESC_PRIMARY_METHOD_BR: fieldBuilder.buildEdmTypeField(
          'DescPrimaryMethod_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useGerImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_GER_IMPORT: fieldBuilder.buildEnumField(
          'UseGERImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dimCtrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_CTRL: fieldBuilder.buildEnumField('DimCtrl', NoYes, true),
        /**
         * Static representation of the {@link bankTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANS_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransType',
          'Edm.String',
          true
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
         * Static representation of the {@link isSepa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEPA: fieldBuilder.buildEnumField('IsSEPA', NoYes, true),
        /**
         * Static representation of the {@link erFormatMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_FORMAT_MAPPING_ID: fieldBuilder.buildEdmTypeField(
          'ERFormatMappingID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link pdcClearingPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDC_CLEARING_POSTING: fieldBuilder.buildEnumField(
          'PDCClearingPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankClientClassIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CLIENT_CLASS_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankClientClassId_RU',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link returnLayoutGroupIdBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LAYOUT_GROUP_ID_BR: fieldBuilder.buildEdmTypeField(
          'ReturnLayoutGroupId_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classIdReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_ID_RETURN: fieldBuilder.buildEdmTypeField(
          'ClassIdReturn',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link categoryPurposeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_PURPOSE_W: fieldBuilder.buildEdmTypeField(
          'CategoryPurpose_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link typeOfDraft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_DRAFT: fieldBuilder.buildEnumField(
          'TypeOfDraft',
          TypeOfDraft,
          true
        ),
        /**
         * Static representation of the {@link classIdIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_ID_IN: fieldBuilder.buildEdmTypeField(
          'ClassIdIn',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exportOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_ON_INVOICE: fieldBuilder.buildEnumField(
          'ExportOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_STATUS: fieldBuilder.buildEnumField(
          'PaymStatus',
          CustVendPaymStatus,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_BR: fieldBuilder.buildEnumField(
          'PaymentMethod_BR',
          EfDocPaymentMethodBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustPaymModeTableBiEntities)
      };
    }

    return this._schema;
  }
}
