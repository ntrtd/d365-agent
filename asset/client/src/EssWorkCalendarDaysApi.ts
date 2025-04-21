/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssWorkCalendarDays } from './EssWorkCalendarDays';
import { EssWorkCalendarDaysRequestBuilder } from './EssWorkCalendarDaysRequestBuilder';
import { WorkTimeControl } from './WorkTimeControl';
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
export class EssWorkCalendarDaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssWorkCalendarDays<DeSerializersT>, DeSerializersT>
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
  ): EssWorkCalendarDaysApi<DeSerializersT> {
    return new EssWorkCalendarDaysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EssWorkCalendarDays;

  requestBuilder(): EssWorkCalendarDaysRequestBuilder<DeSerializersT> {
    return new EssWorkCalendarDaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssWorkCalendarDays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EssWorkCalendarDays<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssWorkCalendarDays<DeSerializersT>,
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
    typeof EssWorkCalendarDays,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssWorkCalendarDays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR_DATE: OrderableEdmTypeField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      WorkTimeControl,
      true,
      true
    >;
    WORKING_HOURS: OrderableEdmTypeField<
      EssWorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EssWorkCalendarDays<DeSerializers>>;
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
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calendarDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_DATE: fieldBuilder.buildEdmTypeField(
          'CalendarDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', WorkTimeControl, true),
        /**
         * Static representation of the {@link workingHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_HOURS: fieldBuilder.buildEdmTypeField(
          'WorkingHours',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssWorkCalendarDays)
      };
    }

    return this._schema;
  }
}
