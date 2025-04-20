/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DateIntervals } from './DateIntervals';
import { DateIntervalsRequestBuilder } from './DateIntervalsRequestBuilder';
import { StartEnd } from './StartEnd';
import { PeriodUnitCalc } from './PeriodUnitCalc';
import { LedgerPeriodType } from './LedgerPeriodType';
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
export class DateIntervalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DateIntervals<DeSerializersT>, DeSerializersT>
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
  ): DateIntervalsApi<DeSerializersT> {
    return new DateIntervalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DateIntervals;

  requestBuilder(): DateIntervalsRequestBuilder<DeSerializersT> {
    return new DateIntervalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DateIntervals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DateIntervals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DateIntervals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DateIntervals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DateIntervals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_INTERVAL_CODE: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_FUNCTION_ADJUSTMENT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    START_ADJUSTMENT_UNIT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      PeriodUnitCalc,
      true,
      true
    >;
    START_FUNCTION: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    END_ADJUSTMENT_UNIT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      PeriodUnitCalc,
      true,
      true
    >;
    LOCKED_START_DATE: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_PERIOD_TYPE_ADJUSTMENT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    START_CHANGE: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOCKED_END_DATE: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_PERIOD_TYPE_ADJUSTMENT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    END_FUNCTION: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    END_PERIOD_TYPE: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    END_CHANGE: OrderableEdmTypeField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_FUNCTION_ADJUSTMENT: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    START_PERIOD_TYPE: EnumField<
      DateIntervals<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DateIntervals<DeSerializers>>;
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
         * Static representation of the {@link dateIntervalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_INTERVAL_CODE: fieldBuilder.buildEdmTypeField(
          'DateIntervalCode',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link endFunctionAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FUNCTION_ADJUSTMENT: fieldBuilder.buildEnumField(
          'EndFunctionAdjustment',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link startAdjustmentUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_ADJUSTMENT_UNIT: fieldBuilder.buildEnumField(
          'StartAdjustmentUnit',
          PeriodUnitCalc,
          true
        ),
        /**
         * Static representation of the {@link startFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FUNCTION: fieldBuilder.buildEnumField(
          'StartFunction',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link endAdjustmentUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_ADJUSTMENT_UNIT: fieldBuilder.buildEnumField(
          'EndAdjustmentUnit',
          PeriodUnitCalc,
          true
        ),
        /**
         * Static representation of the {@link lockedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED_START_DATE: fieldBuilder.buildEdmTypeField(
          'LockedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endPeriodTypeAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_PERIOD_TYPE_ADJUSTMENT: fieldBuilder.buildEnumField(
          'EndPeriodTypeAdjustment',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link startChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_CHANGE: fieldBuilder.buildEdmTypeField(
          'StartChange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lockedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED_END_DATE: fieldBuilder.buildEdmTypeField(
          'LockedEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startPeriodTypeAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PERIOD_TYPE_ADJUSTMENT: fieldBuilder.buildEnumField(
          'StartPeriodTypeAdjustment',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link endFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FUNCTION: fieldBuilder.buildEnumField(
          'EndFunction',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link endPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_PERIOD_TYPE: fieldBuilder.buildEnumField(
          'EndPeriodType',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link endChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_CHANGE: fieldBuilder.buildEdmTypeField(
          'EndChange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startFunctionAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FUNCTION_ADJUSTMENT: fieldBuilder.buildEnumField(
          'StartFunctionAdjustment',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link startPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PERIOD_TYPE: fieldBuilder.buildEnumField(
          'StartPeriodType',
          LedgerPeriodType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DateIntervals)
      };
    }

    return this._schema;
  }
}
