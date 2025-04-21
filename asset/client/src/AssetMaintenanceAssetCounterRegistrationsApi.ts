/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetCounterRegistrations } from './AssetMaintenanceAssetCounterRegistrations';
import { AssetMaintenanceAssetCounterRegistrationsRequestBuilder } from './AssetMaintenanceAssetCounterRegistrationsRequestBuilder';
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
export class AssetMaintenanceAssetCounterRegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetCounterRegistrations<DeSerializersT>,
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
  ): AssetMaintenanceAssetCounterRegistrationsApi<DeSerializersT> {
    return new AssetMaintenanceAssetCounterRegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceAssetCounterRegistrations;

  requestBuilder(): AssetMaintenanceAssetCounterRegistrationsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetCounterRegistrationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetCounterRegistrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetCounterRegistrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetCounterRegistrations<DeSerializersT>,
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
    typeof AssetMaintenanceAssetCounterRegistrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetCounterRegistrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTER_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTER_REPLACED: EnumField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_REGISTRATION_REPLACED: EnumField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_REGISTRATION_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARENT_REGISTRATION_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER_VALUE: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_REGISTRATION_COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceAssetCounterRegistrations<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link counterDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CounterDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link counterReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_REPLACED: fieldBuilder.buildEnumField(
          'CounterReplaced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link counterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'CounterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentRegistrationReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REGISTRATION_REPLACED: fieldBuilder.buildEnumField(
          'ParentRegistrationReplaced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentRegistrationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REGISTRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ParentRegistrationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parentRegistrationMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REGISTRATION_MAINTENANCE_ASSET_ID:
          fieldBuilder.buildEdmTypeField(
            'ParentRegistrationMaintenanceAssetId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link counterValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_VALUE: fieldBuilder.buildEdmTypeField(
          'CounterValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentRegistrationCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REGISTRATION_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'ParentRegistrationCounterId',
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
          AssetMaintenanceAssetCounterRegistrations
        )
      };
    }

    return this._schema;
  }
}
