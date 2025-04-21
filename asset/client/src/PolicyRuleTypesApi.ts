/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyRuleTypes } from './PolicyRuleTypes';
import { PolicyRuleTypesRequestBuilder } from './PolicyRuleTypesRequestBuilder';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PolicyRuleTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyRuleTypes<DeSerializersT>, DeSerializersT>
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
  ): PolicyRuleTypesApi<DeSerializersT> {
    return new PolicyRuleTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyRuleTypes;

  requestBuilder(): PolicyRuleTypesRequestBuilder<DeSerializersT> {
    return new PolicyRuleTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyRuleTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyRuleTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PolicyRuleTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PolicyRuleTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyRuleTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_TYPE: EnumField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_PARENT_RULE: EnumField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRECEDENCE_SUPPORTED: EnumField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyRuleTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link isPrecedenceSupported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRECEDENCE_SUPPORTED: fieldBuilder.buildEnumField(
          'IsPrecedenceSupported',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyRuleTypes)
      };
    }

    return this._schema;
  }
}
