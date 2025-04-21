/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxRegions } from './TaxRegions';
import { TaxRegionsRequestBuilder } from './TaxRegionsRequestBuilder';
import { WorkerTaxRegionsApi } from './WorkerTaxRegionsApi';
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
export class TaxRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxRegions<DeSerializersT>, DeSerializersT>
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
  ): TaxRegionsApi<DeSerializersT> {
    return new TaxRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workerTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_REGION: OneToManyLink<
      TaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkerTaxRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerTaxRegionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER_TAX_REGION: new OneToManyLink(
        'WorkerTaxRegion',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TaxRegions;

  requestBuilder(): TaxRegionsRequestBuilder<DeSerializersT> {
    return new TaxRegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxRegions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxRegions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxRegions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxRegions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION_ID: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REGION_NAME: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      TaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_REGION: OneToManyLink<
      TaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkerTaxRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxRegions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link countryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link taxRegionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGION_NAME: fieldBuilder.buildEdmTypeField(
          'TaxRegionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxRegions)
      };
    }

    return this._schema;
  }
}
