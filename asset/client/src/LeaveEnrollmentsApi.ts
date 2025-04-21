/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveEnrollments } from './LeaveEnrollments';
import { LeaveEnrollmentsRequestBuilder } from './LeaveEnrollmentsRequestBuilder';
import { LeaveRequestsApi } from './LeaveRequestsApi';
import { WorkersApi } from './WorkersApi';
import { LeavePlansApi } from './LeavePlansApi';
import { NoYes } from './NoYes';
import { LeaveTierBasis } from './LeaveTierBasis';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveEnrollmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveEnrollments<DeSerializersT>, DeSerializersT>
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
  ): LeaveEnrollmentsApi<DeSerializersT> {
    return new LeaveEnrollmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link requests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTS: OneToManyLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveRequestsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      LeavePlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REQUESTS: new OneToManyLink('Requests', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      PLAN: new OneToOneLink('Plan', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = LeaveEnrollments;

  requestBuilder(): LeaveEnrollmentsRequestBuilder<DeSerializersT> {
    return new LeaveEnrollmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveEnrollments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveEnrollments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaveEnrollments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaveEnrollments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveEnrollments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ACCRUAL_SUSPENDED: EnumField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIER_BASIS: EnumField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      LeaveTierBasis,
      true,
      true
    >;
    ACCRUAL_DATE_BASIS: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCRUAL_START_DATE: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOM_DATE: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEAVE_TYPE: OrderableEdmTypeField<
      LeaveEnrollments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTS: OneToManyLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeaveEnrollments<DeSerializersT>,
      DeSerializersT,
      LeavePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveEnrollments<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leavePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'LeavePlanId',
          'Edm.String',
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
         * Static representation of the {@link isAccrualSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACCRUAL_SUSPENDED: fieldBuilder.buildEnumField(
          'IsAccrualSuspended',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tierBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_BASIS: fieldBuilder.buildEnumField(
          'TierBasis',
          LeaveTierBasis,
          true
        ),
        /**
         * Static representation of the {@link accrualDateBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_DATE_BASIS: fieldBuilder.buildEdmTypeField(
          'AccrualDateBasis',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accrualStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'AccrualStartDate',
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
         * Static representation of the {@link customDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DATE: fieldBuilder.buildEdmTypeField(
          'CustomDate',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveEnrollments)
      };
    }

    return this._schema;
  }
}
