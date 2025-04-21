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
import { BusinessEventsCatalogs } from './BusinessEventsCatalogs';

/**
 * Request builder class for operations supported on the {@link BusinessEventsCatalogs} entity.
 */
export class BusinessEventsCatalogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessEventsCatalogs<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessEventsCatalogs` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessEventsCatalogs` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessEventsCatalogs<T>, T> {
    return new GetAllRequestBuilder<BusinessEventsCatalogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessEventsCatalogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessEventsCatalogs`.
   */
  create(
    entity: BusinessEventsCatalogs<T>
  ): CreateRequestBuilder<BusinessEventsCatalogs<T>, T> {
    return new CreateRequestBuilder<BusinessEventsCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessEventsCatalogs` entity based on its keys.
   * @param businessEventId Key property. See {@link BusinessEventsCatalogs.businessEventId}.
   * @returns A request builder for creating requests to retrieve one `BusinessEventsCatalogs` entity based on its keys.
   */
  getByKey(
    businessEventId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessEventsCatalogs<T>, T> {
    return new GetByKeyRequestBuilder<BusinessEventsCatalogs<T>, T>(
      this.entityApi,
      { BusinessEventId: businessEventId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessEventsCatalogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessEventsCatalogs`.
   */
  update(
    entity: BusinessEventsCatalogs<T>
  ): UpdateRequestBuilder<BusinessEventsCatalogs<T>, T> {
    return new UpdateRequestBuilder<BusinessEventsCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsCatalogs`.
   * @param businessEventId Key property. See {@link BusinessEventsCatalogs.businessEventId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsCatalogs`.
   */
  delete(
    businessEventId: string
  ): DeleteRequestBuilder<BusinessEventsCatalogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsCatalogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsCatalogs` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessEventsCatalogs<T>
  ): DeleteRequestBuilder<BusinessEventsCatalogs<T>, T>;
  delete(
    businessEventIdOrEntity: any
  ): DeleteRequestBuilder<BusinessEventsCatalogs<T>, T> {
    return new DeleteRequestBuilder<BusinessEventsCatalogs<T>, T>(
      this.entityApi,
      businessEventIdOrEntity instanceof BusinessEventsCatalogs
        ? businessEventIdOrEntity
        : { BusinessEventId: businessEventIdOrEntity! }
    );
  }
}
