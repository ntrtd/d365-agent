/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectContractLineMilestoneHeaders } from './ProjectContractLineMilestoneHeaders';
import { ProjectContractLineMilestoneHeadersRequestBuilder } from './ProjectContractLineMilestoneHeadersRequestBuilder';
import { ProjProjectMilestoneStatus } from './ProjProjectMilestoneStatus';
import { ProjProjectMilestoneBillingStatus } from './ProjProjectMilestoneBillingStatus';
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
export class ProjectContractLineMilestoneHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjectContractLineMilestoneHeaders<DeSerializersT>,
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
  ): ProjectContractLineMilestoneHeadersApi<DeSerializersT> {
    return new ProjectContractLineMilestoneHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectContractLineMilestoneHeaders;

  requestBuilder(): ProjectContractLineMilestoneHeadersRequestBuilder<DeSerializersT> {
    return new ProjectContractLineMilestoneHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectContractLineMilestoneHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectContractLineMilestoneHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectContractLineMilestoneHeaders<DeSerializersT>,
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
    typeof ProjectContractLineMilestoneHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectContractLineMilestoneHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_LINE_MILESTONE_HEADER_ID: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEXT_INVOICE_STATUS: EnumField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      ProjProjectMilestoneStatus,
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTRACT_LINE: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_STATUS: EnumField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      ProjProjectMilestoneBillingStatus,
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_AMOUNT: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_INVOICE_AMOUNT: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_INVOICE_PERCENT: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_TO_DATE: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_CONTRACT_LINE_MILESTONE_HEADER_GUID: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT_INVOICED_TO_DATE: OrderableEdmTypeField<
      ProjectContractLineMilestoneHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjectContractLineMilestoneHeaders<DeSerializers>>;
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
         * Static representation of the {@link projectContractLineMilestoneHeaderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_LINE_MILESTONE_HEADER_ID:
          fieldBuilder.buildEdmTypeField(
            'ProjectContractLineMilestoneHeaderId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link lineSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nextInvoiceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_INVOICE_STATUS: fieldBuilder.buildEnumField(
          'NextInvoiceStatus',
          ProjProjectMilestoneStatus,
          true
        ),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        /**
         * Static representation of the {@link projectContractLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_LINE: fieldBuilder.buildEdmTypeField(
          'ProjectContractLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_STATUS: fieldBuilder.buildEnumField(
          'BillingStatus',
          ProjProjectMilestoneBillingStatus,
          true
        ),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link remainingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nextInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NextInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextInvoicePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_INVOICE_PERCENT: fieldBuilder.buildEdmTypeField(
          'NextInvoicePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoicedToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_TO_DATE: fieldBuilder.buildEdmTypeField(
          'InvoicedToDate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectContractLineMilestoneHeaderGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_LINE_MILESTONE_HEADER_GUID:
          fieldBuilder.buildEdmTypeField(
            'ProjectContractLineMilestoneHeaderGuid',
            'Edm.Guid',
            false
          ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link percentInvoicedToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_INVOICED_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PercentInvoicedToDate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectContractLineMilestoneHeaders)
      };
    }

    return this._schema;
  }
}
