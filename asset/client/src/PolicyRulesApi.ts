/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyRules } from './PolicyRules';
import { PolicyRulesRequestBuilder } from './PolicyRulesRequestBuilder';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import { TrvPolicyViolationLevel } from './TrvPolicyViolationLevel';
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
export class PolicyRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyRules<DeSerializersT>, DeSerializersT>
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
  ): PolicyRulesApi<DeSerializersT> {
    return new PolicyRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyRules;

  requestBuilder(): PolicyRulesRequestBuilder<DeSerializersT> {
    return new PolicyRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PolicyRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PolicyRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PolicyRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_TYPE: EnumField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    POLICY_RULE_NAME: OrderableEdmTypeField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTION: EnumField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      TrvPolicyViolationLevel,
      true,
      true
    >;
    EXPRESSION_ID: OrderableEdmTypeField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCLUDE_PARENT_RULE: EnumField<
      PolicyRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link policyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TYPE: fieldBuilder.buildEnumField(
          'PolicyType',
          SysPolicyTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link policyRuleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyRuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField(
          'Action',
          TrvPolicyViolationLevel,
          true
        ),
        /**
         * Static representation of the {@link expressionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPRESSION_ID: fieldBuilder.buildEdmTypeField(
          'ExpressionId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link includeParentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PARENT_RULE: fieldBuilder.buildEnumField(
          'IncludeParentRule',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyRules)
      };
    }

    return this._schema;
  }
}
