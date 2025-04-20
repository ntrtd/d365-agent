/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveRequests } from './LeaveRequests';
import { LeaveRequestsRequestBuilder } from './LeaveRequestsRequestBuilder';
import { LeaveTypeReasonCodesApi } from './LeaveTypeReasonCodesApi';
import { LeaveEnrollmentsApi } from './LeaveEnrollmentsApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
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
export class LeaveRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveRequests<DeSerializersT>, DeSerializersT>
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
  ): LeaveRequestsApi<DeSerializersT> {
    return new LeaveRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link typeReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE_REASON_CODE: OneToOneLink<
      LeaveRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link enrollment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENROLLMENT: OneToOneLink<
      LeaveRequests<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveTypeReasonCodesApi<DeSerializersT>,
      LeaveEnrollmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TYPE_REASON_CODE: new OneToOneLink('TypeReasonCode', this, linkedApis[0]),
      ENROLLMENT: new OneToOneLink('Enrollment', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LeaveRequests;

  requestBuilder(): LeaveRequestsRequestBuilder<DeSerializersT> {
    return new LeaveRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveRequests<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaveRequests<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaveRequests, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeaveRequests, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_DATE: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    IS_SUBMITTED_BY_ABSENCE_MANAGER: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      LeaveRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link typeReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE_REASON_CODE: OneToOneLink<
      LeaveRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypeReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link enrollment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENROLLMENT: OneToOneLink<
      LeaveRequests<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveRequests<DeSerializers>>;
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
         * Static representation of the {@link leaveType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE: fieldBuilder.buildEdmTypeField(
          'LeaveType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_DATE: fieldBuilder.buildEdmTypeField(
          'LeaveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_DATE: fieldBuilder.buildEdmTypeField(
          'RequestDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isSubmittedByHumanResources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_HUMAN_RESOURCES: fieldBuilder.buildEnumField(
          'IsSubmittedByHumanResources',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link halfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'HalfDayDefinition',
          LeaveHalfDayDefinition,
          true
        ),
        /**
         * Static representation of the {@link isSubmittedByManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_MANAGER: fieldBuilder.buildEnumField(
          'IsSubmittedByManager',
          UnknownNoYes,
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link submittedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SubmittedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LeaveRequestApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link isSubmittedByAbsenceManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_ABSENCE_MANAGER: fieldBuilder.buildEnumField(
          'IsSubmittedByAbsenceManager',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link isSubmittedOnBehalfOf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_ON_BEHALF_OF: fieldBuilder.buildEnumField(
          'IsSubmittedOnBehalfOf',
          UnknownNoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveRequests)
      };
    }

    return this._schema;
  }
}
