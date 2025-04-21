/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetReservationHeader_PsnBiEntities } from './BudgetReservationHeader_PsnBiEntities';
import { BudgetReservationHeader_PsnBiEntitiesRequestBuilder } from './BudgetReservationHeader_PsnBiEntitiesRequestBuilder';
import { BudgetReservationWorkflowStatusPsn } from './BudgetReservationWorkflowStatusPsn';
import { BudgetReservationDocumentStatusPsn } from './BudgetReservationDocumentStatusPsn';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';
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
export class BudgetReservationHeader_PsnBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BudgetReservationHeader_PsnBiEntities<DeSerializersT>,
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
  ): BudgetReservationHeader_PsnBiEntitiesApi<DeSerializersT> {
    return new BudgetReservationHeader_PsnBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetReservationHeader_PsnBiEntities;

  requestBuilder(): BudgetReservationHeader_PsnBiEntitiesRequestBuilder<DeSerializersT> {
    return new BudgetReservationHeader_PsnBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetReservationHeader_PsnBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetReservationHeader_PsnBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetReservationHeader_PsnBiEntities<DeSerializersT>,
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
    typeof BudgetReservationHeader_PsnBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetReservationHeader_PsnBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetReservationWorkflowStatusPsn,
      true,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetReservationDocumentStatusPsn,
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_REFERENCE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_RESERVATION_TYPE_PSN: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CARRIED_FORWARD_BUDGET_TRANSACTION_HEADER: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCEL_DATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FINALIZE_CLOSING_DATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELIEVING_DOCUMENT_TYPE: EnumField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetReservationRelievingDocumentPsn,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPARTMENT_REFERENCE: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      BudgetReservationHeader_PsnBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetReservationHeader_PsnBiEntities<DeSerializers>>;
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
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          BudgetReservationWorkflowStatusPsn,
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          BudgetReservationDocumentStatusPsn,
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TITLE: fieldBuilder.buildEdmTypeField(
          'DocumentTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ExternalReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetReservationTypePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_TYPE_PSN: fieldBuilder.buildEdmTypeField(
          'BudgetReservationType_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link carriedForwardBudgetTransactionHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIED_FORWARD_BUDGET_TRANSACTION_HEADER:
          fieldBuilder.buildEdmTypeField(
            'CarriedForwardBudgetTransactionHeader',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cancelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_DATE: fieldBuilder.buildEdmTypeField(
          'CancelDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link finalizeClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINALIZE_CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'FinalizeClosingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link relievingDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEVING_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'RelievingDocumentType',
          BudgetReservationRelievingDocumentPsn,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link departmentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'DepartmentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetReservationHeader_PsnBiEntities)
      };
    }

    return this._schema;
  }
}
