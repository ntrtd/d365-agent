/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveBuySellRequests } from './LeaveBuySellRequests';
import { LeaveBuySellRequestsRequestBuilder } from './LeaveBuySellRequestsRequestBuilder';
import { LeaveBuySellPoliciesApi } from './LeaveBuySellPoliciesApi';
import { LeaveTypesApi } from './LeaveTypesApi';
import { WorkersApi } from './WorkersApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveBuySellRequestType } from './LeaveBuySellRequestType';
import { LeaveBuySellRequestApprovalStatus } from './LeaveBuySellRequestApprovalStatus';
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
export class LeaveBuySellRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveBuySellRequests<DeSerializersT>, DeSerializersT>
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
  ): LeaveBuySellRequestsApi<DeSerializersT> {
    return new LeaveBuySellRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveBuySellPoliciesApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_BUY_SELL_POLICY: new OneToOneLink(
        'LeaveBuySellPolicy',
        this,
        linkedApis[0]
      ),
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = LeaveBuySellRequests;

  requestBuilder(): LeaveBuySellRequestsRequestBuilder<DeSerializersT> {
    return new LeaveBuySellRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveBuySellRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveBuySellRequests<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveBuySellRequests<DeSerializersT>,
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
    typeof LeaveBuySellRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveBuySellRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    REQUEST_TYPE: EnumField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      LeaveBuySellRequestType,
      true,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_ID: OrderableEdmTypeField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      LeaveBuySellRequestApprovalStatus,
      true,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      LeaveBuySellRequests<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveBuySellPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveBuySellRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveBuySellRequests<DeSerializers>>;
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
          LeaveBuySellRequestType,
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
         * Static representation of the {@link policyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_ID: fieldBuilder.buildEdmTypeField(
          'PolicyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LeaveBuySellRequestApprovalStatus,
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
        ALL_FIELDS: new AllFields('*', LeaveBuySellRequests)
      };
    }

    return this._schema;
  }
}
