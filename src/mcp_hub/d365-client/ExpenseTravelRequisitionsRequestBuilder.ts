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
import { ExpenseTravelRequisitions } from './ExpenseTravelRequisitions';

/**
 * Request builder class for operations supported on the {@link ExpenseTravelRequisitions} entity.
 */
export class ExpenseTravelRequisitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseTravelRequisitions<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseTravelRequisitions` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseTravelRequisitions` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseTravelRequisitions<T>, T> {
    return new GetAllRequestBuilder<ExpenseTravelRequisitions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseTravelRequisitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseTravelRequisitions`.
   */
  create(
    entity: ExpenseTravelRequisitions<T>
  ): CreateRequestBuilder<ExpenseTravelRequisitions<T>, T> {
    return new CreateRequestBuilder<ExpenseTravelRequisitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseTravelRequisitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseTravelRequisitions.dataAreaId}.
   * @param travelRequisitionNumber Key property. See {@link ExpenseTravelRequisitions.travelRequisitionNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpenseTravelRequisitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    travelRequisitionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseTravelRequisitions<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseTravelRequisitions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TravelRequisitionNumber: travelRequisitionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseTravelRequisitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseTravelRequisitions`.
   */
  update(
    entity: ExpenseTravelRequisitions<T>
  ): UpdateRequestBuilder<ExpenseTravelRequisitions<T>, T> {
    return new UpdateRequestBuilder<ExpenseTravelRequisitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseTravelRequisitions`.
   * @param dataAreaId Key property. See {@link ExpenseTravelRequisitions.dataAreaId}.
   * @param travelRequisitionNumber Key property. See {@link ExpenseTravelRequisitions.travelRequisitionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTravelRequisitions`.
   */
  delete(
    dataAreaId: string,
    travelRequisitionNumber: string
  ): DeleteRequestBuilder<ExpenseTravelRequisitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseTravelRequisitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTravelRequisitions` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseTravelRequisitions<T>
  ): DeleteRequestBuilder<ExpenseTravelRequisitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    travelRequisitionNumber?: string
  ): DeleteRequestBuilder<ExpenseTravelRequisitions<T>, T> {
    return new DeleteRequestBuilder<ExpenseTravelRequisitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseTravelRequisitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TravelRequisitionNumber: travelRequisitionNumber!
          }
    );
  }
}
