/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonProfessionalExperiences } from './PersonProfessionalExperiences';
import { PersonProfessionalExperiencesRequestBuilder } from './PersonProfessionalExperiencesRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { HrmBlankYesNo } from './HrmBlankYesNo';
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
export class PersonProfessionalExperiencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PersonProfessionalExperiences<DeSerializersT>, DeSerializersT>
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
  ): PersonProfessionalExperiencesApi<DeSerializersT> {
    return new PersonProfessionalExperiencesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonProfessionalExperiences<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PeopleApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PersonProfessionalExperiences;

  requestBuilder(): PersonProfessionalExperiencesRequestBuilder<DeSerializersT> {
    return new PersonProfessionalExperiencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PersonProfessionalExperiences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonProfessionalExperiences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonProfessionalExperiences<DeSerializersT>,
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
    typeof PersonProfessionalExperiences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonProfessionalExperiences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYER_POSITION: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYER_NAME: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOW_CONTACT_EMPLOYER: EnumField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      HrmBlankYesNo,
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_LOCATION: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      PersonProfessionalExperiences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonProfessionalExperiences<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonProfessionalExperiences<DeSerializers>>;
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employerPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_POSITION: fieldBuilder.buildEdmTypeField(
          'EmployerPosition',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_NAME: fieldBuilder.buildEdmTypeField(
          'EmployerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowContactEmployer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONTACT_EMPLOYER: fieldBuilder.buildEnumField(
          'AllowContactEmployer',
          HrmBlankYesNo,
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link employerLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_LOCATION: fieldBuilder.buildEdmTypeField(
          'EmployerLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonProfessionalExperiences)
      };
    }

    return this._schema;
  }
}
