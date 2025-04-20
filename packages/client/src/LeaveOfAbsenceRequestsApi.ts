/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveOfAbsenceRequests } from './LeaveOfAbsenceRequests';
import { LeaveOfAbsenceRequestsRequestBuilder } from './LeaveOfAbsenceRequestsRequestBuilder';
import { LeaveTypesApi } from './LeaveTypesApi';
import { WorkersApi } from './WorkersApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { LeaveAccrualSuspensionsApi } from './LeaveAccrualSuspensionsApi';
import { NoYes } from './NoYes';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveRequestType } from './LeaveRequestType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveOfAbsenceRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveOfAbsenceRequests<DeSerializersT>, DeSerializersT>
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
  ): LeaveOfAbsenceRequestsApi<DeSerializersT> {
    return new LeaveOfAbsenceRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link relatedLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_LEAVE_TYPE: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELATED_LEAVE_TYPE: new OneToOneLink(
        'RelatedLeaveType',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[2]),
      LEAVE_ACCRUAL_SUSPENSIONS: new OneToManyLink(
        'LeaveAccrualSuspensions',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = LeaveOfAbsenceRequests;

  requestBuilder(): LeaveOfAbsenceRequestsRequestBuilder<DeSerializersT> {
    return new LeaveOfAbsenceRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveOfAbsenceRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveOfAbsenceRequests<DeSerializersT>,
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
    typeof LeaveOfAbsenceRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveOfAbsenceRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELED: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    REQUEST_TYPE: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      LeaveRequestType,
      true,
      true
    >;
    PREVIOUS_REQUEST_ID: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    FIRST_HALF_OF_END_DATE: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_HALF_OF_START_DATE: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_ABSENCE_MANAGER: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    LEAVE_TYPE: OrderableEdmTypeField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      LeaveOfAbsenceRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_LEAVE_TYPE: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveAccrualSuspensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ACCRUAL_SUSPENSIONS: OneToManyLink<
      LeaveOfAbsenceRequests<DeSerializersT>,
      DeSerializersT,
      LeaveAccrualSuspensionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveOfAbsenceRequests<DeSerializers>>;
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
         * Static representation of the {@link requestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_DATE: fieldBuilder.buildEdmTypeField(
          'RequestDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED: fieldBuilder.buildEnumField('Canceled', NoYes, true),
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
         * Static representation of the {@link requestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE: fieldBuilder.buildEnumField(
          'RequestType',
          LeaveRequestType,
          true
        ),
        /**
         * Static representation of the {@link previousRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'PreviousRequestID',
          'Edm.String',
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
         * Static representation of the {@link firstHalfOfEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_HALF_OF_END_DATE: fieldBuilder.buildEnumField(
          'FirstHalfOfEndDate',
          NoYes,
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
         * Static representation of the {@link secondHalfOfStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_HALF_OF_START_DATE: fieldBuilder.buildEnumField(
          'SecondHalfOfStartDate',
          NoYes,
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link leaveType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE: fieldBuilder.buildEdmTypeField(
          'LeaveType',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', LeaveOfAbsenceRequests)
      };
    }

    return this._schema;
  }
}
