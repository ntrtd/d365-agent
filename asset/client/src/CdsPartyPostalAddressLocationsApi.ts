/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsPartyPostalAddressLocations } from './CdsPartyPostalAddressLocations';
import { CdsPartyPostalAddressLocationsRequestBuilder } from './CdsPartyPostalAddressLocationsRequestBuilder';
import { CdsPostalAddressLocationsApi } from './CdsPostalAddressLocationsApi';
import { CdsPartiesApi } from './CdsPartiesApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsPartyPostalAddressLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsPartyPostalAddressLocations<DeSerializersT>, DeSerializersT>
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
  ): CdsPartyPostalAddressLocationsApi<DeSerializersT> {
    return new CdsPartyPostalAddressLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      CdsPartyPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CdsPartyPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsPostalAddressLocationsApi<DeSerializersT>,
      CdsPartiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_POSTAL_ADDRESS_LOCATION: new OneToOneLink(
        'CDSPostalAddressLocation',
        this,
        linkedApis[0]
      ),
      CDS_PARTY: new OneToOneLink('CDSParty', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CdsPartyPostalAddressLocations;

  requestBuilder(): CdsPartyPostalAddressLocationsRequestBuilder<DeSerializersT> {
    return new CdsPartyPostalAddressLocationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CdsPartyPostalAddressLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsPartyPostalAddressLocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsPartyPostalAddressLocations<DeSerializersT>,
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
    typeof CdsPartyPostalAddressLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsPartyPostalAddressLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCATION_OWNER: EnumField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIVATE: EnumField<
      CdsPartyPostalAddressLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      CdsPartyPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CdsPartyPostalAddressLocations<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsPartyPostalAddressLocations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isLocationOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOCATION_OWNER: fieldBuilder.buildEnumField(
          'IsLocationOwner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsPartyPostalAddressLocations)
      };
    }

    return this._schema;
  }
}
