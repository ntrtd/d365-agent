/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyViolationsCache } from './PolicyViolationsCache';
import { PolicyViolationsCacheRequestBuilder } from './PolicyViolationsCacheRequestBuilder';
import { TrvPolicyViolationLevel } from './TrvPolicyViolationLevel';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
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
export class PolicyViolationsCacheApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyViolationsCache<DeSerializersT>, DeSerializersT>
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
  ): PolicyViolationsCacheApi<DeSerializersT> {
    return new PolicyViolationsCacheApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyViolationsCache;

  requestBuilder(): PolicyViolationsCacheRequestBuilder<DeSerializersT> {
    return new PolicyViolationsCacheRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyViolationsCache<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyViolationsCache<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PolicyViolationsCache<DeSerializersT>,
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
    typeof PolicyViolationsCache,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyViolationsCache,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VIOLATIONS_CACHE_ID: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_RULE_VALID_FROM: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SAVE_DATE_TIME: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POLICY_VIOLATION_LEVEL: EnumField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      TrvPolicyViolationLevel,
      true,
      true
    >;
    HEADER_LEGAL_ENTITY: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_TYPE: EnumField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_ID: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIOLATION_DATE: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POLICY_RULE_TYPE_NAME: OrderableEdmTypeField<
      PolicyViolationsCache<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyViolationsCache<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link violationsCacheId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIOLATIONS_CACHE_ID: fieldBuilder.buildEdmTypeField(
          'ViolationsCacheId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.String', true),
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
         * Static representation of the {@link policyRuleValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PolicyRuleValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link saveDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SaveDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link policyViolationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_LEVEL: fieldBuilder.buildEnumField(
          'PolicyViolationLevel',
          TrvPolicyViolationLevel,
          true
        ),
        /**
         * Static representation of the {@link headerLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'HeaderLegalEntity',
          'Edm.String',
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
         * Static representation of the {@link policyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TYPE: fieldBuilder.buildEnumField(
          'PolicyType',
          SysPolicyTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'ParentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ID: fieldBuilder.buildEdmTypeField(
          'HeaderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link violationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIOLATION_DATE: fieldBuilder.buildEdmTypeField(
          'ViolationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link policyRuleTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyRuleTypeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyViolationsCache)
      };
    }

    return this._schema;
  }
}
