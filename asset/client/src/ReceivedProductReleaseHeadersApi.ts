/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReceivedProductReleaseHeaders } from './ReceivedProductReleaseHeaders';
import { ReceivedProductReleaseHeadersRequestBuilder } from './ReceivedProductReleaseHeadersRequestBuilder';
import { ReceivedProductReleaseLinesApi } from './ReceivedProductReleaseLinesApi';
import { ReceivedProductReleaseLinesV2Api } from './ReceivedProductReleaseLinesV2Api';
import { WorkersApi } from './WorkersApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { EngineeringProductVersionsApi } from './EngineeringProductVersionsApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ReceivedProductReleaseHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReceivedProductReleaseHeaders<DeSerializersT>, DeSerializersT>
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
  ): ReceivedProductReleaseHeadersApi<DeSerializersT> {
    return new ReceivedProductReleaseHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cancellorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANCELLOR_WORKER: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_SITE: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSOR_WORKER: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReceivedProductReleaseLinesApi<DeSerializersT>,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      EngineeringProductVersionsApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECEIVED_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'ReceivedProductReleaseLines',
        this,
        linkedApis[0]
      ),
      RECEIVED_PRODUCT_RELEASE_LINES_V_2: new OneToManyLink(
        'ReceivedProductReleaseLinesV2',
        this,
        linkedApis[1]
      ),
      CANCELLOR_WORKER: new OneToOneLink(
        'CancellorWorker',
        this,
        linkedApis[2]
      ),
      RECEIVING_SITE: new OneToOneLink('ReceivingSite', this, linkedApis[3]),
      ENGINEERING_PRODUCT_VERSION: new OneToOneLink(
        'EngineeringProductVersion',
        this,
        linkedApis[4]
      ),
      RELEASING_SITE: new OneToOneLink('ReleasingSite', this, linkedApis[5]),
      PROCESSOR_WORKER: new OneToOneLink('ProcessorWorker', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = ReceivedProductReleaseHeaders;

  requestBuilder(): ReceivedProductReleaseHeadersRequestBuilder<DeSerializersT> {
    return new ReceivedProductReleaseHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReceivedProductReleaseHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReceivedProductReleaseHeaders<DeSerializersT>,
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
    typeof ReceivedProductReleaseHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReceivedProductReleaseHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASE_STATUS: EnumField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      EngChgReleaseStatus,
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASE_HEADER_CREATED_DATE_TIME: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSOR_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_ERROR: EnumField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RELEASE_NOTES: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSED_DATE_TIME: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELLOR_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLED_DATE_TIME: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELEASING_SITE_ID: OrderableEdmTypeField<
      ReceivedProductReleaseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cancellorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANCELLOR_WORKER: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_SITE: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSOR_WORKER: OneToOneLink<
      ReceivedProductReleaseHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReceivedProductReleaseHeaders<DeSerializers>>;
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link releasingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'ReleasingLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link releaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_STATUS: fieldBuilder.buildEnumField(
          'ReleaseStatus',
          EngChgReleaseStatus,
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link releaseHeaderCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_HEADER_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReleaseHeaderCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processorPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSOR_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessorPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ERROR: fieldBuilder.buildEnumField('HasError', NoYes, true),
        /**
         * Static representation of the {@link releaseNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_NOTES: fieldBuilder.buildEdmTypeField(
          'ReleaseNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ProcessedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cancellorPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLOR_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'CancellorPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancelledDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CancelledDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link releasingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReleasingSiteId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReceivedProductReleaseHeaders)
      };
    }

    return this._schema;
  }
}
