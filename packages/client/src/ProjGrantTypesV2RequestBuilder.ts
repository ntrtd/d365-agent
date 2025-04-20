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
import { ProjGrantTypesV2 } from './ProjGrantTypesV2';

/**
 * Request builder class for operations supported on the {@link ProjGrantTypesV2} entity.
 */
export class ProjGrantTypesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantTypesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantTypesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantTypesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantTypesV2<T>, T> {
    return new GetAllRequestBuilder<ProjGrantTypesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrantTypesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantTypesV2`.
   */
  create(
    entity: ProjGrantTypesV2<T>
  ): CreateRequestBuilder<ProjGrantTypesV2<T>, T> {
    return new CreateRequestBuilder<ProjGrantTypesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantTypesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantTypesV2.dataAreaId}.
   * @param grantType Key property. See {@link ProjGrantTypesV2.grantType}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantTypesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grantType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjGrantTypesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantTypesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GrantType: grantType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantTypesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantTypesV2`.
   */
  update(
    entity: ProjGrantTypesV2<T>
  ): UpdateRequestBuilder<ProjGrantTypesV2<T>, T> {
    return new UpdateRequestBuilder<ProjGrantTypesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypesV2`.
   * @param dataAreaId Key property. See {@link ProjGrantTypesV2.dataAreaId}.
   * @param grantType Key property. See {@link ProjGrantTypesV2.grantType}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypesV2`.
   */
  delete(
    dataAreaId: string,
    grantType: string
  ): DeleteRequestBuilder<ProjGrantTypesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProjGrantTypesV2<T>
  ): DeleteRequestBuilder<ProjGrantTypesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grantType?: string
  ): DeleteRequestBuilder<ProjGrantTypesV2<T>, T> {
    return new DeleteRequestBuilder<ProjGrantTypesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantTypesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GrantType: grantType!
          }
    );
  }
}
