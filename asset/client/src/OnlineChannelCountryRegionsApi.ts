/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnlineChannelCountryRegions } from './OnlineChannelCountryRegions';
import { OnlineChannelCountryRegionsRequestBuilder } from './OnlineChannelCountryRegionsRequestBuilder';
import { OnlineChannelsApi } from './OnlineChannelsApi';
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
export class OnlineChannelCountryRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnlineChannelCountryRegions<DeSerializersT>, DeSerializersT>
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
  ): OnlineChannelCountryRegionsApi<DeSerializersT> {
    return new OnlineChannelCountryRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      OnlineChannelCountryRegions<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OnlineChannelsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL: new OneToOneLink('OnlineChannel', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = OnlineChannelCountryRegions;

  requestBuilder(): OnlineChannelCountryRegionsRequestBuilder<DeSerializersT> {
    return new OnlineChannelCountryRegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OnlineChannelCountryRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnlineChannelCountryRegions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnlineChannelCountryRegions<DeSerializersT>,
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
    typeof OnlineChannelCountryRegions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnlineChannelCountryRegions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      OnlineChannelCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      OnlineChannelCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      OnlineChannelCountryRegions<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnlineChannelCountryRegions<DeSerializers>>;
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
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnlineChannelCountryRegions)
      };
    }

    return this._schema;
  }
}
