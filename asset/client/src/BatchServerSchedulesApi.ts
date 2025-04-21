/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchServerSchedules } from './BatchServerSchedules';
import { BatchServerSchedulesRequestBuilder } from './BatchServerSchedulesRequestBuilder';
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
export class BatchServerSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchServerSchedules<DeSerializersT>, DeSerializersT>
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
  ): BatchServerSchedulesApi<DeSerializersT> {
    return new BatchServerSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BatchServerSchedules;

  requestBuilder(): BatchServerSchedulesRequestBuilder<DeSerializersT> {
    return new BatchServerSchedulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchServerSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BatchServerSchedules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BatchServerSchedules<DeSerializersT>,
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
    typeof BatchServerSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BatchServerSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AOS_INSTANCE_NAME: OrderableEdmTypeField<
      BatchServerSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      BatchServerSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      BatchServerSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_BATCH_THREADS: OrderableEdmTypeField<
      BatchServerSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BatchServerSchedules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link aosInstanceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AOS_INSTANCE_NAME: fieldBuilder.buildEdmTypeField(
          'AOSInstanceName',
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
         * Static representation of the {@link maximumBatchThreads} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BATCH_THREADS: fieldBuilder.buildEdmTypeField(
          'MaximumBatchThreads',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BatchServerSchedules)
      };
    }

    return this._schema;
  }
}
