/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceTimeProfiles } from './TimeAndAttendanceTimeProfiles';
import { TimeAndAttendanceTimeProfilesRequestBuilder } from './TimeAndAttendanceTimeProfilesRequestBuilder';
import { TimeAndAttendanceTimeProfileLinesV2Api } from './TimeAndAttendanceTimeProfileLinesV2Api';
import { PayAgreementsApi } from './PayAgreementsApi';
import { TimeAndAttendanceTimeProfileLinesApi } from './TimeAndAttendanceTimeProfileLinesApi';
import { TimeAndAttendanceTimeProfileDetailsApi } from './TimeAndAttendanceTimeProfileDetailsApi';
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
export class TimeAndAttendanceTimeProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TimeAndAttendanceTimeProfiles<DeSerializersT>, DeSerializersT>
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
  ): TimeAndAttendanceTimeProfilesApi<DeSerializersT> {
    return new TimeAndAttendanceTimeProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT: OneToOneLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      PayAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>,
      PayAgreementsApi<DeSerializersT>,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>,
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: new OneToManyLink(
        'TimeAndAttendanceTimeProfileLinesV2',
        this,
        linkedApis[0]
      ),
      PAY_AGREEMENT: new OneToOneLink('PayAgreement', this, linkedApis[1]),
      TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: new OneToManyLink(
        'TimeAndAttendanceTimeProfileLines',
        this,
        linkedApis[2]
      ),
      TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: new OneToManyLink(
        'TimeAndAttendanceTimeProfileDetails',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TimeAndAttendanceTimeProfiles;

  requestBuilder(): TimeAndAttendanceTimeProfilesRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceTimeProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceTimeProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceTimeProfiles<DeSerializersT>,
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
    typeof TimeAndAttendanceTimeProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceTimeProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_DESCRIPTION: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_AGREEMENT_CODE: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_PROFILE_INTEGER_RGB_COLOR: OrderableEdmTypeField<
      TimeAndAttendanceTimeProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES_V_2: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT: OneToOneLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      PayAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_LINES: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfileDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILE_DETAILS: OneToManyLink<
      TimeAndAttendanceTimeProfiles<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfileDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeAndAttendanceTimeProfiles<DeSerializers>>;
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
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link timeProfileDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TimeProfileDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PayAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeProfileIntegerRgbColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_INTEGER_RGB_COLOR: fieldBuilder.buildEdmTypeField(
          'TimeProfileIntegerRGBColor',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAndAttendanceTimeProfiles)
      };
    }

    return this._schema;
  }
}
