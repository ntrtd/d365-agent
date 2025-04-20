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
import { ProjGrants } from './ProjGrants';

/**
 * Request builder class for operations supported on the {@link ProjGrants} entity.
 */
export class ProjGrantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrants<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrants` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrants` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrants<T>, T> {
    return new GetAllRequestBuilder<ProjGrants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrants`.
   */
  create(entity: ProjGrants<T>): CreateRequestBuilder<ProjGrants<T>, T> {
    return new CreateRequestBuilder<ProjGrants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjGrants` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrants.dataAreaId}.
   * @param grantId Key property. See {@link ProjGrants.grantId}.
   * @returns A request builder for creating requests to retrieve one `ProjGrants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjGrants<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrants<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GrantId: grantId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrants`.
   */
  update(entity: ProjGrants<T>): UpdateRequestBuilder<ProjGrants<T>, T> {
    return new UpdateRequestBuilder<ProjGrants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrants`.
   * @param dataAreaId Key property. See {@link ProjGrants.dataAreaId}.
   * @param grantId Key property. See {@link ProjGrants.grantId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrants`.
   */
  delete(
    dataAreaId: string,
    grantId: string
  ): DeleteRequestBuilder<ProjGrants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrants` by taking the entity as a parameter.
   */
  delete(entity: ProjGrants<T>): DeleteRequestBuilder<ProjGrants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grantId?: string
  ): DeleteRequestBuilder<ProjGrants<T>, T> {
    return new DeleteRequestBuilder<ProjGrants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GrantId: grantId!
          }
    );
  }
}
