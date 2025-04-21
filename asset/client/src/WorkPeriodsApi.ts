/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkPeriods } from './WorkPeriods';
import { WorkPeriodsRequestBuilder } from './WorkPeriodsRequestBuilder';
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
export class WorkPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkPeriods<DeSerializersT>, DeSerializersT>
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
  ): WorkPeriodsApi<DeSerializersT> {
    return new WorkPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkPeriods;

  requestBuilder(): WorkPeriodsRequestBuilder<DeSerializersT> {
    return new WorkPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_CYCLE_ID: OrderableEdmTypeField<
      WorkPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      WorkPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      WorkPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      WorkPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WorkPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'WorkCycleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkPeriods)
      };
    }

    return this._schema;
  }
}
