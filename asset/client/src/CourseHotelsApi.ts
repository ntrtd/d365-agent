/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseHotels } from './CourseHotels';
import { CourseHotelsRequestBuilder } from './CourseHotelsRequestBuilder';
import { CourseLocationHotelsApi } from './CourseLocationHotelsApi';
import { CourseLocationsApi } from './CourseLocationsApi';
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
export class CourseHotelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseHotels<DeSerializersT>, DeSerializersT>
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
  ): CourseHotelsApi<DeSerializersT> {
    return new CourseHotelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      CourseHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION: OneToOneLink<
      CourseHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseLocationHotelsApi<DeSerializersT>,
      CourseLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE_LOCATION_HOTEL: new OneToManyLink(
        'CourseLocationHotel',
        this,
        linkedApis[0]
      ),
      COURSE_LOCATION: new OneToOneLink('CourseLocation', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CourseHotels;

  requestBuilder(): CourseHotelsRequestBuilder<DeSerializersT> {
    return new CourseHotelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseHotels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseHotels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseHotels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseHotels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CourseHotels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_LOCATION_ID: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOTEL_ID: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TELEX_NUMBER: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_EXTENSION: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      CourseHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      CourseHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION: OneToOneLink<
      CourseHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseHotels<DeSerializers>>;
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
         * Static representation of the {@link courseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'CourseLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hotelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOTEL_ID: fieldBuilder.buildEdmTypeField(
          'HotelId',
          'Edm.String',
          false
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
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link phoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
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
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseHotels)
      };
    }

    return this._schema;
  }
}
