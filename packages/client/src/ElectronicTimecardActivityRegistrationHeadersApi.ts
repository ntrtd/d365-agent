/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicTimecardActivityRegistrationHeaders } from './ElectronicTimecardActivityRegistrationHeaders';
import { ElectronicTimecardActivityRegistrationHeadersRequestBuilder } from './ElectronicTimecardActivityRegistrationHeadersRequestBuilder';
import { ElectronicTimecardActivityRegistrationLinesApi } from './ElectronicTimecardActivityRegistrationLinesApi';
import { NoYes } from './NoYes';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ElectronicTimecardActivityRegistrationHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
      DeSerializersT
    >
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
  ): ElectronicTimecardActivityRegistrationHeadersApi<DeSerializersT> {
    return new ElectronicTimecardActivityRegistrationHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link electronicTimecardActivityRegistrationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_LINES: OneToManyLink<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
      DeSerializersT,
      ElectronicTimecardActivityRegistrationLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ElectronicTimecardActivityRegistrationLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_LINES: new OneToManyLink(
        'ElectronicTimecardActivityRegistrationLines',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ElectronicTimecardActivityRegistrationHeaders;

  requestBuilder(): ElectronicTimecardActivityRegistrationHeadersRequestBuilder<DeSerializersT> {
    return new ElectronicTimecardActivityRegistrationHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
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
    typeof ElectronicTimecardActivityRegistrationHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicTimecardActivityRegistrationHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_DATE: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_TRANSFERRED: EnumField<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link electronicTimecardActivityRegistrationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_LINES: OneToManyLink<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializersT>,
      DeSerializersT,
      ElectronicTimecardActivityRegistrationLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ElectronicTimecardActivityRegistrationHeaders<DeSerializers>
    >;
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
         * Static representation of the {@link timeProfileDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_DATE: fieldBuilder.buildEdmTypeField(
          'TimeProfileDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFERRED: fieldBuilder.buildEnumField(
          'IsTransferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ElectronicTimecardActivityRegistrationHeaders
        )
      };
    }

    return this._schema;
  }
}
