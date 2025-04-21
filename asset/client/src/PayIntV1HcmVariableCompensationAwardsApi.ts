/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1HcmVariableCompensationAwards } from './PayIntV1HcmVariableCompensationAwards';
import { PayIntV1HcmVariableCompensationAwardsRequestBuilder } from './PayIntV1HcmVariableCompensationAwardsRequestBuilder';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
import { HrmCompProcessType } from './HrmCompProcessType';
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
export class PayIntV1HcmVariableCompensationAwardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PayIntV1HcmVariableCompensationAwards<DeSerializersT>,
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
  ): PayIntV1HcmVariableCompensationAwardsApi<DeSerializersT> {
    return new PayIntV1HcmVariableCompensationAwardsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1HcmVariableCompensationAwards;

  requestBuilder(): PayIntV1HcmVariableCompensationAwardsRequestBuilder<DeSerializersT> {
    return new PayIntV1HcmVariableCompensationAwardsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1HcmVariableCompensationAwards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1HcmVariableCompensationAwards<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1HcmVariableCompensationAwards<DeSerializersT>,
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
    typeof PayIntV1HcmVariableCompensationAwards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1HcmVariableCompensationAwards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AWARD_DATE: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PLAN_ID: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_CURRENCY_CODE: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AWARD_TYPE: EnumField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompVarAwardEmplType,
      true,
      true
    >;
    UNIT_VALUE_V_2: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompProcessType,
      true,
      true
    >;
    UNITS_REAL: OrderableEdmTypeField<
      PayIntV1HcmVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1HcmVariableCompensationAwards<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link awardDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_DATE: fieldBuilder.buildEdmTypeField(
          'AwardDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'FixedPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'UnitCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link awardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_TYPE: fieldBuilder.buildEnumField(
          'AwardType',
          HrmCompVarAwardEmplType,
          true
        ),
        /**
         * Static representation of the {@link unitValueV2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VALUE_V_2: fieldBuilder.buildEdmTypeField(
          'UnitValueV2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          HrmCompProcessType,
          true
        ),
        /**
         * Static representation of the {@link unitsReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITS_REAL: fieldBuilder.buildEdmTypeField(
          'UnitsReal',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1HcmVariableCompensationAwards)
      };
    }

    return this._schema;
  }
}
