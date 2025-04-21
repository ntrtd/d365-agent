/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementTemplateSources } from './DataManagementTemplateSources';
import { DataManagementTemplateSourcesRequestBuilder } from './DataManagementTemplateSourcesRequestBuilder';
import { DataManagementTemplatesApi } from './DataManagementTemplatesApi';
import { DataManagementTemplateSourceDependenciesApi } from './DataManagementTemplateSourceDependenciesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementTemplateSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DataManagementTemplateSources<DeSerializersT>, DeSerializersT>
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
  ): DataManagementTemplateSourcesApi<DeSerializersT> {
    return new DataManagementTemplateSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroupTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE: OneToOneLink<
      DataManagementTemplateSources<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPENDENCIES: OneToManyLink<
      DataManagementTemplateSources<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourceDependenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DataManagementTemplatesApi<DeSerializersT>,
      DataManagementTemplateSourceDependenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEFINITION_GROUP_TEMPLATE: new OneToOneLink(
        'DefinitionGroupTemplate',
        this,
        linkedApis[0]
      ),
      DEPENDENCIES: new OneToManyLink('Dependencies', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DataManagementTemplateSources;

  requestBuilder(): DataManagementTemplateSourcesRequestBuilder<DeSerializersT> {
    return new DataManagementTemplateSourcesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementTemplateSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementTemplateSources<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementTemplateSources<DeSerializersT>,
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
    typeof DataManagementTemplateSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementTemplateSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DataManagementTemplateSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_ENTITY: OrderableEdmTypeField<
      DataManagementTemplateSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DataManagementTemplateSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroupTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE: OneToOneLink<
      DataManagementTemplateSources<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPENDENCIES: OneToManyLink<
      DataManagementTemplateSources<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourceDependenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementTemplateSources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ENTITY: fieldBuilder.buildEdmTypeField(
          'SourceEntity',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', DataManagementTemplateSources)
      };
    }

    return this._schema;
  }
}
