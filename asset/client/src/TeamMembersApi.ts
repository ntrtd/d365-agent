/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TeamMembers } from './TeamMembers';
import { TeamMembersRequestBuilder } from './TeamMembersRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { RelationshipTypesApi } from './RelationshipTypesApi';
import { TeamsApi } from './TeamsApi';
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
export class TeamMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TeamMembers<DeSerializersT>, DeSerializersT>
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
  ): TeamMembersApi<DeSerializersT> {
    return new TeamMembersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link teams} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAMS: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONSHIP_TYPE: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      TeamsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      RelationshipTypesApi<DeSerializersT>,
      TeamsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEAMS: new OneToOneLink('Teams', this, linkedApis[0]),
      RELATIONSHIP_TYPE: new OneToOneLink(
        'RelationshipType',
        this,
        linkedApis[1]
      ),
      TEAM: new OneToOneLink('Team', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = TeamMembers;

  requestBuilder(): TeamMembersRequestBuilder<DeSerializersT> {
    return new TeamMembersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TeamMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TeamMembers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TeamMembers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TeamMembers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TeamMembers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RELATIONSHIP_TYPE_ID: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEAM_MEMBER_PARTY_NUMBER: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEAM_PARTY_NUMBER: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TEAM_NAME: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEAM_MEMBER_NAME: OrderableEdmTypeField<
      TeamMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link teams} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAMS: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONSHIP_TYPE: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToOneLink<
      TeamMembers<DeSerializersT>,
      DeSerializersT,
      TeamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TeamMembers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link relationshipTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RelationshipTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link teamMemberPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_MEMBER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'TeamMemberPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link teamPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'TeamPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link teamName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_NAME: fieldBuilder.buildEdmTypeField(
          'TeamName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link teamMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'TeamMemberName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TeamMembers)
      };
    }

    return this._schema;
  }
}
