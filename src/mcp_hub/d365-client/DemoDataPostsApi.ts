/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DemoDataPosts } from './DemoDataPosts';
import { DemoDataPostsRequestBuilder } from './DemoDataPostsRequestBuilder';
import { DemoDataPostDocument } from './DemoDataPostDocument';
import { DemoDataPostRunStatus } from './DemoDataPostRunStatus';
import { DemoDataPostDocumentTarget } from './DemoDataPostDocumentTarget';
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
export class DemoDataPostsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DemoDataPosts<DeSerializersT>, DeSerializersT>
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
  ): DemoDataPostsApi<DeSerializersT> {
    return new DemoDataPostsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DemoDataPosts;

  requestBuilder(): DemoDataPostsRequestBuilder<DeSerializersT> {
    return new DemoDataPostsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DemoDataPosts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DemoDataPosts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DemoDataPosts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DemoDataPosts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DemoDataPosts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEMO_DATA_JOB: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT: EnumField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      DemoDataPostDocument,
      true,
      true
    >;
    DEMO_DATA_JOB_STATUS: EnumField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      DemoDataPostRunStatus,
      true,
      true
    >;
    TO_DOCUMENT: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_DOCUMENT: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATA_PROJECT_ID: OrderableEdmTypeField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TARGET: EnumField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      DemoDataPostDocumentTarget,
      true,
      true
    >;
    PROCESS_ON_IMPORT: EnumField<
      DemoDataPosts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DemoDataPosts<DeSerializers>>;
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
         * Static representation of the {@link demoDataJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMO_DATA_JOB: fieldBuilder.buildEdmTypeField(
          'DemoDataJob',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link document} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT: fieldBuilder.buildEnumField(
          'Document',
          DemoDataPostDocument,
          true
        ),
        /**
         * Static representation of the {@link demoDataJobStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMO_DATA_JOB_STATUS: fieldBuilder.buildEnumField(
          'DemoDataJobStatus',
          DemoDataPostRunStatus,
          true
        ),
        /**
         * Static representation of the {@link toDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ToDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'FromDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dataProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'DataProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TARGET: fieldBuilder.buildEnumField(
          'DocumentTarget',
          DemoDataPostDocumentTarget,
          true
        ),
        /**
         * Static representation of the {@link processOnImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ON_IMPORT: fieldBuilder.buildEnumField(
          'ProcessOnImport',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DemoDataPosts)
      };
    }

    return this._schema;
  }
}
