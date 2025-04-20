/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLoaRequestHeaders } from './EssLoaRequestHeaders';
import { EssLoaRequestHeadersRequestBuilder } from './EssLoaRequestHeadersRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class EssLoaRequestHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssLoaRequestHeaders<DeSerializersT>, DeSerializersT>
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
  ): EssLoaRequestHeadersApi<DeSerializersT> {
    return new EssLoaRequestHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EssLoaRequestHeaders;

  requestBuilder(): EssLoaRequestHeadersRequestBuilder<DeSerializersT> {
    return new EssLoaRequestHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLoaRequestHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EssLoaRequestHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssLoaRequestHeaders<DeSerializersT>,
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
    typeof EssLoaRequestHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLoaRequestHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELED: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    REQUEST_TYPE: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      LeaveRequestType,
      true,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    FIRST_HALF_OF_END_DATE: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_HALF_OF_START_DATE: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_REQUEST_ID: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_ABSENCE_MANAGER: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      EssLoaRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EssLoaRequestHeaders<DeSerializers>>;
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
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
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
         * Static representation of the {@link previousRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'PreviousRequestId',
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
        ALL_FIELDS: new AllFields('*', EssLoaRequestHeaders)
      };
    }

    return this._schema;
  }
}
