/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileReports } from './ExpMobileReports';
import { ExpMobileReportsRequestBuilder } from './ExpMobileReportsRequestBuilder';
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
export class ExpMobileReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileReports<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileReportsApi<DeSerializersT> {
    return new ExpMobileReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpMobileReports<DeSerializersT>,
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

  entityConstructor = ExpMobileReports;

  requestBuilder(): ExpMobileReportsRequestBuilder<DeSerializersT> {
    return new ExpMobileReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileReports<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpMobileReports<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpMobileReports, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXP_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRE_APPROVAL_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_ACTION: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_CREATED_DATE_TIME: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVAL_STATUS: EnumField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    TRV_HCM_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_VIOLATION_COUNT: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_STATUS_ID: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_TOTAL: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANTI_CORRUPTION_APPROVER_FLAG: EnumField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_VIOLATIONS_LEVEL: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_VIOLATION_MESSAGE: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_VOUCHER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIR_PERSON_FK_PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT_1: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT_2: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANTI_CORRUPTION_SUBMITTER_FLAG: EnumField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESTINATION: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_CREATED_DATE_TIME: OrderableEdmTypeField<
      ExpMobileReports<DeSerializers>,
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
      ExpMobileReports<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpMobileReports<DeSerializers>>;
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
         * Static representation of the {@link legalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntity_DataArea',
          'Edm.String',
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
         * Static representation of the {@link preApprovalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_APPROVAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreApprovalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ACTION: fieldBuilder.buildEdmTypeField(
          'WorkflowAction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReportCreatedDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link trvHcmWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_HCM_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrvHcmWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link policyViolationCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_COUNT: fieldBuilder.buildEdmTypeField(
          'PolicyViolationCount',
          'Edm.Int32',
          false
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
         * Static representation of the {@link amountTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TOTAL: fieldBuilder.buildEdmTypeField(
          'AmountTotal',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link policyViolationsLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATIONS_LEVEL: fieldBuilder.buildEdmTypeField(
          'PolicyViolationsLevel',
          'Edm.Int64',
          false
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
         * Static representation of the {@link legalEntityPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'LegalEntity_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyViolationMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_MESSAGE: fieldBuilder.buildEdmTypeField(
          'PolicyViolationMessage',
          'Edm.String',
          true
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
         * Static representation of the {@link dirPersonFkPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIR_PERSON_FK_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DirPerson_FK_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
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
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
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
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
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
        /**
         * Static representation of the {@link documentCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DocumentCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileReports)
      };
    }

    return this._schema;
  }
}
