/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelationshipTypes } from './RelationshipTypes';
import { RelationshipTypesRequestBuilder } from './RelationshipTypesRequestBuilder';
import { TeamMembersApi } from './TeamMembersApi';
import { PersonalContactPeopleApi } from './PersonalContactPeopleApi';
import { PartyRelationshipsApi } from './PartyRelationshipsApi';
import { BenefitPersonalContactPeopleApi } from './BenefitPersonalContactPeopleApi';
import { PersonalContactOrganizationApi } from './PersonalContactOrganizationApi';
import { DirPartyType } from './DirPartyType';
import { DirSystemRelationshipType } from './DirSystemRelationshipType';
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
export class RelationshipTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RelationshipTypes<DeSerializersT>, DeSerializersT>
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
  ): RelationshipTypesApi<DeSerializersT> {
    return new RelationshipTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link teamMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBER: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalContactPersonWorkerRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PersonalContactPeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyRelationships} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_RELATIONSHIPS: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PartyRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPersonalContactPersonWorkerRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      BenefitPersonalContactPeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalContactOrganizationWorkerRelationshipType1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_WORKER_RELATIONSHIP_TYPE_1: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PersonalContactOrganizationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TeamMembersApi<DeSerializersT>,
      PersonalContactPeopleApi<DeSerializersT>,
      PartyRelationshipsApi<DeSerializersT>,
      BenefitPersonalContactPeopleApi<DeSerializersT>,
      PersonalContactOrganizationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEAM_MEMBER: new OneToManyLink('TeamMember', this, linkedApis[0]),
      PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE: new OneToManyLink(
        'PersonalContactPersonWorkerRelationshipType',
        this,
        linkedApis[1]
      ),
      PARTY_RELATIONSHIPS: new OneToManyLink(
        'PartyRelationships',
        this,
        linkedApis[2]
      ),
      BENEFIT_PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE:
        new OneToManyLink(
          'BenefitPersonalContactPersonWorkerRelationshipType',
          this,
          linkedApis[3]
        ),
      PERSONAL_CONTACT_ORGANIZATION_WORKER_RELATIONSHIP_TYPE_1:
        new OneToManyLink(
          'PersonalContactOrganizationWorkerRelationshipType1',
          this,
          linkedApis[4]
        )
    };
    return this;
  }

  entityConstructor = RelationshipTypes;

  requestBuilder(): RelationshipTypesRequestBuilder<DeSerializersT> {
    return new RelationshipTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RelationshipTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RelationshipTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RelationshipTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RelationshipTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RelationshipTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_A_TYPE: EnumField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      DirPartyType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIONSHIP_B_TO_A: OrderableEdmTypeField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_B_TYPE: EnumField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      DirPartyType,
      true,
      true
    >;
    RELATIONSHIP_A_TO_B: OrderableEdmTypeField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_TYPE: EnumField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      DirSystemRelationshipType,
      true,
      true
    >;
    SYMMETRIC: EnumField<
      RelationshipTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link teamMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBER: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalContactPersonWorkerRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PersonalContactPeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link partyRelationships} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARTY_RELATIONSHIPS: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PartyRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPersonalContactPersonWorkerRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERSONAL_CONTACT_PERSON_WORKER_RELATIONSHIP_TYPE: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      BenefitPersonalContactPeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalContactOrganizationWorkerRelationshipType1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_WORKER_RELATIONSHIP_TYPE_1: OneToManyLink<
      RelationshipTypes<DeSerializersT>,
      DeSerializersT,
      PersonalContactOrganizationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RelationshipTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link partyAType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_A_TYPE: fieldBuilder.buildEnumField(
          'PartyAType',
          DirPartyType,
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
         * Static representation of the {@link relationshipBToA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_B_TO_A: fieldBuilder.buildEdmTypeField(
          'RelationshipBToA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyBType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_B_TYPE: fieldBuilder.buildEnumField(
          'PartyBType',
          DirPartyType,
          true
        ),
        /**
         * Static representation of the {@link relationshipAToB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_A_TO_B: fieldBuilder.buildEdmTypeField(
          'RelationshipAToB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_TYPE: fieldBuilder.buildEnumField(
          'SystemType',
          DirSystemRelationshipType,
          true
        ),
        /**
         * Static representation of the {@link symmetric} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMMETRIC: fieldBuilder.buildEnumField('Symmetric', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RelationshipTypes)
      };
    }

    return this._schema;
  }
}
