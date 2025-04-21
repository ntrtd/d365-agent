/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseRequisitionApprovalAttachedLines } from './PurchaseRequisitionApprovalAttachedLines';
import { PurchaseRequisitionApprovalAttachedLinesRequestBuilder } from './PurchaseRequisitionApprovalAttachedLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseRequisitionApprovalAttachedLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchaseRequisitionApprovalAttachedLines<DeSerializersT>,
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
  ): PurchaseRequisitionApprovalAttachedLinesApi<DeSerializersT> {
    return new PurchaseRequisitionApprovalAttachedLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseRequisitionApprovalAttachedLines;

  requestBuilder(): PurchaseRequisitionApprovalAttachedLinesRequestBuilder<DeSerializersT> {
    return new PurchaseRequisitionApprovalAttachedLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseRequisitionApprovalAttachedLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseRequisitionApprovalAttachedLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseRequisitionApprovalAttachedLines<DeSerializersT>,
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
    typeof PurchaseRequisitionApprovalAttachedLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseRequisitionApprovalAttachedLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUISITION_TABLE_REC_ID: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REQUISITION_LINE_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DATE: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_PURCHASE_QUANTITY: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      PurchaseRequisitionApprovalAttachedLines<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requisitionTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'RequisitionTableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link requisitionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequisitionLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedPurchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequestedPurchaseQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseRequisitionApprovalAttachedLines)
      };
    }

    return this._schema;
  }
}
