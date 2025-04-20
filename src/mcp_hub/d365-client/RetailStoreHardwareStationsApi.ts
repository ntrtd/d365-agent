/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreHardwareStations } from './RetailStoreHardwareStations';
import { RetailStoreHardwareStationsRequestBuilder } from './RetailStoreHardwareStationsRequestBuilder';
import { RetailStoresApi } from './RetailStoresApi';
import { RetailHardwareStationsApi } from './RetailHardwareStationsApi';
import { RetailHardwareStationEnumType } from './RetailHardwareStationEnumType';
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
export class RetailStoreHardwareStationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStoreHardwareStations<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreHardwareStationsApi<DeSerializersT> {
    return new RetailStoreHardwareStationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_HARDWARE_STATION: OneToOneLink<
      RetailStoreHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailHardwareStationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailStoresApi<DeSerializersT>,
      RetailHardwareStationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_STORE: new OneToOneLink('RetailStore', this, linkedApis[0]),
      RETAIL_HARDWARE_STATION: new OneToOneLink(
        'RetailHardwareStation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailStoreHardwareStations;

  requestBuilder(): RetailStoreHardwareStationsRequestBuilder<DeSerializersT> {
    return new RetailStoreHardwareStationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreHardwareStations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreHardwareStations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreHardwareStations<DeSerializersT>,
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
    typeof RetailStoreHardwareStations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreHardwareStations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STORE_NUMBER: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFT_TERMINAL_ID: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOST_NAME: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HARDWARE_PROFILE_ID: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERGED_SELF_SERVICE_PACKAGE_REFERENCE: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SELF_SERVICE_PACKAGE: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HARDWARE_STATION_TYPE: EnumField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      RetailHardwareStationEnumType,
      true,
      true
    >;
    CERTIFICATE_THUMBPRINT: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARDWARE_STATION_ID: OrderableEdmTypeField<
      RetailStoreHardwareStations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailHardwareStation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_HARDWARE_STATION: OneToOneLink<
      RetailStoreHardwareStations<DeSerializersT>,
      DeSerializersT,
      RetailHardwareStationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreHardwareStations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eftTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFT_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'EftTerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hostName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOST_NAME: fieldBuilder.buildEdmTypeField(
          'HostName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hardwareProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'HardwareProfileId',
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
         * Static representation of the {@link selfServicePackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_SERVICE_PACKAGE: fieldBuilder.buildEdmTypeField(
          'SelfServicePackage',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.Int32', false),
        /**
         * Static representation of the {@link hardwareStationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_TYPE: fieldBuilder.buildEnumField(
          'HardwareStationType',
          RetailHardwareStationEnumType,
          true
        ),
        /**
         * Static representation of the {@link certificateThumbprint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_THUMBPRINT: fieldBuilder.buildEdmTypeField(
          'CertificateThumbprint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hardwareStationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_STATION_ID: fieldBuilder.buildEdmTypeField(
          'HardwareStationId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreHardwareStations)
      };
    }

    return this._schema;
  }
}
