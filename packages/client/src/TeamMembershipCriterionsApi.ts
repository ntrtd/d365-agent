/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TeamMembershipCriterions } from './TeamMembershipCriterions';
import { TeamMembershipCriterionsRequestBuilder } from './TeamMembershipCriterionsRequestBuilder';
import { TeamsV2Api } from './TeamsV2Api';
import { TeamsApi } from './TeamsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TeamMembershipCriterionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TeamMembershipCriterions<DeSerializersT>, DeSerializersT>
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
  ): TeamMembershipCriterionsApi<DeSerializersT> {
    return new TeamMembershipCriterionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link teamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_V_2: OneToManyLink<
      TeamMembershipCriterions<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToManyLink<
      TeamMembershipCriterions<DeSerializersT>,
      DeSerializersT,
      TeamsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TeamsV2Api<DeSerializersT>, TeamsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TEAM_V_2: new OneToManyLink('TeamV2', this, linkedApis[0]),
      TEAM: new OneToManyLink('Team', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TeamMembershipCriterions;

  requestBuilder(): TeamMembershipCriterionsRequestBuilder<DeSerializersT> {
    return new TeamMembershipCriterionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TeamMembershipCriterions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TeamMembershipCriterions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TeamMembershipCriterions<DeSerializersT>,
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
    typeof TeamMembershipCriterions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TeamMembershipCriterions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOW_VENDOR: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_EMPLOYEE: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SYSTEM_CRITERION: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONTRACTOR: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONTACT: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CUSTOMER: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRES_AX_USER: EnumField<
      TeamMembershipCriterions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link teamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_V_2: OneToManyLink<
      TeamMembershipCriterions<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link team} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM: OneToManyLink<
      TeamMembershipCriterions<DeSerializersT>,
      DeSerializersT,
      TeamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TeamMembershipCriterions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link allowVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_VENDOR: fieldBuilder.buildEnumField('AllowVendor', NoYes, true),
        /**
         * Static representation of the {@link allowEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPLOYEE: fieldBuilder.buildEnumField(
          'AllowEmployee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSystemCriterion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYSTEM_CRITERION: fieldBuilder.buildEnumField(
          'IsSystemCriterion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowContractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONTRACTOR: fieldBuilder.buildEnumField(
          'AllowContractor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONTACT: fieldBuilder.buildEnumField('AllowContact', NoYes, true),
        /**
         * Static representation of the {@link allowCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CUSTOMER: fieldBuilder.buildEnumField(
          'AllowCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requiresAxUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRES_AX_USER: fieldBuilder.buildEnumField(
          'RequiresAXUser',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TeamMembershipCriterions)
      };
    }

    return this._schema;
  }
}
