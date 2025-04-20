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
import { TransportationRoutePlans } from './TransportationRoutePlans';

/**
 * Request builder class for operations supported on the {@link TransportationRoutePlans} entity.
 */
export class TransportationRoutePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationRoutePlans<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationRoutePlans` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationRoutePlans` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationRoutePlans<T>, T> {
    return new GetAllRequestBuilder<TransportationRoutePlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationRoutePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationRoutePlans`.
   */
  create(
    entity: TransportationRoutePlans<T>
  ): CreateRequestBuilder<TransportationRoutePlans<T>, T> {
    return new CreateRequestBuilder<TransportationRoutePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationRoutePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationRoutePlans.dataAreaId}.
   * @param planId Key property. See {@link TransportationRoutePlans.planId}.
   * @returns A request builder for creating requests to retrieve one `TransportationRoutePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationRoutePlans<T>, T> {
    return new GetByKeyRequestBuilder<TransportationRoutePlans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationRoutePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationRoutePlans`.
   */
  update(
    entity: TransportationRoutePlans<T>
  ): UpdateRequestBuilder<TransportationRoutePlans<T>, T> {
    return new UpdateRequestBuilder<TransportationRoutePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationRoutePlans`.
   * @param dataAreaId Key property. See {@link TransportationRoutePlans.dataAreaId}.
   * @param planId Key property. See {@link TransportationRoutePlans.planId}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationRoutePlans`.
   */
  delete(
    dataAreaId: string,
    planId: string
  ): DeleteRequestBuilder<TransportationRoutePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationRoutePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationRoutePlans` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationRoutePlans<T>
  ): DeleteRequestBuilder<TransportationRoutePlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string
  ): DeleteRequestBuilder<TransportationRoutePlans<T>, T> {
    return new DeleteRequestBuilder<TransportationRoutePlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationRoutePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!
          }
    );
  }
}
