/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeavePlanTiersV2 } from './LeavePlanTiersV2';
import { LeavePlanTiersV2RequestBuilder } from './LeavePlanTiersV2RequestBuilder';
import { LeavePlansV2Api } from './LeavePlansV2Api';
import { LeaveTypesApi } from './LeaveTypesApi';
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
export class LeavePlanTiersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeavePlanTiersV2<DeSerializersT>, DeSerializersT>
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
  ): LeavePlanTiersV2Api<DeSerializersT> {
    return new LeavePlanTiersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeavePlanTiersV2<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeavePlanTiersV2<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LeavePlansV2Api<DeSerializersT>, LeaveTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PLAN: new OneToOneLink('Plan', this, linkedApis[0]),
      TYPE: new OneToOneLink('Type', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LeavePlanTiersV2;

  requestBuilder(): LeavePlanTiersV2RequestBuilder<DeSerializersT> {
    return new LeavePlanTiersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeavePlanTiersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeavePlanTiersV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeavePlanTiersV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeavePlanTiersV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeavePlanTiersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIER_NUMBER: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRANT: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_CARRYOVER: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_BALANCE: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUAL_AMOUNT: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS_OF_SERVICE: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_BALANCE: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUALIFYING_AMOUNT: OrderableEdmTypeField<
      LeavePlanTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_FULL_TIME_EQUIVALENCY: EnumField<
      LeavePlanTiersV2<DeSerializers>,
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
      LeavePlanTiersV2<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeavePlanTiersV2<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeavePlanTiersV2<DeSerializers>>;
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
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
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
        ALL_FIELDS: new AllFields('*', LeavePlanTiersV2)
      };
    }

    return this._schema;
  }
}
