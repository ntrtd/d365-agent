/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorsForAi } from './VendorsForAi';
import { VendorsForAiRequestBuilder } from './VendorsForAiRequestBuilder';
import { PurchaseAgreementHeadersForAiApi } from './PurchaseAgreementHeadersForAiApi';
import { ProductApprovedVendorsForAiApi } from './ProductApprovedVendorsForAiApi';
import { ContactsForAiApi } from './ContactsForAiApi';
import { PostalAddressesForAiApi } from './PostalAddressesForAiApi';
import { PurchaseOrderLinesForAiApi } from './PurchaseOrderLinesForAiApi';
import { NoYes } from './NoYes';
import { CustVendorBlocked } from './CustVendorBlocked';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorsForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorsForAi<DeSerializersT>, DeSerializersT>
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
  ): VendorsForAiApi<DeSerializersT> {
    return new VendorsForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementHeadersForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvedVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVED_VENDOR: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      ContactsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESSES: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PostalAddressesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementHeadersForAiApi<DeSerializersT>,
      ProductApprovedVendorsForAiApi<DeSerializersT>,
      ContactsForAiApi<DeSerializersT>,
      PostalAddressesForAiApi<DeSerializersT>,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      APPROVED_VENDOR: new OneToManyLink('ApprovedVendor', this, linkedApis[1]),
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[2]),
      ADDRESSES: new OneToManyLink('Addresses', this, linkedApis[3]),
      PURCHASE_ORDER_LINES: new OneToManyLink(
        'PurchaseOrderLines',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = VendorsForAi;

  requestBuilder(): VendorsForAiRequestBuilder<DeSerializersT> {
    return new VendorsForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorsForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorsForAi<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorsForAi<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorsForAi, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorsForAi, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MINORITY_OWNED: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CLEARING_PERIOD_PAYMENT_TERMS_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_WORK_CALENDAR_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_HOLD_RELEASE_DATE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_SEARCH_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SMALL_BUSINESS: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    BUSINESS_SUBSEGMENT_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DELIVERY_MODE_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VENDOR_LOCALLY_OWNED: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PAYMENT_DAY_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ORGANIZATION_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_KNOWN_AS_NAME: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_VETERAN_OWNED: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WOMAN_OWNER: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OWNER_DISABLED: EnumField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUSINESS_SEGMENT_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      VendorsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementHeadersForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvedVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVED_VENDOR: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      ContactsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESSES: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PostalAddressesForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      VendorsForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorsForAi<DeSerializers>>;
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultPurchaseOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPurchaseOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMinorityOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MINORITY_OWNED: fieldBuilder.buildEnumField(
          'IsMinorityOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditRating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_RATING: fieldBuilder.buildEdmTypeField(
          'CreditRating',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDeliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link clearingPeriodPaymentTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_PERIOD_PAYMENT_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'ClearingPeriodPaymentTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseWorkCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorHoldReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_HOLD_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'VendorHoldReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'VendorSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyChainName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyChainName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSmallBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SMALL_BUSINESS: fieldBuilder.buildEnumField(
          'IsSmallBusiness',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHoldStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD_STATUS: fieldBuilder.buildEnumField(
          'OnHoldStatus',
          CustVendorBlocked,
          true
        ),
        /**
         * Static representation of the {@link businessSubsegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SUBSEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSubsegmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentSpecificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'PaymentSpecificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultVendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDeliveryModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineOfBusinessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS_ID: fieldBuilder.buildEdmTypeField(
          'LineOfBusinessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVendorLocallyOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_LOCALLY_OWNED: fieldBuilder.buildEnumField(
          'IsVendorLocallyOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentDayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_DAY_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentDayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'Nationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'VendorOrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorKnownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'VendorKnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceVeteranOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_VETERAN_OWNED: fieldBuilder.buildEnumField(
          'IsServiceVeteranOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWomanOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WOMAN_OWNER: fieldBuilder.buildEnumField(
          'IsWomanOwner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOwnerDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OWNER_DISABLED: fieldBuilder.buildEnumField(
          'IsOwnerDisabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link businessSegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSegmentCode',
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
         * Static representation of the {@link defaultTotalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'DefaultTotalDiscountVendorGroupCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorsForAi)
      };
    }

    return this._schema;
  }
}
