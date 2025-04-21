/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerAccrualAdjustments } from './WorkerAccrualAdjustments';
import { WorkerAccrualAdjustmentsRequestBuilder } from './WorkerAccrualAdjustmentsRequestBuilder';
import { WorkerEnrolledAccrualsApi } from './WorkerEnrolledAccrualsApi';
import { PayrollAccrualAdjustmentType } from './PayrollAccrualAdjustmentType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerAccrualAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerAccrualAdjustments<DeSerializersT>, DeSerializersT>
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
  ): WorkerAccrualAdjustmentsApi<DeSerializersT> {
    return new WorkerAccrualAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerEnrolledAccrual} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ENROLLED_ACCRUAL: OneToOneLink<
      WorkerAccrualAdjustments<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerEnrolledAccrualsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_WORKER_ENROLLED_ACCRUAL: new OneToOneLink(
        'PayrollWorkerEnrolledAccrual',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WorkerAccrualAdjustments;

  requestBuilder(): WorkerAccrualAdjustmentsRequestBuilder<DeSerializersT> {
    return new WorkerAccrualAdjustmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerAccrualAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerAccrualAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerAccrualAdjustments<DeSerializersT>,
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
    typeof WorkerAccrualAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerAccrualAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADJUSTMENT_TYPE: EnumField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      PayrollAccrualAdjustmentType,
      true,
      true
    >;
    ACCRUAL_ID: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLED_ACCRUAL_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTED_HOURS: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      WorkerAccrualAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerEnrolledAccrual} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ENROLLED_ACCRUAL: OneToOneLink<
      WorkerAccrualAdjustments<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerAccrualAdjustments<DeSerializers>>;
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
         * Static representation of the {@link adjustmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_TYPE: fieldBuilder.buildEnumField(
          'AdjustmentType',
          PayrollAccrualAdjustmentType,
          true
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
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link enrolledAccrualLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLED_ACCRUAL_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'EnrolledAccrualLegalEntityId',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_HOURS: fieldBuilder.buildEdmTypeField(
          'AdjustedHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerAccrualAdjustments)
      };
    }

    return this._schema;
  }
}
