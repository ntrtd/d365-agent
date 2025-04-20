/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsContactPersons } from './CdsContactPersons';
import { CdsContactPersonsRequestBuilder } from './CdsContactPersonsRequestBuilder';
import { Gender } from './Gender';
import { NoYes } from './NoYes';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { MonthsOfYear } from './MonthsOfYear';
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
export class CdsContactPersonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsContactPersons<DeSerializersT>, DeSerializersT>
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
  ): CdsContactPersonsApi<DeSerializersT> {
    return new CdsContactPersonsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsContactPersons;

  requestBuilder(): CdsContactPersonsRequestBuilder<DeSerializersT> {
    return new CdsContactPersonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsContactPersons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsContactPersons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CdsContactPersons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CdsContactPersons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsContactPersons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATED_PARTY_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    BIRTH_YEAR: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOVERNMENT_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPOUSE_NAME: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONTACT_PERSON_EXTERNALLY_MAINTAINED: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECEIVING_DIRECT_MAIL: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYMENT_PROFESSION: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_DEPARTMENT: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_TYPE: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_MONTH: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    BIRTH_DAY: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INACTIVE: EnumField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DECISION_MAKING_ROLE_CODE: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CdsContactPersons<DeSerializers>>;
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
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link associatedPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATED_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssociatedPartyNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', Gender, true),
        /**
         * Static representation of the {@link birthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'BirthYear',
          'Edm.Int32',
          false
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
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link governmentIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOVERNMENT_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GovernmentIdentificationNumber',
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
         * Static representation of the {@link primaryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link spouseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPOUSE_NAME: fieldBuilder.buildEdmTypeField(
          'SpouseName',
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
         * Static representation of the {@link isContactPersonExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONTACT_PERSON_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'IsContactPersonExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
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
         * Static representation of the {@link employmentProfession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_PROFESSION: fieldBuilder.buildEdmTypeField(
          'EmploymentProfession',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'EmploymentDepartment',
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
         * Static representation of the {@link contactPersonPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_MONTH: fieldBuilder.buildEnumField(
          'BirthMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link birthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'BirthDay',
          'Edm.Int32',
          false
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
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INACTIVE: fieldBuilder.buildEnumField('IsInactive', NoYes, true),
        /**
         * Static representation of the {@link decisionMakingRoleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECISION_MAKING_ROLE_CODE: fieldBuilder.buildEdmTypeField(
          'DecisionMakingRoleCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_RESPONSIBLE_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ContactPersonResponsiblePersonnelNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsContactPersons)
      };
    }

    return this._schema;
  }
}
