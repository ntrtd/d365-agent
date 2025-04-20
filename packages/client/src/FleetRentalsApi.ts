/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FleetRentals } from './FleetRentals';
import { FleetRentalsRequestBuilder } from './FleetRentalsRequestBuilder';
import { FleetCustomersApi } from './FleetCustomersApi';
import { FmReservationState } from './FmReservationState';
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
export class FleetRentalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FleetRentals<DeSerializersT>, DeSerializersT>
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
  ): FleetRentalsApi<DeSerializersT> {
    return new FleetRentalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ROLE: OneToOneLink<
      FleetRentals<DeSerializersT>,
      DeSerializersT,
      FleetCustomersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FleetCustomersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_ROLE: new OneToOneLink('CustomerRole', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FleetRentals;

  requestBuilder(): FleetRentalsRequestBuilder<DeSerializersT> {
    return new FleetRentalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FleetRentals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FleetRentals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FleetRentals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FleetRentals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FleetRentals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RENTAL_ID: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_MILEAGE: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VEHICLE_RATE_PER_DAY: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_DRIVER_LICENSE: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_RATE_TOTAL: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEHICLE_ID: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_FUEL_LEVEL: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_LAST_NAME: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_MILEAGE: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VEHICLE_VIN: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEHICLE_RATE_PER_WEEK: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_FIRST_NAME: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: EnumField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      FmReservationState,
      true,
      true
    >;
    END_FUEL_LEVEL: OrderableEdmTypeField<
      FleetRentals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ROLE: OneToOneLink<
      FleetRentals<DeSerializersT>,
      DeSerializersT,
      FleetCustomersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FleetRentals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rentalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTAL_ID: fieldBuilder.buildEdmTypeField(
          'RentalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startMileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_MILEAGE: fieldBuilder.buildEdmTypeField(
          'StartMileage',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vehicleRatePerDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_RATE_PER_DAY: fieldBuilder.buildEdmTypeField(
          'VehicleRatePerDay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerDriverLicense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DRIVER_LICENSE: fieldBuilder.buildEdmTypeField(
          'CustomerDriverLicense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleRateTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_RATE_TOTAL: fieldBuilder.buildEdmTypeField(
          'VehicleRateTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vehicleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_ID: fieldBuilder.buildEdmTypeField(
          'VehicleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startFuelLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FUEL_LEVEL: fieldBuilder.buildEdmTypeField(
          'StartFuelLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endMileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_MILEAGE: fieldBuilder.buildEdmTypeField(
          'EndMileage',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vehicleVin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_VIN: fieldBuilder.buildEdmTypeField(
          'VehicleVIN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vehicleRatePerWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_RATE_PER_WEEK: fieldBuilder.buildEdmTypeField(
          'VehicleRatePerWeek',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEnumField('State', FmReservationState, true),
        /**
         * Static representation of the {@link endFuelLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FUEL_LEVEL: fieldBuilder.buildEdmTypeField(
          'EndFuelLevel',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FleetRentals)
      };
    }

    return this._schema;
  }
}
