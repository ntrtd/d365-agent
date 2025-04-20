/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OrganizationHierarchyPublishedV2 } from './OrganizationHierarchyPublishedV2';
import { OrganizationHierarchyPublishedV2RequestBuilder } from './OrganizationHierarchyPublishedV2RequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class OrganizationHierarchyPublishedV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OrganizationHierarchyPublishedV2<DeSerializersT>, DeSerializersT>
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
  ): OrganizationHierarchyPublishedV2Api<DeSerializersT> {
    return new OrganizationHierarchyPublishedV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OrganizationHierarchyPublishedV2;

  requestBuilder(): OrganizationHierarchyPublishedV2RequestBuilder<DeSerializersT> {
    return new OrganizationHierarchyPublishedV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OrganizationHierarchyPublishedV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OrganizationHierarchyPublishedV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OrganizationHierarchyPublishedV2<DeSerializersT>,
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
    typeof OrganizationHierarchyPublishedV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OrganizationHierarchyPublishedV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HIERARCHY_TYPE: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELATIONSHIP_TYPE: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHILD_ORGANIZATION_NAME: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_ORGANIZATION_NAME: OrderableEdmTypeField<
      OrganizationHierarchyPublishedV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OrganizationHierarchyPublishedV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'HierarchyType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link childOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChildOrganizationPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField(
          'RelationshipType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentOrganizationPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'validTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link childOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'ChildOrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'ParentOrganizationName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OrganizationHierarchyPublishedV2)
      };
    }

    return this._schema;
  }
}
