/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocuExportAttachmentsTables } from './DocuExportAttachmentsTables';
import { DocuExportAttachmentsTablesRequestBuilder } from './DocuExportAttachmentsTablesRequestBuilder';
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
export class DocuExportAttachmentsTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DocuExportAttachmentsTables<DeSerializersT>, DeSerializersT>
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
  ): DocuExportAttachmentsTablesApi<DeSerializersT> {
    return new DocuExportAttachmentsTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocuExportAttachmentsTables;

  requestBuilder(): DocuExportAttachmentsTablesRequestBuilder<DeSerializersT> {
    return new DocuExportAttachmentsTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocuExportAttachmentsTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocuExportAttachmentsTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocuExportAttachmentsTables<DeSerializersT>,
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
    typeof DocuExportAttachmentsTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocuExportAttachmentsTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocuExportAttachmentsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_TABLE_NAME: OrderableEdmTypeField<
      DocuExportAttachmentsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ENABLED: EnumField<
      DocuExportAttachmentsTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_FIELD_NAME: OrderableEdmTypeField<
      DocuExportAttachmentsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocuExportAttachmentsTables<DeSerializers>>;
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
         * Static representation of the {@link sourceTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'SourceTableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEnumField('IsEnabled', NoYes, true),
        /**
         * Static representation of the {@link dateFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'DateFieldName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocuExportAttachmentsTables)
      };
    }

    return this._schema;
  }
}
