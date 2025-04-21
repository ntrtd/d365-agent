/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCategorySetupDatas } from './ResourceCategorySetupDatas';
import { ResourceCategorySetupDatasRequestBuilder } from './ResourceCategorySetupDatasRequestBuilder';
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
export class ResourceCategorySetupDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ResourceCategorySetupDatas<DeSerializersT>, DeSerializersT>
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
  ): ResourceCategorySetupDatasApi<DeSerializersT> {
    return new ResourceCategorySetupDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ResourceCategorySetupDatas;

  requestBuilder(): ResourceCategorySetupDatasRequestBuilder<DeSerializersT> {
    return new ResourceCategorySetupDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceCategorySetupDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ResourceCategorySetupDatas<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ResourceCategorySetupDatas<DeSerializersT>,
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
    typeof ResourceCategorySetupDatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ResourceCategorySetupDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_NAME: OrderableEdmTypeField<
      ResourceCategorySetupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ResourceCategorySetupDatas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', false),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceCategorySetupDatas)
      };
    }

    return this._schema;
  }
}
