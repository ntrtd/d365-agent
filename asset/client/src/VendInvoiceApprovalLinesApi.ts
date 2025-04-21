/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceApprovalLines } from './VendInvoiceApprovalLines';
import { VendInvoiceApprovalLinesRequestBuilder } from './VendInvoiceApprovalLinesRequestBuilder';
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
export class VendInvoiceApprovalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendInvoiceApprovalLines<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceApprovalLinesApi<DeSerializersT> {
    return new VendInvoiceApprovalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceApprovalLines;

  requestBuilder(): VendInvoiceApprovalLinesRequestBuilder<DeSerializersT> {
    return new VendInvoiceApprovalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceApprovalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceApprovalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceApprovalLines<DeSerializersT>,
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
    typeof VendInvoiceApprovalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceApprovalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_ELEMENT_ID: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NET_AMOUNT: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_ITEM_TYPE: EnumField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      WorkflowWorkItemType,
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      VendInvoiceApprovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceApprovalLines<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
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
         * Static representation of the {@link workflowElementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowElementId',
          'Edm.Guid',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineNetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceApprovalLines)
      };
    }

    return this._schema;
  }
}
