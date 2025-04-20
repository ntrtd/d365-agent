/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Prospects } from './Prospects';
import { ProspectsRequestBuilder } from './ProspectsRequestBuilder';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { CdsPartiesApi } from './CdsPartiesApi';
import { CustomerGroupsApi } from './CustomerGroupsApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { WorkersApi } from './WorkersApi';
import { OfBusinessesApi } from './OfBusinessesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { AddressStatesApi } from './AddressStatesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { VendorGroupsApi } from './VendorGroupsApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { MonthsOfYear } from './MonthsOfYear';
import { CustVendorBlocked } from './CustVendorBlocked';
import { Abc } from './Abc';
import { RetailB2BProspectStatus } from './RetailB2BProspectStatus';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { Gender } from './Gender';
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
export class ProspectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Prospects<DeSerializersT>, DeSerializersT>
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
  ): ProspectsApi<DeSerializersT> {
    return new ProspectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryReceiptWorkCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_RECEIPT_WORK_CALENDAR: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link party} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link prospectResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECT_RESPONSIBLE_WORKER: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lineOfBusiness} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINE_OF_BUSINESS: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      OfBusinessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_STATE: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DeliveryTermsApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>,
      CdsPartiesApi<DeSerializersT>,
      CustomerGroupsApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DeliveryModesV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      OfBusinessesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      AddressStatesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      VendorGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[0]),
      DELIVERY_RECEIPT_WORK_CALENDAR: new OneToOneLink(
        'DeliveryReceiptWorkCalendar',
        this,
        linkedApis[1]
      ),
      PARTY: new OneToOneLink('Party', this, linkedApis[2]),
      CUSTOMER_GROUP: new OneToOneLink('CustomerGroup', this, linkedApis[3]),
      ADDRESS_COUNTY: new OneToOneLink('AddressCounty', this, linkedApis[4]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[5]),
      DELIVERY_MODE: new OneToOneLink('DeliveryMode', this, linkedApis[6]),
      PROSPECT_RESPONSIBLE_WORKER: new OneToOneLink(
        'ProspectResponsibleWorker',
        this,
        linkedApis[7]
      ),
      LINE_OF_BUSINESS: new OneToOneLink('LineOfBusiness', this, linkedApis[8]),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[9]
      ),
      ADDRESS_STATE: new OneToOneLink('AddressState', this, linkedApis[10]),
      SALES_TAX_GROUP: new OneToOneLink('SalesTaxGroup', this, linkedApis[11]),
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[12]
      ),
      VENDOR_GROUP: new OneToOneLink('VendorGroup', this, linkedApis[13])
    };
    return this;
  }

  entityConstructor = Prospects;

  requestBuilder(): ProspectsRequestBuilder<DeSerializersT> {
    return new ProspectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Prospects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Prospects<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Prospects<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Prospects, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Prospects, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROSPECT_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIMARY_PHONE_NUMBER_MOBILE: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RECEIVING_DIRECT_MAIL: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPS_FREIGHT_ZONE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_POST_BOX: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CREDIT_LIMIT_CHECKING_REQUIRED: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_PARTY_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_URL_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_EXTENSION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROSPECT_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_RELATION_TYPE_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_SIZE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_MONTH: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PROSPECT_KNOWN_AS_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CHANNEL_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_B_2_B_PROSPECT: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_SUBSEGMENT_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_PARTY_TYPE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_STATUS_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_CLOSING_TIME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_EMPLOYEE_AMOUNT: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_TELEX_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_BIRTH_YEAR: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_DISTRICT_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER_OR_VENDOR: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    B_2_B_PROSPECT_STATUS: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      RetailB2BProspectStatus,
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIRET_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_URL_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_OPENING_TIME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUSINESS_SEGMENT_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_DAY: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_STATE_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_SEARCH_NAME: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_ADDRESS: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_RECEIPT_WORK_CALENDAR_ID: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_IMPORTED: EnumField<
      Prospects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      Prospects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryReceiptWorkCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_RECEIPT_WORK_CALENDAR: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link party} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link prospectResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECT_RESPONSIBLE_WORKER: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lineOfBusiness} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINE_OF_BUSINESS: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      OfBusinessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_STATE: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      Prospects<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Prospects<DeSerializers>>;
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
         * Static representation of the {@link prospectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_ID: fieldBuilder.buildEdmTypeField(
          'ProspectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrimaryPhoneNumberMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_PHONE_NUMBER_MOBILE: fieldBuilder.buildEnumField(
          'IsPrimaryPhoneNumberMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isReceivingDirectMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_DIRECT_MAIL: fieldBuilder.buildEnumField(
          'IsReceivingDirectMail',
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
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upsFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPS_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'UPSFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProspectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'AddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberPurpose',
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
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddressPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressPurpose',
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
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
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
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
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
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCreditLimitCheckingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREDIT_LIMIT_CHECKING_REQUIRED: fieldBuilder.buildEnumField(
          'IsCreditLimitCheckingRequired',
          NoYes,
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
         * Static representation of the {@link prospectPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProspectPartyNumber',
          'Edm.String',
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
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
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
         * Static representation of the {@link primaryUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberDescription',
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
         * Static representation of the {@link prospectResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProspectResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectRelationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_RELATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ProspectRelationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companySize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_SIZE: fieldBuilder.buildEdmTypeField(
          'CompanySize',
          'Edm.Int32',
          false
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
         * Static representation of the {@link companyChainName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyChainName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingCompliment',
          'Edm.String',
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
         * Static representation of the {@link primaryLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterPurpose',
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
         * Static representation of the {@link personBirthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_MONTH: fieldBuilder.buildEnumField(
          'PersonBirthMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link prospectKnownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'ProspectKnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
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
         * Static representation of the {@link primaryPhoneNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailChannelOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_OPERATING_UNIT_PARTY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'RetailChannelOperatingUnitPartyNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link primaryTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexPurpose',
          'Edm.String',
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
         * Static representation of the {@link nafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAF_CODE: fieldBuilder.buildEdmTypeField('NAFCode', 'Edm.String', true),
        /**
         * Static representation of the {@link isB2BProspect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_B_2_B_PROSPECT: fieldBuilder.buildEnumField(
          'IsB2BProspect',
          NoYes,
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
         * Static representation of the {@link personAnniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
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
         * Static representation of the {@link personPhoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'ProspectPartyType',
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
         * Static representation of the {@link primaryFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
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
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectStatusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'ProspectStatusCode',
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
         * Static representation of the {@link businessClosingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_CLOSING_TIME: fieldBuilder.buildEdmTypeField(
          'BusinessClosingTime',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link organizationAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ABC_CODE: fieldBuilder.buildEnumField(
          'OrganizationABCCode',
          Abc,
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
         * Static representation of the {@link organizationEmployeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_EMPLOYEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrganizationEmployeeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressStreetInKana',
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
         * Static representation of the {@link primaryLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedIn',
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
         * Static representation of the {@link personBirthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonBirthYear',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link salesDistrictId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'SalesDistrictId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomerOrVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER_OR_VENDOR: fieldBuilder.buildEnumField(
          'IsOneTimeCustomerOrVendor',
          NoYes,
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
         * Static representation of the {@link b2BProspectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_2_B_PROSPECT_STATUS: fieldBuilder.buildEnumField(
          'B2BProspectStatus',
          RetailB2BProspectStatus,
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
         * Static representation of the {@link lineOfBusinessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS_ID: fieldBuilder.buildEdmTypeField(
          'LineOfBusinessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siretNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIRET_NUMBER: fieldBuilder.buildEdmTypeField(
          'SiretNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
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
         * Static representation of the {@link primaryUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInPurpose',
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
         * Static representation of the {@link personMaritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MARITAL_STATUS: fieldBuilder.buildEnumField(
          'PersonMaritalStatus',
          DirPersonMaritalStatus,
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
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessOpeningTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_OPENING_TIME: fieldBuilder.buildEdmTypeField(
          'BusinessOpeningTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link personBirthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'PersonBirthDay',
          'Edm.Int32',
          false
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
         * Static representation of the {@link addressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'AddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prospectSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProspectSearchName',
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
         * Static representation of the {@link personGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GENDER: fieldBuilder.buildEnumField(
          'PersonGender',
          Gender,
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryEmailAddressImEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: fieldBuilder.buildEnumField(
          'IsPrimaryEmailAddressIMEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryReceiptWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_RECEIPT_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryReceiptWorkCalendarId',
          'Edm.String',
          true
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
         * Static representation of the {@link isImported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IMPORTED: fieldBuilder.buildEnumField('IsImported', NoYes, true),
        /**
         * Static representation of the {@link primaryTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterDescription',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Prospects)
      };
    }

    return this._schema;
  }
}
