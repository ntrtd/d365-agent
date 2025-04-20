/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentParameters } from './DocumentParameters';
import { DocumentParametersRequestBuilder } from './DocumentParametersRequestBuilder';
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
export class DocumentParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentParameters<DeSerializersT>, DeSerializersT>
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
  ): DocumentParametersApi<DeSerializersT> {
    return new DocumentParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentParameters;

  requestBuilder(): DocumentParametersRequestBuilder<DeSerializersT> {
    return new DocumentParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentParameters<DeSerializersT>,
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
    typeof DocumentParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_FILE_DOCU_TYPE_REC_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_NOTE_DOCU_TYPE_REC_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_NOTE_DOCU_TYPE_TYPE_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_TABLE: EnumField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_FILE_SIZE_IN_FILE_SYSTEM: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_FILE_DOCU_TYPE_TYPE_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_URL_DOCU_TYPE_REC_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_IMAGE_DOCU_TYPE_REC_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_IMAGE_DOCU_TYPE_TYPE_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_URL_DOCU_TYPE_TYPE_ID: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_APPS_SERVER_URL: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMIT_TO_WORKFLOW: EnumField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_SHARE_POINT_SERVER: OrderableEdmTypeField<
      DocumentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocumentParameters<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link defaultFileDocuTypeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FILE_DOCU_TYPE_REC_ID: fieldBuilder.buildEdmTypeField(
          'DefaultFileDocuTypeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultNoteDocuTypeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_NOTE_DOCU_TYPE_REC_ID: fieldBuilder.buildEdmTypeField(
          'DefaultNoteDocuTypeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultNoteDocuTypeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_NOTE_DOCU_TYPE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultNoteDocuTypeTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TABLE: fieldBuilder.buildEnumField('ActiveTable', NoYes, true),
        /**
         * Static representation of the {@link maxFileSizeInFileSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_FILE_SIZE_IN_FILE_SYSTEM: fieldBuilder.buildEdmTypeField(
          'MaxFileSizeInFileSystem',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultFileDocuTypeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FILE_DOCU_TYPE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultFileDocuTypeTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultUrlDocuTypeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_URL_DOCU_TYPE_REC_ID: fieldBuilder.buildEdmTypeField(
          'DefaultURLDocuTypeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultImageDocuTypeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_IMAGE_DOCU_TYPE_REC_ID: fieldBuilder.buildEdmTypeField(
          'DefaultImageDocuTypeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultImageDocuTypeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_IMAGE_DOCU_TYPE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultImageDocuTypeTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultUrlDocuTypeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_URL_DOCU_TYPE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultURLDocuTypeTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webAppsServerUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_APPS_SERVER_URL: fieldBuilder.buildEdmTypeField(
          'WebAppsServerURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link submitToWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMIT_TO_WORKFLOW: fieldBuilder.buildEnumField(
          'SubmitToWorkflow',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultSharePointServer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHARE_POINT_SERVER: fieldBuilder.buildEdmTypeField(
          'DefaultSharePointServer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentParameters)
      };
    }

    return this._schema;
  }
}
