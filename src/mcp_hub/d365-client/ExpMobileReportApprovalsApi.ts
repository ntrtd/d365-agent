/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileReportApprovals } from './ExpMobileReportApprovals';
import { ExpMobileReportApprovalsRequestBuilder } from './ExpMobileReportApprovalsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { TrvAppStatus } from './TrvAppStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpMobileReportApprovalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileReportApprovals<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileReportApprovalsApi<DeSerializersT> {
    return new ExpMobileReportApprovalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpMobileReportApprovals<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExpMobileReportApprovals;

  requestBuilder(): ExpMobileReportApprovalsRequestBuilder<DeSerializersT> {
    return new ExpMobileReportApprovalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileReportApprovals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileReportApprovals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileReportApprovals<DeSerializersT>,
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
    typeof ExpMobileReportApprovals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileReportApprovals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXP_NUMBER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_CURRENCY: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRE_APPROVAL_NUMBER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APPROVER_JUSTIFICATION: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    CORRELATION_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IS_EXPENSE_REPORT: EnumField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_AMOUNT: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSIGNED_TO: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TABLE_REC_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKFLOW_COMMENT: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_STATUS_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ANTI_CORRUPTION_APPROVER_FLAG: EnumField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_VOUCHER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT_1: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT_2: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINAL_APPROVER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ATTACHED_EXPENSE_COUNT: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELEGATE_USER_ID: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANTI_CORRUPTION_SUBMITTER_FLAG: EnumField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATING_USER: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      ExpMobileReportApprovals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpMobileReportApprovals<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpMobileReportApprovals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link expNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'WorkItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preApprovalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_APPROVAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreApprovalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.String', true),
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'SourceDocumentHeader',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link approverJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_JUSTIFICATION: fieldBuilder.buildEdmTypeField(
          'ApproverJustification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TrvAppStatus,
          true
        ),
        /**
         * Static representation of the {@link correlationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'CorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link isExpenseReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPENSE_REPORT: fieldBuilder.buildEnumField(
          'IsExpenseReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link expTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ExpTableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workflowComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_COMMENT: fieldBuilder.buildEdmTypeField(
          'WorkflowComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ProjStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link antiCorruptionApproverFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANTI_CORRUPTION_APPROVER_FLAG: fieldBuilder.buildEnumField(
          'AntiCorruptionApproverFlag',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link createdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE: fieldBuilder.buildEdmTypeField(
          'CreatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_VOUCHER: fieldBuilder.buildEdmTypeField(
          'PaymentVoucher',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link txt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT_1: fieldBuilder.buildEdmTypeField('Txt1', 'Edm.String', true),
        /**
         * Static representation of the {@link txt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT_2: fieldBuilder.buildEdmTypeField('Txt2', 'Edm.String', true),
        /**
         * Static representation of the {@link finalApprover} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_APPROVER: fieldBuilder.buildEdmTypeField(
          'FinalApprover',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link attachedExpenseCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_EXPENSE_COUNT: fieldBuilder.buildEdmTypeField(
          'AttachedExpenseCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link delegateUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELEGATE_USER_ID: fieldBuilder.buildEdmTypeField(
          'DelegateUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyLe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_LE: fieldBuilder.buildEdmTypeField(
          'InterCompanyLE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link antiCorruptionSubmitterFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANTI_CORRUPTION_SUBMITTER_FLAG: fieldBuilder.buildEnumField(
          'AntiCorruptionSubmitterFlag',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creatingUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_USER: fieldBuilder.buildEdmTypeField(
          'CreatingUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION: fieldBuilder.buildEdmTypeField(
          'Destination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE: fieldBuilder.buildEdmTypeField(
          'PostedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileReportApprovals)
      };
    }

    return this._schema;
  }
}
