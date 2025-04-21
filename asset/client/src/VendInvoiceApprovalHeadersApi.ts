/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceApprovalHeaders } from './VendInvoiceApprovalHeaders';
import { VendInvoiceApprovalHeadersRequestBuilder } from './VendInvoiceApprovalHeadersRequestBuilder';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';
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
export class VendInvoiceApprovalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceApprovalHeaders<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceApprovalHeadersApi<DeSerializersT> {
    return new VendInvoiceApprovalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceApprovalHeaders;

  requestBuilder(): VendInvoiceApprovalHeadersRequestBuilder<DeSerializersT> {
    return new VendInvoiceApprovalHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceApprovalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceApprovalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceApprovalHeaders<DeSerializersT>,
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
    typeof VendInvoiceApprovalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceApprovalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_VENDOR_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_NAME: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DUE_DATE: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM_TYPE: EnumField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      WorkflowWorkItemType,
      true,
      true
    >;
    WORKFLOW_ELEMENT_ID: OrderableEdmTypeField<
      VendInvoiceApprovalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceApprovalHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
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
         * Static representation of the {@link invoiceVendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approvalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_USER: fieldBuilder.buildEdmTypeField(
          'ApprovalUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_TYPE: fieldBuilder.buildEnumField(
          'WorkItemType',
          WorkflowWorkItemType,
          true
        ),
        /**
         * Static representation of the {@link workflowElementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowElementId',
          'Edm.Guid',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceApprovalHeaders)
      };
    }

    return this._schema;
  }
}
