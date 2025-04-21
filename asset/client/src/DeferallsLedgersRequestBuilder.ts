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
import { DeferallsLedgers } from './DeferallsLedgers';

/**
 * Request builder class for operations supported on the {@link DeferallsLedgers} entity.
 */
export class DeferallsLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeferallsLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `DeferallsLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `DeferallsLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<DeferallsLedgers<T>, T> {
    return new GetAllRequestBuilder<DeferallsLedgers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeferallsLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeferallsLedgers`.
   */
  create(
    entity: DeferallsLedgers<T>
  ): CreateRequestBuilder<DeferallsLedgers<T>, T> {
    return new CreateRequestBuilder<DeferallsLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeferallsLedgers` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeferallsLedgers.dataAreaId}.
   * @param postingProfile Key property. See {@link DeferallsLedgers.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `DeferallsLedgers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeferallsLedgers<T>, T> {
    return new GetByKeyRequestBuilder<DeferallsLedgers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PostingProfile: postingProfile
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeferallsLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeferallsLedgers`.
   */
  update(
    entity: DeferallsLedgers<T>
  ): UpdateRequestBuilder<DeferallsLedgers<T>, T> {
    return new UpdateRequestBuilder<DeferallsLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeferallsLedgers`.
   * @param dataAreaId Key property. See {@link DeferallsLedgers.dataAreaId}.
   * @param postingProfile Key property. See {@link DeferallsLedgers.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `DeferallsLedgers`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string
  ): DeleteRequestBuilder<DeferallsLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeferallsLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeferallsLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: DeferallsLedgers<T>
  ): DeleteRequestBuilder<DeferallsLedgers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string
  ): DeleteRequestBuilder<DeferallsLedgers<T>, T> {
    return new DeleteRequestBuilder<DeferallsLedgers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeferallsLedgers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!
          }
    );
  }
}
