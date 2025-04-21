/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustAiAgedBalances } from './CustAiAgedBalances';
import { CustAiAgedBalancesRequestBuilder } from './CustAiAgedBalancesRequestBuilder';
import { DateTransactionDuedate } from './DateTransactionDuedate';
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
export class CustAiAgedBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustAiAgedBalances<DeSerializersT>, DeSerializersT>
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
  ): CustAiAgedBalancesApi<DeSerializersT> {
    return new CustAiAgedBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustAiAgedBalances;

  requestBuilder(): CustAiAgedBalancesRequestBuilder<DeSerializersT> {
    return new CustAiAgedBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustAiAgedBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustAiAgedBalances<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustAiAgedBalances<DeSerializersT>,
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
    typeof CustAiAgedBalances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustAiAgedBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGING_PERIOD_DEFINITION: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGING_PERIOD_5: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_4_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_PAYMENT_AMOUNT: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_REMAINING_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MST_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_5_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPUTED_TRANSACTION_BALANCE_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_1_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_DUE_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIRST_NONZERO_BALANCE_PERIOD: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_LIMIT_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_6_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPEN_ORDER_BALANCE_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_2_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_2: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_3_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_4: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_DUE_MST_SECONDARY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_6: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_LABEL_6: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_4: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGED_BY: EnumField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      DateTransactionDuedate,
      true,
      true
    >;
    AGING_PERIOD_LABEL_5: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_2: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_3: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_1: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_DATE: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUM_OPEN_INVOICES: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MST_SECONDARY_CURRENCY: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_NAME: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPUTED_TRANSACTION_COUNT: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGING_PERIOD_1: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_PAYMENT_DATE: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGING_PERIOD_3: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_SLIP_BALANCE_MST: OrderableEdmTypeField<
      CustAiAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustAiAgedBalances<DeSerializers>>;
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
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agingPeriodDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_DEFINITION: fieldBuilder.buildEdmTypeField(
          'AgingPeriodDefinition',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_5: fieldBuilder.buildEdmTypeField(
          'AgingPeriod5',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod4ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_4_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod4ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LastPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditRemainingMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_REMAINING_MST: fieldBuilder.buildEdmTypeField(
          'CreditRemainingMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mstCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MST_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MSTCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingPeriod5ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_5_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod5ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link disputedTransactionBalanceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPUTED_TRANSACTION_BALANCE_MST: fieldBuilder.buildEdmTypeField(
          'DisputedTransactionBalanceMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link agingPeriod1ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_1_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod1ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountDueMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DUE_MST: fieldBuilder.buildEdmTypeField(
          'AmountDueMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link firstNonzeroBalancePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NONZERO_BALANCE_PERIOD: fieldBuilder.buildEdmTypeField(
          'FirstNonzeroBalancePeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditLimitMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_MST: fieldBuilder.buildEdmTypeField(
          'CreditLimitMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod6ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_6_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod6ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link openOrderBalanceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_ORDER_BALANCE_MST: fieldBuilder.buildEdmTypeField(
          'OpenOrderBalanceMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod2ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_2_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod2ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_2: fieldBuilder.buildEdmTypeField(
          'AgingPeriod2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod3ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_3_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod3ReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_4: fieldBuilder.buildEdmTypeField(
          'AgingPeriod4',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountDueMstSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DUE_MST_SECONDARY: fieldBuilder.buildEdmTypeField(
          'AmountDueMstSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_6: fieldBuilder.buildEdmTypeField(
          'AgingPeriod6',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agingPeriodLabel6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_6: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingPeriodLabel4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_4: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGED_BY: fieldBuilder.buildEnumField(
          'AgedBy',
          DateTransactionDuedate,
          true
        ),
        /**
         * Static representation of the {@link agingPeriodLabel5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_5: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingPeriodLabel2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_2: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingPeriodLabel3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_3: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingPeriodLabel1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_LABEL_1: fieldBuilder.buildEdmTypeField(
          'AgingPeriodLabel1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_DATE: fieldBuilder.buildEdmTypeField(
          'AgingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link numOpenInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OPEN_INVOICES: fieldBuilder.buildEdmTypeField(
          'NumOpenInvoices',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mstSecondaryCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MST_SECONDARY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MSTSecondaryCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_NAME: fieldBuilder.buildEdmTypeField(
          'CustName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disputedTransactionCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPUTED_TRANSACTION_COUNT: fieldBuilder.buildEdmTypeField(
          'DisputedTransactionCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_1: fieldBuilder.buildEdmTypeField(
          'AgingPeriod1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'LastPaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agingPeriod3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_3: fieldBuilder.buildEdmTypeField(
          'AgingPeriod3',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingSlipBalanceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_BALANCE_MST: fieldBuilder.buildEdmTypeField(
          'PackingSlipBalanceMst',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustAiAgedBalances)
      };
    }

    return this._schema;
  }
}
