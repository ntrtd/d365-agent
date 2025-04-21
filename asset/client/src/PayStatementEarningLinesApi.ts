/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayStatementEarningLines } from './PayStatementEarningLines';
import { PayStatementEarningLinesRequestBuilder } from './PayStatementEarningLinesRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { WorkersApi } from './WorkersApi';
import { WorkerTaxRegionsApi } from './WorkerTaxRegionsApi';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { NoYes } from './NoYes';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
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
export class PayStatementEarningLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayStatementEarningLines<DeSerializersT>, DeSerializersT>
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
  ): PayStatementEarningLinesApi<DeSerializersT> {
    return new PayStatementEarningLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_REGION: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      WorkerTaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkerTaxRegionsApi<DeSerializersT>,
      PayStatementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      WORKER_TAX_REGION: new OneToOneLink(
        'WorkerTaxRegion',
        this,
        linkedApis[2]
      ),
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PayStatementEarningLines;

  requestBuilder(): PayStatementEarningLinesRequestBuilder<DeSerializersT> {
    return new PayStatementEarningLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayStatementEarningLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayStatementEarningLines<DeSerializersT>,
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
    typeof PayStatementEarningLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayStatementEarningLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPLOYER_CONTRIBUTION: EnumField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EARNINGS_DATE: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_LEGAL_ENTITY: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OVERRIDDEN: EnumField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_BENEFIT_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_STATEMENT_LINE_SOURCE: EnumField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      PayrollPayStatementLineSource,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSED_PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TO_REMOVE: EnumField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EARNING_RATE: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GENERAL_LIABILITY_INSURANCE_BENEFIT_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_TAX_REGION_LOCATION_ID: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED_PAY_STATEMENT_LINE_NUM: OrderableEdmTypeField<
      PayStatementEarningLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_REGION: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      WorkerTaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementEarningLines<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayStatementEarningLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
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
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link employerContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_CONTRIBUTION: fieldBuilder.buildEnumField(
          'EmployerContribution',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link earningsDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNINGS_DATE: fieldBuilder.buildEdmTypeField(
          'EarningsDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountingDistributionLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OVERRIDDEN: fieldBuilder.buildEnumField(
          'LineOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link compensationBenefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'CompensationBenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          true
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
         * Static representation of the {@link payStatementLineSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_LINE_SOURCE: fieldBuilder.buildEnumField(
          'PayStatementLineSource',
          PayrollPayStatementLineSource,
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversedPayStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReversedPayStatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineToRemove} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TO_REMOVE: fieldBuilder.buildEnumField(
          'LineToRemove',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link earningRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_RATE: fieldBuilder.buildEdmTypeField(
          'EarningRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link generalLiabilityInsuranceBenefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LIABILITY_INSURANCE_BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'GeneralLiabilityInsuranceBenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerTaxRegionLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TAX_REGION_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WorkerTaxRegionLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reversedPayStatementLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_PAY_STATEMENT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ReversedPayStatementLineNum',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayStatementEarningLines)
      };
    }

    return this._schema;
  }
}
