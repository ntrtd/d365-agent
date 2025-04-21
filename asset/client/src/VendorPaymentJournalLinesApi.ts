/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentJournalLines } from './VendorPaymentJournalLines';
import { VendorPaymentJournalLinesRequestBuilder } from './VendorPaymentJournalLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VendorPaymentMethodsApi } from './VendorPaymentMethodsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import { VendorPaymentJournalHeadersApi } from './VendorPaymentJournalHeadersApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { VendorPaymentJournalLineSettledInvoicesApi } from './VendorPaymentJournalLineSettledInvoicesApi';
import { VendorPaymentJournalFeesApi } from './VendorPaymentJournalFeesApi';
import { NoYes } from './NoYes';
import { CustVendSecondaryOfacIndicatorUs } from './CustVendSecondaryOfacIndicatorUs';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { CustVendOriginatingDfiQualifierUs } from './CustVendOriginatingDfiQualifierUs';
import { CustVendForeignExchRefIndicatorUs } from './CustVendForeignExchRefIndicatorUs';
import { Timezone } from './Timezone';
import { CustVendForeignExchIndicatorUs } from './CustVendForeignExchIndicatorUs';
import { CustVendGatewayOperatorOfacIndicatorUs } from './CustVendGatewayOperatorOfacIndicatorUs';
import { VendOutPaymDtazv_InstrKey } from './VendOutPaymDtazv_InstrKey';
import { SettlementType } from './SettlementType';
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
export class VendorPaymentJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorPaymentJournalLines<DeSerializersT>, DeSerializersT>
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
  ): VendorPaymentJournalLinesApi<DeSerializersT> {
    return new VendorPaymentJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLinePaymentMethodEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineAccountDefaultDimensionRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_DEFAULT_DIMENSION_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendPaymentJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_HEADER: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineOffsetAccountDefaultDimensionRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_DEFAULT_DIMENSION_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLineEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_ROLE: OneToManyLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLineSettledInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      VendorPaymentMethodsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      VendorPaymentJournalHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>,
      VendorPaymentJournalLineSettledInvoicesApi<DeSerializersT>,
      VendorPaymentJournalFeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION: new OneToOneLink(
        'VendorPaymentJournalLineOffsetAccountCombination',
        this,
        linkedApis[0]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: new OneToOneLink(
        'VendorPaymentJournalLineAccountCombination',
        this,
        linkedApis[1]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE: new OneToOneLink(
        'VendorPaymentJournalLinePaymentMethodEntityRole',
        this,
        linkedApis[2]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[3]),
      VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_DEFAULT_DIMENSION_ROLE:
        new OneToOneLink(
          'VendorPaymentJournalLineAccountDefaultDimensionRole',
          this,
          linkedApis[4]
        ),
      VEND_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: new OneToOneLink(
        'VendPaymentJournalLineEntityCompany',
        this,
        linkedApis[5]
      ),
      VENDOR_PAYMENT_JOURNAL_HEADER: new OneToOneLink(
        'VendorPaymentJournalHeader',
        this,
        linkedApis[6]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_DEFAULT_DIMENSION_ROLE:
        new OneToOneLink(
          'VendorPaymentJournalLineOffsetAccountDefaultDimensionRole',
          this,
          linkedApis[7]
        ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[8]),
      VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_ROLE: new OneToManyLink(
        'VendorPaymentJournalLineEntityRole',
        this,
        linkedApis[9]
      ),
      VENDOR_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'VendorPaymentJournalFee',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = VendorPaymentJournalLines;

  requestBuilder(): VendorPaymentJournalLinesRequestBuilder<DeSerializersT> {
    return new VendorPaymentJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorPaymentJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPaymentJournalLines<DeSerializersT>,
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
    typeof VendorPaymentJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPaymentJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_CASHIER_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SALES_TAX_DIRECTION_FROM_MAIN_ACCOUNT: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NACHAIATOFAC_SECONDARY_SCREENING_INDICATOR: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendSecondaryOfacIndicatorUs,
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_STREET: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_REASON_FOR_STOP: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_IMPORT_DATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMITTANCE_ADDRESS_CITY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSIONS_FOR_OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_RECEIVING_DFI_QUALIFIER: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendOriginatingDfiQualifierUs,
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_STATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKED_INVOICE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_ACCOUNT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_REFERENCE_INDICATOR: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendForeignExchRefIndicatorUs,
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_REPLACEMENT_COMMENTS: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_BANK_BRANCH: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_PURPOSE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    RESTRICTED_FORWARDING: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKED_INVOICE_COMPANY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_LOCATION_ID: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_IS_REPLACEMENT_CHECK: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_BANK_NAME: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_TIME_ZONE: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_INSTRUMENT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTDATED_CHECK_ORIGINAL_CHECK_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_INDICATOR: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendForeignExchIndicatorUs,
      true,
      true
    >;
    NEW_JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_VALID_TO: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NACHAIATOFAC_SCREENING_INDICATOR: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendGatewayOperatorOfacIndicatorUs,
      true,
      true
    >;
    ERROR_CODE_PAYMENT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_STOP_PAYMENT: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NACHAIAT_FOREIGN_EXCHANGE_REFERENCE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PREPAYMENT: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMITTANCE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FULL_PRIMARY_REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_BEARER: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NACHAIAT_ORIGINATING_DFI_QUALIFIER: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      CustVendOriginatingDfiQualifierUs,
      true,
      true
    >;
    CALCULATE_WITHHOLDING_TAX: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTDATED_CHECK_SALESPERSON_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_MATURITY_DATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INSTRUCTION_KEY_4: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      VendOutPaymDtazv_InstrKey,
      true,
      true
    >;
    INSTRUCTION_KEY_1: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      VendOutPaymDtazv_InstrKey,
      true,
      true
    >;
    INSTRUCTION_KEY_2: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      VendOutPaymDtazv_InstrKey,
      true,
      true
    >;
    INSTRUCTION_KEY_3: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      VendOutPaymDtazv_InstrKey,
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTDATED_CHECK_RECEIVED_DATE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSIONS_FOR_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      VendorPaymentJournalLines<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineOffsetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLinePaymentMethodEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_PAYMENT_METHOD_ENTITY_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineAccountDefaultDimensionRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ACCOUNT_DEFAULT_DIMENSION_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendPaymentJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_PAYMENT_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_HEADER: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineOffsetAccountDefaultDimensionRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_OFFSET_ACCOUNT_DEFAULT_DIMENSION_ROLE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLineEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_ROLE: OneToManyLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLineSettledInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      VendorPaymentJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorPaymentJournalLines<DeSerializers>>;
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
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
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
         * Static representation of the {@link postdatedCheckCashierDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_CASHIER_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckCashierDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link nachaiatofacSecondaryScreeningIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIATOFAC_SECONDARY_SCREENING_INDICATOR: fieldBuilder.buildEnumField(
          'NACHAIATOFACSecondaryScreeningIndicator',
          CustVendSecondaryOfacIndicatorUs,
          true
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
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
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
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
         * Static representation of the {@link remittanceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDistrictName',
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
         * Static representation of the {@link chineseVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ChineseVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
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
         * Static representation of the {@link centralBankImportDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_IMPORT_DATE: fieldBuilder.buildEdmTypeField(
          'CentralBankImportDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link remittanceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCity',
          'Edm.String',
          true
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
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
          'Edm.String',
          true
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remittanceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'CheckNumber',
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
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remittanceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressZipCode',
          'Edm.String',
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
         * Static representation of the {@link contactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'ContactPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FeeAccount',
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
         * Static representation of the {@link remittanceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCounty',
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
         * Static representation of the {@link postdatedCheckBankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckBankBranch',
          'Edm.String',
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link itemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupCode',
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
         * Static representation of the {@link restrictedForwarding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTED_FORWARDING: fieldBuilder.buildEnumField(
          'RestrictedForwarding',
          NoYes,
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
         * Static representation of the {@link remittanceAddressCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RemittanceLocationId',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
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
         * Static representation of the {@link offsetCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_COMPANY: fieldBuilder.buildEdmTypeField(
          'OffsetCompany',
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
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link paymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'RemittanceAddressTimeZone',
          Timezone,
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
         * Static representation of the {@link remittanceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDescription',
          'Edm.String',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link remittanceAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link nachaiatForeignExchangeIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NACHAIAT_FOREIGN_EXCHANGE_INDICATOR: fieldBuilder.buildEnumField(
          'NACHAIATForeignExchangeIndicator',
          CustVendForeignExchIndicatorUs,
          true
        ),
        /**
         * Static representation of the {@link newJournalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'NewJournalBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidTo',
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
         * Static representation of the {@link errorCodePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'ErrorCodePayment',
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
         * Static representation of the {@link postdatedCheckStopPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_STOP_PAYMENT: fieldBuilder.buildEnumField(
          'PostdatedCheckStopPayment',
          NoYes,
          true
        ),
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
         * Static representation of the {@link isPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAYMENT: fieldBuilder.buildEnumField('IsPrepayment', NoYes, true),
        /**
         * Static representation of the {@link remittanceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fullPrimaryRemittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryRemittanceAddress',
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
         * Static representation of the {@link chargeBearer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_BEARER: fieldBuilder.buildEdmTypeField(
          'ChargeBearer',
          'Edm.Int64',
          false
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
         * Static representation of the {@link remittanceAddressCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTRY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCountry',
          'Edm.String',
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
         * Static representation of the {@link calculateWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_WITHHOLDING_TAX: fieldBuilder.buildEnumField(
          'CalculateWithholdingTax',
          NoYes,
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
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
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
         * Static representation of the {@link postdatedCheckMaturityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_MATURITY_DATE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckMaturityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link instructionKey4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_KEY_4: fieldBuilder.buildEnumField(
          'InstructionKey4',
          VendOutPaymDtazv_InstrKey,
          true
        ),
        /**
         * Static representation of the {@link instructionKey1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_KEY_1: fieldBuilder.buildEnumField(
          'InstructionKey1',
          VendOutPaymDtazv_InstrKey,
          true
        ),
        /**
         * Static representation of the {@link instructionKey2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_KEY_2: fieldBuilder.buildEnumField(
          'InstructionKey2',
          VendOutPaymDtazv_InstrKey,
          true
        ),
        /**
         * Static representation of the {@link instructionKey3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_KEY_3: fieldBuilder.buildEnumField(
          'InstructionKey3',
          VendOutPaymDtazv_InstrKey,
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
         * Static representation of the {@link postdatedCheckReceivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECK_RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'PostdatedCheckReceivedDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link remittanceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLongitude',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPaymentJournalLines)
      };
    }

    return this._schema;
  }
}
