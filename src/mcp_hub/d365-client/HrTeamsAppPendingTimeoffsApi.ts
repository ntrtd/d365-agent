/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HrTeamsAppPendingTimeoffs } from './HrTeamsAppPendingTimeoffs';
import { HrTeamsAppPendingTimeoffsRequestBuilder } from './HrTeamsAppPendingTimeoffsRequestBuilder';
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
export class HrTeamsAppPendingTimeoffsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<HrTeamsAppPendingTimeoffs<DeSerializersT>, DeSerializersT>
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
  ): HrTeamsAppPendingTimeoffsApi<DeSerializersT> {
    return new HrTeamsAppPendingTimeoffsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HrTeamsAppPendingTimeoffs;

  requestBuilder(): HrTeamsAppPendingTimeoffsRequestBuilder<DeSerializersT> {
    return new HrTeamsAppPendingTimeoffsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HrTeamsAppPendingTimeoffs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HrTeamsAppPendingTimeoffs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HrTeamsAppPendingTimeoffs<DeSerializersT>,
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
    typeof HrTeamsAppPendingTimeoffs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HrTeamsAppPendingTimeoffs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_OWNER: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_PERSONNEL_NUMBER: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NETWORK_ALIAS: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMISSION_DATE: OrderableEdmTypeField<
      HrTeamsAppPendingTimeoffs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<HrTeamsAppPendingTimeoffs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
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
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.Int64',
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
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.String', true),
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
         * Static representation of the {@link workflowPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkflowPersonnelNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
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
         * Static representation of the {@link lastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'LastNamePrefix',
          'Edm.String',
          true
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
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link submissionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_DATE: fieldBuilder.buildEdmTypeField(
          'SubmissionDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HrTeamsAppPendingTimeoffs)
      };
    }

    return this._schema;
  }
}
