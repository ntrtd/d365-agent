/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Guides } from './Guides';
import { GuidesRequestBuilder } from './GuidesRequestBuilder';
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
export class GuidesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Guides<DeSerializersT>, DeSerializersT>
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
  ): GuidesApi<DeSerializersT> {
    return new GuidesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Guides;

  requestBuilder(): GuidesRequestBuilder<DeSerializersT> {
    return new GuidesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Guides<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Guides<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Guides<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Guides, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Guides, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INTEGRATION_KEY: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GUIDE_ID: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEMA_VERSION: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_MODIFIED_ON: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      Guides<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Guides<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link integrationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link guideId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUIDE_ID: fieldBuilder.buildEdmTypeField('GuideID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link schemaVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_VERSION: fieldBuilder.buildEdmTypeField(
          'SchemaVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastModifiedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_ON: fieldBuilder.buildEdmTypeField(
          'LastModifiedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Guides)
      };
    }

    return this._schema;
  }
}
