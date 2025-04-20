/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Teams } from './Teams';
import { TeamsRequestBuilder } from './TeamsRequestBuilder';
import { TeamMembersApi } from './TeamMembersApi';
import { TeamMembershipCriterionsApi } from './TeamMembershipCriterionsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TeamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Teams<DeSerializersT>, DeSerializersT>
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
  ): TeamsApi<DeSerializersT> {
    return new TeamsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link teamMembers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERS: OneToManyLink<
      Teams<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link teamMembershipCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERSHIP_CRITERION: OneToOneLink<
      Teams<DeSerializersT>,
      DeSerializersT,
      TeamMembershipCriterionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TeamMembersApi<DeSerializersT>,
      TeamMembershipCriterionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEAM_MEMBERS: new OneToManyLink('TeamMembers', this, linkedApis[0]),
      TEAM_MEMBERSHIP_CRITERION: new OneToOneLink(
        'TeamMembershipCriterion',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Teams;

  requestBuilder(): TeamsRequestBuilder<DeSerializersT> {
    return new TeamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Teams<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Teams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Teams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Teams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Teams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      Teams<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEAM_TYPE_NAME: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADMINISTRATOR: OrderableEdmTypeField<
      Teams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link teamMembers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERS: OneToManyLink<
      Teams<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link teamMembershipCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERSHIP_CRITERION: OneToOneLink<
      Teams<DeSerializersT>,
      DeSerializersT,
      TeamMembershipCriterionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Teams<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link teamTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TeamTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link administrator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMINISTRATOR: fieldBuilder.buildEdmTypeField(
          'Administrator',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Teams)
      };
    }

    return this._schema;
  }
}
