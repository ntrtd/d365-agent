/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TeamsV2 } from './TeamsV2';
import { TeamsV2RequestBuilder } from './TeamsV2RequestBuilder';
import { TeamMembersV2Api } from './TeamMembersV2Api';
import { TeamMembershipCriterionsApi } from './TeamMembershipCriterionsApi';
import { ReleasedProductReadinessChecksApi } from './ReleasedProductReadinessChecksApi';
import { ProductReadinessPolicyChecksApi } from './ProductReadinessPolicyChecksApi';
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
export class TeamsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TeamsV2<DeSerializersT>, DeSerializersT>
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
  ): TeamsV2Api<DeSerializersT> {
    return new TeamsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link teamMembers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERS: OneToManyLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      TeamMembersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link teamMembershipCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERSHIP_CRITERION: OneToOneLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      TeamMembershipCriterionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TeamMembersV2Api<DeSerializersT>,
      TeamMembershipCriterionsApi<DeSerializersT>,
      ReleasedProductReadinessChecksApi<DeSerializersT>,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEAM_MEMBERS: new OneToManyLink('TeamMembers', this, linkedApis[0]),
      TEAM_MEMBERSHIP_CRITERION: new OneToOneLink(
        'TeamMembershipCriterion',
        this,
        linkedApis[1]
      ),
      RELEASED_PRODUCT_READINESS_CHECKS: new OneToManyLink(
        'ReleasedProductReadinessChecks',
        this,
        linkedApis[2]
      ),
      PRODUCT_READINESS_POLICY_CHECKS: new OneToManyLink(
        'ProductReadinessPolicyChecks',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TeamsV2;

  requestBuilder(): TeamsV2RequestBuilder<DeSerializersT> {
    return new TeamsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<TeamsV2<DeSerializersT>, DeSerializersT> {
    return entityBuilder<TeamsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TeamsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TeamsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TeamsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      TeamsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      TeamsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEAM_TYPE_NAME: OrderableEdmTypeField<
      TeamsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      TeamsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TeamsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADMINISTRATOR: OrderableEdmTypeField<
      TeamsV2<DeSerializers>,
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
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      TeamMembersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link teamMembershipCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBERSHIP_CRITERION: OneToOneLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      TeamMembershipCriterionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      TeamsV2<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TeamsV2<DeSerializers>>;
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
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
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
        ALL_FIELDS: new AllFields('*', TeamsV2)
      };
    }

    return this._schema;
  }
}
