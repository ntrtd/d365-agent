/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Customers } from './Customers';
import { CustomersRequestBuilder } from './CustomersRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { Timezone } from './Timezone';
import { PaymentStub } from './PaymentStub';
import { CreditCardCvc } from './CreditCardCvc';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { CustVendorBlocked } from './CustVendorBlocked';
import { WhsFulfillmentType } from './WhsFulfillmentType';
import { CustAccountStatement } from './CustAccountStatement';
import { FederalNonFederalIndicatorCode } from './FederalNonFederalIndicatorCode';
import { CreditCardAddressVerification } from './CreditCardAddressVerification';
import { RetailReceiptOptionBase } from './RetailReceiptOptionBase';
import { WhsCustFulfillmentErrorTolerance } from './WhsCustFulfillmentErrorTolerance';
import { MonthsOfYear } from './MonthsOfYear';
import { CustWhtContributionTypeBr } from './CustWhtContributionTypeBr';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { CreditCardAddressVerificationLevel } from './CreditCardAddressVerificationLevel';
import { PanStatusIn } from './PanStatusIn';
import { CompanyTypeMx } from './CompanyTypeMx';
import { UseCashDisc } from './UseCashDisc';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Customers<DeSerializersT>, DeSerializersT>
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
  ): CustomersApi<DeSerializersT> {
    return new CustomersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Customers<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Customers;

  requestBuilder(): CustomersRequestBuilder<DeSerializersT> {
    return new CustomersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Customers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Customers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Customers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Customers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Customers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FUEL_SURCHARGE_APPLIED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_COUNTY_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      InvoiceOrderAccount,
      true,
      true
    >;
    PACKING_MATERIAL_FEE_LICENSE_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_PRESENCE_TYPE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINAL_USER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_SUFRAMA_DISCOUNT_PI_SAND_COFINS: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURP_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SEGMENT_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SALES_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_GROUP: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_PROJ_INVOICE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_CVC: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CreditCardCvc,
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIRO_TYPE_ACCOUNT_STATEMENT: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    CALCULATE_WITHHOLDING_TAX: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RFID_PALLET_TAGGING_ENABLED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_INVOICE_EAN: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_FREIGHT_ZONE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_COLLECTIONLETTER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    ORDER_ENTRY_DEADLINE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGNER_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_IS_ASN_GENERATED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FREIGHT_ACCRUED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTY_STATE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_FULFILLMENT_RATE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CENTRAL_BANK_PURPOSE_NOTES: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_CONTACT_PERSON_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    INVOICE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    WAREHOUSE_FULFILLMENT_TYPE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      WhsFulfillmentType,
      true,
      true
    >;
    ACCOUNT_STATEMENT: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CustAccountStatement,
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IRS_1099_C_INDICATOR: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRENCH_SIRET: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DAY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_NIT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_INDICATOR: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      FederalNonFederalIndicatorCode,
      true,
      true
    >;
    EMPLOYEE_RESPONSIBLE_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_REFERENCE_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CURRENCY_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_TAX_INCLUDED_IN_PRICES: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_FACTORING_ACCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CCM: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_EMAIL: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LINE_DISCOUNT_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLEMENTARY_ITEM_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DISTRICT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_DAY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_EXPRESS_BILL_OF_LADING_ACCEPTED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerification,
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXCLUDED_FROM_COLLECTION_FEE_CALCULATION: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRANSACTION_POSTED_AS_SHIPMENT: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXTERNALLY_MAINTAINED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_IS_MANDATORY: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DAYS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_ACCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_IE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERENTIAL_CUSTOMER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_OPTION: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      RetailReceiptOptionBase,
      true,
      true
    >;
    FULFILLMENT_ERROR_TOLERANCE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      WhsCustFulfillmentErrorTolerance,
      true,
      true
    >;
    ADDRESS_BRAZILIAN_IE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_SALE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_IS_AUTHORIZATION_VOIDED_ON_FAILURE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_STATE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_CALENDAR: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_INSCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_RETURN_TAX_GROUP: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_WITHHOLDING_CONTRIBUTION_TYPE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CustWhtContributionTypeBr,
      true,
      true
    >;
    IS_ELECTRONIC_INVOICE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_AGENCY_LOCATION_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_FREE_TEXT_INVOICE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_TO: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    BRAZILIAN_CNAE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CASH_DISCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_COUNTRY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_IN_SUFRAMA_REGION: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INCOMING_FISCAL_DOCUMENT_GENERATED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_MEMO: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEF_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXCLUDED_FROM_INTEREST_CHARGE_CALCULATION: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATISTICS_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ORDER_NUMBER_REFERENCE_USED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FEDERAL_COMMENTS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SUBSEGMENT_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REBATE_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RFID_CASE_TAGGING_ENABLED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ICMS_CONTRIBUTOR: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_VALID_TO: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INVOICE_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerificationLevel,
      true,
      true
    >;
    WAREHOUSE_IS_ENTIRE_SHIPMENT_FILLED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKING_DUTY_LICENSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGES_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_STATUS: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PanStatusIn,
      true,
      true
    >;
    COMMISSION_SALES_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID_TYPE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_CUSTOMER: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_TMA_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_TYPE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    ORGANIZATION_NUMBER_OF_EMPLOYEES: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_RFID_ITEM_TAGGING_ENABLED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_INTEREST_NOTE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_REASON: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REGISTRATION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_USE_CASH_DISCOUNT: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    DISCOUNT_PRICE_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFRAMA_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_INSSCEI: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_ASSESSEE: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    WRITEOFF_REASON: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      Customers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCH_REQUEST_USED: EnumField<
      Customers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Customers<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Customers<DeSerializers>>;
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
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressBrazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFuelSurchargeApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FUEL_SURCHARGE_APPLIED: fieldBuilder.buildEnumField(
          'IsFuelSurchargeApplied',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentFineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthCountyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_COUNTY_CODE: fieldBuilder.buildEdmTypeField(
          'BirthCountyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS: fieldBuilder.buildEnumField(
          'InvoiceAddress',
          InvoiceOrderAccount,
          true
        ),
        /**
         * Static representation of the {@link packingMaterialFeeLicenseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_FEE_LICENSE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PackingMaterialFeeLicenseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'TransactionPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL_USER: fieldBuilder.buildEnumField('IsFinalUser', NoYes, true),
        /**
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasSuframaDiscountPiSandCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_SUFRAMA_DISCOUNT_PI_SAND_COFINS: fieldBuilder.buildEnumField(
          'HasSuframaDiscountPISandCOFINS',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curpNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURP_NUMBER: fieldBuilder.buildEdmTypeField(
          'CURPNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSegmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesSegmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceDeliveryAddressBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_DELIVERY_ADDRESS_BASED: fieldBuilder.buildEnumField(
          'IsServiceDeliveryAddressBased',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'InvoiceAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link salesAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tcsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP: fieldBuilder.buildEdmTypeField(
          'TCSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeProjInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_PROJ_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeProjInvoice',
          PaymentStub,
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
         * Static representation of the {@link organizationPhoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationPhoneticName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardCvc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CVC: fieldBuilder.buildEnumField(
          'CreditCardCVC',
          CreditCardCvc,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link deliveryAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link giroTypeAccountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'GiroTypeAccountStatement',
          PaymentStub,
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
         * Static representation of the {@link isRfidPalletTaggingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RFID_PALLET_TAGGING_ENABLED: fieldBuilder.buildEnumField(
          'IsRFIDPalletTaggingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link electronicInvoiceEan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_INVOICE_EAN: fieldBuilder.buildEdmTypeField(
          'ElectronicInvoiceEAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'DeliveryFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link birthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'BirthPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_INITIALS: fieldBuilder.buildEdmTypeField(
          'PersonInitials',
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
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeCollectionletter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_COLLECTIONLETTER: fieldBuilder.buildEnumField(
          'GiroTypeCollectionletter',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link orderEntryDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ENTRY_DEADLINE: fieldBuilder.buildEdmTypeField(
          'OrderEntryDeadline',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGNER_ID: fieldBuilder.buildEdmTypeField(
          'ForeignerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseIsAsnGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_IS_ASN_GENERATED: fieldBuilder.buildEnumField(
          'WarehouseIsASNGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFreightAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FREIGHT_ACCRUED: fieldBuilder.buildEnumField(
          'IsFreightAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partyState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_STATE: fieldBuilder.buildEdmTypeField(
          'PartyState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseFulfillmentRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_FULFILLMENT_RATE: fieldBuilder.buildEdmTypeField(
          'WarehouseFulfillmentRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link centralBankPurposeNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_NOTES: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionsContactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'CollectionsContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMaritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MARITAL_STATUS: fieldBuilder.buildEnumField(
          'PersonMaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
        /**
         * Static representation of the {@link invoiceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS: fieldBuilder.buildEdmTypeField(
          'DeliveryTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personChildrenNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_CHILDREN_NAMES: fieldBuilder.buildEdmTypeField(
          'PersonChildrenNames',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalSuffix',
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
         * Static representation of the {@link warehouseFulfillmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_FULFILLMENT_TYPE: fieldBuilder.buildEnumField(
          'WarehouseFulfillmentType',
          WhsFulfillmentType,
          true
        ),
        /**
         * Static representation of the {@link accountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'AccountStatement',
          CustAccountStatement,
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link irs1099CIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IRS_1099_C_INDICATOR: fieldBuilder.buildEnumField(
          'IRS1099CIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link frenchSiret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRENCH_SIRET: fieldBuilder.buildEdmTypeField(
          'FrenchSiret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY: fieldBuilder.buildEdmTypeField(
          'PaymentDay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianNit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_NIT: fieldBuilder.buildEdmTypeField(
          'BrazilianNIT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link federalIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_INDICATOR: fieldBuilder.buildEnumField(
          'FederalIndicator',
          FederalNonFederalIndicatorCode,
          true
        ),
        /**
         * Static representation of the {@link employeeResponsibleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_RESPONSIBLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployeeResponsibleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSalesTaxIncludedInPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_TAX_INCLUDED_IN_PRICES: fieldBuilder.buildEnumField(
          'IsSalesTaxIncludedInPrices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link brazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'BrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentFactoringAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FACTORING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentFactoringAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianCcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CCM: fieldBuilder.buildEdmTypeField(
          'BrazilianCCM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ReceiptEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP: fieldBuilder.buildEdmTypeField(
          'TDSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiLineDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'MultiLineDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplementaryItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLEMENTARY_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SupplementaryItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWithholdingTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsWithholdingTaxCalculated',
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
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DISTRICT: fieldBuilder.buildEdmTypeField(
          'SalesDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidationDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_DAY: fieldBuilder.buildEdmTypeField(
          'ConsolidationDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isExpressBillOfLadingAccepted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPRESS_BILL_OF_LADING_ACCEPTED: fieldBuilder.buildEnumField(
          'IsExpressBillOfLadingAccepted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION: fieldBuilder.buildEnumField(
          'CreditCardAddressVerification',
          CreditCardAddressVerification,
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExcludedFromCollectionFeeCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUDED_FROM_COLLECTION_FEE_CALCULATION:
          fieldBuilder.buildEnumField(
            'IsExcludedFromCollectionFeeCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFinancialInterestCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isTransactionPostedAsShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_POSTED_AS_SHIPMENT: fieldBuilder.buildEnumField(
          'IsTransactionPostedAsShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'IsExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_IS_MANDATORY: fieldBuilder.buildEnumField(
          'CreditLimitIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentTermsBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'PaymentTermsBaseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'BrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferentialCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERENTIAL_CUSTOMER: fieldBuilder.buildEnumField(
          'PreferentialCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_OPTION: fieldBuilder.buildEnumField(
          'ReceiptOption',
          RetailReceiptOptionBase,
          true
        ),
        /**
         * Static representation of the {@link fulfillmentErrorTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_ERROR_TOLERANCE: fieldBuilder.buildEnumField(
          'FulfillmentErrorTolerance',
          WhsCustFulfillmentErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link addressBrazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'PersonAnniversaryMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhonePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhonePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_SALE: fieldBuilder.buildEnumField('ExportSale', NoYes, true),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerificationIsAuthorizationVoidedOnFailure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_IS_AUTHORIZATION_VOIDED_ON_FAILURE:
          fieldBuilder.buildEnumField(
            'CreditCardAddressVerificationIsAuthorizationVoidedOnFailure',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_CALENDAR: fieldBuilder.buildEdmTypeField(
          'ReceiptCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateInscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_INSCRIPTION: fieldBuilder.buildEdmTypeField(
          'StateInscription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesReturnTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETURN_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesReturnTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerWithholdingContributionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_WITHHOLDING_CONTRIBUTION_TYPE: fieldBuilder.buildEnumField(
          'CustomerWithholdingContributionType',
          CustWhtContributionTypeBr,
          true
        ),
        /**
         * Static representation of the {@link isElectronicInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ELECTRONIC_INVOICE: fieldBuilder.buildEnumField(
          'IsElectronicInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link federalAgencyLocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_AGENCY_LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'FederalAgencyLocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_FREE_TEXT_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeFreeTextInvoice',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personPhoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ABC_CODE: fieldBuilder.buildEnumField(
          'OrganizationABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link brazilianCnae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNAE: fieldBuilder.buildEdmTypeField(
          'BrazilianCNAE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAF_CODE: fieldBuilder.buildEdmTypeField('NAFCode', 'Edm.String', true),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentCashDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
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
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PartyCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isInSuframaRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IN_SUFRAMA_REGION: fieldBuilder.buildEnumField(
          'IsInSuframaRegion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isIncomingFiscalDocumentGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCOMING_FISCAL_DOCUMENT_GENERATED: fieldBuilder.buildEnumField(
          'IsIncomingFiscalDocumentGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MEMO: fieldBuilder.buildEdmTypeField(
          'SalesMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reliefGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ReliefGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExcludedFromInterestChargeCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUDED_FROM_INTEREST_CHARGE_CALCULATION:
          fieldBuilder.buildEnumField(
            'IsExcludedFromInterestChargeCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link statisticsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'StatisticsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOrderNumberReferenceUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORDER_NUMBER_REFERENCE_USED: fieldBuilder.buildEnumField(
          'IsOrderNumberReferenceUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link federalComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_COMMENTS: fieldBuilder.buildEdmTypeField(
          'FederalComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GENDER: fieldBuilder.buildEnumField(
          'PersonGender',
          Gender,
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSubsegmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SUBSEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesSubsegmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRfidCaseTaggingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RFID_CASE_TAGGING_ENABLED: fieldBuilder.buildEnumField(
          'IsRFIDCaseTaggingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIcmsContributor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_CONTRIBUTOR: fieldBuilder.buildEnumField(
          'IsICMSContributor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link creditCardAddressVerificationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: fieldBuilder.buildEnumField(
          'CreditCardAddressVerificationLevel',
          CreditCardAddressVerificationLevel,
          true
        ),
        /**
         * Static representation of the {@link warehouseIsEntireShipmentFilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_IS_ENTIRE_SHIPMENT_FILLED: fieldBuilder.buildEnumField(
          'WarehouseIsEntireShipmentFilled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link packingDutyLicense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY_LICENSE: fieldBuilder.buildEdmTypeField(
          'PackingDutyLicense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalRegistryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_REGISTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'NationalRegistryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargesGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargesGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_STATUS: fieldBuilder.buildEnumField('PanStatus', PanStatusIn, true),
        /**
         * Static representation of the {@link commissionSalesGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionSalesGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentIdType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link residenceForeignCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCE_FOREIGN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ResidenceForeignCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personHobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_HOBBIES: fieldBuilder.buildEdmTypeField(
          'PersonHobbies',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'IsOneTimeCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_CUSTOMER: fieldBuilder.buildEnumField(
          'ForeignCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerTmaGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TMA_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerTMAGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEnumField(
          'CompanyType',
          CompanyTypeMx,
          true
        ),
        /**
         * Static representation of the {@link organizationNumberOfEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField(
          'OrganizationNumberOfEmployees',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isRfidItemTaggingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RFID_ITEM_TAGGING_ENABLED: fieldBuilder.buildEnumField(
          'IsRFIDItemTaggingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeInterestNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_INTEREST_NOTE: fieldBuilder.buildEnumField(
          'GiroTypeInterestNote',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_REASON: fieldBuilder.buildEdmTypeField(
          'DeliveryReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxRegistrationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentUseCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_USE_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'PaymentUseCashDiscount',
          UseCashDisc,
          true
        ),
        /**
         * Static representation of the {@link discountPriceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DiscountPriceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suframaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_NUMBER: fieldBuilder.buildEdmTypeField(
          'SuframaNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPhoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyChain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN: fieldBuilder.buildEdmTypeField(
          'CompanyChain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianInsscei} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_INSSCEI: fieldBuilder.buildEdmTypeField(
          'BrazilianINSSCEI',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link natureOfAssessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE: fieldBuilder.buildEnumField(
          'NatureOfAssessee',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link writeoffReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITEOFF_REASON: fieldBuilder.buildEdmTypeField(
          'WriteoffReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPhoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticLastName',
          'Edm.String',
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
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchRequestUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCH_REQUEST_USED: fieldBuilder.buildEnumField(
          'IsPurchRequestUsed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Customers)
      };
    }

    return this._schema;
  }
}
