/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentMethods } from './VendorPaymentMethods';
import { VendorPaymentMethodsRequestBuilder } from './VendorPaymentMethodsRequestBuilder';
import { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { VendorPaymentMethodSpecificationsApi } from './VendorPaymentMethodSpecificationsApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { JournalNamesApi } from './JournalNamesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { PrimaryMethodBr } from './PrimaryMethodBr';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PaymSumBy } from './PaymSumBy';
import { PaymentTypeMx } from './PaymentTypeMx';
import { PaymentType } from './PaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PostingBr } from './PostingBr';
import { TypeOfDraft } from './TypeOfDraft';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorPaymentMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorPaymentMethods<DeSerializersT>, DeSerializersT>
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
  ): VendorPaymentMethodsApi<DeSerializersT> {
    return new VendorPaymentMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLinePaymentMethodEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD_SPECIFICATION: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorPaymentJournalLinesApi<DeSerializersT>,
      PurchaseAgreementsApi<DeSerializersT>,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: new OneToManyLink(
        'VendorPaymentJournalLinePaymentMethodEntity',
        this,
        linkedApis[0]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[1]
      ),
      VENDOR_PAYMENT_METHOD_SPECIFICATION: new OneToManyLink(
        'VendorPaymentMethodSpecification',
        this,
        linkedApis[2]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[3]
      ),
      JOURNAL_NAME: new OneToOneLink('JournalName', this, linkedApis[4]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = VendorPaymentMethods;

  requestBuilder(): VendorPaymentMethodsRequestBuilder<DeSerializersT> {
    return new VendorPaymentMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorPaymentMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorPaymentMethods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPaymentMethods<DeSerializersT>,
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
    typeof VendorPaymentMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPaymentMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_REPORTING_VENDOR: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_GER_CONFIGURATION: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_JOURNAL_NAME: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_PAYMENT_NOTE_IS_MANDATORY: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPED_PRIMARY_PAYMENT_METHOD: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      PrimaryMethodBr,
      true,
      true
    >;
    RETURN_LAYOUT_GROUP_ID: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_BEARER_VALUE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRIDGING_POSTING_ENABLED: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_REPORTING_SOLUTION: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_STATUS: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      CustVendPaymStatus,
      true,
      true
    >;
    LOCAL_INSTRUMENT: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUM_BY_PERIOD: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      PaymSumBy,
      true,
      true
    >;
    SAT_PAYMENT_TYPE: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      PaymentTypeMx,
      true,
      true
    >;
    ATTRIBUTE_BELGIAN_STRUCTURED_PAYMENT_ID_ENABLED: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_FILE_NUMBER_TODAY: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ER_FORMAT_MAPPING: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_PAYMENT_ID_IS_MANDATORY: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_TRANSACTION_TYPE_IS_BANK: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_CHECK_NUMBER_IS_MANDATORY: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_LAYOUT_GROUP_ID: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_PROMISSORY_NOTE_DURING_INVOICE_POSTING: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TYPE: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      PaymentType,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    CREATE_AND_DRAW_PROMISSORY_NOTE_DURING_INVOICE_POSTING: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTRIBUTE_PAYMENT_ACCOUNT_ENABLED: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_FILE_NUMBER: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIRECT_DEBIT: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRIDGING_POSTING_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_CONTROL: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTRIBUTE_PAYMENT_ID_ENABLED: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPED_PRIMARY_PAYMENT_METHOD_DESCRIPTION: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_PAYMENT_SPECIFICATION_IS_MANDATORY: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTRIBUTE_THIRD_PARTY_BANK_ENABLED: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PAYMENT_COPIES: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_PURPOSE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GENERATE_PAYMENT_ONE_VOUCHER: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      PostingBr,
      true,
      true
    >;
    REMITTANCE_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_POSTDATED_CHECK_CLEARING_POSTING: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_PAYMENT_REFERENCE_IS_MANDATORY: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROMISSORY_NOTE_DRAFT_TYPE: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      TypeOfDraft,
      true,
      true
    >;
    LAST_FILE_DATE: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATE_OFFSET_TRANSACTION_TYPE_IS_BANK: EnumField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_REMIT_NOTES: OrderableEdmTypeField<
      VendorPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLinePaymentMethodEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD_SPECIFICATION: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorPaymentMethods<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link electronicReportingVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_REPORTING_VENDOR: fieldBuilder.buildEdmTypeField(
          'ElectronicReportingVendor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ServiceLevel',
          'Edm.Int64',
          false
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
         * Static representation of the {@link paymentJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportFormatClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_FORMAT_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ExportFormatClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validatePaymentNoteIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PAYMENT_NOTE_IS_MANDATORY: fieldBuilder.buildEnumField(
          'ValidatePaymentNoteIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link spedPrimaryPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_PRIMARY_PAYMENT_METHOD: fieldBuilder.buildEnumField(
          'SPEDPrimaryPaymentMethod',
          PrimaryMethodBr,
          true
        ),
        /**
         * Static representation of the {@link returnLayoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ReturnLayoutGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeBearerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_BEARER_VALUE: fieldBuilder.buildEdmTypeField(
          'ChargeBearerValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bridgingPostingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRIDGING_POSTING_ENABLED: fieldBuilder.buildEnumField(
          'BridgingPostingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link electronicReportingSolution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_REPORTING_SOLUTION: fieldBuilder.buildEdmTypeField(
          'ElectronicReportingSolution',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          CustVendPaymStatus,
          true
        ),
        /**
         * Static representation of the {@link localInstrument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_INSTRUMENT: fieldBuilder.buildEdmTypeField(
          'LocalInstrument',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sumByPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_BY_PERIOD: fieldBuilder.buildEnumField(
          'SumByPeriod',
          PaymSumBy,
          true
        ),
        /**
         * Static representation of the {@link satPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'SATPaymentType',
          PaymentTypeMx,
          true
        ),
        /**
         * Static representation of the {@link attributeBelgianStructuredPaymentIdEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_BELGIAN_STRUCTURED_PAYMENT_ID_ENABLED:
          fieldBuilder.buildEnumField(
            'AttributeBelgianStructuredPaymentIdEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link lastFileNumberToday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_FILE_NUMBER_TODAY: fieldBuilder.buildEdmTypeField(
          'LastFileNumberToday',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link erFormatMapping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_FORMAT_MAPPING: fieldBuilder.buildEdmTypeField(
          'ERFormatMapping',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validatePaymentIdIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PAYMENT_ID_IS_MANDATORY: fieldBuilder.buildEnumField(
          'ValidatePaymentIdIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateTransactionTypeIsBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_TRANSACTION_TYPE_IS_BANK: fieldBuilder.buildEnumField(
          'ValidateTransactionTypeIsBank',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateCheckNumberIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_CHECK_NUMBER_IS_MANDATORY: fieldBuilder.buildEnumField(
          'ValidateCheckNumberIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exportLayoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ExportLayoutGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountGracePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_GRACE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'DiscountGracePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportPromissoryNoteDuringInvoicePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_PROMISSORY_NOTE_DURING_INVOICE_POSTING:
          fieldBuilder.buildEnumField(
            'ExportPromissoryNoteDuringInvoicePosting',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'PaymentType',
          PaymentType,
          true
        ),
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
         * Static representation of the {@link createAndDrawPromissoryNoteDuringInvoicePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_AND_DRAW_PROMISSORY_NOTE_DURING_INVOICE_POSTING:
          fieldBuilder.buildEnumField(
            'CreateAndDrawPromissoryNoteDuringInvoicePosting',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link attributePaymentAccountEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_PAYMENT_ACCOUNT_ENABLED: fieldBuilder.buildEnumField(
          'AttributePaymentAccountEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastFileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_FILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LastFileNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link directDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT: fieldBuilder.buildEnumField('DirectDebit', NoYes, true),
        /**
         * Static representation of the {@link bridgingPostingAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRIDGING_POSTING_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'BridgingPostingAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_CONTROL: fieldBuilder.buildEnumField(
          'DimensionControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link attributePaymentIdEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_PAYMENT_ID_ENABLED: fieldBuilder.buildEnumField(
          'AttributePaymentIdEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link spedPrimaryPaymentMethodDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_PRIMARY_PAYMENT_METHOD_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SPEDPrimaryPaymentMethodDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validatePaymentSpecificationIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PAYMENT_SPECIFICATION_IS_MANDATORY:
          fieldBuilder.buildEnumField(
            'ValidatePaymentSpecificationIsMandatory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link attributeThirdPartyBankEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_THIRD_PARTY_BANK_ENABLED: fieldBuilder.buildEnumField(
          'AttributeThirdPartyBankEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPaymentCopies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PAYMENT_COPIES: fieldBuilder.buildEnumField(
          'AllowPaymentCopies',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnFormatClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_FORMAT_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnFormatClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'PaymentAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_PURPOSE: fieldBuilder.buildEdmTypeField(
          'CategoryPurpose',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link generatePaymentOneVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_PAYMENT_ONE_VOUCHER: fieldBuilder.buildEnumField(
          'GeneratePaymentOneVoucher',
          PostingBr,
          true
        ),
        /**
         * Static representation of the {@link remittanceFormatClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_FORMAT_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'RemittanceFormatClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enablePostdatedCheckClearingPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_POSTDATED_CHECK_CLEARING_POSTING: fieldBuilder.buildEnumField(
          'EnablePostdatedCheckClearingPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validatePaymentReferenceIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PAYMENT_REFERENCE_IS_MANDATORY: fieldBuilder.buildEnumField(
          'ValidatePaymentReferenceIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link promissoryNoteDraftType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTE_DRAFT_TYPE: fieldBuilder.buildEnumField(
          'PromissoryNoteDraftType',
          TypeOfDraft,
          true
        ),
        /**
         * Static representation of the {@link lastFileDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_FILE_DATE: fieldBuilder.buildEdmTypeField(
          'LastFileDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validateOffsetTransactionTypeIsBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_OFFSET_TRANSACTION_TYPE_IS_BANK: fieldBuilder.buildEnumField(
          'ValidateOffsetTransactionTypeIsBank',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileRemitNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_REMIT_NOTES: fieldBuilder.buildEdmTypeField(
          'PostingProfileRemitNotes',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPaymentMethods)
      };
    }

    return this._schema;
  }
}
