/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementBlockExclusionRules } from './CreditManagementBlockExclusionRules';
import { CreditManagementBlockExclusionRulesRequestBuilder } from './CreditManagementBlockExclusionRulesRequestBuilder';
import { CredManBlockExclusionRuleType } from './CredManBlockExclusionRuleType';
import { CredManRuleType } from './CredManRuleType';
import { TableGroupAll } from './TableGroupAll';
import { CredManBlockExclusionValueType } from './CredManBlockExclusionValueType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CreditManagementBlockExclusionRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CreditManagementBlockExclusionRules<DeSerializersT>,
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
  ): CreditManagementBlockExclusionRulesApi<DeSerializersT> {
    return new CreditManagementBlockExclusionRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementBlockExclusionRules;

  requestBuilder(): CreditManagementBlockExclusionRulesRequestBuilder<DeSerializersT> {
    return new CreditManagementBlockExclusionRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementBlockExclusionRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementBlockExclusionRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementBlockExclusionRules<DeSerializersT>,
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
    typeof CreditManagementBlockExclusionRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementBlockExclusionRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_ID: EnumField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      CredManBlockExclusionRuleType,
      true,
      true
    >;
    RULE_TYPE: EnumField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      CredManRuleType,
      true,
      true
    >;
    TABLE_GROUP_ALL: EnumField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    CUST_RELATION: OrderableEdmTypeField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RISK_GROUP_ID: OrderableEdmTypeField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_TYPE: EnumField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      CredManBlockExclusionValueType,
      true,
      true
    >;
    RELEASE_SALES_ORDER: EnumField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_THRESHOLD: OrderableEdmTypeField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRACE_VALUE: OrderableEdmTypeField<
      CreditManagementBlockExclusionRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CreditManagementBlockExclusionRules<DeSerializers>>;
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
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEnumField(
          'RuleId',
          CredManBlockExclusionRuleType,
          true
        ),
        /**
         * Static representation of the {@link ruleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_TYPE: fieldBuilder.buildEnumField(
          'RuleType',
          CredManRuleType,
          true
        ),
        /**
         * Static representation of the {@link tableGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_GROUP_ALL: fieldBuilder.buildEnumField(
          'TableGroupAll',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link custRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_RELATION: fieldBuilder.buildEdmTypeField(
          'CustRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link riskGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RiskGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_TYPE: fieldBuilder.buildEnumField(
          'ValueType',
          CredManBlockExclusionValueType,
          true
        ),
        /**
         * Static representation of the {@link releaseSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_SALES_ORDER: fieldBuilder.buildEnumField(
          'ReleaseSalesOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CreditLimitThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link graceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRACE_VALUE: fieldBuilder.buildEdmTypeField(
          'GraceValue',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditManagementBlockExclusionRules)
      };
    }

    return this._schema;
  }
}
