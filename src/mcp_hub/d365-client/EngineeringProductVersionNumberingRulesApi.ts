/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductVersionNumberingRules } from './EngineeringProductVersionNumberingRules';
import { EngineeringProductVersionNumberingRulesRequestBuilder } from './EngineeringProductVersionNumberingRulesRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { EngineeringProductVersionNumberingRuleListMembersApi } from './EngineeringProductVersionNumberingRuleListMembersApi';
import { EngChgVersionNumberRuleType } from './EngChgVersionNumberRuleType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringProductVersionNumberingRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
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
  ): EngineeringProductVersionNumberingRulesApi<DeSerializersT> {
    return new EngineeringProductVersionNumberingRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEngineeringVersionNumberingRuleListMembers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENGINEERING_VERSION_NUMBERING_RULE_LIST_MEMBERS: OneToManyLink<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRuleListMembersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      EngineeringProductVersionNumberingRuleListMembersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToManyLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      ),
      PRODUCT_ENGINEERING_VERSION_NUMBERING_RULE_LIST_MEMBERS:
        new OneToManyLink(
          'ProductEngineeringVersionNumberingRuleListMembers',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = EngineeringProductVersionNumberingRules;

  requestBuilder(): EngineeringProductVersionNumberingRulesRequestBuilder<DeSerializersT> {
    return new EngineeringProductVersionNumberingRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductVersionNumberingRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductVersionNumberingRules<DeSerializersT>,
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
    typeof EngineeringProductVersionNumberingRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductVersionNumberingRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RULE_NAME: OrderableEdmTypeField<
      EngineeringProductVersionNumberingRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_TYPE: EnumField<
      EngineeringProductVersionNumberingRules<DeSerializers>,
      DeSerializersT,
      EngChgVersionNumberRuleType,
      true,
      true
    >;
    AUTO_NUMBERING_FORMAT: OrderableEdmTypeField<
      EngineeringProductVersionNumberingRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEngineeringVersionNumberingRuleListMembers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENGINEERING_VERSION_NUMBERING_RULE_LIST_MEMBERS: OneToManyLink<
      EngineeringProductVersionNumberingRules<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRuleListMembersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductVersionNumberingRules<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link ruleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_TYPE: fieldBuilder.buildEnumField(
          'RuleType',
          EngChgVersionNumberRuleType,
          true
        ),
        /**
         * Static representation of the {@link autoNumberingFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_NUMBERING_FORMAT: fieldBuilder.buildEdmTypeField(
          'AutoNumberingFormat',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductVersionNumberingRules)
      };
    }

    return this._schema;
  }
}
