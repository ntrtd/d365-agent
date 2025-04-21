/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValidationProjectTaskStatus } from './ValidationProjectTaskStatus';
import { ValidationProjectTaskStatusRequestBuilder } from './ValidationProjectTaskStatusRequestBuilder';
import { DataValidationTaskStatus } from './DataValidationTaskStatus';
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
export class ValidationProjectTaskStatusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ValidationProjectTaskStatus<DeSerializersT>, DeSerializersT>
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
  ): ValidationProjectTaskStatusApi<DeSerializersT> {
    return new ValidationProjectTaskStatusApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ValidationProjectTaskStatus;

  requestBuilder(): ValidationProjectTaskStatusRequestBuilder<DeSerializersT> {
    return new ValidationProjectTaskStatusRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValidationProjectTaskStatus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ValidationProjectTaskStatus<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValidationProjectTaskStatus<DeSerializersT>,
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
    typeof ValidationProjectTaskStatus,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValidationProjectTaskStatus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_VALIDATION_PROJECT_NAME: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_VALIDATION_PROJECT_TASK_LINE_NUMBER: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPLETED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_VALIDATION_PROJECT_TASK_NAME: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      DataValidationTaskStatus,
      true,
      true
    >;
    COMPLETED_DATE_TIME: OrderableEdmTypeField<
      ValidationProjectTaskStatus<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ValidationProjectTaskStatus<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataValidationProjectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALIDATION_PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'DataValidationProject_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataValidationProjectTaskLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALIDATION_PROJECT_TASK_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'DataValidationProjectTask_LineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link completedByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_BY_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompletedByWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataValidationProjectTaskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALIDATION_PROJECT_TASK_NAME: fieldBuilder.buildEdmTypeField(
          'DataValidationProjectTask_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibleWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          DataValidationTaskStatus,
          true
        ),
        /**
         * Static representation of the {@link completedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CompletedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValidationProjectTaskStatus)
      };
    }

    return this._schema;
  }
}
