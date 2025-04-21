/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveEnrollmentsV2 } from './LeaveEnrollmentsV2';
import { LeaveEnrollmentsV2RequestBuilder } from './LeaveEnrollmentsV2RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { LeavePlansV2Api } from './LeavePlansV2Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveEnrollmentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveEnrollmentsV2<DeSerializersT>, DeSerializersT>
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
  ): LeaveEnrollmentsV2Api<DeSerializersT> {
    return new LeaveEnrollmentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeaveEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkersApi<DeSerializersT>, LeavePlansV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      PLAN: new OneToOneLink('Plan', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LeaveEnrollmentsV2;

  requestBuilder(): LeaveEnrollmentsV2RequestBuilder<DeSerializersT> {
    return new LeaveEnrollmentsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveEnrollmentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveEnrollmentsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveEnrollmentsV2<DeSerializersT>,
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
    typeof LeaveEnrollmentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveEnrollmentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_PLAN_ID: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ACCRUAL_SUSPENDED: EnumField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIER_BASIS: EnumField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      LeaveTierBasis,
      true,
      true
    >;
    ACCRUAL_DATE_BASIS: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCRUAL_START_DATE: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOM_DATE: OrderableEdmTypeField<
      LeaveEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LeaveEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link plan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN: OneToOneLink<
      LeaveEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      LeavePlansV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveEnrollmentsV2<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveEnrollmentsV2)
      };
    }

    return this._schema;
  }
}
