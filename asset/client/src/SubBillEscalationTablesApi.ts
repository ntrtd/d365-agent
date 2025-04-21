/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillEscalationTables } from './SubBillEscalationTables';
import { SubBillEscalationTablesRequestBuilder } from './SubBillEscalationTablesRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillEscalationFrequency } from './SubBillEscalationFrequency';
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
export class SubBillEscalationTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillEscalationTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillEscalationTablesApi<DeSerializersT> {
    return new SubBillEscalationTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillEscalationTables;

  requestBuilder(): SubBillEscalationTablesRequestBuilder<DeSerializersT> {
    return new SubBillEscalationTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillEscalationTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillEscalationTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillEscalationTables<DeSerializersT>,
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
    typeof SubBillEscalationTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillEscalationTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SCHEDULE_LINE: EnumField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_LINE_NUM: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESCALATION_LINE_NUM: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_BILL_MARKDOWN: EnumField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_AMOUNT: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FREQUENCY: EnumField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      SubBillEscalationFrequency,
      true,
      true
    >;
    CPI_SCHEDULE: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      SubBillEscalationTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillEscalationTables<DeSerializers>>;
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
         * Static representation of the {@link isScheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCHEDULE_LINE: fieldBuilder.buildEnumField(
          'IsScheduleLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ScheduleLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link escalationLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESCALATION_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'EscalationLineNum',
          'Edm.Decimal',
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
         * Static representation of the {@link subBillMarkdown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MARKDOWN: fieldBuilder.buildEnumField(
          'SubBillMarkdown',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          SubBillEscalationFrequency,
          true
        ),
        /**
         * Static representation of the {@link cpiSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPI_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'CPISchedule',
          'Edm.String',
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillEscalationTables)
      };
    }

    return this._schema;
  }
}
