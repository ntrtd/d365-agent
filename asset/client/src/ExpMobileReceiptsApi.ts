/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileReceipts } from './ExpMobileReceipts';
import { ExpMobileReceiptsRequestBuilder } from './ExpMobileReceiptsRequestBuilder';
import { DocuRestriction } from './DocuRestriction';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
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
export class ExpMobileReceiptsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileReceipts<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileReceiptsApi<DeSerializersT> {
    return new ExpMobileReceiptsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileReceipts;

  requestBuilder(): ExpMobileReceiptsRequestBuilder<DeSerializersT> {
    return new ExpMobileReceiptsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileReceipts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileReceipts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpMobileReceipts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ExpMobileReceipts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileReceipts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REF_REC_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SMM_E_MAIL_STORE_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REC_ID_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_REC_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MODIFIED_DATE_TIME_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RESTRICTION: EnumField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    AUTHOR: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCU_REF_REC_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SMM_TABLE: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SMM_E_MAIL_ENTRY_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_BY_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_DATE_TIME_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAPTURED_RECEIPT: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_SKIP_UPDATE: EnumField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      InterCompanySkipUpdate,
      true,
      true
    >;
    IS_ATTACHED_TO_EXPENSE: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTUAL_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENCYCLOPEDIA_ITEM_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REC_VERSION_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FILE_EXTENSION: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JUSTIFICATION: EnumField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REF_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTITION_COPY_1: OrderableEdmTypeField<
      ExpMobileReceipts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileReceipts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link smmEMailStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_E_MAIL_STORE_ID: fieldBuilder.buildEdmTypeField(
          'smmEMailStoreID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recIdCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_ID_COPY_1: fieldBuilder.buildEdmTypeField(
          'RecIdCopy1',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ValueRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link modifiedDateTimeCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_DATE_TIME_COPY_1: fieldBuilder.buildEdmTypeField(
          'ModifiedDateTimeCopy1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link party} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY: fieldBuilder.buildEdmTypeField('Party', 'Edm.Int64', false),
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
         * Static representation of the {@link author} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR: fieldBuilder.buildEdmTypeField('Author', 'Edm.Int64', false),
        /**
         * Static representation of the {@link docuRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCU_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'DocuRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link smmTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_TABLE: fieldBuilder.buildEdmTypeField(
          'smmTable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link smmEMailEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_E_MAIL_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'smmEMailEntryID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modifiedByCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY_COPY_1: fieldBuilder.buildEdmTypeField(
          'ModifiedByCopy1',
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
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createdDateTimeCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME_COPY_1: fieldBuilder.buildEdmTypeField(
          'CreatedDateTimeCopy1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link capturedReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_RECEIPT: fieldBuilder.buildEdmTypeField(
          'CapturedReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        /**
         * Static representation of the {@link interCompanySkipUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_SKIP_UPDATE: fieldBuilder.buildEnumField(
          'InterCompanySkipUpdate',
          InterCompanySkipUpdate,
          true
        ),
        /**
         * Static representation of the {@link isAttachedToExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATTACHED_TO_EXPENSE: fieldBuilder.buildEdmTypeField(
          'IsAttachedToExpense',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link actualCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ActualCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link encyclopediaItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENCYCLOPEDIA_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'EncyclopediaItemId',
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
         * Static representation of the {@link recVersionCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_VERSION_COPY_1: fieldBuilder.buildEdmTypeField(
          'RecVersionCopy1',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fileExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'FileExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link isJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JUSTIFICATION: fieldBuilder.buildEnumField(
          'IsJustification',
          NoYes,
          true
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
         * Static representation of the {@link refCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'RefCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdByCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_COPY_1: fieldBuilder.buildEdmTypeField(
          'CreatedByCopy1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partitionCopy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_COPY_1: fieldBuilder.buildEdmTypeField(
          'PartitionCopy1',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileReceipts)
      };
    }

    return this._schema;
  }
}
