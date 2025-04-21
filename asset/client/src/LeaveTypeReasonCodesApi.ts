/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaveTypeReasonCodes } from './LeaveTypeReasonCodes';
import { LeaveTypeReasonCodesRequestBuilder } from './LeaveTypeReasonCodesRequestBuilder';
import { LeaveRequestsApi } from './LeaveRequestsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaveTypeReasonCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaveTypeReasonCodes<DeSerializersT>, DeSerializersT>
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
  ): LeaveTypeReasonCodesApi<DeSerializersT> {
    return new LeaveTypeReasonCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link requests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTS: OneToManyLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeaveRequestsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REQUESTS: new OneToManyLink('Requests', this, linkedApis[0]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[1]),
      TYPE: new OneToOneLink('Type', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = LeaveTypeReasonCodes;

  requestBuilder(): LeaveTypeReasonCodesRequestBuilder<DeSerializersT> {
    return new LeaveTypeReasonCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaveTypeReasonCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaveTypeReasonCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaveTypeReasonCodes<DeSerializersT>,
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
    typeof LeaveTypeReasonCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaveTypeReasonCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaveTypeReasonCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE: OrderableEdmTypeField<
      LeaveTypeReasonCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      LeaveTypeReasonCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTS: OneToManyLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeaveTypeReasonCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaveTypeReasonCodes<DeSerializers>>;
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
         * Static representation of the {@link leaveType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE: fieldBuilder.buildEdmTypeField(
          'LeaveType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaveTypeReasonCodes)
      };
    }

    return this._schema;
  }
}
