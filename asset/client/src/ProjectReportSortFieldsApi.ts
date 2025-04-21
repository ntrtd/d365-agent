/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectReportSortFields } from './ProjectReportSortFields';
import { ProjectReportSortFieldsRequestBuilder } from './ProjectReportSortFieldsRequestBuilder';
import { ProjSortValue } from './ProjSortValue';
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
export class ProjectReportSortFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectReportSortFields<DeSerializersT>, DeSerializersT>
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
  ): ProjectReportSortFieldsApi<DeSerializersT> {
    return new ProjectReportSortFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectReportSortFields;

  requestBuilder(): ProjectReportSortFieldsRequestBuilder<DeSerializersT> {
    return new ProjectReportSortFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectReportSortFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectReportSortFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectReportSortFields<DeSerializersT>,
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
    typeof ProjectReportSortFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectReportSortFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectReportSortFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SORT_CODE: EnumField<
      ProjectReportSortFields<DeSerializers>,
      DeSerializersT,
      ProjSortValue,
      true,
      true
    >;
    SORTING_ID: OrderableEdmTypeField<
      ProjectReportSortFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectReportSortFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectReportSortFields<DeSerializers>>;
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
         * Static representation of the {@link sortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_CODE: fieldBuilder.buildEnumField('SortCode', ProjSortValue, true),
        /**
         * Static representation of the {@link sortingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID: fieldBuilder.buildEdmTypeField(
          'SortingId',
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
        ALL_FIELDS: new AllFields('*', ProjectReportSortFields)
      };
    }

    return this._schema;
  }
}
