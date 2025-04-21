/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectJournalDescriptions } from './ProjectJournalDescriptions';
import { ProjectJournalDescriptionsRequestBuilder } from './ProjectJournalDescriptionsRequestBuilder';
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
export class ProjectJournalDescriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectJournalDescriptions<DeSerializersT>, DeSerializersT>
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
  ): ProjectJournalDescriptionsApi<DeSerializersT> {
    return new ProjectJournalDescriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectJournalDescriptions;

  requestBuilder(): ProjectJournalDescriptionsRequestBuilder<DeSerializersT> {
    return new ProjectJournalDescriptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectJournalDescriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectJournalDescriptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectJournalDescriptions<DeSerializersT>,
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
    typeof ProjectJournalDescriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectJournalDescriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectJournalDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ProjectJournalDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectJournalDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION: OrderableEdmTypeField<
      ProjectJournalDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectJournalDescriptions<DeSerializers>>;
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
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
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
         * Static representation of the {@link identification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'Identification',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectJournalDescriptions)
      };
    }

    return this._schema;
  }
}
