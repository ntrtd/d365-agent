/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyTierRules } from './RetailLoyaltyTierRules';
import { RetailLoyaltyTierRulesRequestBuilder } from './RetailLoyaltyTierRulesRequestBuilder';
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
export class RetailLoyaltyTierRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyaltyTierRules<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyTierRulesApi<DeSerializersT> {
    return new RetailLoyaltyTierRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyTierRules;

  requestBuilder(): RetailLoyaltyTierRulesRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyTierRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyTierRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyTierRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyTierRules<DeSerializersT>,
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
    typeof RetailLoyaltyTierRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyTierRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_NAME: OrderableEdmTypeField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EVALUATION_DATE_INTERVAL: OrderableEdmTypeField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIN_VALUE: OrderableEdmTypeField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POOL_RELATED_CARDS: EnumField<
      RetailLoyaltyTierRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyTierRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rewardPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_ID: fieldBuilder.buildEdmTypeField(
          'RewardPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link evaluationDateInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVALUATION_DATE_INTERVAL: fieldBuilder.buildEdmTypeField(
          'EvaluationDateInterval',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'MinValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link poolRelatedCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_RELATED_CARDS: fieldBuilder.buildEnumField(
          'PoolRelatedCards',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyTierRules)
      };
    }

    return this._schema;
  }
}
