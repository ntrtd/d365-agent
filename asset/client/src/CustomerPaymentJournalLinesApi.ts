/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPaymentJournalLines } from './CustomerPaymentJournalLines';
import { CustomerPaymentJournalLinesRequestBuilder } from './CustomerPaymentJournalLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { CustomerPaymentJournalHeadersApi } from './CustomerPaymentJournalHeadersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
import { PaymentJournalLineSettledInvoicesApi } from './PaymentJournalLineSettledInvoicesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SettlementType } from './SettlementType';
import { CustVendGatewayOperatorOfacIndicatorUs } from './CustVendGatewayOperatorOfacIndicatorUs';
import { CustVendForeignExchIndicatorUs } from './CustVendForeignExchIndicatorUs';
import { CustVendForeignExchRefIndicatorUs } from './CustVendForeignExchRefIndicatorUs';
import { CustVendSecondaryOfacIndicatorUs } from './CustVendSecondaryOfacIndicatorUs';
import { CustVendOriginatingDfiQualifierUs } from './CustVendOriginatingDfiQualifierUs';
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
export class CustomerPaymentJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerPaymentJournalLines<DeSerializersT>, DeSerializersT>
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
  ): CustomerPaymentJournalLinesApi<DeSerializersT> {
    return new CustomerPaymentJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineDefaultDimensionOffsetEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_OFFSET_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLinePaymentMethodEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineDefaultDimensionAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineLedgerVoucherTypeEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineHeaderEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_HEADER_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineCurrentyEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineTaxGroupEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineTaxItemGroupEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ROLE: OneToManyLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      PaymentJournalLineSettledInvoicesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>,
      CustomerPaymentJournalHeadersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      TaxItemGroupHeadingsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CustomerPaymentJournalFeesApi<DeSerializersT>,
      PaymentJournalLineSettledInvoicesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION:
        new OneToOneLink(
          'CustomerPaymentJournalLineOffsetAccountCombination',
          this,
          linkedApis[0]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_OFFSET_ENTITY_ROLE:
        new OneToOneLink(
          'CustomerPaymentJournalLineDefaultDimensionOffsetEntityRole',
          this,
          linkedApis[1]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE:
        new OneToOneLink(
          'CustomerPaymentJournalLinePaymentMethodEntityRole',
          this,
          linkedApis[2]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_ACCOUNT_ENTITY_ROLE:
        new OneToOneLink(
          'CustomerPaymentJournalLineDefaultDimensionAccountEntityRole',
          this,
          linkedApis[3]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY_ROLE:
        new OneToOneLink(
          'CustomerPaymentJournalLineLedgerVoucherTypeEntityRole',
          this,
          linkedApis[4]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_HEADER_ENTITY_ROLE: new OneToOneLink(
        'CustomerPaymentJournalLineHeaderEntityRole',
        this,
        linkedApis[5]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY_ROLE: new OneToOneLink(
        'CustomerPaymentJournalLineCurrentyEntityRole',
        this,
        linkedApis[6]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: new OneToOneLink(
        'CustomerPaymentJournalLineEntityCompany',
        this,
        linkedApis[7]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY_ROLE: new OneToOneLink(
        'CustomerPaymentJournalLineTaxGroupEntityRole',
        this,
        linkedApis[8]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY_ROLE:
        new OneToOneLink(
          'CustomerPaymentJournalLineTaxItemGroupEntityRole',
          this,
          linkedApis[9]
        ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: new OneToOneLink(
        'CustomerPaymentJournalLineAccountCombination',
        this,
        linkedApis[10]
      ),
      CUSTOMER_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'CustomerPaymentJournalFee',
        this,
        linkedApis[11]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_ROLE: new OneToManyLink(
        'CustomerPaymentJournalLineRole',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = CustomerPaymentJournalLines;

  requestBuilder(): CustomerPaymentJournalLinesRequestBuilder<DeSerializersT> {
    return new CustomerPaymentJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPaymentJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPaymentJournalLines<DeSerializersT>,
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
    typeof CustomerPaymentJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPaymentJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_SALES_TAX_DIRECTION_FROM_MAIN_ACCOUNT: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKED_INVOICE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPOSIT_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    POSTDATED_CHECK_CASHIER_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_MATURITY_DATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NACHAIATOFAC_SCREENING_INDICATOR: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendGatewayOperatorOfacIndicatorUs,
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_INDICATOR: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendForeignExchIndicatorUs,
      true,
      true
    >;
    POSTDATED_CHECK_SALESPERSON_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_REFERENCE_INDICATOR: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendForeignExchRefIndicatorUs,
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIATOFAC_SECONDARY_SCREENING_INDICATOR: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendSecondaryOfacIndicatorUs,
      true,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSIONS_FOR_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_ORIGINAL_CHECK_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_IMPORT_DATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NACHAIAT_RECEIVING_DFI_QUALIFIER: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendOriginatingDfiQualifierUs,
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKED_INVOICE_COMPANY: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_A_BANK_DEPOSIT_SLIP: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_IS_REPLACEMENT_CHECK: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NACHAIAT_ORIGINATING_DFI_QUALIFIER: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendOriginatingDfiQualifierUs,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_WITHHOLDING_TAX: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_REASON_FOR_STOP: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PREPAYMENT: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_REFERENCE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSIONS_FOR_OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTDATED_CHECK_RECEIVED_DATE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_BANK_BRANCH: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_REPLACEMENT_COMMENTS: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_STOP_PAYMENT: EnumField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_BANK_NAME: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_NOTES: OrderableEdmTypeField<
      CustomerPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineDefaultDimensionOffsetEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_OFFSET_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLinePaymentMethodEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineDefaultDimensionAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_DEFAULT_DIMENSION_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineLedgerVoucherTypeEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineHeaderEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_HEADER_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineCurrentyEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineTaxGroupEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineTaxItemGroupEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY_ROLE: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: OneToOneLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_ROLE: OneToManyLink<
      CustomerPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      PaymentJournalLineSettledInvoicesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPaymentJournalLines<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useSalesTaxDirectionFromMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SALES_TAX_DIRECTION_FROM_MAIN_ACCOUNT: fieldBuilder.buildEnumField(
          'UseSalesTaxDirectionFromMainAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link markedInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_INVOICE: fieldBuilder.buildEdmTypeField(
          'MarkedInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link depositNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepositNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemWithholdingTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckCashierDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_CASHIER_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckCashierDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckMaturityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_MATURITY_DATE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckMaturityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link settleVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_VOUCHER: fieldBuilder.buildEnumField(
          'SettleVoucher',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nachaiatofacScreeningIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIATOFAC_SCREENING_INDICATOR: fieldBuilder.buildEnumField(
          'NACHAIATOFACScreeningIndicator',
          CustVendGatewayOperatorOfacIndicatorUs,
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
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chineseVoucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'ChineseVoucherType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nachaiatForeignExchangeIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_FOREIGN_EXCHANGE_INDICATOR: fieldBuilder.buildEnumField(
          'NACHAIATForeignExchangeIndicator',
          CustVendForeignExchIndicatorUs,
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckSalespersonDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_SALESPERSON_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'PostdatedCheckSalespersonDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link nachaiatForeignExchangeReferenceIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_FOREIGN_EXCHANGE_REFERENCE_INDICATOR:
          fieldBuilder.buildEnumField(
            'NACHAIATForeignExchangeReferenceIndicator',
            CustVendForeignExchRefIndicatorUs,
            true
          ),
        /**
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link nachaiatofacSecondaryScreeningIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIATOFAC_SECONDARY_SCREENING_INDICATOR: fieldBuilder.buildEnumField(
          'NACHAIATOFACSecondaryScreeningIndicator',
          CustVendSecondaryOfacIndicatorUs,
          true
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
         * Static representation of the {@link transactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'TransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionsForAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSIONS_FOR_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultDimensionsForAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link postdatedCheckOriginalCheckNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_ORIGINAL_CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckOriginalCheckNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankImportDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_IMPORT_DATE: fieldBuilder.buildEdmTypeField(
          'CentralBankImportDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nachaiatReceivingDfiQualifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_RECEIVING_DFI_QUALIFIER: fieldBuilder.buildEnumField(
          'NACHAIATReceivingDFIQualifier',
          CustVendOriginatingDfiQualifierUs,
          true
        ),
        /**
         * Static representation of the {@link offsetTransactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'OffsetTransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markedInvoiceCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_INVOICE_COMPANY: fieldBuilder.buildEdmTypeField(
          'MarkedInvoiceCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useABankDepositSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_A_BANK_DEPOSIT_SLIP: fieldBuilder.buildEnumField(
          'UseABankDepositSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetFinTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetFinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckIsReplacementCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_IS_REPLACEMENT_CHECK: fieldBuilder.buildEnumField(
          'PostdatedCheckIsReplacementCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nachaiatOriginatingDfiQualifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_ORIGINATING_DFI_QUALIFIER: fieldBuilder.buildEnumField(
          'NACHAIATOriginatingDFIQualifier',
          CustVendOriginatingDfiQualifierUs,
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
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculateWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_WITHHOLDING_TAX: fieldBuilder.buildEnumField(
          'CalculateWithholdingTax',
          NoYes,
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
         * Static representation of the {@link postdatedCheckReasonForStop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_REASON_FOR_STOP: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckReasonForStop',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
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
         * Static representation of the {@link isPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAYMENT: fieldBuilder.buildEnumField('IsPrepayment', NoYes, true),
        /**
         * Static representation of the {@link nachaiatForeignExchangeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_FOREIGN_EXCHANGE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'NACHAIATForeignExchangeReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionsForOffsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSIONS_FOR_OFFSET_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultDimensionsForOffsetAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postdatedCheckReceivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckReceivedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link postdatedCheckBankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckBankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckReplacementComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_REPLACEMENT_COMMENTS: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckReplacementComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckStopPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_STOP_PAYMENT: fieldBuilder.buildEnumField(
          'PostdatedCheckStopPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chineseVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ChineseVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postdatedCheckBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_NOTES: fieldBuilder.buildEdmTypeField(
          'PaymentNotes',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPaymentJournalLines)
      };
    }

    return this._schema;
  }
}
