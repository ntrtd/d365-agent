/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MssLeaveRequestWorkflows } from './MssLeaveRequestWorkflows';
import { MssLeaveRequestWorkflowsRequestBuilder } from './MssLeaveRequestWorkflowsRequestBuilder';
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
export class MssLeaveRequestWorkflowsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MssLeaveRequestWorkflows<DeSerializersT>, DeSerializersT>
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
  ): MssLeaveRequestWorkflowsApi<DeSerializersT> {
    return new MssLeaveRequestWorkflowsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MssLeaveRequestWorkflows;

  requestBuilder(): MssLeaveRequestWorkflowsRequestBuilder<DeSerializersT> {
    return new MssLeaveRequestWorkflowsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MssLeaveRequestWorkflows<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MssLeaveRequestWorkflows<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MssLeaveRequestWorkflows<DeSerializersT>,
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
    typeof MssLeaveRequestWorkflows,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MssLeaveRequestWorkflows,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NETWORK_ALIAS: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMISSION_DATE: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKFLOW_OWNER: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      MssLeaveRequestWorkflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MssLeaveRequestWorkflows<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link networkAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NETWORK_ALIAS: fieldBuilder.buildEdmTypeField(
          'networkAlias',
          'Edm.String',
          true
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link submissionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_DATE: fieldBuilder.buildEdmTypeField(
          'SubmissionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link workflowOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_OWNER: fieldBuilder.buildEdmTypeField(
          'WorkflowOwner',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MssLeaveRequestWorkflows)
      };
    }

    return this._schema;
  }
}
