/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustAgedBalances } from './CustAgedBalances';
import { CustAgedBalancesRequestBuilder } from './CustAgedBalancesRequestBuilder';
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
export class CustAgedBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustAgedBalances<DeSerializersT>, DeSerializersT>
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
  ): CustAgedBalancesApi<DeSerializersT> {
    return new CustAgedBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustAgedBalances;

  requestBuilder(): CustAgedBalancesRequestBuilder<DeSerializersT> {
    return new CustAgedBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustAgedBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustAgedBalances<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustAgedBalances<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustAgedBalances, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustAgedBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGING_PERIOD_DEFINITION: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUM_OF_AMOUNT_DUE_MST: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_4_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_NAME: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_DATE: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGING_PERIOD_3_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_6: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_5_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OPEN_INVOICES: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGING_PERIOD_3: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGED_BY: EnumField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      DateTransactionDuedate,
      true,
      true
    >;
    AGING_PERIOD_4: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_PAYMENT_AMOUNT: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_1_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_1: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_6_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_LABEL_6: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_4: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_PAYMENT_DATE: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGING_PERIOD_LABEL_5: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_2: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_3: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_LABEL_1: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGING_PERIOD_2: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MST_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NONZERO_BALANCE_PERIOD: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGING_PERIOD_2_REPORTING_CURRENCY: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGING_PERIOD_5: OrderableEdmTypeField<
      CustAgedBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustAgedBalances<DeSerializers>>;
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
         * Static representation of the {@link agingPeriodDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_DEFINITION: fieldBuilder.buildEdmTypeField(
          'AgingPeriodDefinition',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link sumOfAmountDueMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_OF_AMOUNT_DUE_MST: fieldBuilder.buildEdmTypeField(
          'SumOfAmountDueMst',
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
         * Static representation of the {@link custName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_NAME: fieldBuilder.buildEdmTypeField(
          'CustName',
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
         * Static representation of the {@link agingPeriod3ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_3_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod3ReportingCurrency',
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
         * Static representation of the {@link agingPeriod5ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_5_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod5ReportingCurrency',
          'Edm.Decimal',
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
         * Static representation of the {@link agingPeriod3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_3: fieldBuilder.buildEdmTypeField(
          'AgingPeriod3',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link agingPeriod4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_4: fieldBuilder.buildEdmTypeField(
          'AgingPeriod4',
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
         * Static representation of the {@link agingPeriod1ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_1_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod1ReportingCurrency',
          'Edm.Decimal',
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
         * Static representation of the {@link agingPeriod6ReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_6_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AgingPeriod6ReportingCurrency',
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
         * Static representation of the {@link lastPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'LastPaymentDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link agingPeriod2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_2: fieldBuilder.buildEdmTypeField(
          'AgingPeriod2',
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
         * Static representation of the {@link firstNonzeroBalancePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NONZERO_BALANCE_PERIOD: fieldBuilder.buildEdmTypeField(
          'FirstNonzeroBalancePeriod',
          'Edm.Int32',
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
         * Static representation of the {@link agingPeriod5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_5: fieldBuilder.buildEdmTypeField(
          'AgingPeriod5',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustAgedBalances)
      };
    }

    return this._schema;
  }
}
