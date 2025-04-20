/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeRequestHeaders } from './EngineeringChangeRequestHeaders';
import { EngineeringChangeRequestHeadersRequestBuilder } from './EngineeringChangeRequestHeadersRequestBuilder';
import { EngineeringChangeRequestSourcesApi } from './EngineeringChangeRequestSourcesApi';
import { EngineeringChangeRequestDependenciesApi } from './EngineeringChangeRequestDependenciesApi';
import { EngineeringChangeRequestProductsApi } from './EngineeringChangeRequestProductsApi';
import { WorkersApi } from './WorkersApi';
import { EngineeringChangePrioritiesApi } from './EngineeringChangePrioritiesApi';
import { EngChgEcmRequestSeverity } from './EngChgEcmRequestSeverity';
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
export class EngineeringChangeRequestHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeRequestHeaders<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeRequestHeadersApi<DeSerializersT> {
    return new EngineeringChangeRequestHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestSources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_SOURCES: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestSourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_PRODUCTS: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requesterWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTER_WORKER: OneToOneLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangePriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_PRIORITY: OneToOneLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangePrioritiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeRequestSourcesApi<DeSerializersT>,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>,
      EngineeringChangeRequestProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EngineeringChangePrioritiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_REQUEST_SOURCES: new OneToManyLink(
        'EngineeringChangeRequestSources',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: new OneToManyLink(
        'EngineeringChangeRequestDependencies',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_REQUEST_PRODUCTS: new OneToManyLink(
        'EngineeringChangeRequestProducts',
        this,
        linkedApis[2]
      ),
      REQUESTER_WORKER: new OneToOneLink(
        'RequesterWorker',
        this,
        linkedApis[3]
      ),
      ENGINEERING_CHANGE_PRIORITY: new OneToOneLink(
        'EngineeringChangePriority',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeRequestHeaders;

  requestBuilder(): EngineeringChangeRequestHeadersRequestBuilder<DeSerializersT> {
    return new EngineeringChangeRequestHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeRequestHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeRequestHeaders<DeSerializersT>,
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
    typeof EngineeringChangeRequestHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeRequestHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUEST_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_PRIORITY_NAME: OrderableEdmTypeField<
      EngineeringChangeRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_SEVERITY_CLASSIFICATION: EnumField<
      EngineeringChangeRequestHeaders<DeSerializers>,
      DeSerializersT,
      EngChgEcmRequestSeverity,
      true,
      true
    >;
    REQUEST_TITLE: OrderableEdmTypeField<
      EngineeringChangeRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestSources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_SOURCES: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestSourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_PRODUCTS: OneToManyLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requesterWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUESTER_WORKER: OneToOneLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangePriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_PRIORITY: OneToOneLink<
      EngineeringChangeRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangePrioritiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeRequestHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequestNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangePriorityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_PRIORITY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringChangePriorityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestSeverityClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_SEVERITY_CLASSIFICATION: fieldBuilder.buildEnumField(
          'RequestSeverityClassification',
          EngChgEcmRequestSeverity,
          true
        ),
        /**
         * Static representation of the {@link requestTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TITLE: fieldBuilder.buildEdmTypeField(
          'RequestTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequesterPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeRequestHeaders)
      };
    }

    return this._schema;
  }
}
