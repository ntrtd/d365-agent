/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentTypes } from './DocumentTypes';
import { DocumentTypesRequestBuilder } from './DocumentTypesRequestBuilder';
import { MaintenanceWorkOrderLineDocumentAttachmentsApi } from './MaintenanceWorkOrderLineDocumentAttachmentsApi';
import { MaintenanceRequestDocumentAttachmentsApi } from './MaintenanceRequestDocumentAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuStructureType } from './DocuStructureType';
import { DocuFilePlace } from './DocuFilePlace';
import { DocuTypeGroup } from './DocuTypeGroup';
import { DocuRemoveOption } from './DocuRemoveOption';
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
  EdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DocumentTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentTypes<DeSerializersT>, DeSerializersT>
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
  ): DocumentTypesApi<DeSerializersT> {
    return new DocumentTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      DocumentTypes<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      DocumentTypes<DeSerializersT>,
      DeSerializersT,
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>,
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'ProductDocumentAttachments',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'ReleasedProductDocumentAttachments',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DocumentTypes;

  requestBuilder(): DocumentTypesRequestBuilder<DeSerializersT> {
    return new DocumentTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DocumentTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DocumentTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DocumentTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILE_REMOVAL_CONFIRMATION: EnumField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCU_STRUCTURE_TYPE: EnumField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      DocuStructureType,
      true,
      true
    >;
    FILE_PLACE: EnumField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      DocuFilePlace,
      true,
      true
    >;
    TYPE_GROUP: EnumField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      DocuTypeGroup,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_CLASS_NAME: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOST: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMOVE_OPTION: EnumField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      DocuRemoveOption,
      true,
      true
    >;
    PARAMETERS: EdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    FOLDER_PATH: OrderableEdmTypeField<
      DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      DocumentTypes<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      DocumentTypes<DeSerializersT>,
      DeSerializersT,
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentTypes<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link fileRemovalConfirmation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_REMOVAL_CONFIRMATION: fieldBuilder.buildEnumField(
          'FileRemovalConfirmation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link docuStructureType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCU_STRUCTURE_TYPE: fieldBuilder.buildEnumField(
          'DocuStructureType',
          DocuStructureType,
          true
        ),
        /**
         * Static representation of the {@link filePlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_PLACE: fieldBuilder.buildEnumField(
          'FilePlace',
          DocuFilePlace,
          true
        ),
        /**
         * Static representation of the {@link typeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_GROUP: fieldBuilder.buildEnumField(
          'TypeGroup',
          DocuTypeGroup,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link actionClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ActionClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link host} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOST: fieldBuilder.buildEdmTypeField('Host', 'Edm.String', true),
        /**
         * Static representation of the {@link removeOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMOVE_OPTION: fieldBuilder.buildEnumField(
          'RemoveOption',
          DocuRemoveOption,
          true
        ),
        /**
         * Static representation of the {@link parameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS: fieldBuilder.buildEdmTypeField(
          'Parameters',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link folderPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLDER_PATH: fieldBuilder.buildEdmTypeField(
          'FolderPath',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentTypes)
      };
    }

    return this._schema;
  }
}
