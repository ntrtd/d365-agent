/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseDestinationAddressTransportationTimes } from './PurchaseDestinationAddressTransportationTimes';
import { PurchaseDestinationAddressTransportationTimesRequestBuilder } from './PurchaseDestinationAddressTransportationTimesRequestBuilder';
import { AddressStatesApi } from './AddressStatesApi';
import { AddressCitiesApi } from './AddressCitiesApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { AddressPostalCodesV3Api } from './AddressPostalCodesV3Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseDestinationAddressTransportationTimesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
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
  ): PurchaseDestinationAddressTransportationTimesApi<DeSerializersT> {
    return new PurchaseDestinationAddressTransportationTimesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link shippingStates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_STATES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingCities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_CITIES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCounties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_COUNTIES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCountryRegions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_COUNTRY_REGIONS: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingZipCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_ZIP_CODES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressPostalCodesV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressStatesApi<DeSerializersT>,
      AddressCitiesApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      AddressPostalCodesV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SHIPPING_STATES: new OneToOneLink('ShippingStates', this, linkedApis[0]),
      RECEIVING_CITIES: new OneToOneLink(
        'ReceivingCities',
        this,
        linkedApis[1]
      ),
      SHIPPING_COUNTIES: new OneToOneLink(
        'ShippingCounties',
        this,
        linkedApis[2]
      ),
      SHIPPING_COUNTRY_REGIONS: new OneToOneLink(
        'ShippingCountryRegions',
        this,
        linkedApis[3]
      ),
      SHIPPING_ZIP_CODES: new OneToOneLink(
        'ShippingZipCodes',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PurchaseDestinationAddressTransportationTimes;

  requestBuilder(): PurchaseDestinationAddressTransportationTimesRequestBuilder<DeSerializersT> {
    return new PurchaseDestinationAddressTransportationTimesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
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
    typeof PurchaseDestinationAddressTransportationTimes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseDestinationAddressTransportationTimes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVING_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVING_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVING_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVING_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_ADDRESS_ADDRESS: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_ADDRESS: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TRANSPORTATION_DAYS: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIVING_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingStates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_STATES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingCities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_CITIES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCounties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_COUNTIES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCountryRegions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_COUNTRY_REGIONS: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingZipCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_ZIP_CODES: OneToOneLink<
      PurchaseDestinationAddressTransportationTimes<DeSerializersT>,
      DeSerializersT,
      AddressPostalCodesV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      PurchaseDestinationAddressTransportationTimes<DeSerializers>
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
         * Static representation of the {@link receivingAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressZipCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ShippingAddressZipCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ShippingAddressAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTransportationDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRANSPORTATION_DAYS: fieldBuilder.buildEdmTypeField(
          'DefaultTransportationDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCity',
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
          PurchaseDestinationAddressTransportationTimes
        )
      };
    }

    return this._schema;
  }
}
