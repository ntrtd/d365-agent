/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveRequestsV2 } from './LeaveRequestsV2';
import { LeaveRequestsV2RequestBuilder } from './LeaveRequestsV2RequestBuilder';
import { LeaveTypesApi } from './LeaveTypesApi';
import { WorkersApi } from './WorkersApi';
import { ReasonCodesApi } from './ReasonCodesApi';
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
export class LeaveRequestsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveRequestsV2<DeSerializersT>, DeSerializersT>
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
  ): LeaveRequestsV2Api<DeSerializersT> {
    return new LeaveRequestsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveRequestV2LeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_V_2_LEAVE_TYPE: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_REQUEST_V_2_LEAVE_TYPE: new OneToOneLink(
        'LeaveRequestV2LeaveType',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = LeaveRequestsV2;

  requestBuilder(): LeaveRequestsV2RequestBuilder<DeSerializersT> {
    return new LeaveRequestsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveRequestsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveRequestsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaveRequestsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaveRequestsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveRequestsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_DATE: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    IS_SUBMITTED_BY_ABSENCE_MANAGER: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      LeaveRequestsV2<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveRequestV2LeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_REQUEST_V_2_LEAVE_TYPE: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveRequestsV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveRequestsV2<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', LeaveRequestsV2)
      };
    }

    return this._schema;
  }
}
