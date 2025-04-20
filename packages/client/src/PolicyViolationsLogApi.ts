/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyViolationsLog } from './PolicyViolationsLog';
import { PolicyViolationsLogRequestBuilder } from './PolicyViolationsLogRequestBuilder';
import { TrvWorkflowAction } from './TrvWorkflowAction';
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
export class PolicyViolationsLogApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyViolationsLog<DeSerializersT>, DeSerializersT>
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
  ): PolicyViolationsLogApi<DeSerializersT> {
    return new PolicyViolationsLogApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyViolationsLog;

  requestBuilder(): PolicyViolationsLogRequestBuilder<DeSerializersT> {
    return new PolicyViolationsLogRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyViolationsLog<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyViolationsLog<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PolicyViolationsLog<DeSerializersT>,
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
    typeof PolicyViolationsLog,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyViolationsLog,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VIOLATIONS_LOG_ID: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION: EnumField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      TrvWorkflowAction,
      true,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_RULE_VALID_FROM: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HEADER_LEGAL_ENTITY: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_TYPE: EnumField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    HEADER_ID: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIOLATION_DATE: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POLICY_RULE_TYPE_NAME: OrderableEdmTypeField<
      PolicyViolationsLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyViolationsLog<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link violationsLogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIOLATIONS_LOG_ID: fieldBuilder.buildEdmTypeField(
          'ViolationsLogId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.String', true),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField('Action', TrvWorkflowAction, true),
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
        ALL_FIELDS: new AllFields('*', PolicyViolationsLog)
      };
    }

    return this._schema;
  }
}
