/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceAgreementHeaders } from './ServiceAgreementHeaders';
import { ServiceAgreementHeadersRequestBuilder } from './ServiceAgreementHeadersRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { ProjectsApi } from './ProjectsApi';
import { ContactPersonsApi } from './ContactPersonsApi';
import { ServiceLevelAgreementsApi } from './ServiceLevelAgreementsApi';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { ServiceOrderLinesApi } from './ServiceOrderLinesApi';
import { NoYes } from './NoYes';
import { SmaGroupServiceOrder } from './SmaGroupServiceOrder';
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
export class ServiceAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceAgreementHeaders<DeSerializersT>, DeSerializersT>
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
  ): ServiceAgreementHeadersApi<DeSerializersT> {
    return new ServiceAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link preferredTechnicianWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREFERRED_TECHNICIAN_WORKER: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      ContactPersonsApi<DeSerializersT>,
      ServiceLevelAgreementsApi<DeSerializersT>,
      ServiceOrderHeadersApi<DeSerializersT>,
      ServiceAgreementLinesApi<DeSerializersT>,
      ServiceOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PREFERRED_TECHNICIAN_WORKER: new OneToOneLink(
        'PreferredTechnicianWorker',
        this,
        linkedApis[0]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[1]),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[2]),
      SERVICE_LEVEL_AGREEMENT: new OneToOneLink(
        'ServiceLevelAgreement',
        this,
        linkedApis[3]
      ),
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[4]
      ),
      SERVICE_AGREEMENT_LINES: new OneToManyLink(
        'ServiceAgreementLines',
        this,
        linkedApis[5]
      ),
      SERVICE_ORDER_LINES: new OneToManyLink(
        'ServiceOrderLines',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ServiceAgreementHeaders;

  requestBuilder(): ServiceAgreementHeadersRequestBuilder<DeSerializersT> {
    return new ServiceAgreementHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceAgreementHeaders<DeSerializersT>,
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
    typeof ServiceAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_AGREEMENT_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_TECHNICIAN_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_AGREEMENT_TEMPLATE_GROUP_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_AGREEMENT_START_DATE: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_LEVEL_AGREEMENT_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LINE_ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_AGREEMENT_END_DATE: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_AGREEMENT_GROUP_ID: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AGREEMENT_SUSPENDED: EnumField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINE_SERVICE_ORDER_METHOD: EnumField<
      ServiceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      SmaGroupServiceOrder,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link preferredTechnicianWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREFERRED_TECHNICIAN_WORKER: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      ServiceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceAgreementHeaders<DeSerializers>>;
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
         * Static representation of the {@link serviceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceAgreementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementDescription',
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
         * Static representation of the {@link serviceAgreementTemplateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_TEMPLATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementTemplateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAgreementStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAgreementEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceAgreementGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementGroupId',
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
         * Static representation of the {@link serviceResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link combineServiceOrderMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINE_SERVICE_ORDER_METHOD: fieldBuilder.buildEnumField(
          'CombineServiceOrderMethod',
          SmaGroupServiceOrder,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceAgreementHeaders)
      };
    }

    return this._schema;
  }
}
