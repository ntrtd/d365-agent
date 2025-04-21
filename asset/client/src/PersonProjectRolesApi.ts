/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonProjectRoles } from './PersonProjectRoles';
import { PersonProjectRolesRequestBuilder } from './PersonProjectRolesRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { ProjectsApi } from './ProjectsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonProjectRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonProjectRoles<DeSerializersT>, DeSerializersT>
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
  ): PersonProjectRolesApi<DeSerializersT> {
    return new PersonProjectRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonProjectRoles<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      PersonProjectRoles<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PeopleApi<DeSerializersT>, ProjectsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PersonProjectRoles;

  requestBuilder(): PersonProjectRolesRequestBuilder<DeSerializersT> {
    return new PersonProjectRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonProjectRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonProjectRoles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonProjectRoles<DeSerializersT>,
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
    typeof PersonProjectRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonProjectRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      PersonProjectRoles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonProjectRoles<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      PersonProjectRoles<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonProjectRoles<DeSerializers>>;
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
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', false),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonProjectRoles)
      };
    }

    return this._schema;
  }
}
