/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OrganizationHierarchyPurposes } from './OrganizationHierarchyPurposes';
import { OrganizationHierarchyPurposesRequestBuilder } from './OrganizationHierarchyPurposesRequestBuilder';
import { HierarchyPurpose } from './HierarchyPurpose';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class OrganizationHierarchyPurposesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OrganizationHierarchyPurposes<DeSerializersT>, DeSerializersT>
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
  ): OrganizationHierarchyPurposesApi<DeSerializersT> {
    return new OrganizationHierarchyPurposesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OrganizationHierarchyPurposes;

  requestBuilder(): OrganizationHierarchyPurposesRequestBuilder<DeSerializersT> {
    return new OrganizationHierarchyPurposesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OrganizationHierarchyPurposes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OrganizationHierarchyPurposes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OrganizationHierarchyPurposes<DeSerializersT>,
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
    typeof OrganizationHierarchyPurposes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OrganizationHierarchyPurposes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HIERARCHY_PURPOSE: EnumField<
      OrganizationHierarchyPurposes<DeSerializers>,
      DeSerializersT,
      HierarchyPurpose,
      true,
      true
    >;
    HIERARCHY_TYPE: OrderableEdmTypeField<
      OrganizationHierarchyPurposes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMMUTABLE: EnumField<
      OrganizationHierarchyPurposes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_AS_DEFAULT: EnumField<
      OrganizationHierarchyPurposes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<OrganizationHierarchyPurposes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hierarchyPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_PURPOSE: fieldBuilder.buildEnumField(
          'HierarchyPurpose',
          HierarchyPurpose,
          true
        ),
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
         * Static representation of the {@link immutable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMMUTABLE: fieldBuilder.buildEnumField('Immutable', NoYes, true),
        /**
         * Static representation of the {@link setAsDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_AS_DEFAULT: fieldBuilder.buildEnumField(
          'SetAsDefault',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OrganizationHierarchyPurposes)
      };
    }

    return this._schema;
  }
}
