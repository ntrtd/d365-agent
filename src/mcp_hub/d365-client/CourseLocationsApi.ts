/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseLocations } from './CourseLocations';
import { CourseLocationsRequestBuilder } from './CourseLocationsRequestBuilder';
import { CourseRoomsApi } from './CourseRoomsApi';
import { CourseInstructorsApi } from './CourseInstructorsApi';
import { CourseLocationHotelsApi } from './CourseLocationHotelsApi';
import { CourseTablesApi } from './CourseTablesApi';
import { CourseHotelsApi } from './CourseHotelsApi';
import { CoursesApi } from './CoursesApi';
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
export class CourseLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseLocations<DeSerializersT>, DeSerializersT>
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
  ): CourseLocationsApi<DeSerializersT> {
    return new CourseLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link courseRooms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOMS: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseInstructors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTORS: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_HOTEL: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseRoomsApi<DeSerializersT>,
      CourseInstructorsApi<DeSerializersT>,
      CourseLocationHotelsApi<DeSerializersT>,
      CourseTablesApi<DeSerializersT>,
      CourseHotelsApi<DeSerializersT>,
      CoursesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE_ROOMS: new OneToManyLink('CourseRooms', this, linkedApis[0]),
      COURSE_INSTRUCTORS: new OneToManyLink(
        'CourseInstructors',
        this,
        linkedApis[1]
      ),
      COURSE_LOCATION_HOTEL: new OneToManyLink(
        'CourseLocationHotel',
        this,
        linkedApis[2]
      ),
      COURSE_TABLE: new OneToManyLink('CourseTable', this, linkedApis[3]),
      COURSE_HOTEL: new OneToManyLink('CourseHotel', this, linkedApis[4]),
      COURSE: new OneToManyLink('Course', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = CourseLocations;

  requestBuilder(): CourseLocationsRequestBuilder<DeSerializersT> {
    return new CourseLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseLocations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseLocations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseLocations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX_NUMBER: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      CourseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseRooms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOMS: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseInstructors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTORS: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_HOTEL: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CourseHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseLocations<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseLocations<DeSerializers>>;
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
         * Static representation of the {@link courseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LOCATION: fieldBuilder.buildEdmTypeField(
          'CourseLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
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
        /**
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
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
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telexNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEX_NUMBER: fieldBuilder.buildEdmTypeField(
          'TelexNumber',
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
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
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
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseLocations)
      };
    }

    return this._schema;
  }
}
