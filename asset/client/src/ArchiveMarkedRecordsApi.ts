/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ArchiveMarkedRecords } from './ArchiveMarkedRecords';
import { ArchiveMarkedRecordsRequestBuilder } from './ArchiveMarkedRecordsRequestBuilder';
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
export class ArchiveMarkedRecordsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ArchiveMarkedRecords<DeSerializersT>, DeSerializersT>
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
  ): ArchiveMarkedRecordsApi<DeSerializersT> {
    return new ArchiveMarkedRecordsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ArchiveMarkedRecords;

  requestBuilder(): ArchiveMarkedRecordsRequestBuilder<DeSerializersT> {
    return new ArchiveMarkedRecordsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ArchiveMarkedRecords<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ArchiveMarkedRecords<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ArchiveMarkedRecords<DeSerializersT>,
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
    typeof ArchiveMarkedRecords,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ArchiveMarkedRecords,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ARCHIVE_RUN_ID: OrderableEdmTypeField<
      ArchiveMarkedRecords<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARCHIVE_BUNDLE_ID: OrderableEdmTypeField<
      ArchiveMarkedRecords<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_LOGICAL_NAME: OrderableEdmTypeField<
      ArchiveMarkedRecords<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      ArchiveMarkedRecords<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHOULD_DELETE: OrderableEdmTypeField<
      ArchiveMarkedRecords<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ArchiveMarkedRecords<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link archiveRunId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHIVE_RUN_ID: fieldBuilder.buildEdmTypeField(
          'ArchiveRunId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link archiveBundleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHIVE_BUNDLE_ID: fieldBuilder.buildEdmTypeField(
          'ArchiveBundleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entityLogicalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_LOGICAL_NAME: fieldBuilder.buildEdmTypeField(
          'EntityLogicalName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shouldDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_DELETE: fieldBuilder.buildEdmTypeField(
          'ShouldDelete',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ArchiveMarkedRecords)
      };
    }

    return this._schema;
  }
}
