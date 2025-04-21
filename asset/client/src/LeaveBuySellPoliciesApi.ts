/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveBuySellPolicies } from './LeaveBuySellPolicies';
import { LeaveBuySellPoliciesRequestBuilder } from './LeaveBuySellPoliciesRequestBuilder';
import { LeaveBuySellPolicySellTiersApi } from './LeaveBuySellPolicySellTiersApi';
import { LeaveBuySellRequestsApi } from './LeaveBuySellRequestsApi';
import { LeaveBuySellPolicyBuyTiersApi } from './LeaveBuySellPolicyBuyTiersApi';
import { LeaveBuySellPolicyTypeCategory } from './LeaveBuySellPolicyTypeCategory';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveBuySellPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveBuySellPolicies<DeSerializersT>, DeSerializersT>
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
  ): LeaveBuySellPoliciesApi<DeSerializersT> {
    return new LeaveBuySellPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToOneLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_REQUEST: OneToManyLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToOneLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveBuySellPolicySellTiersApi<DeSerializersT>,
      LeaveBuySellRequestsApi<DeSerializersT>,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_BUY_SELL_POLICY_SELL_TIER: new OneToOneLink(
        'LeaveBuySellPolicySellTier',
        this,
        linkedApis[0]
      ),
      LEAVE_BUY_SELL_REQUEST: new OneToManyLink(
        'LeaveBuySellRequest',
        this,
        linkedApis[1]
      ),
      LEAVE_BUY_SELL_POLICY_BUY_TIER: new OneToOneLink(
        'LeaveBuySellPolicyBuyTier',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LeaveBuySellPolicies;

  requestBuilder(): LeaveBuySellPoliciesRequestBuilder<DeSerializersT> {
    return new LeaveBuySellPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveBuySellPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveBuySellPolicies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveBuySellPolicies<DeSerializersT>,
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
    typeof LeaveBuySellPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveBuySellPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_AMOUNT_SELL: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY: EnumField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      LeaveBuySellPolicyTypeCategory,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USE_FULL_TIME_EQUIVALENCY_SELL: EnumField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_AMOUNT_BUY: OrderableEdmTypeField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_FULL_TIME_EQUIVALENCY_BUY: EnumField<
      LeaveBuySellPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToOneLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_REQUEST: OneToManyLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToOneLink<
      LeaveBuySellPolicies<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveBuySellPolicies<DeSerializers>>;
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
         * Static representation of the {@link policy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY: fieldBuilder.buildEdmTypeField('Policy', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumAmountSell} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_SELL: fieldBuilder.buildEdmTypeField(
          'MaximumAmount_Sell',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          LeaveBuySellPolicyTypeCategory,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link useFullTimeEquivalencySell} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FULL_TIME_EQUIVALENCY_SELL: fieldBuilder.buildEnumField(
          'UseFullTimeEquivalency_Sell',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link maximumAmountBuy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_BUY: fieldBuilder.buildEdmTypeField(
          'MaximumAmount_Buy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useFullTimeEquivalencyBuy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FULL_TIME_EQUIVALENCY_BUY: fieldBuilder.buildEnumField(
          'UseFullTimeEquivalency_Buy',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveBuySellPolicies)
      };
    }

    return this._schema;
  }
}
