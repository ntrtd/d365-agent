/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledAccrualInquiries } from './WorkerEnrolledAccrualInquiries';
import { WorkerEnrolledAccrualInquiriesRequestBuilder } from './WorkerEnrolledAccrualInquiriesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { AccrualPlansApi } from './AccrualPlansApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerEnrolledAccrualInquiriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkerEnrolledAccrualInquiries<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledAccrualInquiriesApi<DeSerializersT> {
    return new WorkerEnrolledAccrualInquiriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerEnrolledAccrualInquiries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      WorkerEnrolledAccrualInquiries<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkersApi<DeSerializersT>, AccrualPlansApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      ACCRUAL_PLAN: new OneToOneLink('AccrualPlan', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WorkerEnrolledAccrualInquiries;

  requestBuilder(): WorkerEnrolledAccrualInquiriesRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledAccrualInquiriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledAccrualInquiries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledAccrualInquiries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledAccrualInquiries<DeSerializersT>,
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
    typeof WorkerEnrolledAccrualInquiries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledAccrualInquiries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_ID: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_USED: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_CARRY_OVER: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_PENDING_USAGE: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUAL_YEAR_START_DATE: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_ACCRUED: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AVAILABLE_HOURS: OrderableEdmTypeField<
      WorkerEnrolledAccrualInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerEnrolledAccrualInquiries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      WorkerEnrolledAccrualInquiries<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledAccrualInquiries<DeSerializers>>;
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
         * Static representation of the {@link workerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_USED: fieldBuilder.buildEdmTypeField(
          'TotalUsed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalCarryOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CARRY_OVER: fieldBuilder.buildEdmTypeField(
          'TotalCarryOver',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalPendingUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PENDING_USAGE: fieldBuilder.buildEdmTypeField(
          'TotalPendingUsage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accrualYearStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_YEAR_START_DATE: fieldBuilder.buildEdmTypeField(
          'AccrualYearStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ACCRUED: fieldBuilder.buildEdmTypeField(
          'TotalAccrued',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAvailableHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalAvailableHours',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEnrolledAccrualInquiries)
      };
    }

    return this._schema;
  }
}
