/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BusinessEventsConfigurations } from './BusinessEventsConfigurations';

/**
 * Request builder class for operations supported on the {@link BusinessEventsConfigurations} entity.
 */
export class BusinessEventsConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessEventsConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessEventsConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessEventsConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessEventsConfigurations<T>, T> {
    return new GetAllRequestBuilder<BusinessEventsConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessEventsConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessEventsConfigurations`.
   */
  create(
    entity: BusinessEventsConfigurations<T>
  ): CreateRequestBuilder<BusinessEventsConfigurations<T>, T> {
    return new CreateRequestBuilder<BusinessEventsConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessEventsConfigurations` entity based on its keys.
   * @param businessEventsTable Key property. See {@link BusinessEventsConfigurations.businessEventsTable}.
   * @param legalEntity Key property. See {@link BusinessEventsConfigurations.legalEntity}.
   * @param businessEventsEndpointName Key property. See {@link BusinessEventsConfigurations.businessEventsEndpointName}.
   * @returns A request builder for creating requests to retrieve one `BusinessEventsConfigurations` entity based on its keys.
   */
  getByKey(
    businessEventsTable: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    businessEventsEndpointName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessEventsConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<BusinessEventsConfigurations<T>, T>(
      this.entityApi,
      {
        BusinessEventsTable: businessEventsTable,
        LegalEntity: legalEntity,
        BusinessEventsEndpoint_Name: businessEventsEndpointName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessEventsConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessEventsConfigurations`.
   */
  update(
    entity: BusinessEventsConfigurations<T>
  ): UpdateRequestBuilder<BusinessEventsConfigurations<T>, T> {
    return new UpdateRequestBuilder<BusinessEventsConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsConfigurations`.
   * @param businessEventsTable Key property. See {@link BusinessEventsConfigurations.businessEventsTable}.
   * @param legalEntity Key property. See {@link BusinessEventsConfigurations.legalEntity}.
   * @param businessEventsEndpointName Key property. See {@link BusinessEventsConfigurations.businessEventsEndpointName}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsConfigurations`.
   */
  delete(
    businessEventsTable: string,
    legalEntity: string,
    businessEventsEndpointName: string
  ): DeleteRequestBuilder<BusinessEventsConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessEventsConfigurations<T>
  ): DeleteRequestBuilder<BusinessEventsConfigurations<T>, T>;
  delete(
    businessEventsTableOrEntity: any,
    legalEntity?: string,
    businessEventsEndpointName?: string
  ): DeleteRequestBuilder<BusinessEventsConfigurations<T>, T> {
    return new DeleteRequestBuilder<BusinessEventsConfigurations<T>, T>(
      this.entityApi,
      businessEventsTableOrEntity instanceof BusinessEventsConfigurations
        ? businessEventsTableOrEntity
        : {
            BusinessEventsTable: businessEventsTableOrEntity!,
            LegalEntity: legalEntity!,
            BusinessEventsEndpoint_Name: businessEventsEndpointName!
          }
    );
  }
}
