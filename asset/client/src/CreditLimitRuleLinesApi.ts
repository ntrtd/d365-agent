/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditLimitRuleLines } from './CreditLimitRuleLines';
import { CreditLimitRuleLinesRequestBuilder } from './CreditLimitRuleLinesRequestBuilder';
import { CredManComparisonOperator } from './CredManComparisonOperator';
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
export class CreditLimitRuleLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CreditLimitRuleLines<DeSerializersT>, DeSerializersT>
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
  ): CreditLimitRuleLinesApi<DeSerializersT> {
    return new CreditLimitRuleLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditLimitRuleLines;

  requestBuilder(): CreditLimitRuleLinesRequestBuilder<DeSerializersT> {
    return new CreditLimitRuleLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditLimitRuleLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CreditLimitRuleLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditLimitRuleLines<DeSerializersT>,
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
    typeof CreditLimitRuleLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditLimitRuleLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_RISK_GROUP_ID: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_CURRENCY_CODE: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPARISON_VALUE: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPARISON_OPERATOR: EnumField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      CredManComparisonOperator,
      true,
      true
    >;
    CREDIT_MAX: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RISK_SCORE_GROUP_ID: OrderableEdmTypeField<
      CreditLimitRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CreditLimitRuleLines<DeSerializers>>;
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
         * Static representation of the {@link ruleRiskGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_RISK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RuleRiskGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ruleCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'RuleCurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link comparisonValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPARISON_VALUE: fieldBuilder.buildEdmTypeField(
          'ComparisonValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comparisonOperator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPARISON_OPERATOR: fieldBuilder.buildEnumField(
          'ComparisonOperator',
          CredManComparisonOperator,
          true
        ),
        /**
         * Static representation of the {@link creditMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_MAX: fieldBuilder.buildEdmTypeField(
          'CreditMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link riskScoreGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_SCORE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RiskScoreGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditLimitRuleLines)
      };
    }

    return this._schema;
  }
}
