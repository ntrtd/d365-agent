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
import { ProjGrantMatchings } from './ProjGrantMatchings';

/**
 * Request builder class for operations supported on the {@link ProjGrantMatchings} entity.
 */
export class ProjGrantMatchingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantMatchings<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantMatchings` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantMatchings` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantMatchings<T>, T> {
    return new GetAllRequestBuilder<ProjGrantMatchings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrantMatchings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantMatchings`.
   */
  create(
    entity: ProjGrantMatchings<T>
  ): CreateRequestBuilder<ProjGrantMatchings<T>, T> {
    return new CreateRequestBuilder<ProjGrantMatchings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantMatchings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantMatchings.dataAreaId}.
   * @param matchingType Key property. See {@link ProjGrantMatchings.matchingType}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantMatchings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    matchingType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjGrantMatchings<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantMatchings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MatchingType: matchingType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantMatchings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantMatchings`.
   */
  update(
    entity: ProjGrantMatchings<T>
  ): UpdateRequestBuilder<ProjGrantMatchings<T>, T> {
    return new UpdateRequestBuilder<ProjGrantMatchings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantMatchings`.
   * @param dataAreaId Key property. See {@link ProjGrantMatchings.dataAreaId}.
   * @param matchingType Key property. See {@link ProjGrantMatchings.matchingType}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantMatchings`.
   */
  delete(
    dataAreaId: string,
    matchingType: string
  ): DeleteRequestBuilder<ProjGrantMatchings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantMatchings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantMatchings` by taking the entity as a parameter.
   */
  delete(
    entity: ProjGrantMatchings<T>
  ): DeleteRequestBuilder<ProjGrantMatchings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    matchingType?: string
  ): DeleteRequestBuilder<ProjGrantMatchings<T>, T> {
    return new DeleteRequestBuilder<ProjGrantMatchings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantMatchings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MatchingType: matchingType!
          }
    );
  }
}
