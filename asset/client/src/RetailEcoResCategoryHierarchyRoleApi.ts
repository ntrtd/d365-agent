/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEcoResCategoryHierarchyRole } from './RetailEcoResCategoryHierarchyRole';
import { RetailEcoResCategoryHierarchyRoleRequestBuilder } from './RetailEcoResCategoryHierarchyRoleRequestBuilder';
import { EcoResCategoryNamedHierarchyRole } from './EcoResCategoryNamedHierarchyRole';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailEcoResCategoryHierarchyRoleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEcoResCategoryHierarchyRole<DeSerializersT>, DeSerializersT>
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
  ): RetailEcoResCategoryHierarchyRoleApi<DeSerializersT> {
    return new RetailEcoResCategoryHierarchyRoleApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEcoResCategoryHierarchyRole;

  requestBuilder(): RetailEcoResCategoryHierarchyRoleRequestBuilder<DeSerializersT> {
    return new RetailEcoResCategoryHierarchyRoleRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEcoResCategoryHierarchyRole<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEcoResCategoryHierarchyRole<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEcoResCategoryHierarchyRole<DeSerializersT>,
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
    typeof RetailEcoResCategoryHierarchyRole,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEcoResCategoryHierarchyRole,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAMED_CATEGORY_HIERARCHY_ROLE_AS_INT: OrderableEdmTypeField<
      RetailEcoResCategoryHierarchyRole<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ECO_RES_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailEcoResCategoryHierarchyRole<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAMED_CATEGORY_HIERARCHY_ROLE: EnumField<
      RetailEcoResCategoryHierarchyRole<DeSerializers>,
      DeSerializersT,
      EcoResCategoryNamedHierarchyRole,
      true,
      true
    >;
    CATEGORY_HIERARCHY: OrderableEdmTypeField<
      RetailEcoResCategoryHierarchyRole<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailEcoResCategoryHierarchyRole<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link namedCategoryHierarchyRoleAsInt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAMED_CATEGORY_HIERARCHY_ROLE_AS_INT: fieldBuilder.buildEdmTypeField(
          'NamedCategoryHierarchyRoleAsInt',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ecoResCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategoryHierarchy_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link namedCategoryHierarchyRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAMED_CATEGORY_HIERARCHY_ROLE: fieldBuilder.buildEnumField(
          'NamedCategoryHierarchyRole',
          EcoResCategoryNamedHierarchyRole,
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchy',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEcoResCategoryHierarchyRole)
      };
    }

    return this._schema;
  }
}
