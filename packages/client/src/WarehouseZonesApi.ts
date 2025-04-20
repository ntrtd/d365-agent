/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseZones } from './WarehouseZones';
import { WarehouseZonesRequestBuilder } from './WarehouseZonesRequestBuilder';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { WarehouseZoneGroupsApi } from './WarehouseZoneGroupsApi';
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
export class WarehouseZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseZones<DeSerializersT>, DeSerializersT>
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
  ): WarehouseZonesApi<DeSerializersT> {
    return new WarehouseZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link secondAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link firstAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIRST_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link thirdAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    THIRD_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseZoneGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_ZONE_GROUP: OneToOneLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseZoneGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseZoneGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SECOND_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: new OneToManyLink(
        'SecondAdditionalZoneWarehouseLocations',
        this,
        linkedApis[0]
      ),
      FIRST_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: new OneToManyLink(
        'FirstAdditionalZoneWarehouseLocations',
        this,
        linkedApis[1]
      ),
      THIRD_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: new OneToManyLink(
        'ThirdAdditionalZoneWarehouseLocations',
        this,
        linkedApis[2]
      ),
      WAREHOUSE_LOCATIONS: new OneToManyLink(
        'WarehouseLocations',
        this,
        linkedApis[3]
      ),
      WAREHOUSE_ZONE_GROUP: new OneToOneLink(
        'WarehouseZoneGroup',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = WarehouseZones;

  requestBuilder(): WarehouseZonesRequestBuilder<DeSerializersT> {
    return new WarehouseZonesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseZones<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WarehouseZones<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WarehouseZones, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WarehouseZones, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE_ID: OrderableEdmTypeField<
      WarehouseZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE_NAME: OrderableEdmTypeField<
      WarehouseZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ZONE_GROUP_ID: OrderableEdmTypeField<
      WarehouseZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link secondAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link firstAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIRST_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link thirdAdditionalZoneWarehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    THIRD_ADDITIONAL_ZONE_WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseZoneGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_ZONE_GROUP: OneToOneLink<
      WarehouseZones<DeSerializersT>,
      DeSerializersT,
      WarehouseZoneGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseZones<DeSerializers>>;
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
         * Static representation of the {@link zoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_ID: fieldBuilder.buildEdmTypeField('ZoneId', 'Edm.String', false),
        /**
         * Static representation of the {@link zoneName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_NAME: fieldBuilder.buildEdmTypeField(
          'ZoneName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseZoneGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ZONE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseZoneGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseZones)
      };
    }

    return this._schema;
  }
}
