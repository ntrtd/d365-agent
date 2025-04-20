/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillScheduleLinePlaceHolds } from './SubBillScheduleLinePlaceHolds';
import { SubBillScheduleLinePlaceHoldsRequestBuilder } from './SubBillScheduleLinePlaceHoldsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SubBillScheduleLinePlaceHoldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillScheduleLinePlaceHolds<DeSerializersT>, DeSerializersT>
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
  ): SubBillScheduleLinePlaceHoldsApi<DeSerializersT> {
    return new SubBillScheduleLinePlaceHoldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillScheduleLinePlaceHolds;

  requestBuilder(): SubBillScheduleLinePlaceHoldsRequestBuilder<DeSerializersT> {
    return new SubBillScheduleLinePlaceHoldsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillScheduleLinePlaceHolds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillScheduleLinePlaceHolds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillScheduleLinePlaceHolds<DeSerializersT>,
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
    typeof SubBillScheduleLinePlaceHolds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillScheduleLinePlaceHolds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOLD_DATE: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HOLD_NOTES: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUST_SCHEDULE: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HOLD_REASON_CODE: OrderableEdmTypeField<
      SubBillScheduleLinePlaceHolds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillScheduleLinePlaceHolds<DeSerializers>>;
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
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
         * Static representation of the {@link holdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_DATE: fieldBuilder.buildEdmTypeField(
          'HoldDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link holdNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_NOTES: fieldBuilder.buildEdmTypeField(
          'HoldNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUST_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'AdjustSchedule',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link holdReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'HoldReasonCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillScheduleLinePlaceHolds)
      };
    }

    return this._schema;
  }
}
