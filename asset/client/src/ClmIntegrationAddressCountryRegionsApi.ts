/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClmIntegrationAddressCountryRegions } from './ClmIntegrationAddressCountryRegions';
import { ClmIntegrationAddressCountryRegionsRequestBuilder } from './ClmIntegrationAddressCountryRegionsRequestBuilder';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
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
export class ClmIntegrationAddressCountryRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ClmIntegrationAddressCountryRegions<DeSerializersT>,
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
  ): ClmIntegrationAddressCountryRegionsApi<DeSerializersT> {
    return new ClmIntegrationAddressCountryRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      ClmIntegrationAddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AddressCountryRegionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ClmIntegrationAddressCountryRegions;

  requestBuilder(): ClmIntegrationAddressCountryRegionsRequestBuilder<DeSerializersT> {
    return new ClmIntegrationAddressCountryRegionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ClmIntegrationAddressCountryRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ClmIntegrationAddressCountryRegions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClmIntegrationAddressCountryRegions<DeSerializersT>,
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
    typeof ClmIntegrationAddressCountryRegions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClmIntegrationAddressCountryRegions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      ClmIntegrationAddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LONG_NAME: OrderableEdmTypeField<
      ClmIntegrationAddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      ClmIntegrationAddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      ClmIntegrationAddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ClmIntegrationAddressCountryRegions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link longName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_NAME: fieldBuilder.buildEdmTypeField(
          'LongName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClmIntegrationAddressCountryRegions)
      };
    }

    return this._schema;
  }
}
