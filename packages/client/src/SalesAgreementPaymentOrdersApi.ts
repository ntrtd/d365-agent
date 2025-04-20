/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAgreementPaymentOrders } from './SalesAgreementPaymentOrders';
import { SalesAgreementPaymentOrdersRequestBuilder } from './SalesAgreementPaymentOrdersRequestBuilder';
import { NoYes } from './NoYes';
import { PaymentOrderPeriodCodeRu } from './PaymentOrderPeriodCodeRu';
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
export class SalesAgreementPaymentOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesAgreementPaymentOrders<DeSerializersT>, DeSerializersT>
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
  ): SalesAgreementPaymentOrdersApi<DeSerializersT> {
    return new SalesAgreementPaymentOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesAgreementPaymentOrders;

  requestBuilder(): SalesAgreementPaymentOrdersRequestBuilder<DeSerializersT> {
    return new SalesAgreementPaymentOrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesAgreementPaymentOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAgreementPaymentOrders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAgreementPaymentOrders<DeSerializersT>,
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
    typeof SalesAgreementPaymentOrders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAgreementPaymentOrders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RCOAD: EnumField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_OF_PAYMENT: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_PAYMENT: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_CODE: EnumField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      PaymentOrderPeriodCodeRu,
      true,
      true
    >;
    PURPOSE_TEXT: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_STATUS: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TYPE: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RRC_PRINTING: EnumField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_REVENUE_CODE: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_DATE: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UCI: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_NUMBER: OrderableEdmTypeField<
      SalesAgreementPaymentOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SalesAgreementPaymentOrders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link salesAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'SalesAgreement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rcoad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RCOAD: fieldBuilder.buildEnumField('RCOAD', NoYes, true),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link orderOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'OrderOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_PAYMENT: fieldBuilder.buildEdmTypeField(
          'OriginPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CODE: fieldBuilder.buildEnumField(
          'PeriodCode',
          PaymentOrderPeriodCodeRu,
          true
        ),
        /**
         * Static representation of the {@link purposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'PurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_STATUS: fieldBuilder.buildEdmTypeField(
          'NumberStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rrcPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RRC_PRINTING: fieldBuilder.buildEnumField('RRCPrinting', NoYes, true),
        /**
         * Static representation of the {@link budgetRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link uci} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UCI: fieldBuilder.buildEdmTypeField('UCI', 'Edm.String', true),
        /**
         * Static representation of the {@link periodNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NUMBER: fieldBuilder.buildEdmTypeField(
          'PeriodNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAgreementPaymentOrders)
      };
    }

    return this._schema;
  }
}
