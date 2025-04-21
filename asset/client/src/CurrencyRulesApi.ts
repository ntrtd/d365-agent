/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyRules } from './CurrencyRules';
import { CurrencyRulesRequestBuilder } from './CurrencyRulesRequestBuilder';
import { RtslCurrencyAction } from './RtslCurrencyAction';
import { RtslCurrencyRate } from './RtslCurrencyRate';
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
export class CurrencyRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CurrencyRules<DeSerializersT>, DeSerializersT>
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
  ): CurrencyRulesApi<DeSerializersT> {
    return new CurrencyRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CurrencyRules;

  requestBuilder(): CurrencyRulesRequestBuilder<DeSerializersT> {
    return new CurrencyRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CurrencyRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CurrencyRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CurrencyRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CurrencyRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CurrencyRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_GROUP: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_RULE_GROUP: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_INDEX_ID: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_ACTION: EnumField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      RtslCurrencyAction,
      true,
      true
    >;
    SECONDARY_INDEX_ID: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MST_ACTION: EnumField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      RtslCurrencyAction,
      true,
      true
    >;
    RATE_METHOD: EnumField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      RtslCurrencyRate,
      true,
      true
    >;
    MST_INDEX_ID: OrderableEdmTypeField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_ACTION: EnumField<
      CurrencyRules<DeSerializers>,
      DeSerializersT,
      RtslCurrencyAction,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CurrencyRules<DeSerializers>>;
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
         * Static representation of the {@link ruleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_GROUP: fieldBuilder.buildEdmTypeField(
          'RuleGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currencyRuleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_RULE_GROUP: fieldBuilder.buildEdmTypeField(
          'CurrencyRuleGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currencyIndexId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_INDEX_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyIndexId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ACTION: fieldBuilder.buildEnumField(
          'CurrencyAction',
          RtslCurrencyAction,
          true
        ),
        /**
         * Static representation of the {@link secondaryIndexId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_INDEX_ID: fieldBuilder.buildEdmTypeField(
          'SecondaryIndexId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mstAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MST_ACTION: fieldBuilder.buildEnumField(
          'MSTAction',
          RtslCurrencyAction,
          true
        ),
        /**
         * Static representation of the {@link rateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_METHOD: fieldBuilder.buildEnumField(
          'RateMethod',
          RtslCurrencyRate,
          true
        ),
        /**
         * Static representation of the {@link mstIndexId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MST_INDEX_ID: fieldBuilder.buildEdmTypeField(
          'MSTIndexId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondaryAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_ACTION: fieldBuilder.buildEnumField(
          'SecondaryAction',
          RtslCurrencyAction,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CurrencyRules)
      };
    }

    return this._schema;
  }
}
