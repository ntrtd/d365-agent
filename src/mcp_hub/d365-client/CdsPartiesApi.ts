/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsParties } from './CdsParties';
import { CdsPartiesRequestBuilder } from './CdsPartiesRequestBuilder';
import { ProspectsApi } from './ProspectsApi';
import { PeopleApi } from './PeopleApi';
import { CustomerHierarchyNodesApi } from './CustomerHierarchyNodesApi';
import { PartyContactsV3Api } from './PartyContactsV3Api';
import { CdsContactPersonsV2Api } from './CdsContactPersonsV2Api';
import { PartyContactsV2Api } from './PartyContactsV2Api';
import { CdsPartyPostalAddressLocationsApi } from './CdsPartyPostalAddressLocationsApi';
import { CustomerHiearchiesApi } from './CustomerHiearchiesApi';
import { MonthsOfYear } from './MonthsOfYear';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
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
export class CdsPartiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsParties<DeSerializersT>, DeSerializersT>
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
  ): CdsPartiesApi<DeSerializersT> {
    return new CdsPartiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_NODE: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyContactV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_CONTACT_V_3: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PartyContactsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CdsContactPersonsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyContactV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_CONTACT_V_2: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PartyContactsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPartyPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY_POSTAL_ADDRESS_LOCATION: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProspectsApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      CustomerHierarchyNodesApi<DeSerializersT>,
      PartyContactsV3Api<DeSerializersT>,
      CdsContactPersonsV2Api<DeSerializersT>,
      PartyContactsV2Api<DeSerializersT>,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>,
      CustomerHiearchiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER: new OneToOneLink('Customer', this, linkedApis[0]),
      PERSON: new OneToOneLink('Person', this, linkedApis[1]),
      CUSTOMER_HIERARCHY_NODE: new OneToManyLink(
        'CustomerHierarchyNode',
        this,
        linkedApis[2]
      ),
      PARTY_CONTACT_V_3: new OneToManyLink(
        'PartyContactV3',
        this,
        linkedApis[3]
      ),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[4]),
      PARTY_CONTACT_V_2: new OneToManyLink(
        'PartyContactV2',
        this,
        linkedApis[5]
      ),
      CDS_PARTY_POSTAL_ADDRESS_LOCATION: new OneToManyLink(
        'CDSPartyPostalAddressLocation',
        this,
        linkedApis[6]
      ),
      CUSTOMER_HIERARCHY: new OneToManyLink(
        'CustomerHierarchy',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = CdsParties;

  requestBuilder(): CdsPartiesRequestBuilder<DeSerializersT> {
    return new CdsPartiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsParties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsParties<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CdsParties<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CdsParties, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CdsParties, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PERSONAL_TITLE: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PERSON_BIRTH_DAY: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_MONTH: EnumField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FIRST_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MIDDLE_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PERSONAL_SUFFIX: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME_PREFIX: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    ORGANIZATION_NUM_OF_EMPLOYEES: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    PERSON_BIRTH_YEAR: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      CdsParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_NODE: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyContactV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_CONTACT_V_3: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PartyContactsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CdsContactPersonsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyContactV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_CONTACT_V_2: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      PartyContactsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPartyPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY_POSTAL_ADDRESS_LOCATION: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToManyLink<
      CdsParties<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsParties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link personAnniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
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
         * Static representation of the {@link personPhoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPersonalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonPersonalTitle',
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
         * Static representation of the {@link personAnniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'PersonAnniversaryMonth',
          MonthsOfYear,
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
         * Static representation of the {@link personHobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_HOBBIES: fieldBuilder.buildEdmTypeField(
          'PersonHobbies',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonLastName',
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
         * Static representation of the {@link personProfessionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalSuffix',
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
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
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
         * Static representation of the {@link organizationAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ABC_CODE: fieldBuilder.buildEnumField(
          'OrganizationABCCode',
          Abc,
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
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
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
         * Static representation of the {@link organizationPhoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationPhoneticName',
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
         * Static representation of the {@link personFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPersonalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonPersonalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personLastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'PersonLastNamePrefix',
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
         * Static representation of the {@link organizationNumOfEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUM_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField(
          'OrganizationNumOfEmployees',
          'Edm.Int32',
          false
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
         * Static representation of the {@link personBirthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonBirthYear',
          'Edm.Int32',
          false
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
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsParties)
      };
    }

    return this._schema;
  }
}
