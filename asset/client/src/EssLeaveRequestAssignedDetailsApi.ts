/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLeaveRequestAssignedDetails } from './EssLeaveRequestAssignedDetails';
import { EssLeaveRequestAssignedDetailsRequestBuilder } from './EssLeaveRequestAssignedDetailsRequestBuilder';
import { EssLeaveTypesApi } from './EssLeaveTypesApi';
import { EssLeaveRequestAssignedHeadersApi } from './EssLeaveRequestAssignedHeadersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EssLeaveRequestAssignedDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EssLeaveRequestAssignedDetails<DeSerializersT>, DeSerializersT>
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
  ): EssLeaveRequestAssignedDetailsApi<DeSerializersT> {
    return new EssLeaveRequestAssignedDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      EssLeaveRequestAssignedDetails<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      EssLeaveRequestAssignedDetails<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EssLeaveTypesApi<DeSerializersT>,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[0]),
      REQUEST: new OneToOneLink('Request', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EssLeaveRequestAssignedDetails;

  requestBuilder(): EssLeaveRequestAssignedDetailsRequestBuilder<DeSerializersT> {
    return new EssLeaveRequestAssignedDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EssLeaveRequestAssignedDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssLeaveRequestAssignedDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssLeaveRequestAssignedDetails<DeSerializersT>,
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
    typeof EssLeaveRequestAssignedDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLeaveRequestAssignedDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_DATE: OrderableEdmTypeField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      EssLeaveRequestAssignedDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      EssLeaveRequestAssignedDetails<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      EssLeaveRequestAssignedDetails<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssLeaveRequestAssignedDetails<DeSerializers>>;
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
         * Static representation of the {@link halfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'HalfDayDefinition',
          LeaveHalfDayDefinition,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLeaveRequestAssignedDetails)
      };
    }

    return this._schema;
  }
}
