/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCategoriesShared } from './ResourceCategoriesShared';
import { ResourceCategoriesSharedRequestBuilder } from './ResourceCategoriesSharedRequestBuilder';
import { FalseTrue } from './FalseTrue';
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
export class ResourceCategoriesSharedApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ResourceCategoriesShared<DeSerializersT>, DeSerializersT>
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
  ): ResourceCategoriesSharedApi<DeSerializersT> {
    return new ResourceCategoriesSharedApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ResourceCategoriesShared;

  requestBuilder(): ResourceCategoriesSharedRequestBuilder<DeSerializersT> {
    return new ResourceCategoriesSharedRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceCategoriesShared<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ResourceCategoriesShared<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ResourceCategoriesShared<DeSerializersT>,
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
    typeof ResourceCategoriesShared,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ResourceCategoriesShared,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ROLE_ID: OrderableEdmTypeField<
      ResourceCategoriesShared<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CATEGORY_DISABLED: EnumField<
      ResourceCategoriesShared<DeSerializers>,
      DeSerializersT,
      FalseTrue,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ResourceCategoriesShared<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ResourceCategoriesShared<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', false),
        /**
         * Static representation of the {@link isCategoryDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_DISABLED: fieldBuilder.buildEnumField(
          'IsCategoryDisabled',
          FalseTrue,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceCategoriesShared)
      };
    }

    return this._schema;
  }
}
