/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementTemplates } from './DataManagementTemplates';
import { DataManagementTemplatesRequestBuilder } from './DataManagementTemplatesRequestBuilder';
import { DataManagementTemplateSourcesApi } from './DataManagementTemplateSourcesApi';
import { DataManagementTemplateDetailsApi } from './DataManagementTemplateDetailsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DataManagementTemplates<DeSerializersT>, DeSerializersT>
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
  ): DataManagementTemplatesApi<DeSerializersT> {
    return new DataManagementTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link sources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCES: OneToManyLink<
      DataManagementTemplates<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      DataManagementTemplates<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DataManagementTemplateSourcesApi<DeSerializersT>,
      DataManagementTemplateDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SOURCES: new OneToManyLink('Sources', this, linkedApis[0]),
      DETAILS: new OneToManyLink('Details', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DataManagementTemplates;

  requestBuilder(): DataManagementTemplatesRequestBuilder<DeSerializersT> {
    return new DataManagementTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DataManagementTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementTemplates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementTemplates<DeSerializersT>,
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
    typeof DataManagementTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DataManagementTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DataManagementTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCES: OneToManyLink<
      DataManagementTemplates<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateSourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      DataManagementTemplates<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplateDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementTemplates<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', DataManagementTemplates)
      };
    }

    return this._schema;
  }
}
