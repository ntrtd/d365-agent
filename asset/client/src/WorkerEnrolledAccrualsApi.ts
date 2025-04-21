/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledAccruals } from './WorkerEnrolledAccruals';
import { WorkerEnrolledAccrualsRequestBuilder } from './WorkerEnrolledAccrualsRequestBuilder';
import { WorkerAccrualAdjustmentsApi } from './WorkerAccrualAdjustmentsApi';
import { AccrualPlansApi } from './AccrualPlansApi';
import { WorkersApi } from './WorkersApi';
import { PayrollAccrualDateBasis } from './PayrollAccrualDateBasis';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerEnrolledAccrualsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerEnrolledAccruals<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledAccrualsApi<DeSerializersT> {
    return new WorkerEnrolledAccrualsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workerAccrualAdjustments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ACCRUAL_ADJUSTMENTS: OneToManyLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      WorkerAccrualAdjustmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollAccrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_ACCRUAL_PLAN: OneToOneLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_WORKER: OneToOneLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerAccrualAdjustmentsApi<DeSerializersT>,
      AccrualPlansApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ACCRUAL_ADJUSTMENTS: new OneToManyLink(
        'WorkerAccrualAdjustments',
        this,
        linkedApis[0]
      ),
      PAYROLL_ACCRUAL_PLAN: new OneToOneLink(
        'PayrollAccrualPlan',
        this,
        linkedApis[1]
      ),
      HCM_WORKER: new OneToOneLink('HcmWorker', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = WorkerEnrolledAccruals;

  requestBuilder(): WorkerEnrolledAccrualsRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledAccrualsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledAccruals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledAccruals<DeSerializersT>,
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
    typeof WorkerEnrolledAccruals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledAccruals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_ID: OrderableEdmTypeField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_DATE_BASIS: EnumField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      PayrollAccrualDateBasis,
      true,
      true
    >;
    IS_ACCRUAL_STOPPED: EnumField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOM_ACCURAL_DATE: OrderableEdmTypeField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_USAGE_STOPPED: EnumField<
      WorkerEnrolledAccruals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerAccrualAdjustments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ACCRUAL_ADJUSTMENTS: OneToManyLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      WorkerAccrualAdjustmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollAccrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_ACCRUAL_PLAN: OneToOneLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_WORKER: OneToOneLink<
      WorkerEnrolledAccruals<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledAccruals<DeSerializers>>;
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
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
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
         * Static representation of the {@link accrualDateBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_DATE_BASIS: fieldBuilder.buildEnumField(
          'AccrualDateBasis',
          PayrollAccrualDateBasis,
          true
        ),
        /**
         * Static representation of the {@link isAccrualStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACCRUAL_STOPPED: fieldBuilder.buildEnumField(
          'IsAccrualStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customAccuralDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_ACCURAL_DATE: fieldBuilder.buildEdmTypeField(
          'CustomAccuralDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isUsageStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_USAGE_STOPPED: fieldBuilder.buildEnumField(
          'IsUsageStopped',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEnrolledAccruals)
      };
    }

    return this._schema;
  }
}
