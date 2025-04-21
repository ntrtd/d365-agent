/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveTypeSuspensionRelationships } from './LeaveTypeSuspensionRelationships';
import { LeaveTypeSuspensionRelationshipsRequestBuilder } from './LeaveTypeSuspensionRelationshipsRequestBuilder';
import { LeaveTypesApi } from './LeaveTypesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveTypeSuspensionRelationshipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaveTypeSuspensionRelationships<DeSerializersT>, DeSerializersT>
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
  ): LeaveTypeSuspensionRelationshipsApi<DeSerializersT> {
    return new LeaveTypeSuspensionRelationshipsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link suspendedByLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_BY_LEAVE_TYPE: OneToOneLink<
      LeaveTypeSuspensionRelationships<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link suspendedLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_LEAVE_TYPE: OneToOneLink<
      LeaveTypeSuspensionRelationships<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LeaveTypesApi<DeSerializersT>, LeaveTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUSPENDED_BY_LEAVE_TYPE: new OneToOneLink(
        'SuspendedByLeaveType',
        this,
        linkedApis[0]
      ),
      SUSPENDED_LEAVE_TYPE: new OneToOneLink(
        'SuspendedLeaveType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = LeaveTypeSuspensionRelationships;

  requestBuilder(): LeaveTypeSuspensionRelationshipsRequestBuilder<DeSerializersT> {
    return new LeaveTypeSuspensionRelationshipsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeaveTypeSuspensionRelationships<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaveTypeSuspensionRelationships<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveTypeSuspensionRelationships<DeSerializersT>,
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
    typeof LeaveTypeSuspensionRelationships,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveTypeSuspensionRelationships,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveTypeSuspensionRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUSPENDED_BY_LEAVE_TYPE_TYPE: OrderableEdmTypeField<
      LeaveTypeSuspensionRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUSPENDED_LEAVE_TYPE_TYPE: OrderableEdmTypeField<
      LeaveTypeSuspensionRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link suspendedByLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_BY_LEAVE_TYPE: OneToOneLink<
      LeaveTypeSuspensionRelationships<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link suspendedLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUSPENDED_LEAVE_TYPE: OneToOneLink<
      LeaveTypeSuspensionRelationships<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveTypeSuspensionRelationships<DeSerializers>>;
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
         * Static representation of the {@link suspendedByLeaveTypeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_BY_LEAVE_TYPE_TYPE: fieldBuilder.buildEdmTypeField(
          'SuspendedByLeaveType_Type',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link suspendedLeaveTypeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_LEAVE_TYPE_TYPE: fieldBuilder.buildEdmTypeField(
          'SuspendedLeaveType_Type',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveTypeSuspensionRelationships)
      };
    }

    return this._schema;
  }
}
