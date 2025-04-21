/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerPostalAddressesV2 } from './WorkerPostalAddressesV2';
import { WorkerPostalAddressesV2RequestBuilder } from './WorkerPostalAddressesV2RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
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
export class WorkerPostalAddressesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerPostalAddressesV2<DeSerializersT>, DeSerializersT>
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
  ): WorkerPostalAddressesV2Api<DeSerializersT> {
    return new WorkerPostalAddressesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerPostalAddressesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WorkerPostalAddressesV2;

  requestBuilder(): WorkerPostalAddressesV2RequestBuilder<DeSerializersT> {
    return new WorkerPostalAddressesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerPostalAddressesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerPostalAddressesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerPostalAddressesV2<DeSerializersT>,
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
    typeof WorkerPostalAddressesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerPostalAddressesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_POST_BOX: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTENTION_TO_ADDRESS_LINE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_TAX_REGISTRATION: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIVATE_POSTAL_ADDRESS: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_INVOICE: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ROLE_HOME: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_BUSINESS: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_DELIVERY: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCATION_OWNER: EnumField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FORMATTED_ADDRESS: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_APARTMENT: OrderableEdmTypeField<
      WorkerPostalAddressesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerPostalAddressesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerPostalAddressesV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link addressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'AddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attentionToAddressLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTENTION_TO_ADDRESS_LINE: fieldBuilder.buildEdmTypeField(
          'AttentionToAddressLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBuilding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING: fieldBuilder.buildEdmTypeField(
          'AddressBuilding',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryTaxRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_TAX_REGISTRATION: fieldBuilder.buildEnumField(
          'IsPrimaryTaxRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPrivatePostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE_POSTAL_ADDRESS: fieldBuilder.buildEnumField(
          'IsPrivatePostalAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRoleInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_INVOICE: fieldBuilder.buildEnumField(
          'IsRoleInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isRoleHome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_HOME: fieldBuilder.buildEnumField('IsRoleHome', NoYes, true),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRoleBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_BUSINESS: fieldBuilder.buildEnumField(
          'IsRoleBusiness',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'BuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRoleDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_DELIVERY: fieldBuilder.buildEnumField(
          'IsRoleDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link formattedAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressApartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_APARTMENT: fieldBuilder.buildEdmTypeField(
          'AddressApartment',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerPostalAddressesV2)
      };
    }

    return this._schema;
  }
}
