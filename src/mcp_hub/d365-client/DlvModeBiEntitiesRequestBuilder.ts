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
import { DlvModeBiEntities } from './DlvModeBiEntities';

/**
 * Request builder class for operations supported on the {@link DlvModeBiEntities} entity.
 */
export class DlvModeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DlvModeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DlvModeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DlvModeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DlvModeBiEntities<T>, T> {
    return new GetAllRequestBuilder<DlvModeBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DlvModeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DlvModeBiEntities`.
   */
  create(
    entity: DlvModeBiEntities<T>
  ): CreateRequestBuilder<DlvModeBiEntities<T>, T> {
    return new CreateRequestBuilder<DlvModeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DlvModeBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DlvModeBiEntities.dataAreaId}.
   * @param code Key property. See {@link DlvModeBiEntities.code}.
   * @returns A request builder for creating requests to retrieve one `DlvModeBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DlvModeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<DlvModeBiEntities<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DlvModeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DlvModeBiEntities`.
   */
  update(
    entity: DlvModeBiEntities<T>
  ): UpdateRequestBuilder<DlvModeBiEntities<T>, T> {
    return new UpdateRequestBuilder<DlvModeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DlvModeBiEntities`.
   * @param dataAreaId Key property. See {@link DlvModeBiEntities.dataAreaId}.
   * @param code Key property. See {@link DlvModeBiEntities.code}.
   * @returns A request builder for creating requests that delete an entity of type `DlvModeBiEntities`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<DlvModeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DlvModeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DlvModeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DlvModeBiEntities<T>
  ): DeleteRequestBuilder<DlvModeBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<DlvModeBiEntities<T>, T> {
    return new DeleteRequestBuilder<DlvModeBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DlvModeBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
