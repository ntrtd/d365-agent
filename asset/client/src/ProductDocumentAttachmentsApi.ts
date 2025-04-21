/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductDocumentAttachments } from './ProductDocumentAttachments';
import { ProductDocumentAttachmentsRequestBuilder } from './ProductDocumentAttachmentsRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { EcoResProductImageUsage } from './EcoResProductImageUsage';
import { DocuRestriction } from './DocuRestriction';
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
  EnumField,
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductDocumentAttachments<DeSerializersT>, DeSerializersT>
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
  ): ProductDocumentAttachmentsApi<DeSerializersT> {
    return new ProductDocumentAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      ProductDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ProductsV2Api<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PRODUCT_V_2: new OneToOneLink('ProductV2', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProductDocumentAttachments;

  requestBuilder(): ProductDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new ProductDocumentAttachmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductDocumentAttachments<DeSerializersT>,
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
    typeof ProductDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHED_DATE_TIME: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_IMAGE_USAGE: EnumField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      EcoResProductImageUsage,
      true,
      true
    >;
    ATTACHMENT: EdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_FILE_NAME: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHING_USER_ID: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_LOCATION: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_IMAGE: EnumField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_PRODUCT_IMAGE: EnumField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ProductDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      ProductDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductDocumentAttachments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
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
         * Static representation of the {@link productImageUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IMAGE_USAGE: fieldBuilder.buildEnumField(
          'ProductImageUsage',
          EcoResProductImageUsage,
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
         * Static representation of the {@link isProductImage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_IMAGE: fieldBuilder.buildEnumField(
          'IsProductImage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link isDefaultProductImage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PRODUCT_IMAGE: fieldBuilder.buildEnumField(
          'IsDefaultProductImage',
          NoYes,
          true
        ),
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
        ALL_FIELDS: new AllFields('*', ProductDocumentAttachments)
      };
    }

    return this._schema;
  }
}
