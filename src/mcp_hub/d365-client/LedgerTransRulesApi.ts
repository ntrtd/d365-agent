/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerTransRules } from './LedgerTransRules';
import { LedgerTransRulesRequestBuilder } from './LedgerTransRulesRequestBuilder';
import { RtslNoneNoYes } from './RtslNoneNoYes';
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
export class LedgerTransRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerTransRules<DeSerializersT>, DeSerializersT>
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
  ): LedgerTransRulesApi<DeSerializersT> {
    return new LedgerTransRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerTransRules;

  requestBuilder(): LedgerTransRulesRequestBuilder<DeSerializersT> {
    return new LedgerTransRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerTransRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerTransRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LedgerTransRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LedgerTransRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerTransRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DIMENSION_RULE_GROUP_ID: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDITING: EnumField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      RtslNoneNoYes,
      true,
      true
    >;
    TO_ACCOUNT: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_NUM: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_RULE_GROUP_ID: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_NUM_OFFSET: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RULE_GROUP_ID: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_MAIN_ACCOUNT_NUM: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      LedgerTransRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LedgerTransRules<DeSerializers>>;
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
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link dimensionRuleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_RULE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DimensionRuleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crediting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITING: fieldBuilder.buildEnumField(
          'Crediting',
          RtslNoneNoYes,
          true
        ),
        /**
         * Static representation of the {@link toAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ToAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'MainAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyRuleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_RULE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyRuleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountNumOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_NUM_OFFSET: fieldBuilder.buildEdmTypeField(
          'MainAccountNumOffset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ruleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RuleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toMainAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_MAIN_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'ToMainAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerTransRules)
      };
    }

    return this._schema;
  }
}
