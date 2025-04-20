/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsInvoicesCust } from './ConsInvoicesCust';
import { ConsInvoicesCustRequestBuilder } from './ConsInvoicesCustRequestBuilder';
import { CustVendConsInvoiceStatusJp } from './CustVendConsInvoiceStatusJp';
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
export class ConsInvoicesCustApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConsInvoicesCust<DeSerializersT>, DeSerializersT>
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
  ): ConsInvoicesCustApi<DeSerializersT> {
    return new ConsInvoicesCustApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ConsInvoicesCust;

  requestBuilder(): ConsInvoicesCustRequestBuilder<DeSerializersT> {
    return new ConsInvoicesCustRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConsInvoicesCust<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConsInvoicesCust<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ConsInvoicesCust<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ConsInvoicesCust, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsInvoicesCust,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSOLIDATION_ID: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PREVIOUSLY_PAID_AMOUNT: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_AMOUNT_DURING_CONSOLIDATION_PERIOD: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADJUSTMENT_AMOUNT: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_CONSOLIDATION_ID: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXECUTION_DATE: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSOLIDATION_DATE: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_INVOICE_AMOUNT: OrderableEdmTypeField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      ConsInvoicesCust<DeSerializers>,
      DeSerializersT,
      CustVendConsInvoiceStatusJp,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ConsInvoicesCust<DeSerializers>>;
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
         * Static representation of the {@link consolidationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_ID: fieldBuilder.buildEdmTypeField(
          'ConsolidationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link previouslyPaidAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUSLY_PAID_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviouslyPaidAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX: fieldBuilder.buildEdmTypeField(
          'SalesTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmountDuringConsolidationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_DURING_CONSOLIDATION_PERIOD:
          fieldBuilder.buildEdmTypeField(
            'InvoiceAmountDuringConsolidationPeriod',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link adjustmentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustmentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceConsolidationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_CONSOLIDATION_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceConsolidationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link executionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_DATE: fieldBuilder.buildEdmTypeField(
          'ExecutionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consolidationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_DATE: fieldBuilder.buildEdmTypeField(
          'ConsolidationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link previousInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CustVendConsInvoiceStatusJp,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsInvoicesCust)
      };
    }

    return this._schema;
  }
}
