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
import { ProjGrantsV2 } from './ProjGrantsV2';

/**
 * Request builder class for operations supported on the {@link ProjGrantsV2} entity.
 */
export class ProjGrantsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantsV2<T>, T> {
    return new GetAllRequestBuilder<ProjGrantsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrantsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantsV2`.
   */
  create(entity: ProjGrantsV2<T>): CreateRequestBuilder<ProjGrantsV2<T>, T> {
    return new CreateRequestBuilder<ProjGrantsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantsV2.dataAreaId}.
   * @param grantId Key property. See {@link ProjGrantsV2.grantId}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjGrantsV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GrantId: grantId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantsV2`.
   */
  update(entity: ProjGrantsV2<T>): UpdateRequestBuilder<ProjGrantsV2<T>, T> {
    return new UpdateRequestBuilder<ProjGrantsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantsV2`.
   * @param dataAreaId Key property. See {@link ProjGrantsV2.dataAreaId}.
   * @param grantId Key property. See {@link ProjGrantsV2.grantId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantsV2`.
   */
  delete(
    dataAreaId: string,
    grantId: string
  ): DeleteRequestBuilder<ProjGrantsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantsV2` by taking the entity as a parameter.
   */
  delete(entity: ProjGrantsV2<T>): DeleteRequestBuilder<ProjGrantsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grantId?: string
  ): DeleteRequestBuilder<ProjGrantsV2<T>, T> {
    return new DeleteRequestBuilder<ProjGrantsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GrantId: grantId!
          }
    );
  }
}
