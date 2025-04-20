/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceLevelAgreements } from './ServiceLevelAgreements';
import { ServiceLevelAgreementsRequestBuilder } from './ServiceLevelAgreementsRequestBuilder';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { CaseCategoryHierarchyDetailsApi } from './CaseCategoryHierarchyDetailsApi';
import { ServiceAgreementHeadersApi } from './ServiceAgreementHeadersApi';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ServiceLevelAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceLevelAgreements<DeSerializersT>, DeSerializersT>
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
  ): ServiceLevelAgreementsApi<DeSerializersT> {
    return new ServiceLevelAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link caseCategoryHierarchyDetailServiceLevelAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENTS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkCalendarsApi<DeSerializersT>,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>,
      ServiceAgreementHeadersApi<DeSerializersT>,
      ServiceOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[0]),
      CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENTS:
        new OneToManyLink(
          'CaseCategoryHierarchyDetailServiceLevelAgreements',
          this,
          linkedApis[1]
        ),
      SERVICE_AGREEMENT_HEADERS: new OneToManyLink(
        'ServiceAgreementHeaders',
        this,
        linkedApis[2]
      ),
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ServiceLevelAgreements;

  requestBuilder(): ServiceLevelAgreementsRequestBuilder<DeSerializersT> {
    return new ServiceLevelAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceLevelAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceLevelAgreements<DeSerializersT>,
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
    typeof ServiceLevelAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceLevelAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_REQUEST_RESPONSE_HOURS: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERVICE_REQUEST_RESPONSE_DAYS: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERVICE_REQUEST_RESPONSE_MINUTES: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AGREEMENT_SUSPENDED: EnumField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_WORK_CALENDAR_ID: OrderableEdmTypeField<
      ServiceLevelAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link caseCategoryHierarchyDetailServiceLevelAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENTS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ServiceLevelAgreements<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceLevelAgreements<DeSerializers>>;
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
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceRequestResponseHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_REQUEST_RESPONSE_HOURS: fieldBuilder.buildEdmTypeField(
          'ServiceRequestResponseHours',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link serviceRequestResponseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_REQUEST_RESPONSE_DAYS: fieldBuilder.buildEdmTypeField(
          'ServiceRequestResponseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link serviceRequestResponseMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_REQUEST_RESPONSE_MINUTES: fieldBuilder.buildEdmTypeField(
          'ServiceRequestResponseMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link agreementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AgreementDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAgreementSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AGREEMENT_SUSPENDED: fieldBuilder.buildEnumField(
          'IsAgreementSuspended',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'AgreementWorkCalendarId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceLevelAgreements)
      };
    }

    return this._schema;
  }
}
