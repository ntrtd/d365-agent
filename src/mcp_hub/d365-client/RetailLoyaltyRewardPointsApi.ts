/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyRewardPoints } from './RetailLoyaltyRewardPoints';
import { RetailLoyaltyRewardPointsRequestBuilder } from './RetailLoyaltyRewardPointsRequestBuilder';
import { RetailLoyaltyRewardPointType } from './RetailLoyaltyRewardPointType';
import { NoYes } from './NoYes';
import { RetailDayMonthYear } from './RetailDayMonthYear';
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
export class RetailLoyaltyRewardPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailLoyaltyRewardPoints<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyRewardPointsApi<DeSerializersT> {
    return new RetailLoyaltyRewardPointsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyRewardPoints;

  requestBuilder(): RetailLoyaltyRewardPointsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyRewardPointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyRewardPoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyRewardPoints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyRewardPoints<DeSerializersT>,
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
    typeof RetailLoyaltyRewardPoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyRewardPoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_LOYALTY_REWARD_POINTS: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VESTING_TIME_VALUE: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REDEEM_RANKING: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPIRATION_TIME_VALUE: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REWARD_POINT_TYPE: EnumField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardPointType,
      true,
      true
    >;
    REDEEMABLE: EnumField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REWARD_POINT_CURRENCY: OrderableEdmTypeField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VESTING_TIME_UNIT: EnumField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      RetailDayMonthYear,
      true,
      true
    >;
    EXPIRATION_TIME_UNIT: EnumField<
      RetailLoyaltyRewardPoints<DeSerializers>,
      DeSerializersT,
      RetailDayMonthYear,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyRewardPoints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link maximumLoyaltyRewardPoints} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOYALTY_REWARD_POINTS: fieldBuilder.buildEdmTypeField(
          'MaximumLoyaltyRewardPoints',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vestingTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESTING_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'VestingTimeValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link redeemRanking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDEEM_RANKING: fieldBuilder.buildEdmTypeField(
          'RedeemRanking',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expirationTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpirationTimeValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link rewardPointType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_TYPE: fieldBuilder.buildEnumField(
          'RewardPointType',
          RetailLoyaltyRewardPointType,
          true
        ),
        /**
         * Static representation of the {@link redeemable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDEEMABLE: fieldBuilder.buildEnumField('Redeemable', NoYes, true),
        /**
         * Static representation of the {@link rewardPointCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'RewardPointCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vestingTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESTING_TIME_UNIT: fieldBuilder.buildEnumField(
          'VestingTimeUnit',
          RetailDayMonthYear,
          true
        ),
        /**
         * Static representation of the {@link expirationTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_TIME_UNIT: fieldBuilder.buildEnumField(
          'ExpirationTimeUnit',
          RetailDayMonthYear,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyRewardPoints)
      };
    }

    return this._schema;
  }
}
