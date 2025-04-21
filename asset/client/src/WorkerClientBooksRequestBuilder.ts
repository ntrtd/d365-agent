/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { WorkerClientBooks } from './WorkerClientBooks';

/**
 * Request builder class for operations supported on the {@link WorkerClientBooks} entity.
 */
export class WorkerClientBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerClientBooks<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerClientBooks` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerClientBooks` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerClientBooks<T>, T> {
    return new GetAllRequestBuilder<WorkerClientBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerClientBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerClientBooks`.
   */
  create(
    entity: WorkerClientBooks<T>
  ): CreateRequestBuilder<WorkerClientBooks<T>, T> {
    return new CreateRequestBuilder<WorkerClientBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerClientBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerClientBooks.dataAreaId}.
   * @param clientBookId Key property. See {@link WorkerClientBooks.clientBookId}.
   * @param clientBookWorker Key property. See {@link WorkerClientBooks.clientBookWorker}.
   * @returns A request builder for creating requests to retrieve one `WorkerClientBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    clientBookId: DeserializedType<T, 'Edm.String'>,
    clientBookWorker: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WorkerClientBooks<T>, T> {
    return new GetByKeyRequestBuilder<WorkerClientBooks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ClientBookId: clientBookId,
      ClientBookWorker: clientBookWorker
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerClientBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerClientBooks`.
   */
  update(
    entity: WorkerClientBooks<T>
  ): UpdateRequestBuilder<WorkerClientBooks<T>, T> {
    return new UpdateRequestBuilder<WorkerClientBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerClientBooks`.
   * @param dataAreaId Key property. See {@link WorkerClientBooks.dataAreaId}.
   * @param clientBookId Key property. See {@link WorkerClientBooks.clientBookId}.
   * @param clientBookWorker Key property. See {@link WorkerClientBooks.clientBookWorker}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerClientBooks`.
   */
  delete(
    dataAreaId: string,
    clientBookId: string,
    clientBookWorker: BigNumber
  ): DeleteRequestBuilder<WorkerClientBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerClientBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerClientBooks` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerClientBooks<T>
  ): DeleteRequestBuilder<WorkerClientBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    clientBookId?: string,
    clientBookWorker?: BigNumber
  ): DeleteRequestBuilder<WorkerClientBooks<T>, T> {
    return new DeleteRequestBuilder<WorkerClientBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerClientBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClientBookId: clientBookId!,
            ClientBookWorker: clientBookWorker!
          }
    );
  }
}
