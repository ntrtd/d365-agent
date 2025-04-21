/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPaymentMethods } from './CustomerPaymentMethods';
import { CustomerPaymentMethodsRequestBuilder } from './CustomerPaymentMethodsRequestBuilder';
import { JournalNamesApi } from './JournalNamesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { CustomerPaymentMethodSpecificationsApi } from './CustomerPaymentMethodSpecificationsApi';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { RetailStoresApi } from './RetailStoresApi';
import { TypeOfDraft } from './TypeOfDraft';
import { NoYes } from './NoYes';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PaymSumBy } from './PaymSumBy';
import { PaymentTypeMx } from './PaymentTypeMx';
import { CustPaymentType } from './CustPaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PrimaryMethodBr } from './PrimaryMethodBr';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerPaymentMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerPaymentMethods<DeSerializersT>, DeSerializersT>
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
  ): CustomerPaymentMethodsApi<DeSerializersT> {
    return new CustomerPaymentMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLinePaymentMethodEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderMethodOfPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_METHOD_OF_PAYMENT: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalNamesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      OnlineChannelV2SApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>,
      OnlineChannelsApi<DeSerializersT>,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_NAME: new OneToOneLink('JournalName', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: new OneToManyLink(
        'CustomerPaymentJournalLinePaymentMethodEntity',
        this,
        linkedApis[2]
      ),
      ONLINE_CHANNEL_V_2: new OneToManyLink(
        'OnlineChannelV2',
        this,
        linkedApis[3]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[4]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[5]
      ),
      FREE_TEXT_INVOICE_HEADER_METHOD_OF_PAYMENT: new OneToManyLink(
        'FreeTextInvoiceHeaderMethodOfPayment',
        this,
        linkedApis[6]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[7]
      ),
      CUSTOMER_PAYMENT_METHOD_SPECIFICATION: new OneToManyLink(
        'CustomerPaymentMethodSpecification',
        this,
        linkedApis[8]
      ),
      ONLINE_CHANNEL: new OneToManyLink('OnlineChannel', this, linkedApis[9]),
      CDS_FREE_TEXT_INVOICE_HEADERS: new OneToManyLink(
        'CDSFreeTextInvoiceHeaders',
        this,
        linkedApis[10]
      ),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = CustomerPaymentMethods;

  requestBuilder(): CustomerPaymentMethodsRequestBuilder<DeSerializersT> {
    return new CustomerPaymentMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPaymentMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPaymentMethods<DeSerializersT>,
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
    typeof CustomerPaymentMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPaymentMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_EXCHANGE_DRAFT_TYPE: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      TypeOfDraft,
      true,
      true
    >;
    ER_SOLUTION: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_GER_CONFIGURATION: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_JOURNAL_NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_LAYOUT_GROUP_ID: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRIDGING_POSTING_ENABLED: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_STATUS: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      CustVendPaymStatus,
      true,
      true
    >;
    SUM_BY_PERIOD: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      PaymSumBy,
      true,
      true
    >;
    SAT_PAYMENT_TYPE: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      PaymentTypeMx,
      true,
      true
    >;
    ATTRIBUTE_BELGIAN_STRUCTURED_PAYMENT_ID_ENABLED: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_FILE_NUMBER_TODAY: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ER_FORMAT_MAPPING: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ER_MODEL_MAPPING_TABLE: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATE_TRANSACTION_TYPE_IS_BANK: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION_PRIMARY_METHOD_PAYMENT: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_CHECK_NUMBER_IS_MANDATORY: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_LAYOUT_GROUP_ID: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TYPE: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      CustPaymentType,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    ATTRIBUTE_PAYMENT_ACCOUNT_ENABLED: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_FILE_NUMBER: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPORT_BILL_OF_EXCHANGE_DURING_INVOICE_POSTING: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECT_DEBIT: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRIDGING_POSTING_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_CONTROL: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTRIBUTE_PAYMENT_ID_ENABLED: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTRIBUTE_THIRD_PARTY_BANK_ENABLED: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_DEPOSIT_SLIP_IS_MANDATORY: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SEPA: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_PAYMENT: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_AND_DRAW_BILL_OF_EXCHANGE_DURING_INVOICE_POSTING: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ER_PROVIDER: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_FORMAT_CLASS_NAME: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_POSTDATED_CHECK_CLEARING_POSTING: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_PAYMENT_REFERENCE_IS_MANDATORY: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_METHOD_PAYMENT: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      PrimaryMethodBr,
      true,
      true
    >;
    LAST_FILE_DATE: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATE_OFFSET_TRANSACTION_TYPE_IS_BANK: EnumField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_COLLECTION: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_DISCOUNT: OrderableEdmTypeField<
      CustomerPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLinePaymentMethodEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderMethodOfPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_METHOD_OF_PAYMENT: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      CustomerPaymentMethods<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPaymentMethods<DeSerializers>>;
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
         * Static representation of the {@link billOfExchangeDraftType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_DRAFT_TYPE: fieldBuilder.buildEnumField(
          'BillOfExchangeDraftType',
          TypeOfDraft,
          true
        ),
        /**
         * Static representation of the {@link erSolution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_SOLUTION: fieldBuilder.buildEdmTypeField(
          'ERSolution',
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
         * Static representation of the {@link returnLayoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ReturnLayoutGroupId',
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
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          CustVendPaymStatus,
          true
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
         * Static representation of the {@link erModelMappingTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_MODEL_MAPPING_TABLE: fieldBuilder.buildEdmTypeField(
          'ERModelMappingTable',
          'Edm.Int64',
          false
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
         * Static representation of the {@link descriptionPrimaryMethodPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_PRIMARY_METHOD_PAYMENT: fieldBuilder.buildEdmTypeField(
          'DescriptionPrimaryMethodPayment',
          'Edm.String',
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
         * Static representation of the {@link importFormatClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_FORMAT_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ImportFormatClassName',
          'Edm.String',
          true
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
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
         * Static representation of the {@link exportBillOfExchangeDuringInvoicePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_BILL_OF_EXCHANGE_DURING_INVOICE_POSTING:
          fieldBuilder.buildEnumField(
            'ExportBillOfExchangeDuringInvoicePosting',
            NoYes,
            true
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
         * Static representation of the {@link attributeThirdPartyBankEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_THIRD_PARTY_BANK_ENABLED: fieldBuilder.buildEnumField(
          'AttributeThirdPartyBankEnabled',
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
         * Static representation of the {@link validateDepositSlipIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_DEPOSIT_SLIP_IS_MANDATORY: fieldBuilder.buildEnumField(
          'ValidateDepositSlipIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSepa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEPA: fieldBuilder.buildEnumField('IsSEPA', NoYes, true),
        /**
         * Static representation of the {@link splitPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYMENT: fieldBuilder.buildEnumField('SplitPayment', NoYes, true),
        /**
         * Static representation of the {@link createAndDrawBillOfExchangeDuringInvoicePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_AND_DRAW_BILL_OF_EXCHANGE_DURING_INVOICE_POSTING:
          fieldBuilder.buildEnumField(
            'CreateAndDrawBillOfExchangeDuringInvoicePosting',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link erProvider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_PROVIDER: fieldBuilder.buildEdmTypeField(
          'ERProvider',
          'Edm.String',
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
         * Static representation of the {@link primaryMethodPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_METHOD_PAYMENT: fieldBuilder.buildEnumField(
          'PrimaryMethodPayment',
          PrimaryMethodBr,
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
         * Static representation of the {@link postingProfileBillsRemitCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_COLLECTION: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitCollection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfileBillsRemitDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitDiscount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPaymentMethods)
      };
    }

    return this._schema;
  }
}
