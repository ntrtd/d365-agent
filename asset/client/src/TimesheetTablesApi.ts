/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimesheetTables } from './TimesheetTables';
import { TimesheetTablesRequestBuilder } from './TimesheetTablesRequestBuilder';
import { TsAppStatus } from './TsAppStatus';
import { NoYes } from './NoYes';
import { TsPostStatus } from './TsPostStatus';
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
export class TimesheetTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimesheetTables<DeSerializersT>, DeSerializersT>
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
  ): TimesheetTablesApi<DeSerializersT> {
    return new TimesheetTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TimesheetTables;

  requestBuilder(): TimesheetTablesRequestBuilder<DeSerializersT> {
    return new TimesheetTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimesheetTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TimesheetTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimesheetTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimesheetTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimesheetTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIMESHEET_NUMBER: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPROVAL_STATUS: EnumField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      TsAppStatus,
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WORKFLOW_TO_BE_RESUBMITTED: EnumField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTING_STATUS: EnumField<
      TimesheetTables<DeSerializers>,
      DeSerializersT,
      TsPostStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TimesheetTables<DeSerializers>>;
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
         * Static representation of the {@link timesheetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESHEET_NUMBER: fieldBuilder.buildEdmTypeField(
          'TimesheetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TsAppStatus,
          true
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWorkflowToBeResubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKFLOW_TO_BE_RESUBMITTED: fieldBuilder.buildEnumField(
          'IsWorkflowToBeResubmitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link postingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_STATUS: fieldBuilder.buildEnumField(
          'PostingStatus',
          TsPostStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimesheetTables)
      };
    }

    return this._schema;
  }
}
