/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProspectiveVendorRegistrations } from './ProspectiveVendorRegistrations';
import { ProspectiveVendorRegistrationsRequestBuilder } from './ProspectiveVendorRegistrationsRequestBuilder';
import { NoYes } from './NoYes';
import { DirPartyBaseType } from './DirPartyBaseType';
import { TaxIdType } from './TaxIdType';
import { Tax1099NameChoice } from './Tax1099NameChoice';
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
export class ProspectiveVendorRegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProspectiveVendorRegistrations<DeSerializersT>, DeSerializersT>
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
  ): ProspectiveVendorRegistrationsApi<DeSerializersT> {
    return new ProspectiveVendorRegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProspectiveVendorRegistrations;

  requestBuilder(): ProspectiveVendorRegistrationsRequestBuilder<DeSerializersT> {
    return new ProspectiveVendorRegistrationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProspectiveVendorRegistrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProspectiveVendorRegistrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProspectiveVendorRegistrations<DeSerializersT>,
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
    typeof ProspectiveVendorRegistrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProspectiveVendorRegistrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_REGISTRATION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ARE_TERMS_AND_CONDITIONS_ACCEPTED: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIRET_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SMALL_BUSINESS: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PERSON_EMAIL_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_OWNERSHIP_INDICATOR: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_G_VENDOR_STATE_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_TYPE: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      DirPartyBaseType,
      true,
      true
    >;
    IS_FEMALE_OWNED: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_1099_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONTACT_PERSON_PHONE_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_EMAIL_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_EMPLOYEES: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCALLY_OWNED: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_WEBSITE_URL: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_STATE_IDENTIFIER_TYPE: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      TaxIdType,
      true,
      true
    >;
    TAX_1099_NAME_CHOICE: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      Tax1099NameChoice,
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_PHONE_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REGISTRATION_REQUEST_SUBMITTED: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOING_BUSINESS_AS: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_G_VENDOR_STATE_TAX_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_FAX_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MINORITY_OWNED: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_1099_NUMBER_TYPE: EnumField<
      ProspectiveVendorRegistrations<DeSerializers>,
      DeSerializersT,
      TaxIdType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProspectiveVendorRegistrations<DeSerializers>>;
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
         * Static representation of the {@link vendorRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorRegistrationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link areTermsAndConditionsAccepted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TERMS_AND_CONDITIONS_ACCEPTED: fieldBuilder.buildEnumField(
          'AreTermsAndConditionsAccepted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link siretId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIRET_ID: fieldBuilder.buildEdmTypeField('SiretId', 'Edm.String', true),
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
         * Static representation of the {@link contactPersonEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactPersonEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignOwnershipIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_OWNERSHIP_INDICATOR: fieldBuilder.buildEnumField(
          'ForeignOwnershipIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099GVendorStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_VENDOR_STATE_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099GVendorStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_TYPE: fieldBuilder.buildEnumField(
          'OrganizationType',
          DirPartyBaseType,
          true
        ),
        /**
         * Static representation of the {@link isFemaleOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FEMALE_OWNED: fieldBuilder.buildEnumField(
          'IsFemaleOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link federal1099Number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_1099_NUMBER: fieldBuilder.buildEdmTypeField(
          'Federal1099Number',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAF_CODE: fieldBuilder.buildEdmTypeField('NAFCode', 'Edm.Int64', false),
        /**
         * Static representation of the {@link contactPersonPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CompanyEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField(
          'NumberOfEmployees',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
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
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
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
         * Static representation of the {@link companyTaxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyTaxExemptNumber',
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
         * Static representation of the {@link lineOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'LineOfBusiness',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLocallyOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOCALLY_OWNED: fieldBuilder.buildEnumField(
          'IsLocallyOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
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
         * Static representation of the {@link companyWebsiteUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_WEBSITE_URL: fieldBuilder.buildEdmTypeField(
          'CompanyWebsiteURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxStateIdentifierType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_STATE_IDENTIFIER_TYPE: fieldBuilder.buildEnumField(
          'TaxStateIdentifierType',
          TaxIdType,
          true
        ),
        /**
         * Static representation of the {@link tax1099NameChoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NAME_CHOICE: fieldBuilder.buildEnumField(
          'Tax1099NameChoice',
          Tax1099NameChoice,
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
         * Static representation of the {@link companyPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRegistrationRequestSubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTRATION_REQUEST_SUBMITTED: fieldBuilder.buildEnumField(
          'IsRegistrationRequestSubmitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link doingBusinessAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOING_BUSINESS_AS: fieldBuilder.buildEdmTypeField(
          'DoingBusinessAs',
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
         * Static representation of the {@link tax1099GVendorStateTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_VENDOR_STATE_TAX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099GVendorStateTaxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyFaxNumber',
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
         * Static representation of the {@link federal1099NumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_1099_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'Federal1099NumberType',
          TaxIdType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProspectiveVendorRegistrations)
      };
    }

    return this._schema;
  }
}
