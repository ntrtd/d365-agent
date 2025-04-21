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
import { InventoryLevelProfileProcessingRanges } from './InventoryLevelProfileProcessingRanges';

/**
 * Request builder class for operations supported on the {@link InventoryLevelProfileProcessingRanges} entity.
 */
export class InventoryLevelProfileProcessingRangesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryLevelProfileProcessingRanges` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryLevelProfileProcessingRanges` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
    return new GetAllRequestBuilder<
      InventoryLevelProfileProcessingRanges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryLevelProfileProcessingRanges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryLevelProfileProcessingRanges`.
   */
  create(
    entity: InventoryLevelProfileProcessingRanges<T>
  ): CreateRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
    return new CreateRequestBuilder<
      InventoryLevelProfileProcessingRanges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryLevelProfileProcessingRanges` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryLevelProfileProcessingRanges.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfileProcessingRanges.profileId}.
   * @param code Key property. See {@link InventoryLevelProfileProcessingRanges.code}.
   * @returns A request builder for creating requests to retrieve one `InventoryLevelProfileProcessingRanges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryLevelProfileProcessingRanges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProfileId: profileId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryLevelProfileProcessingRanges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryLevelProfileProcessingRanges`.
   */
  update(
    entity: InventoryLevelProfileProcessingRanges<T>
  ): UpdateRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
    return new UpdateRequestBuilder<
      InventoryLevelProfileProcessingRanges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfileProcessingRanges`.
   * @param dataAreaId Key property. See {@link InventoryLevelProfileProcessingRanges.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfileProcessingRanges.profileId}.
   * @param code Key property. See {@link InventoryLevelProfileProcessingRanges.code}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfileProcessingRanges`.
   */
  delete(
    dataAreaId: string,
    profileId: string,
    code: string
  ): DeleteRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfileProcessingRanges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfileProcessingRanges` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryLevelProfileProcessingRanges<T>
  ): DeleteRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string,
    code?: string
  ): DeleteRequestBuilder<InventoryLevelProfileProcessingRanges<T>, T> {
    return new DeleteRequestBuilder<
      InventoryLevelProfileProcessingRanges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryLevelProfileProcessingRanges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!,
            Code: code!
          }
    );
  }
}
