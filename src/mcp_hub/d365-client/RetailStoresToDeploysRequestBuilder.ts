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
import { RetailStoresToDeploys } from './RetailStoresToDeploys';

/**
 * Request builder class for operations supported on the {@link RetailStoresToDeploys} entity.
 */
export class RetailStoresToDeploysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoresToDeploys<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoresToDeploys` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoresToDeploys` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoresToDeploys<T>, T> {
    return new GetAllRequestBuilder<RetailStoresToDeploys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoresToDeploys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoresToDeploys`.
   */
  create(
    entity: RetailStoresToDeploys<T>
  ): CreateRequestBuilder<RetailStoresToDeploys<T>, T> {
    return new CreateRequestBuilder<RetailStoresToDeploys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoresToDeploys` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoresToDeploys.dataAreaId}.
   * @param storeNumber Key property. See {@link RetailStoresToDeploys.storeNumber}.
   * @param terminalId Key property. See {@link RetailStoresToDeploys.terminalId}.
   * @returns A request builder for creating requests to retrieve one `RetailStoresToDeploys` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoresToDeploys<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoresToDeploys<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StoreNumber: storeNumber,
        TerminalId: terminalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoresToDeploys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoresToDeploys`.
   */
  update(
    entity: RetailStoresToDeploys<T>
  ): UpdateRequestBuilder<RetailStoresToDeploys<T>, T> {
    return new UpdateRequestBuilder<RetailStoresToDeploys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoresToDeploys`.
   * @param dataAreaId Key property. See {@link RetailStoresToDeploys.dataAreaId}.
   * @param storeNumber Key property. See {@link RetailStoresToDeploys.storeNumber}.
   * @param terminalId Key property. See {@link RetailStoresToDeploys.terminalId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoresToDeploys`.
   */
  delete(
    dataAreaId: string,
    storeNumber: string,
    terminalId: string
  ): DeleteRequestBuilder<RetailStoresToDeploys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoresToDeploys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoresToDeploys` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoresToDeploys<T>
  ): DeleteRequestBuilder<RetailStoresToDeploys<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeNumber?: string,
    terminalId?: string
  ): DeleteRequestBuilder<RetailStoresToDeploys<T>, T> {
    return new DeleteRequestBuilder<RetailStoresToDeploys<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoresToDeploys
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreNumber: storeNumber!,
            TerminalId: terminalId!
          }
    );
  }
}
