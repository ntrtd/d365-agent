/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationSourceMappings } from './IntegrationSourceMappings';
import { IntegrationSourceMappingsRequestBuilder } from './IntegrationSourceMappingsRequestBuilder';
import { RetailTeamsIntegrationSourceType } from './RetailTeamsIntegrationSourceType';
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
export class IntegrationSourceMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntegrationSourceMappings<DeSerializersT>, DeSerializersT>
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
  ): IntegrationSourceMappingsApi<DeSerializersT> {
    return new IntegrationSourceMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntegrationSourceMappings;

  requestBuilder(): IntegrationSourceMappingsRequestBuilder<DeSerializersT> {
    return new IntegrationSourceMappingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntegrationSourceMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntegrationSourceMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntegrationSourceMappings<DeSerializersT>,
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
    typeof IntegrationSourceMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntegrationSourceMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_TYPE: EnumField<
      IntegrationSourceMappings<DeSerializers>,
      DeSerializersT,
      RetailTeamsIntegrationSourceType,
      true,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      IntegrationSourceMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEAM_ID: OrderableEdmTypeField<
      IntegrationSourceMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntegrationSourceMappings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE: fieldBuilder.buildEnumField(
          'SourceType',
          RetailTeamsIntegrationSourceType,
          true
        ),
        /**
         * Static representation of the {@link sourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'SourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link teamId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_ID: fieldBuilder.buildEdmTypeField('TeamId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntegrationSourceMappings)
      };
    }

    return this._schema;
  }
}
