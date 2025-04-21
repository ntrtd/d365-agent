/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1JobTypes } from './PayIntV1JobTypes';
import { PayIntV1JobTypesRequestBuilder } from './PayIntV1JobTypesRequestBuilder';
import { NoYes } from './NoYes';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';
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
export class PayIntV1JobTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1JobTypes<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1JobTypesApi<DeSerializersT> {
    return new PayIntV1JobTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1JobTypes;

  requestBuilder(): PayIntV1JobTypesRequestBuilder<DeSerializersT> {
    return new PayIntV1JobTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1JobTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1JobTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayIntV1JobTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayIntV1JobTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1JobTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TYPE_ID: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYSTEM_MODIFIED_BY: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_CREATED_BY: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_HOURLY: EnumField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_CREATED_DATE_TIME: OrderableEdmTypeField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXEMPT_STATUS: EnumField<
      PayIntV1JobTypes<DeSerializers>,
      DeSerializersT,
      HcmJobTypeExemptStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1JobTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'System_ModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link systemModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'System_ModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'System_CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paidHourly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_HOURLY: fieldBuilder.buildEnumField('PaidHourly', NoYes, true),
        /**
         * Static representation of the {@link systemCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'System_CreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exemptStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_STATUS: fieldBuilder.buildEnumField(
          'ExemptStatus',
          HcmJobTypeExemptStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1JobTypes)
      };
    }

    return this._schema;
  }
}
