/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayStatementBenefitLines } from './PayStatementBenefitLines';
import { PayStatementBenefitLinesRequestBuilder } from './PayStatementBenefitLinesRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { BenefitsApi } from './BenefitsApi';
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
export class PayStatementBenefitLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayStatementBenefitLines<DeSerializersT>, DeSerializersT>
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
  ): PayStatementBenefitLinesApi<DeSerializersT> {
    return new PayStatementBenefitLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementBenefitLines<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayStatementBenefitLines<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayStatementHeadersApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[0]
      ),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayStatementBenefitLines;

  requestBuilder(): PayStatementBenefitLinesRequestBuilder<DeSerializersT> {
    return new PayStatementBenefitLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayStatementBenefitLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayStatementBenefitLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayStatementBenefitLines<DeSerializersT>,
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
    typeof PayStatementBenefitLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayStatementBenefitLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_LOCKED: EnumField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PREMIUM_EARNING_AMOUNT: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSED_PAY_STATEMENT_LINE_NUM: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSED_PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_STATEMENT_LINE_SOURCE: EnumField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      PayrollPayStatementLineSource,
      true,
      true
    >;
    LINE_TO_REMOVE: EnumField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREMIUM_EARNING_HOURS: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_ID: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_CONTRIBUTION: EnumField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_EARNING_AMOUNT: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_OVERRIDDEN: EnumField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_EARNING_HOURS: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_LEGAL_ENTITY: OrderableEdmTypeField<
      PayStatementBenefitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementBenefitLines<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayStatementBenefitLines<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayStatementBenefitLines<DeSerializers>>;
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
         * Static representation of the {@link lineLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_LOCKED: fieldBuilder.buildEnumField('LineLocked', NoYes, true),
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
         * Static representation of the {@link premiumEarningAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PremiumEarningAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link reversedPayStatementLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_PAY_STATEMENT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ReversedPayStatementLineNum',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
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
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
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
         * Static representation of the {@link lineToRemove} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TO_REMOVE: fieldBuilder.buildEnumField(
          'LineToRemove',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link premiumEarningHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_HOURS: fieldBuilder.buildEdmTypeField(
          'PremiumEarningHours',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link employerContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_CONTRIBUTION: fieldBuilder.buildEnumField(
          'EmployerContribution',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link baseEarningAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_EARNING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseEarningAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link baseEarningHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_EARNING_HOURS: fieldBuilder.buildEdmTypeField(
          'BaseEarningHours',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayStatementBenefitLines)
      };
    }

    return this._schema;
  }
}
