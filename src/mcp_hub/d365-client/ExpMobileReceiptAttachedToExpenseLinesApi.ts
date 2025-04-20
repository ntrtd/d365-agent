/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileReceiptAttachedToExpenseLines } from './ExpMobileReceiptAttachedToExpenseLines';
import { ExpMobileReceiptAttachedToExpenseLinesRequestBuilder } from './ExpMobileReceiptAttachedToExpenseLinesRequestBuilder';
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
export class ExpMobileReceiptAttachedToExpenseLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializersT>,
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
  ): ExpMobileReceiptAttachedToExpenseLinesApi<DeSerializersT> {
    return new ExpMobileReceiptAttachedToExpenseLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileReceiptAttachedToExpenseLines;

  requestBuilder(): ExpMobileReceiptAttachedToExpenseLinesRequestBuilder<DeSerializersT> {
    return new ExpMobileReceiptAttachedToExpenseLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileReceiptAttachedToExpenseLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileReceiptAttachedToExpenseLines<DeSerializersT>,
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
    typeof ExpMobileReceiptAttachedToExpenseLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileReceiptAttachedToExpenseLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SMM_E_MAIL_STORE_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REC_VERSION_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCU_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSIGNED_TO: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTION: EnumField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    AUTHOR: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SMM_TABLE: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SMM_E_MAIL_ENTRY_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_BY_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MODIFIED_DATE_TIME_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTITION_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_SKIP_UPDATE: EnumField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      InterCompanySkipUpdate,
      true,
      true
    >;
    ACTUAL_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENCYCLOPEDIA_ITEM_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODIFIED_BY_1: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_LINE_ATTACHED_TO: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_EXTENSION: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_DOCUMENT: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JUSTIFICATION: EnumField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    WORKFLOW_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ExpMobileReceiptAttachedToExpenseLines<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link recVersion1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_VERSION_1: fieldBuilder.buildEdmTypeField(
          'RecVersion1',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link docuRefTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCU_REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'DocuRefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link party} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY: fieldBuilder.buildEdmTypeField('Party', 'Edm.Int64', false),
        /**
         * Static representation of the {@link assignedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_TO: fieldBuilder.buildEdmTypeField(
          'AssignedTo',
          'Edm.String',
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
         * Static representation of the {@link author} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR: fieldBuilder.buildEdmTypeField('Author', 'Edm.Int64', false),
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
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link createdBy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_1: fieldBuilder.buildEdmTypeField(
          'CreatedBy1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'CreatedDateTime1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link modifiedDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'ModifiedDateTime1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link partition1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_1: fieldBuilder.buildEdmTypeField(
          'Partition1',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link modifiedBy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY_1: fieldBuilder.buildEdmTypeField(
          'ModifiedBy1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseLineAttachedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LINE_ATTACHED_TO: fieldBuilder.buildEdmTypeField(
          'ExpenseLineAttachedTo',
          'Edm.String',
          true
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
         * Static representation of the {@link capturedDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'CapturedDocument',
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
         * Static representation of the {@link refCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'RefCompanyId',
          'Edm.String',
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
         * Static representation of the {@link workflowRefTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'WorkflowRefTableName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileReceiptAttachedToExpenseLines)
      };
    }

    return this._schema;
  }
}
