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
import { PricingPriorities } from './PricingPriorities';

/**
 * Request builder class for operations supported on the {@link PricingPriorities} entity.
 */
export class PricingPrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PricingPriorities<T>, T> {
  /**
   * Returns a request builder for querying all `PricingPriorities` entities.
   * @returns A request builder for creating requests to retrieve all `PricingPriorities` entities.
   */
  getAll(): GetAllRequestBuilder<PricingPriorities<T>, T> {
    return new GetAllRequestBuilder<PricingPriorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PricingPriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PricingPriorities`.
   */
  create(
    entity: PricingPriorities<T>
  ): CreateRequestBuilder<PricingPriorities<T>, T> {
    return new CreateRequestBuilder<PricingPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PricingPriorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PricingPriorities.dataAreaId}.
   * @param pricingPriorityNumber Key property. See {@link PricingPriorities.pricingPriorityNumber}.
   * @returns A request builder for creating requests to retrieve one `PricingPriorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PricingPriorities<T>, T> {
    return new GetByKeyRequestBuilder<PricingPriorities<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PricingPriorityNumber: pricingPriorityNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PricingPriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PricingPriorities`.
   */
  update(
    entity: PricingPriorities<T>
  ): UpdateRequestBuilder<PricingPriorities<T>, T> {
    return new UpdateRequestBuilder<PricingPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PricingPriorities`.
   * @param dataAreaId Key property. See {@link PricingPriorities.dataAreaId}.
   * @param pricingPriorityNumber Key property. See {@link PricingPriorities.pricingPriorityNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PricingPriorities`.
   */
  delete(
    dataAreaId: string,
    pricingPriorityNumber: number
  ): DeleteRequestBuilder<PricingPriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PricingPriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PricingPriorities` by taking the entity as a parameter.
   */
  delete(
    entity: PricingPriorities<T>
  ): DeleteRequestBuilder<PricingPriorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    pricingPriorityNumber?: number
  ): DeleteRequestBuilder<PricingPriorities<T>, T> {
    return new DeleteRequestBuilder<PricingPriorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PricingPriorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PricingPriorityNumber: pricingPriorityNumber!
          }
    );
  }
}
