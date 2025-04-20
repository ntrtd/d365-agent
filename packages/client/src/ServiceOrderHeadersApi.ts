/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderHeaders } from './ServiceOrderHeaders';
import { ServiceOrderHeadersRequestBuilder } from './ServiceOrderHeadersRequestBuilder';
import { ServiceAgreementHeadersApi } from './ServiceAgreementHeadersApi';
import { ContactPersonsApi } from './ContactPersonsApi';
import { ProjectsApi } from './ProjectsApi';
import { ActivitiesApi } from './ActivitiesApi';
import { WorkersApi } from './WorkersApi';
import { CustomersV3Api } from './CustomersV3Api';
import { ServiceLevelAgreementsApi } from './ServiceLevelAgreementsApi';
import { ServiceOrderLinesApi } from './ServiceOrderLinesApi';
import { SmaLogStatus } from './SmaLogStatus';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { SmaServiceOrderProgress } from './SmaServiceOrderProgress';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';
import { SmmActivityPriority } from './SmmActivityPriority';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ServiceOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrderHeadersApi<DeSerializersT> {
    return new ServiceOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link serviceAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectActivity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ACTIVITY: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_RESPONSIBLE: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CUSTOMER: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ServiceAgreementHeadersApi<DeSerializersT>,
      ContactPersonsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      ActivitiesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      ServiceLevelAgreementsApi<DeSerializersT>,
      ServiceOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SERVICE_AGREEMENT: new OneToOneLink(
        'ServiceAgreement',
        this,
        linkedApis[0]
      ),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[1]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[2]),
      PROJECT_ACTIVITY: new OneToOneLink(
        'ProjectActivity',
        this,
        linkedApis[3]
      ),
      SERVICE_RESPONSIBLE: new OneToOneLink(
        'ServiceResponsible',
        this,
        linkedApis[4]
      ),
      SERVICE_CUSTOMER: new OneToOneLink(
        'ServiceCustomer',
        this,
        linkedApis[5]
      ),
      SERVICE_LEVEL_AGREEMENT: new OneToOneLink(
        'ServiceLevelAgreement',
        this,
        linkedApis[6]
      ),
      SERVICE_ORDER_LINES: new OneToManyLink(
        'ServiceOrderLines',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ServiceOrderHeaders;

  requestBuilder(): ServiceOrderHeadersRequestBuilder<DeSerializersT> {
    return new ServiceOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderHeaders<DeSerializersT>,
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
    typeof ServiceOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_CITY: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_RECORDING_STATUS: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      SmaLogStatus,
      true,
      true
    >;
    SERVICE_ORDER_DESCRIPTION: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ORDER_SIGN_OFF_DATE_TIME: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_ADDRESS_PRIVATE: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_SERVICE_DATE_TIME: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_ORDER_SIGNED_OFF: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_TIME_ZONE: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SERVICE_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_NAME: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LINE_ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_PROGRESS: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderProgress,
      true,
      true
    >;
    SERVICE_ADDRESS_STREET: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_ORIGIN: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderOrigin,
      true,
      true
    >;
    SERVICE_LEVEL_AGREEMENT_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL_AGREEMENT_COMPLIANCE_PERCENTAGE: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_AGREEMENT_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_STAGE_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_PRIORITY: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    SERVICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_ADDRESS_ORDER_SPECIFIC: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_CALENDAR_CONFLICT: EnumField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_TECHNICIAN_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_SERVICE_ADDRESS: OrderableEdmTypeField<
      ServiceOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectActivity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ACTIVITY: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_RESPONSIBLE: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CUSTOMER: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      ServiceOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link serviceOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ServiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeRecordingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORDING_STATUS: fieldBuilder.buildEnumField(
          'TimeRecordingStatus',
          SmaLogStatus,
          true
        ),
        /**
         * Static representation of the {@link serviceOrderDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ServiceOrderDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ServiceAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceOrderSignOffDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_SIGN_OFF_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ServiceOrderSignOffDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ServiceAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsServiceAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferredServiceDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_SERVICE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PreferredServiceDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ServiceAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceOrderSignedOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_ORDER_SIGNED_OFF: fieldBuilder.buildEnumField(
          'IsServiceOrderSignedOff',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'ServiceAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLineActivityTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LINE_ACTIVITY_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultLineActivityTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ServiceAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceOrderProgress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_PROGRESS: fieldBuilder.buildEnumField(
          'ServiceOrderProgress',
          SmaServiceOrderProgress,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ServiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceOrderOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ORIGIN: fieldBuilder.buildEnumField(
          'ServiceOrderOrigin',
          SmaServiceOrderOrigin,
          true
        ),
        /**
         * Static representation of the {@link serviceLevelAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceLevelAgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLevelAgreementCompliancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_AGREEMENT_COMPLIANCE_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'ServiceLevelAgreementCompliancePercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceOrderStageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_STAGE_ID: fieldBuilder.buildEdmTypeField(
          'ServiceOrderStageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceOrderPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_PRIORITY: fieldBuilder.buildEnumField(
          'ServiceOrderPriority',
          SmmActivityPriority,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ServiceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsServiceAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasCalendarConflict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_CALENDAR_CONFLICT: fieldBuilder.buildEnumField(
          'HasCalendarConflict',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ServiceAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferredTechnicianPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_TECHNICIAN_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreferredTechnicianPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ServiceAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedServiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_SERVICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedServiceAddress',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderHeaders)
      };
    }

    return this._schema;
  }
}
