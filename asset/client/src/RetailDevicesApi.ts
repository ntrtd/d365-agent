/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDevices } from './RetailDevices';
import { RetailDevicesRequestBuilder } from './RetailDevicesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailDeviceActivationStatusBase } from './RetailDeviceActivationStatusBase';
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
export class RetailDevicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailDevices<DeSerializersT>, DeSerializersT>
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
  ): RetailDevicesApi<DeSerializersT> {
    return new RetailDevicesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDevices;

  requestBuilder(): RetailDevicesRequestBuilder<DeSerializersT> {
    return new RetailDevicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailDevices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailDevices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailDevices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailDevices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailDevices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEVICE_ID: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERGED_SELF_SERVICE_PACKAGE_REFERENCE: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_DEVICE_TYPE: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_MASS_ACTIVATION: EnumField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEACTIVATED_DATE_TIME: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVATION_STAFF_ID: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_DEVICE_ID: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION_STATUS: EnumField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      RetailDeviceActivationStatusBase,
      true,
      true
    >;
    DEACTIVATION_STAFF_ID: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEACTIVATE_COMMENTS: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION_GUID: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACTIVATED_DATE_TIME: OrderableEdmTypeField<
      RetailDevices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailDevices<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deviceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_ID: fieldBuilder.buildEdmTypeField(
          'DeviceId',
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
         * Static representation of the {@link mergedSelfServicePackageReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERGED_SELF_SERVICE_PACKAGE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'MergedSelfServicePackageReference',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retailDeviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DEVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'RetailDeviceType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowMassActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MASS_ACTIVATION: fieldBuilder.buildEnumField(
          'AllowMassActivation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deactivatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEACTIVATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DeactivatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activationStaffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_STAFF_ID: fieldBuilder.buildEdmTypeField(
          'ActivationStaffId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalDeviceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_DEVICE_ID: fieldBuilder.buildEdmTypeField(
          'PhysicalDeviceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_STATUS: fieldBuilder.buildEnumField(
          'ActivationStatus',
          RetailDeviceActivationStatusBase,
          true
        ),
        /**
         * Static representation of the {@link deactivationStaffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEACTIVATION_STAFF_ID: fieldBuilder.buildEdmTypeField(
          'DeactivationStaffId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deactivateComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEACTIVATE_COMMENTS: fieldBuilder.buildEdmTypeField(
          'DeactivateComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activationGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_GUID: fieldBuilder.buildEdmTypeField(
          'ActivationGuid',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link activatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActivatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDevices)
      };
    }

    return this._schema;
  }
}
