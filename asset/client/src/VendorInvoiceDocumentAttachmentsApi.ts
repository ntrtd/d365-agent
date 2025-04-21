/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInvoiceDocumentAttachments } from './VendorInvoiceDocumentAttachments';
import { VendorInvoiceDocumentAttachmentsRequestBuilder } from './VendorInvoiceDocumentAttachmentsRequestBuilder';
import { VendorInvoiceHeadersApi } from './VendorInvoiceHeadersApi';
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
export class VendorInvoiceDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorInvoiceDocumentAttachments<DeSerializersT>, DeSerializersT>
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
  ): VendorInvoiceDocumentAttachmentsApi<DeSerializersT> {
    return new VendorInvoiceDocumentAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_HEADER: OneToOneLink<
      VendorInvoiceDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorInvoiceHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_INVOICE_HEADER: new OneToOneLink(
        'VendorInvoiceHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorInvoiceDocumentAttachments;

  requestBuilder(): VendorInvoiceDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new VendorInvoiceDocumentAttachmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorInvoiceDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorInvoiceDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorInvoiceDocumentAttachments<DeSerializersT>,
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
    typeof VendorInvoiceDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorInvoiceDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICTION: EnumField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_CONTENTS: EdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      VendorInvoiceDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_HEADER: OneToOneLink<
      VendorInvoiceDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorInvoiceDocumentAttachments<DeSerializers>>;
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
         * Static representation of the {@link headerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'HeaderReference',
          'Edm.String',
          false
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
         * Static representation of the {@link defaultAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ATTACHMENT: fieldBuilder.buildEnumField(
          'DefaultAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION: fieldBuilder.buildEnumField(
          'Restriction',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link fileContents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_CONTENTS: fieldBuilder.buildEdmTypeField(
          'FileContents',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInvoiceDocumentAttachments)
      };
    }

    return this._schema;
  }
}
