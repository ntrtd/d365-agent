/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeSeverityRules } from './EngineeringChangeSeverityRules';
import { EngineeringChangeSeverityRulesRequestBuilder } from './EngineeringChangeSeverityRulesRequestBuilder';
import { EngineeringChangeSeverityRuleSetsApi } from './EngineeringChangeSeverityRuleSetsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeSeverityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeSeverityRules<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeSeverityRulesApi<DeSerializersT> {
    return new EngineeringChangeSeverityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverityRuleSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULE_SET: OneToOneLink<
      EngineeringChangeSeverityRules<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRuleSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringChangeSeverityRuleSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_SEVERITY_RULE_SET: new OneToOneLink(
        'EngineeringChangeSeverityRuleSet',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeSeverityRules;

  requestBuilder(): EngineeringChangeSeverityRulesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeSeverityRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeSeverityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeSeverityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeSeverityRules<DeSerializersT>,
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
    typeof EngineeringChangeSeverityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeSeverityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeSeverityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEVERITY_NAME: OrderableEdmTypeField<
      EngineeringChangeSeverityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_SET_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeSeverityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RULE_CLASS_NAME: OrderableEdmTypeField<
      EngineeringChangeSeverityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverityRuleSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULE_SET: OneToOneLink<
      EngineeringChangeSeverityRules<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRuleSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeSeverityRules<DeSerializers>>;
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
         * Static representation of the {@link severityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY_NAME: fieldBuilder.buildEdmTypeField(
          'SeverityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ruleSetSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_SET_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RuleSetSequenceNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ruleClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'RuleClassName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeSeverityRules)
      };
    }

    return this._schema;
  }
}
