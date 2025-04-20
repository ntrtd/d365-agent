/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceMobileAppUserSettings } from './AssetMaintenanceMobileAppUserSettings';
import { AssetMaintenanceMobileAppUserSettingsRequestBuilder } from './AssetMaintenanceMobileAppUserSettingsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceMobileAppUserSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceMobileAppUserSettings<DeSerializersT>,
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
  ): AssetMaintenanceMobileAppUserSettingsApi<DeSerializersT> {
    return new AssetMaintenanceMobileAppUserSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceMobileAppUserSettings;

  requestBuilder(): AssetMaintenanceMobileAppUserSettingsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceMobileAppUserSettingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceMobileAppUserSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceMobileAppUserSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceMobileAppUserSettings<DeSerializersT>,
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
    typeof AssetMaintenanceMobileAppUserSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceMobileAppUserSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKER_USER_ID: OrderableEdmTypeField<
      AssetMaintenanceMobileAppUserSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_USER_OBJECT_ID: OrderableEdmTypeField<
      AssetMaintenanceMobileAppUserSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    HAS_MAINTENANCE_WORKER_ROLE: EnumField<
      AssetMaintenanceMobileAppUserSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceMobileAppUserSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_MAINTENANCE_REQUESTER_ROLE: EnumField<
      AssetMaintenanceMobileAppUserSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceMobileAppUserSettings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workerUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_USER_ID: fieldBuilder.buildEdmTypeField(
          'WorkerUserId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workerUserObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_USER_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'WorkerUserObjectId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link hasMaintenanceWorkerRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_MAINTENANCE_WORKER_ROLE: fieldBuilder.buildEnumField(
          'HasMaintenanceWorkerRole',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasMaintenanceRequesterRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_MAINTENANCE_REQUESTER_ROLE: fieldBuilder.buildEnumField(
          'HasMaintenanceRequesterRole',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceMobileAppUserSettings)
      };
    }

    return this._schema;
  }
}
