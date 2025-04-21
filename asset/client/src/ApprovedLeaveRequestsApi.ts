/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovedLeaveRequests } from './ApprovedLeaveRequests';
import { ApprovedLeaveRequestsRequestBuilder } from './ApprovedLeaveRequestsRequestBuilder';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import { LeaveRequestHalfDayDefination } from './LeaveRequestHalfDayDefination';
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
export class ApprovedLeaveRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovedLeaveRequests<DeSerializersT>, DeSerializersT>
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
  ): ApprovedLeaveRequestsApi<DeSerializersT> {
    return new ApprovedLeaveRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApprovedLeaveRequests;

  requestBuilder(): ApprovedLeaveRequestsRequestBuilder<DeSerializersT> {
    return new ApprovedLeaveRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovedLeaveRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovedLeaveRequests<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApprovedLeaveRequests<DeSerializersT>,
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
    typeof ApprovedLeaveRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovedLeaveRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    START_DATE: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVE_UNIT: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_TYPE: EnumField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      LeaveTypeRequestType,
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      ApprovedLeaveRequests<DeSerializers>,
      DeSerializersT,
      LeaveRequestHalfDayDefination,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApprovedLeaveRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leaveUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_UNIT: fieldBuilder.buildEdmTypeField(
          'LeaveUnit',
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
         * Static representation of the {@link requestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE: fieldBuilder.buildEnumField(
          'RequestType',
          LeaveTypeRequestType,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        /**
         * Static representation of the {@link halfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'HalfDayDefinition',
          LeaveRequestHalfDayDefination,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovedLeaveRequests)
      };
    }

    return this._schema;
  }
}
