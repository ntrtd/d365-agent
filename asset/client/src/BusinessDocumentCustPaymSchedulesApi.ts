/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentCustPaymSchedules } from './BusinessDocumentCustPaymSchedules';
import { BusinessDocumentCustPaymSchedulesRequestBuilder } from './BusinessDocumentCustPaymSchedulesRequestBuilder';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
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
export class BusinessDocumentCustPaymSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessDocumentCustPaymSchedules<DeSerializersT>, DeSerializersT>
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
  ): BusinessDocumentCustPaymSchedulesApi<DeSerializersT> {
    return new BusinessDocumentCustPaymSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentCustPaymSchedules<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentCustPaymSchedules;

  requestBuilder(): BusinessDocumentCustPaymSchedulesRequestBuilder<DeSerializersT> {
    return new BusinessDocumentCustPaymSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentCustPaymSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentCustPaymSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentCustPaymSchedules<DeSerializersT>,
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
    typeof BusinessDocumentCustPaymSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentCustPaymSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_REC_ID: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DUE_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISC_DATE: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXT_REC_ID: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXT_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPLIT_PAYMENT: EnumField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentCustPaymSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentCustPaymSchedules<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentCustPaymSchedules<DeSerializers>>;
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
         * Static representation of the {@link scheduleLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ScheduleLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DueAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link discDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_DATE: fieldBuilder.buildEdmTypeField(
          'DiscDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link extRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ExtRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link extTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXT_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ExtTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link splitPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYMENT: fieldBuilder.buildEnumField('SplitPayment', NoYes, true),
        /**
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentCustPaymSchedules)
      };
    }

    return this._schema;
  }
}
