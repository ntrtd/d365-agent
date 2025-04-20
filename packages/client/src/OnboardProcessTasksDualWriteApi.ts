/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardProcessTasksDualWrite } from './OnboardProcessTasksDualWrite';
import { OnboardProcessTasksDualWriteRequestBuilder } from './OnboardProcessTasksDualWriteRequestBuilder';
import { ProcessTasksApi } from './ProcessTasksApi';
import { PositionsV2Api } from './PositionsV2Api';
import { HcmOnboardAssignmentType } from './HcmOnboardAssignmentType';
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
export class OnboardProcessTasksDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardProcessTasksDualWrite<DeSerializersT>, DeSerializersT>
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
  ): OnboardProcessTasksDualWriteApi<DeSerializersT> {
    return new OnboardProcessTasksDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onboardTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARD_TASK: OneToOneLink<
      OnboardProcessTasksDualWrite<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_POSITION: OneToOneLink<
      OnboardProcessTasksDualWrite<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessTasksApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONBOARD_TASK: new OneToOneLink('Onboard_Task', this, linkedApis[0]),
      ASSIGNED_POSITION: new OneToOneLink(
        'Assigned_Position',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = OnboardProcessTasksDualWrite;

  requestBuilder(): OnboardProcessTasksDualWriteRequestBuilder<DeSerializersT> {
    return new OnboardProcessTasksDualWriteRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OnboardProcessTasksDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardProcessTasksDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardProcessTasksDualWrite<DeSerializersT>,
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
    typeof OnboardProcessTasksDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardProcessTasksDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK_ID: OrderableEdmTypeField<
      OnboardProcessTasksDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      OnboardProcessTasksDualWrite<DeSerializers>,
      DeSerializersT,
      HcmOnboardAssignmentType,
      true,
      true
    >;
    ASSIGNED_POSITION_ID: OrderableEdmTypeField<
      OnboardProcessTasksDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onboardTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARD_TASK: OneToOneLink<
      OnboardProcessTasksDualWrite<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_POSITION: OneToOneLink<
      OnboardProcessTasksDualWrite<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardProcessTasksDualWrite<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link assignmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_TYPE: fieldBuilder.buildEnumField(
          'AssignmentType',
          HcmOnboardAssignmentType,
          true
        ),
        /**
         * Static representation of the {@link assignedPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'AssignedPositionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardProcessTasksDualWrite)
      };
    }

    return this._schema;
  }
}
