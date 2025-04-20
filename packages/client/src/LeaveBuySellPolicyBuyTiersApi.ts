/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveBuySellPolicyBuyTiers } from './LeaveBuySellPolicyBuyTiers';
import { LeaveBuySellPolicyBuyTiersRequestBuilder } from './LeaveBuySellPolicyBuyTiersRequestBuilder';
import { EarningCodesApi } from './EarningCodesApi';
import { LeaveTypesApi } from './LeaveTypesApi';
import { LeaveBuySellPoliciesApi } from './LeaveBuySellPoliciesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveBuySellPolicyBuyTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaveBuySellPolicyBuyTiers<DeSerializersT>, DeSerializersT>
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
  ): LeaveBuySellPolicyBuyTiersApi<DeSerializersT> {
    return new LeaveBuySellPolicyBuyTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EarningCodesApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>,
      LeaveBuySellPoliciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EARNING_CODE: new OneToOneLink('EarningCode', this, linkedApis[0]),
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[1]),
      LEAVE_BUY_SELL_POLICY: new OneToOneLink(
        'LeaveBuySellPolicy',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LeaveBuySellPolicyBuyTiers;

  requestBuilder(): LeaveBuySellPolicyBuyTiersRequestBuilder<DeSerializersT> {
    return new LeaveBuySellPolicyBuyTiersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveBuySellPolicyBuyTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveBuySellPolicyBuyTiers<DeSerializersT>,
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
    typeof LeaveBuySellPolicyBuyTiers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveBuySellPolicyBuyTiers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_ID: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTHS_OF_SERVICE: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_FULL_TIME_EQUIVALENCY: EnumField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_AMOUNT: OrderableEdmTypeField<
      LeaveBuySellPolicyBuyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY: OneToOneLink<
      LeaveBuySellPolicyBuyTiers<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveBuySellPolicyBuyTiers<DeSerializers>>;
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
         * Static representation of the {@link policyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_ID: fieldBuilder.buildEdmTypeField(
          'PolicyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link monthsOfService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_OF_SERVICE: fieldBuilder.buildEdmTypeField(
          'MonthsOfService',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useFullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FULL_TIME_EQUIVALENCY: fieldBuilder.buildEnumField(
          'UseFullTimeEquivalency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link maximumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveBuySellPolicyBuyTiers)
      };
    }

    return this._schema;
  }
}
