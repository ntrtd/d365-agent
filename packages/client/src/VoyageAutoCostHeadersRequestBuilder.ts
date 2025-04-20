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
import { VoyageAutoCostHeaders } from './VoyageAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link VoyageAutoCostHeaders} entity.
 */
export class VoyageAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoyageAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VoyageAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VoyageAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VoyageAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<VoyageAutoCostHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoyageAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoyageAutoCostHeaders`.
   */
  create(
    entity: VoyageAutoCostHeaders<T>
  ): CreateRequestBuilder<VoyageAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<VoyageAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoyageAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoyageAutoCostHeaders.dataAreaId}.
   * @param voyageCostAutoNumber Key property. See {@link VoyageAutoCostHeaders.voyageCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `VoyageAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voyageCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoyageAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VoyageAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VoyageCostAutoNumber: voyageCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoyageAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoyageAutoCostHeaders`.
   */
  update(
    entity: VoyageAutoCostHeaders<T>
  ): UpdateRequestBuilder<VoyageAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<VoyageAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoyageAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link VoyageAutoCostHeaders.dataAreaId}.
   * @param voyageCostAutoNumber Key property. See {@link VoyageAutoCostHeaders.voyageCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VoyageAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    voyageCostAutoNumber: string
  ): DeleteRequestBuilder<VoyageAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoyageAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoyageAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VoyageAutoCostHeaders<T>
  ): DeleteRequestBuilder<VoyageAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voyageCostAutoNumber?: string
  ): DeleteRequestBuilder<VoyageAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<VoyageAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoyageAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VoyageCostAutoNumber: voyageCostAutoNumber!
          }
    );
  }
}
