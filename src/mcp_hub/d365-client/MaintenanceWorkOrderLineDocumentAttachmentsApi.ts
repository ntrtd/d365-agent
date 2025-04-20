/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintenanceWorkOrderLineDocumentAttachments } from './MaintenanceWorkOrderLineDocumentAttachments';
import { MaintenanceWorkOrderLineDocumentAttachmentsRequestBuilder } from './MaintenanceWorkOrderLineDocumentAttachmentsRequestBuilder';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { DocumentTypesApi } from './DocumentTypesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { DocuRestriction } from './DocuRestriction';
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
  EdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class MaintenanceWorkOrderLineDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
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
  ): MaintenanceWorkOrderLineDocumentAttachmentsApi<DeSerializersT> {
    return new MaintenanceWorkOrderLineDocumentAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT_TYPE: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rountOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUNT_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      DocumentTypesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      UNPLANNED_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'UnplannedWorkOrderLineDocumentAttachment',
        this,
        linkedApis[0]
      ),
      REQUEST_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'RequestWorkOrderLineDocumentAttachment',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_PLAN_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'MaintenancePlanWorkOrderLineDocumentAttachment',
        this,
        linkedApis[2]
      ),
      DOCUMENT_ATTACHMENT_TYPE: new OneToOneLink(
        'DocumentAttachmentType',
        this,
        linkedApis[3]
      ),
      ROUNT_ORDER_LINE_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'RountOrderLineDocumentAttachment',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: new OneToOneLink(
        'MaintenanceWorkOrderLineDocumentAttachment',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = MaintenanceWorkOrderLineDocumentAttachments;

  requestBuilder(): MaintenanceWorkOrderLineDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new MaintenanceWorkOrderLineDocumentAttachmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
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
    typeof MaintenanceWorkOrderLineDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintenanceWorkOrderLineDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHED_DATE_TIME: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ATTACHMENT: EdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_FILE_NAME: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHING_USER_ID: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_LOCATION: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT_TYPE: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rountOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUNT_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLineDocumentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LINE_DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintenanceWorkOrderLineDocumentAttachments<DeSerializers>
    >;
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
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link documentAttachmentTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentAttachmentTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttachmentDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AttachedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link attachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT: fieldBuilder.buildEdmTypeField(
          'Attachment',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link accessRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_RESTRICTION: fieldBuilder.buildEnumField(
          'AccessRestriction',
          DocuRestriction,
          true
        ),
        /**
         * Static representation of the {@link fileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'FileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'OriginalFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachingUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHING_USER_ID: fieldBuilder.buildEdmTypeField(
          'AttachingUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_LOCATION: fieldBuilder.buildEdmTypeField(
          'FileLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link documentAttachmentTypeLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_LEGAL_ENTITY_ID:
          fieldBuilder.buildEdmTypeField(
            'DocumentAttachmentTypeLegalEntityId',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          MaintenanceWorkOrderLineDocumentAttachments
        )
      };
    }

    return this._schema;
  }
}
