/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickupTimeslotSettings } from './PickupTimeslotSettings';
import { PickupTimeslotSettingsRequestBuilder } from './PickupTimeslotSettingsRequestBuilder';
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
export class PickupTimeslotSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PickupTimeslotSettings<DeSerializersT>, DeSerializersT>
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
  ): PickupTimeslotSettingsApi<DeSerializersT> {
    return new PickupTimeslotSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PickupTimeslotSettings;

  requestBuilder(): PickupTimeslotSettingsRequestBuilder<DeSerializersT> {
    return new PickupTimeslotSettingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PickupTimeslotSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PickupTimeslotSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PickupTimeslotSettings<DeSerializersT>,
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
    typeof PickupTimeslotSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PickupTimeslotSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TIMESLOT_ID: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_ON_SUNDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPACITY_PER_INTERVAL: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVE_ON_MONDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_ON_SATURDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_ON_WEDNESDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_ON_TUESDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_ON_THURSDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVE_ON_FRIDAY: EnumField<
      PickupTimeslotSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PickupTimeslotSettings<DeSerializers>>;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link timeslotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESLOT_ID: fieldBuilder.buildEdmTypeField(
          'TimeslotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link activeOnSunday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_SUNDAY: fieldBuilder.buildEnumField(
          'ActiveOnSunday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link capacityPerInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_PER_INTERVAL: fieldBuilder.buildEdmTypeField(
          'CapacityPerInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link activeOnMonday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_MONDAY: fieldBuilder.buildEnumField(
          'ActiveOnMonday',
          NoYes,
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
         * Static representation of the {@link activeOnSaturday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_SATURDAY: fieldBuilder.buildEnumField(
          'ActiveOnSaturday',
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
         * Static representation of the {@link activeOnWednesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_WEDNESDAY: fieldBuilder.buildEnumField(
          'ActiveOnWednesday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activeOnTuesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_TUESDAY: fieldBuilder.buildEnumField(
          'ActiveOnTuesday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activeOnThursday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_THURSDAY: fieldBuilder.buildEnumField(
          'ActiveOnThursday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField(
          'Interval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link activeOnFriday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ON_FRIDAY: fieldBuilder.buildEnumField(
          'ActiveOnFriday',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PickupTimeslotSettings)
      };
    }

    return this._schema;
  }
}
