/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiagnosticsValidationRules } from './DiagnosticsValidationRules';
import { DiagnosticsValidationRulesRequestBuilder } from './DiagnosticsValidationRulesRequestBuilder';
import { DiagnosticsArea } from './DiagnosticsArea';
import { DiagnosticsRuleStatus } from './DiagnosticsRuleStatus';
import { DiagnosticsRunFrequency } from './DiagnosticsRunFrequency';
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
export class DiagnosticsValidationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DiagnosticsValidationRules<DeSerializersT>, DeSerializersT>
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
  ): DiagnosticsValidationRulesApi<DeSerializersT> {
    return new DiagnosticsValidationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiagnosticsValidationRules;

  requestBuilder(): DiagnosticsValidationRulesRequestBuilder<DeSerializersT> {
    return new DiagnosticsValidationRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiagnosticsValidationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiagnosticsValidationRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiagnosticsValidationRules<DeSerializersT>,
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
    typeof DiagnosticsValidationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiagnosticsValidationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLASS_NAME: OrderableEdmTypeField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AREA: EnumField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      DiagnosticsArea,
      true,
      true
    >;
    FRAMEWORK_VERSION: OrderableEdmTypeField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: EnumField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      DiagnosticsRuleStatus,
      true,
      true
    >;
    RULE_DESCRIPTION: OrderableEdmTypeField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RUN_FREQUENCY: EnumField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      DiagnosticsRunFrequency,
      true,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      DiagnosticsValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DiagnosticsValidationRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link className} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ClassName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link area} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA: fieldBuilder.buildEnumField('Area', DiagnosticsArea, true),
        /**
         * Static representation of the {@link frameworkVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRAMEWORK_VERSION: fieldBuilder.buildEdmTypeField(
          'FrameworkVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          DiagnosticsRuleStatus,
          true
        ),
        /**
         * Static representation of the {@link ruleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RuleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link runFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_FREQUENCY: fieldBuilder.buildEnumField(
          'RunFrequency',
          DiagnosticsRunFrequency,
          true
        ),
        /**
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiagnosticsValidationRules)
      };
    }

    return this._schema;
  }
}
