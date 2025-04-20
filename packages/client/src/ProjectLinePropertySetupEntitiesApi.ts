/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectLinePropertySetupEntities } from './ProjectLinePropertySetupEntities';
import { ProjectLinePropertySetupEntitiesRequestBuilder } from './ProjectLinePropertySetupEntitiesRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ProjectLinePropertySetupEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectLinePropertySetupEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjectLinePropertySetupEntitiesApi<DeSerializersT> {
    return new ProjectLinePropertySetupEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectLinePropertySetupEntities;

  requestBuilder(): ProjectLinePropertySetupEntitiesRequestBuilder<DeSerializersT> {
    return new ProjectLinePropertySetupEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectLinePropertySetupEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectLinePropertySetupEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectLinePropertySetupEntities<DeSerializersT>,
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
    typeof ProjectLinePropertySetupEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectLinePropertySetupEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CODE: EnumField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    PROJECT_RELATION: OrderableEdmTypeField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_CODE: EnumField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    CATEGORY_RELATION: OrderableEdmTypeField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEBIT_NOTE_SETUP_ENABLED: EnumField<
      ProjectLinePropertySetupEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectLinePropertySetupEntities<DeSerializers>>;
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
         * Static representation of the {@link projectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CODE: fieldBuilder.buildEnumField(
          'ProjectCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link projectRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RELATION: fieldBuilder.buildEdmTypeField(
          'ProjectRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODE: fieldBuilder.buildEnumField(
          'CategoryCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link categoryRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_RELATION: fieldBuilder.buildEdmTypeField(
          'CategoryRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link linePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDebitNoteSetupEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEBIT_NOTE_SETUP_ENABLED: fieldBuilder.buildEnumField(
          'IsDebitNoteSetupEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectLinePropertySetupEntities)
      };
    }

    return this._schema;
  }
}
