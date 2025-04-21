/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MssLeaveRequestDates } from './MssLeaveRequestDates';
import { MssLeaveRequestDatesRequestBuilder } from './MssLeaveRequestDatesRequestBuilder';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
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
export class MssLeaveRequestDatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MssLeaveRequestDates<DeSerializersT>, DeSerializersT>
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
  ): MssLeaveRequestDatesApi<DeSerializersT> {
    return new MssLeaveRequestDatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MssLeaveRequestDates;

  requestBuilder(): MssLeaveRequestDatesRequestBuilder<DeSerializersT> {
    return new MssLeaveRequestDatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MssLeaveRequestDates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MssLeaveRequestDates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MssLeaveRequestDates<DeSerializersT>,
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
    typeof MssLeaveRequestDates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MssLeaveRequestDates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_DATE: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVE_REQUEST_STATUS: EnumField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      MssLeaveRequestDates<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MssLeaveRequestDates<DeSerializers>>;
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
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leaveRequestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_REQUEST_STATUS: fieldBuilder.buildEnumField(
          'LeaveRequestStatus',
          LeaveRequestApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link managerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManagerPersonnelNumber',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MssLeaveRequestDates)
      };
    }

    return this._schema;
  }
}
