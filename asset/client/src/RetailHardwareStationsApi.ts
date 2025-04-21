/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailHardwareStations } from './RetailHardwareStations';
import { RetailHardwareStationsRequestBuilder } from './RetailHardwareStationsRequestBuilder';
import { RetailStoreHardwareStationsApi } from './RetailStoreHardwareStationsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailHardwareStationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailHardwareStations<DeSerializersT>, DeSerializersT>
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
  ): RetailHardwareStationsApi<DeSerializersT> {
    return new RetailHardwareStationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_HARDWARE_STATION: OneToManyLink<
      RetailHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailStoreHardwareStationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailStoreHardwareStationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_STORE_HARDWARE_STATION: new OneToManyLink(
        'RetailStoreHardwareStation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailHardwareStations;

  requestBuilder(): RetailHardwareStationsRequestBuilder<DeSerializersT> {
    return new RetailHardwareStationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailHardwareStations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailHardwareStations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailHardwareStations<DeSerializersT>,
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
    typeof RetailHardwareStations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailHardwareStations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HARDWARE_STATION_ID: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERGED_SELF_SERVICE_PACKAGE_REFERENCE: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SELF_SERVICE_PACKAGE_NAME: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARDWARE_PROFILE_ID: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARDWARE_STATION_PORT_NUMBER: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HARDWARE_STATION_NAME: OrderableEdmTypeField<
      RetailHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_HARDWARE_STATION: OneToManyLink<
      RetailHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailStoreHardwareStationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailHardwareStations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hardwareStationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_ID: fieldBuilder.buildEdmTypeField(
          'HardwareStationId',
          'Edm.String',
          false
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
         * Static representation of the {@link selfServicePackageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_SERVICE_PACKAGE_NAME: fieldBuilder.buildEdmTypeField(
          'SelfServicePackageName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hardwareProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'HardwareProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hardwareStationPortNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_PORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'HardwareStationPortNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hardwareStationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_NAME: fieldBuilder.buildEdmTypeField(
          'HardwareStationName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailHardwareStations)
      };
    }

    return this._schema;
  }
}
