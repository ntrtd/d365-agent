/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TeamMembersV2 } from './TeamMembersV2';
import { TeamMembersV2RequestBuilder } from './TeamMembersV2RequestBuilder';
import { PeopleApi } from './PeopleApi';
import { TeamsV2Api } from './TeamsV2Api';
import { NoYes } from './NoYes';
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
export class TeamMembersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TeamMembersV2<DeSerializersT>, DeSerializersT>
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
  ): TeamMembersV2Api<DeSerializersT> {
    return new TeamMembersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link teams} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAMS: OneToOneLink<
      TeamMembersV2<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToOneLink<
      TeamMembersV2<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PeopleApi<DeSerializersT>, TeamsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TEAMS: new OneToOneLink('Teams', this, linkedApis[0]),
      TEAM: new OneToOneLink('Team', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TeamMembersV2;

  requestBuilder(): TeamMembersV2RequestBuilder<DeSerializersT> {
    return new TeamMembersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TeamMembersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TeamMembersV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TeamMembersV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TeamMembersV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TeamMembersV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEAM_MEMBER_PARTY_NUMBER: OrderableEdmTypeField<
      TeamMembersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEAM_NAME: OrderableEdmTypeField<
      TeamMembersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      TeamMembersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_TEAM_LEAD: EnumField<
      TeamMembersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      TeamMembersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TEAM_MEMBER_NAME: OrderableEdmTypeField<
      TeamMembersV2<DeSerializers>,
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
      TeamMembersV2<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToOneLink<
      TeamMembersV2<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TeamMembersV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link teamName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_NAME: fieldBuilder.buildEdmTypeField(
          'TeamName',
          'Edm.String',
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
         * Static representation of the {@link isTeamLead} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TEAM_LEAD: fieldBuilder.buildEnumField('IsTeamLead', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', TeamMembersV2)
      };
    }

    return this._schema;
  }
}
