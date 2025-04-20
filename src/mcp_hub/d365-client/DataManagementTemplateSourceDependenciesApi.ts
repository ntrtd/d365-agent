/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementTemplateSourceDependencies } from './DataManagementTemplateSourceDependencies';
import { DataManagementTemplateSourceDependenciesRequestBuilder } from './DataManagementTemplateSourceDependenciesRequestBuilder';
import { DataManagementTemplateSourcesApi } from './DataManagementTemplateSourcesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementTemplateSourceDependenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DataManagementTemplateSourceDependencies<DeSerializersT>,
      DeSerializersT
    >
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
  ): DataManagementTemplateSourceDependenciesApi<DeSerializersT> {
    return new DataManagementTemplateSourceDependenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link templateSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE_SOURCE: OneToOneLink<
      DataManagementTemplateSourceDependencies<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataManagementTemplateSourcesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TEMPLATE_SOURCE: new OneToOneLink('TemplateSource', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DataManagementTemplateSourceDependencies;

  requestBuilder(): DataManagementTemplateSourceDependenciesRequestBuilder<DeSerializersT> {
    return new DataManagementTemplateSourceDependenciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementTemplateSourceDependencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementTemplateSourceDependencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementTemplateSourceDependencies<DeSerializersT>,
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
    typeof DataManagementTemplateSourceDependencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementTemplateSourceDependencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_ENTITY: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENT_ON_ENTITY: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATION_NAME: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRIENDLY_NAME: OrderableEdmTypeField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_REQUIRED: EnumField<
      DataManagementTemplateSourceDependencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link templateSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE_SOURCE: OneToOneLink<
      DataManagementTemplateSourceDependencies<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      DataManagementTemplateSourceDependencies<DeSerializers>
    >;
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
         * Static representation of the {@link dependentOnEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_ON_ENTITY: fieldBuilder.buildEdmTypeField(
          'DependentOnEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link relationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION_NAME: fieldBuilder.buildEdmTypeField(
          'RelationName',
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
        /**
         * Static representation of the {@link friendlyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_REQUIRED: fieldBuilder.buildEnumField(
          'ValidationRequired',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementTemplateSourceDependencies)
      };
    }

    return this._schema;
  }
}
