/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsPostalAddressLocations } from './CdsPostalAddressLocations';
import { CdsPostalAddressLocationsRequestBuilder } from './CdsPostalAddressLocationsRequestBuilder';
import { PostalAddressElectronicContactsV2Api } from './PostalAddressElectronicContactsV2Api';
import { CdsPostalAddressHistoryApi } from './CdsPostalAddressHistoryApi';
import { CdsPartyPostalAddressLocationsApi } from './CdsPartyPostalAddressLocationsApi';
import { CdsPostalAddressHistoryV2Api } from './CdsPostalAddressHistoryV2Api';
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
export class CdsPostalAddressLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsPostalAddressLocations<DeSerializersT>, DeSerializersT>
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
  ): CdsPostalAddressLocationsApi<DeSerializersT> {
    return new CdsPostalAddressLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link postalAddressElectronicContactV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSTAL_ADDRESS_ELECTRONIC_CONTACT_V_2: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      PostalAddressElectronicContactsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPostalAddressHistory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_HISTORY: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPartyPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY_POSTAL_ADDRESS_LOCATION: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPostalAddressHistoryV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_HISTORY_V_2: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressHistoryV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PostalAddressElectronicContactsV2Api<DeSerializersT>,
      CdsPostalAddressHistoryApi<DeSerializersT>,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>,
      CdsPostalAddressHistoryV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSTAL_ADDRESS_ELECTRONIC_CONTACT_V_2: new OneToManyLink(
        'PostalAddressElectronicContactV2',
        this,
        linkedApis[0]
      ),
      CDS_POSTAL_ADDRESS_HISTORY: new OneToManyLink(
        'CDSPostalAddressHistory',
        this,
        linkedApis[1]
      ),
      CDS_PARTY_POSTAL_ADDRESS_LOCATION: new OneToManyLink(
        'CDSPartyPostalAddressLocation',
        this,
        linkedApis[2]
      ),
      CDS_POSTAL_ADDRESS_HISTORY_V_2: new OneToManyLink(
        'CDSPostalAddressHistoryV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = CdsPostalAddressLocations;

  requestBuilder(): CdsPostalAddressLocationsRequestBuilder<DeSerializersT> {
    return new CdsPostalAddressLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsPostalAddressLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsPostalAddressLocations<DeSerializersT>,
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
    typeof CdsPostalAddressLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsPostalAddressLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION_ID: OrderableEdmTypeField<
      CdsPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_LOCATION_ID: OrderableEdmTypeField<
      CdsPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CdsPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link postalAddressElectronicContactV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSTAL_ADDRESS_ELECTRONIC_CONTACT_V_2: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      PostalAddressElectronicContactsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPostalAddressHistory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_HISTORY: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPartyPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY_POSTAL_ADDRESS_LOCATION: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPartyPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsPostalAddressHistoryV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_HISTORY_V_2: OneToManyLink<
      CdsPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressHistoryV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsPostalAddressLocations<DeSerializers>>;
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
         * Static representation of the {@link parentLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ParentLocationId',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsPostalAddressLocations)
      };
    }

    return this._schema;
  }
}
