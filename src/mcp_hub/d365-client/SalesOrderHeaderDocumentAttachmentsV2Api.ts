/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderHeaderDocumentAttachmentsV2 } from './SalesOrderHeaderDocumentAttachmentsV2';
import { SalesOrderHeaderDocumentAttachmentsV2RequestBuilder } from './SalesOrderHeaderDocumentAttachmentsV2RequestBuilder';
import { SalesOrderHeadersV3Api } from './SalesOrderHeadersV3Api';
import { SalesOrderHeadersV2Api } from './SalesOrderHeadersV2Api';
import { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { NoYes } from './NoYes';
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
  EnumField,
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesOrderHeaderDocumentAttachmentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
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
  ): SalesOrderHeaderDocumentAttachmentsV2Api<DeSerializersT> {
    return new SalesOrderHeaderDocumentAttachmentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderHeadersV3Api<DeSerializersT>,
      SalesOrderHeadersV2Api<DeSerializersT>,
      CdsSalesOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_ORDER_HEADER_V_3: new OneToOneLink(
        'SalesOrderHeaderV3',
        this,
        linkedApis[0]
      ),
      SALES_ORDER_HEADER_V_2: new OneToOneLink(
        'SalesOrderHeaderV2',
        this,
        linkedApis[1]
      ),
      CDS_SALES_ORDER_HEADER: new OneToOneLink(
        'CDSSalesOrderHeader',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderHeaderDocumentAttachmentsV2;

  requestBuilder(): SalesOrderHeaderDocumentAttachmentsV2RequestBuilder<DeSerializersT> {
    return new SalesOrderHeaderDocumentAttachmentsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
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
    typeof SalesOrderHeaderDocumentAttachmentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderHeaderDocumentAttachmentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_ATTACHMENT: EnumField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT: EdmTypeField<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      SalesOrderHeaderDocumentAttachmentsV2<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderHeaderDocumentAttachmentsV2<DeSerializers>>;
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
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.Guid',
          false
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
         * Static representation of the {@link isDefaultAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ATTACHMENT: fieldBuilder.buildEnumField(
          'IsDefaultAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
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
         * Static representation of the {@link attachmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttachmentDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link documentAttachmentTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentAttachmentTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderHeaderDocumentAttachmentsV2)
      };
    }

    return this._schema;
  }
}
