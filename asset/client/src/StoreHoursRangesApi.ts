/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StoreHoursRanges } from './StoreHoursRanges';
import { StoreHoursRangesRequestBuilder } from './StoreHoursRangesRequestBuilder';
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
export class StoreHoursRangesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StoreHoursRanges<DeSerializersT>, DeSerializersT>
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
  ): StoreHoursRangesApi<DeSerializersT> {
    return new StoreHoursRangesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StoreHoursRanges;

  requestBuilder(): StoreHoursRangesRequestBuilder<DeSerializersT> {
    return new StoreHoursRangesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StoreHoursRanges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StoreHoursRanges<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<StoreHoursRanges<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof StoreHoursRanges, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        StoreHoursRanges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_HOURS_TEMPLATE_ID: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSED_ON_THURSDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUNDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_ON_MONDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRIDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FRIDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THURSDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEDNESDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SATURDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THURSDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED_ON_FRIDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSED_ON_SUNDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUNDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SATURDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TUESDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED_ON_TUESDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TUESDAY_OPEN_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED_ON_SATURDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WEDNESDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONDAY_CLOSE_TIME: OrderableEdmTypeField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED_ON_WEDNESDAY: EnumField<
      StoreHoursRanges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<StoreHoursRanges<DeSerializers>>;
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
         * Static representation of the {@link storeHoursTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_HOURS_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'StoreHoursTemplateId',
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closedOnThursday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_THURSDAY: fieldBuilder.buildEnumField(
          'ClosedOnThursday',
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
         * Static representation of the {@link sundayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'SundayOpenTime',
          'Edm.Int32',
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
         * Static representation of the {@link closedOnMonday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_MONDAY: fieldBuilder.buildEnumField(
          'ClosedOnMonday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fridayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'FridayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fridayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'FridayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thursdayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'ThursdayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wednesdayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'WednesdayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link saturdayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'SaturdayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mondayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'MondayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thursdayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'ThursdayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closedOnFriday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_FRIDAY: fieldBuilder.buildEnumField(
          'ClosedOnFriday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closedOnSunday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_SUNDAY: fieldBuilder.buildEnumField(
          'ClosedOnSunday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sundayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'SundayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link saturdayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'SaturdayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tuesdayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'TuesdayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closedOnTuesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_TUESDAY: fieldBuilder.buildEnumField(
          'ClosedOnTuesday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tuesdayOpenTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_OPEN_TIME: fieldBuilder.buildEdmTypeField(
          'TuesdayOpenTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closedOnSaturday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_SATURDAY: fieldBuilder.buildEnumField(
          'ClosedOnSaturday',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wednesdayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'WednesdayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mondayCloseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'MondayCloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closedOnWednesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_ON_WEDNESDAY: fieldBuilder.buildEnumField(
          'ClosedOnWednesday',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StoreHoursRanges)
      };
    }

    return this._schema;
  }
}
