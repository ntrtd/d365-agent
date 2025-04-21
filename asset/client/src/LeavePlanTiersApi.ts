/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeavePlanTiers } from './LeavePlanTiers';
import { LeavePlanTiersRequestBuilder } from './LeavePlanTiersRequestBuilder';
import { LeavePlansApi } from './LeavePlansApi';
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
export class LeavePlanTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeavePlanTiers<DeSerializersT>, DeSerializersT>
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
  ): LeavePlanTiersApi<DeSerializersT> {
    return new LeavePlanTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeavePlanTiers<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [LeavePlansApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PLAN: new OneToOneLink('Plan', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = LeavePlanTiers;

  requestBuilder(): LeavePlanTiersRequestBuilder<DeSerializersT> {
    return new LeavePlanTiersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeavePlanTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeavePlanTiers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeavePlanTiers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeavePlanTiers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeavePlanTiers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIER_NUMBER: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRANT: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_CARRYOVER: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_BALANCE: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUAL_AMOUNT: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS_OF_SERVICE: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_BALANCE: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUALIFYING_AMOUNT: OrderableEdmTypeField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_FULL_TIME_EQUIVALENCY: EnumField<
      LeavePlanTiers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeavePlanTiers<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeavePlanTiers<DeSerializers>>;
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
         * Static representation of the {@link leavePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'LeavePlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tierNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TierNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT: fieldBuilder.buildEdmTypeField('Grant', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link maximumCarryover} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CARRYOVER: fieldBuilder.buildEdmTypeField(
          'MaximumCarryover',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BALANCE: fieldBuilder.buildEdmTypeField(
          'MinimumBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accrualAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccrualAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link maximumBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BALANCE: fieldBuilder.buildEdmTypeField(
          'MaximumBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qualifyingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFYING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QualifyingAmount',
          'Edm.Decimal',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeavePlanTiers)
      };
    }

    return this._schema;
  }
}
